import { json } from '@sveltejs/kit';
import { cached } from '$lib/cache';

/**
 * Gempa di wilayah Sumatera Barat dari InaTEWS live30event.xml.
 * Bbox: lat [-3.5, 1.0], lng [97.0, 102.0]
 * Cache: 2 menit
 */

// Bbox Sumatera Barat (termasuk Mentawai + offshore megathrust)
const SUMBAR_BBOX = {
	latMin: -3.5,
	latMax: 1.0,
	lngMin: 97.0,
	lngMax: 102.0
};

function parseWaktu(waktu: string): Date {
	// Format BMKG: "YYYY/MM/DD  HH:MM:SS.SSS" (UTC, may have double space)
	const cleaned = waktu.trim().replace(/\s+/g, ' ');
	// Convert "2026/05/12 16:20:05.389" → "2026-05-12T16:20:05.389Z"
	const iso = cleaned.replace(' ', 'T').replace(/\//g, '-') + 'Z';
	return new Date(iso);
}

function isInSumbar(lat: number, lng: number): boolean {
	return (
		lat >= SUMBAR_BBOX.latMin &&
		lat <= SUMBAR_BBOX.latMax &&
		lng >= SUMBAR_BBOX.lngMin &&
		lng <= SUMBAR_BBOX.lngMax
	);
}

export async function GET({ url }) {
	const sinceHours = parseInt(url.searchParams.get('since') ?? '24');
	const minMag = parseFloat(url.searchParams.get('min_mag') ?? '0');

	const xmlText = await cached('gempa-live30', 2 * 60 * 1000, async () => {
		const res = await fetch(
			'https://bmkg-content-inatews.storage.googleapis.com/live30event.xml',
			{ headers: { 'User-Agent': 'OpenPadang/1.0' } }
		);
		if (!res.ok) throw new Error(`InaTEWS ${res.status}`);
		return await res.text();
	});

	// Parse XML manually (avoid heavy lib)
	const gempaRegex = /<gempa>([\s\S]*?)<\/gempa>/g;
	const fieldRegex = (name: string) => new RegExp(`<${name}>([^<]+)<\\/${name}>`);

	const cutoff = Date.now() - sinceHours * 60 * 60 * 1000;
	const events: any[] = [];

	let match;
	while ((match = gempaRegex.exec(xmlText)) !== null) {
		const body = match[1];
		const get = (name: string) => body.match(fieldRegex(name))?.[1] ?? null;

		const lat = parseFloat(get('lintang') ?? '0');
		const lng = parseFloat(get('bujur') ?? '0');
		const waktuStr = get('waktu') ?? '';
		const dt = parseWaktu(waktuStr);
		const mag = parseFloat(get('mag') ?? '0');

		if (!isInSumbar(lat, lng)) continue;
		if (dt.getTime() < cutoff) continue;
		if (mag < minMag) continue;

		events.push({
			eventid: get('eventid'),
			status: get('status'),
			datetime: dt.toISOString(),
			datetimeWib: new Date(dt.getTime() + 7 * 60 * 60 * 1000)
				.toISOString()
				.replace('T', ' ')
				.slice(0, 19),
			lat,
			lng,
			magnitude: mag,
			depth: parseInt(get('dalam') ?? '0'),
			fokal: get('fokal'),
			area: get('area')
		});
	}

	events.sort((a, b) => new Date(b.datetime).getTime() - new Date(a.datetime).getTime());

	return json({
		bbox: SUMBAR_BBOX,
		filter: { sinceHours, minMag },
		updatedAt: new Date().toISOString(),
		count: events.length,
		events
	});
}

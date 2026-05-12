import { json } from '@sveltejs/kit';
import { cached } from '$lib/cache';

/**
 * Fault lines di sekitar Sumatera Barat.
 * Source: indo_faults_lines.geojson (BMKG InaTEWS)
 * Filter: bbox Sumbar extended
 * Cache: 1 hari (data statis)
 */

const SUMBAR_BBOX = {
	latMin: -4.5,
	latMax: 2.0,
	lngMin: 96.0,
	lngMax: 103.0
};

function lineIntersectsBbox(coords: number[][]): boolean {
	return coords.some(
		([lng, lat]) =>
			lat >= SUMBAR_BBOX.latMin &&
			lat <= SUMBAR_BBOX.latMax &&
			lng >= SUMBAR_BBOX.lngMin &&
			lng <= SUMBAR_BBOX.lngMax
	);
}

export async function GET() {
	const geojson = await cached('faults-indonesia', 24 * 60 * 60 * 1000, async () => {
		const res = await fetch(
			'https://bmkg-content-inatews.storage.googleapis.com/indo_faults_lines.geojson',
			{ headers: { 'User-Agent': 'OpenPadang/1.0' } }
		);
		if (!res.ok) throw new Error(`InaTEWS faults ${res.status}`);
		return await res.json();
	});

	const filtered = (geojson.features ?? []).filter(
		(f: any) =>
			f.geometry?.type === 'LineString' && lineIntersectsBbox(f.geometry.coordinates)
	);

	return json({
		type: 'FeatureCollection',
		bbox: SUMBAR_BBOX,
		updatedAt: new Date().toISOString(),
		count: filtered.length,
		features: filtered
	});
}

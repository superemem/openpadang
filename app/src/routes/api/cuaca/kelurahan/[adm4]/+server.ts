import { json, error } from '@sveltejs/kit';
import { cached } from '$lib/cache';

/**
 * Detail forecast 9-hari per kelurahan untuk chart trend.
 * Source: BMKG Cuaca v2 adm4
 * Cache: 1 jam
 */
export async function GET({ params }) {
	const { adm4 } = params;
	if (!/^\d{2}\.\d{2}\.\d{2}\.\d{4}$/.test(adm4)) {
		throw error(400, 'Invalid adm4 format. Expected: NN.NN.NN.NNNN');
	}

	const data = await cached(`cuaca-adm4-${adm4}`, 60 * 60 * 1000, async () => {
		const res = await fetch(
			`https://cuaca.bmkg.go.id/api/df/v1/forecast/adm?adm4=${adm4}`,
			{ headers: { Accept: 'application/json', 'User-Agent': 'OpenPadang/1.0' } }
		);
		if (!res.ok) throw error(res.status, `BMKG ${res.status}`);
		return await res.json();
	});

	const entry = data.data[0];
	if (!entry) throw error(404, 'No forecast data');

	const forecasts: any[] = [];
	for (const group of entry.cuaca ?? []) {
		for (const f of group) forecasts.push(f);
	}

	return json({
		lokasi: entry.lokasi,
		updatedAt: new Date().toISOString(),
		forecasts: forecasts.map((f) => ({
			datetime: f.local_datetime,
			datetimeUtc: f.utc_datetime,
			temp: f.t,
			humidity: f.hu,
			weather: f.weather,
			description: f.weather_desc,
			precipitation: f.tp,
			windSpeed: f.ws,
			icon: f.image
		}))
	});
}

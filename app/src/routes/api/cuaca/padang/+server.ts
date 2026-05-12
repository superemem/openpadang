import { json } from '@sveltejs/kit';
import { cached } from '$lib/cache';

/**
 * Cuaca per kecamatan Kota Padang (11 entries).
 * Source: BMKG Cuaca v2 adm2=13.71
 * Cache: 1 jam (BMKG refresh tiap 6 jam)
 */
export async function GET() {
	const data = await cached('cuaca-padang-adm2', 60 * 60 * 1000, async () => {
		const res = await fetch(
			'https://cuaca.bmkg.go.id/api/df/v1/forecast/adm?adm2=13.71',
			{ headers: { Accept: 'application/json', 'User-Agent': 'OpenPadang/1.0' } }
		);
		if (!res.ok) throw new Error(`BMKG ${res.status}`);
		return await res.json();
	});

	const kecamatan = data.data.map((entry: any) => {
		const lokasi = entry.lokasi;
		const cuacaNow = entry.cuaca?.[0]?.[0] ?? null;
		return {
			name: lokasi.kecamatan,
			adm3: lokasi.adm3,
			lat: lokasi.lat,
			lng: lokasi.lon,
			cuaca: cuacaNow
				? {
						weather: cuacaNow.weather,
						description: cuacaNow.weather_desc,
						temp: cuacaNow.t,
						humidity: cuacaNow.hu,
						windSpeed: cuacaNow.ws,
						windDir: cuacaNow.wd,
						precipitation: cuacaNow.tp,
						icon: cuacaNow.image,
						datetime: cuacaNow.local_datetime
					}
				: null
		};
	});

	return json({
		kota: data.lokasi.kotkab ?? 'Kota Padang',
		updatedAt: new Date().toISOString(),
		count: kecamatan.length,
		kecamatan
	});
}

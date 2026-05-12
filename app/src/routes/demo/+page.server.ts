import type { PageServerLoad } from './$types';

/**
 * Server-side data load untuk demo page.
 * Fetch parallel: cuaca per kecamatan, gempa 24h, fault lines, trend Pasar Ambacang.
 */
export const load: PageServerLoad = async ({ fetch }) => {
	const baseUrl = ''; // relative

	const [cuaca, gempa, faults, trend] = await Promise.allSettled([
		fetch(`${baseUrl}/api/cuaca/padang`).then((r) => r.json()),
		fetch(`${baseUrl}/api/gempa/sumbar?since=24`).then((r) => r.json()),
		fetch(`${baseUrl}/api/faults/padang`).then((r) => r.json()),
		fetch(`${baseUrl}/api/cuaca/kelurahan/13.71.09.1001`).then((r) => r.json())
	]);

	return {
		cuaca: cuaca.status === 'fulfilled' ? cuaca.value : null,
		gempa: gempa.status === 'fulfilled' ? gempa.value : { count: 0, events: [] },
		faults: faults.status === 'fulfilled' ? faults.value : null,
		trend: trend.status === 'fulfilled' ? trend.value : null,
		errors: {
			cuaca: cuaca.status === 'rejected' ? String(cuaca.reason) : null,
			gempa: gempa.status === 'rejected' ? String(gempa.reason) : null,
			faults: faults.status === 'rejected' ? String(faults.reason) : null,
			trend: trend.status === 'rejected' ? String(trend.reason) : null
		}
	};
};

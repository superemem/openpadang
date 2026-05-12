<script lang="ts">
	import { onMount, onDestroy } from 'svelte';

	let {
		kecamatan,
		gempa,
		faults
	}: { kecamatan: any[]; gempa: any[]; faults: any } = $props();

	let mapContainer: HTMLDivElement;
	let map: any;
	let layers: any = {};

	onMount(async () => {
		// Dynamic import (client-only)
		const L = (await import('leaflet')).default;
		// @ts-expect-error - CSS import
		await import('leaflet/dist/leaflet.css');

		map = L.map(mapContainer, {
			center: [-0.95, 100.36],
			zoom: 11,
			scrollWheelZoom: false
		});

		L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			attribution: '© OpenStreetMap',
			maxZoom: 18
		}).addTo(map);

		// Layer 1: Cuaca per kecamatan
		const cuacaGroup = L.layerGroup();
		for (const k of kecamatan) {
			if (!k.cuaca) continue;
			const marker = L.circleMarker([k.lat, k.lng], {
				radius: 10,
				fillColor: tempColor(k.cuaca.temp),
				color: 'white',
				weight: 2,
				fillOpacity: 0.9
			}).bindPopup(`
				<div style="font-family: Inter, sans-serif;">
					<strong>${k.name}</strong><br>
					${k.cuaca.description}<br>
					🌡️ ${k.cuaca.temp}°C · 💧 ${k.cuaca.humidity}%<br>
					💨 ${k.cuaca.windSpeed} km/h ${k.cuaca.windDir}
				</div>
			`);
			marker.addTo(cuacaGroup);
		}
		cuacaGroup.addTo(map);
		layers['🌡️ Cuaca'] = cuacaGroup;

		// Layer 2: Gempa
		const gempaGroup = L.layerGroup();
		for (const g of gempa) {
			const radius = Math.max(6, g.magnitude * 3);
			const marker = L.circleMarker([g.lat, g.lng], {
				radius,
				fillColor: magColor(g.magnitude),
				color: 'white',
				weight: 2,
				fillOpacity: 0.7
			}).bindPopup(`
				<div style="font-family: Inter, sans-serif;">
					<strong>M${g.magnitude}</strong> · ${g.area}<br>
					📍 ${g.lat.toFixed(2)}, ${g.lng.toFixed(2)}<br>
					⬇️ Kedalaman: ${g.depth} km<br>
					🕐 ${g.datetimeWib} WIB
				</div>
			`);
			marker.addTo(gempaGroup);
		}
		gempaGroup.addTo(map);
		layers['🌋 Gempa 24h'] = gempaGroup;

		// Layer 3: Fault lines
		if (faults?.features?.length) {
			const faultLayer = L.geoJSON(faults, {
				style: {
					color: '#dc2626',
					weight: 2,
					opacity: 0.6,
					dashArray: '4,4'
				}
			});
			faultLayer.addTo(map);
			layers['⛓️ Patahan'] = faultLayer;
		}

		L.control.layers(undefined, layers, { collapsed: false }).addTo(map);
	});

	onDestroy(() => {
		map?.remove();
	});

	function tempColor(t: number) {
		if (t < 22) return '#3b82f6';
		if (t < 26) return '#10b981';
		if (t < 30) return '#f59e0b';
		return '#ef4444';
	}

	function magColor(m: number) {
		if (m < 3) return '#10b981';
		if (m < 4) return '#f59e0b';
		if (m < 5) return '#fb923c';
		return '#dc2626';
	}
</script>

<div class="overflow-hidden rounded-xl border border-gray-200 bg-white">
	<div class="border-b border-gray-100 px-5 py-4">
		<h3 class="font-semibold text-gray-900">Map Interaktif Padang</h3>
		<p class="mt-1 text-xs text-gray-500">Toggle layer di kanan atas peta</p>
	</div>
	<div bind:this={mapContainer} class="h-96 w-full md:h-[500px]"></div>
</div>

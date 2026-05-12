<script lang="ts">
	import {
		Thermometer,
		Droplet,
		AlertTriangle,
		MapPin,
		ExternalLink,
		Database,
		RefreshCw
	} from 'lucide-svelte';
	import StatsCard from '$lib/components/demo/StatsCard.svelte';
	import KecamatanList from '$lib/components/demo/KecamatanList.svelte';
	import GempaList from '$lib/components/demo/GempaList.svelte';
	import WeatherMap from '$lib/components/demo/WeatherMap.svelte';
	import TrendChart from '$lib/components/demo/TrendChart.svelte';

	let { data } = $props();

	// Compute stats
	const cuacaList = data.cuaca?.kecamatan ?? [];
	const avgTemp =
		cuacaList.length > 0
			? Math.round(
					cuacaList.reduce((s: number, k: any) => s + (k.cuaca?.temp ?? 0), 0) /
						cuacaList.length
				)
			: 0;
	const avgHumidity =
		cuacaList.length > 0
			? Math.round(
					cuacaList.reduce((s: number, k: any) => s + (k.cuaca?.humidity ?? 0), 0) /
						cuacaList.length
				)
			: 0;
	const gempaCount = data.gempa?.count ?? 0;
	const maxMag =
		(data.gempa?.events ?? []).reduce((m: number, e: any) => Math.max(m, e.magnitude), 0) || 0;
	const faultCount = data.faults?.count ?? 0;
</script>

<svelte:head>
	<title>Padang Live — OpenPadang Demo</title>
	<meta
		name="description"
		content="Live demo OpenPadang: dashboard hyperlocal Padang dengan data BMKG, OSM, dan InaTEWS — cuaca, gempa, patahan."
	/>
</svelte:head>

<main class="min-h-screen bg-gray-50">
	<!-- Header -->
	<header class="border-b border-gray-200 bg-white">
		<div class="mx-auto max-w-6xl px-6 py-6">
			<div class="flex items-center justify-between gap-4">
				<div>
					<div class="flex items-center gap-2">
						<span
							class="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-medium text-emerald-700"
						>
							<span class="size-1.5 rounded-full bg-emerald-500"></span>
							Live Demo
						</span>
					</div>
					<h1 class="mt-2 text-3xl font-bold tracking-tight text-gray-900">Padang Live</h1>
					<p class="mt-2 max-w-2xl text-sm text-gray-600">
						Dashboard hyperlocal Padang dengan data real-time dari BMKG, InaTEWS, dan OSM —
						menggunakan API yang telah didokumentasi di OpenPadang.
					</p>
				</div>
				<a
					href="https://openpadang.vercel.app"
					class="hidden items-center gap-2 rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50 md:inline-flex"
				>
					<Database class="size-4" />
					Documentation
					<ExternalLink class="size-3" />
				</a>
			</div>
		</div>
	</header>

	<div class="mx-auto max-w-6xl space-y-6 px-6 py-8">
		<!-- Stats Cards -->
		<section class="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
			<StatsCard
				icon={Thermometer}
				label="Suhu Rata-Rata"
				value="{avgTemp}°C"
				sublabel="{cuacaList.length} kecamatan"
				color="amber"
			/>
			<StatsCard
				icon={Droplet}
				label="Kelembapan"
				value="{avgHumidity}%"
				sublabel="Rata-rata kota"
				color="blue"
			/>
			<StatsCard
				icon={AlertTriangle}
				label="Gempa 24h"
				value={gempaCount}
				sublabel={maxMag > 0 ? `Max M${maxMag}` : 'Tidak ada'}
				color={gempaCount > 0 ? 'rose' : 'emerald'}
			/>
			<StatsCard
				icon={MapPin}
				label="Patahan Sekitar"
				value={faultCount}
				sublabel="Segmen fault"
				color="violet"
			/>
		</section>

		<!-- Main Grid: Map + Sidebar -->
		<section class="grid grid-cols-1 gap-4 lg:grid-cols-3">
			<div class="lg:col-span-2">
				{#if cuacaList.length > 0}
					<WeatherMap
						kecamatan={cuacaList}
						gempa={data.gempa?.events ?? []}
						faults={data.faults}
					/>
				{:else}
					<div class="rounded-xl border border-gray-200 bg-white p-12 text-center text-gray-500">
						<RefreshCw class="mx-auto mb-3 size-8 animate-spin" />
						Data tidak tersedia
					</div>
				{/if}
			</div>

			<div class="space-y-4">
				<GempaList events={data.gempa?.events ?? []} />
			</div>
		</section>

		<!-- Kecamatan list -->
		<section class="grid grid-cols-1 gap-4 lg:grid-cols-2">
			<KecamatanList kecamatan={cuacaList} />

			{#if data.trend?.forecasts?.length > 0}
				<TrendChart
					forecasts={data.trend.forecasts.slice(0, 24)}
					kelurahan={data.trend.lokasi?.desa ?? 'Pasar Ambacang'}
				/>
			{/if}
		</section>

		<!-- Footer / Sources -->
		<section class="rounded-xl border border-gray-200 bg-white p-6">
			<h3 class="text-sm font-semibold text-gray-900">Data Sources & Documentation</h3>
			<div class="mt-3 grid grid-cols-1 gap-3 text-sm text-gray-600 md:grid-cols-3">
				<div>
					<div class="font-medium text-gray-900">🌡️ Cuaca</div>
					<a
						href="https://openpadang.vercel.app/guides/bmkg-cuaca/quickstart/"
						class="text-blue-600 hover:underline"
					>
						BMKG Cuaca v2 →
					</a>
					<div class="mt-1 text-xs text-gray-500">cuaca.bmkg.go.id/api/df/v1</div>
				</div>
				<div>
					<div class="font-medium text-gray-900">🌋 Gempa</div>
					<a
						href="https://openpadang.vercel.app/guides/bmkg-gempa/quickstart/"
						class="text-blue-600 hover:underline"
					>
						BMKG InaTEWS →
					</a>
					<div class="mt-1 text-xs text-gray-500">live30event.xml</div>
				</div>
				<div>
					<div class="font-medium text-gray-900">🗺️ Map Tiles</div>
					<a href="https://www.openstreetmap.org" class="text-blue-600 hover:underline">
						OpenStreetMap →
					</a>
					<div class="mt-1 text-xs text-gray-500">© OSM contributors</div>
				</div>
			</div>
			<div class="mt-4 border-t border-gray-100 pt-4 text-xs text-gray-500">
				Cache: 1 jam (cuaca), 2 menit (gempa), 1 hari (faults). Data terakhir di-fetch:
				{new Date().toLocaleString('id-ID')}
			</div>
		</section>
	</div>
</main>

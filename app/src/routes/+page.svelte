<script lang="ts">
	import { Database, Globe, Zap } from 'lucide-svelte';
</script>

<main class="min-h-screen bg-white">
	<div class="mx-auto max-w-4xl px-6 py-16 md:py-24">
		<div class="mb-12">
			<span
				class="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-sm text-gray-600"
			>
				<span class="size-2 rounded-full bg-emerald-500"></span>
				Foundation Phase · 2026
			</span>
		</div>

		<h1 class="mb-6 text-4xl font-bold tracking-tight text-gray-900 md:text-6xl">
			OpenPadang
		</h1>

		<p class="mb-12 max-w-2xl text-lg leading-relaxed text-gray-600 md:text-xl">
			Data publik Padang & Sumbar — terbuka, terstandar, gratis untuk siapa saja yang
			butuh akses data pemerintah dalam format machine-readable.
		</p>

		<div class="mb-16 grid gap-6 md:grid-cols-3">
			<div class="rounded-xl border border-gray-200 p-6">
				<Database class="mb-3 size-6 text-blue-600" />
				<h3 class="mb-1 font-semibold text-gray-900">Open Data</h3>
				<p class="text-sm text-gray-600">
					CSV, JSON, GeoJSON, GTFS — license CC-BY 4.0
				</p>
			</div>
			<div class="rounded-xl border border-gray-200 p-6">
				<Zap class="mb-3 size-6 text-emerald-600" />
				<h3 class="mb-1 font-semibold text-gray-900">Real-Time API</h3>
				<p class="text-sm text-gray-600">
					Wrapper BMKG, PetaBencana, OpenWeatherMap
				</p>
			</div>
			<div class="rounded-xl border border-gray-200 p-6">
				<Globe class="mb-3 size-6 text-violet-600" />
				<h3 class="mb-1 font-semibold text-gray-900">Independent</h3>
				<p class="text-sm text-gray-600">
					Civic project independent. Anyone can fork & continue.
				</p>
			</div>
		</div>

		<div class="border-t border-gray-200 pt-8 text-sm text-gray-500">
			Project ini muncul dari kegelisahan: data pemerintah seringnya tidak lengkap,
			terpisah, susah diakses. OpenPadang berusaha jadi solusi sederhana untuk itu.
		</div>
	</div>
</main>

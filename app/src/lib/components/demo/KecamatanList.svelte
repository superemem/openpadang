<script lang="ts">
	import { Thermometer, Droplet, Wind } from 'lucide-svelte';

	let { kecamatan, onSelect }: { kecamatan: any[]; onSelect?: (kec: any) => void } = $props();

	function temperatureColor(t: number): string {
		if (t < 22) return 'text-blue-600';
		if (t < 26) return 'text-emerald-600';
		if (t < 30) return 'text-amber-600';
		return 'text-rose-600';
	}
</script>

<div class="rounded-xl border border-gray-200 bg-white">
	<div class="border-b border-gray-100 px-5 py-4">
		<h3 class="font-semibold text-gray-900">Cuaca per Kecamatan</h3>
		<p class="mt-1 text-xs text-gray-500">{kecamatan.length} kecamatan · Real-time BMKG</p>
	</div>
	<div class="max-h-96 overflow-y-auto">
		{#each kecamatan as kec}
			<button
				class="flex w-full items-center justify-between gap-3 border-b border-gray-50 px-5 py-3 text-left transition last:border-b-0 hover:bg-gray-50"
				onclick={() => onSelect?.(kec)}
			>
				<div class="min-w-0 flex-1">
					<div class="truncate text-sm font-medium text-gray-900">{kec.name}</div>
					<div class="mt-1 text-xs text-gray-500">{kec.cuaca?.description ?? '—'}</div>
				</div>
				<div class="flex items-center gap-4 text-xs text-gray-600">
					<div class="flex items-center gap-1">
						<Thermometer class="size-3" />
						<span class={temperatureColor(kec.cuaca?.temp ?? 25) + ' font-semibold'}>
							{kec.cuaca?.temp ?? '—'}°
						</span>
					</div>
					<div class="hidden items-center gap-1 sm:flex">
						<Droplet class="size-3 text-blue-500" />
						<span>{kec.cuaca?.humidity ?? '—'}%</span>
					</div>
				</div>
			</button>
		{/each}
	</div>
</div>

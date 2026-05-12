<script lang="ts">
	import { AlertTriangle, Clock, MapPin, ArrowDown } from 'lucide-svelte';

	let { events }: { events: any[] } = $props();

	function magnitudeBadge(mag: number) {
		if (mag < 3) return { class: 'bg-emerald-50 text-emerald-700', label: 'Ringan' };
		if (mag < 4) return { class: 'bg-amber-50 text-amber-700', label: 'Sedang' };
		if (mag < 5) return { class: 'bg-orange-50 text-orange-700', label: 'Cukup' };
		return { class: 'bg-rose-50 text-rose-700', label: 'Kuat' };
	}

	function timeAgo(iso: string) {
		const diff = Date.now() - new Date(iso).getTime();
		const hours = diff / (1000 * 60 * 60);
		if (hours < 1) return `${Math.round(diff / (1000 * 60))} menit lalu`;
		if (hours < 24) return `${hours.toFixed(1)} jam lalu`;
		return `${(hours / 24).toFixed(1)} hari lalu`;
	}
</script>

<div class="rounded-xl border border-gray-200 bg-white">
	<div class="flex items-center justify-between border-b border-gray-100 px-5 py-4">
		<div>
			<h3 class="flex items-center gap-2 font-semibold text-gray-900">
				<AlertTriangle class="size-4 text-amber-500" />
				Gempa Sumbar 24 Jam
			</h3>
			<p class="mt-1 text-xs text-gray-500">
				{events.length} events · BMKG InaTEWS · M2.0+
			</p>
		</div>
	</div>
	<div class="max-h-96 overflow-y-auto">
		{#if events.length === 0}
			<div class="px-5 py-8 text-center text-sm text-gray-500">
				<div class="mb-1 text-2xl">✓</div>
				Tidak ada gempa terdeteksi
			</div>
		{:else}
			{#each events as ev}
				{@const badge = magnitudeBadge(ev.magnitude)}
				<div class="border-b border-gray-50 px-5 py-3 last:border-b-0">
					<div class="flex items-start justify-between gap-3">
						<div class="flex-1">
							<div class="flex items-center gap-2">
								<span class="text-lg font-bold text-gray-900">M{ev.magnitude}</span>
								<span class="rounded px-2 py-0.5 text-xs font-medium {badge.class}">
									{badge.label}
								</span>
							</div>
							<div class="mt-1 text-sm text-gray-700">{ev.area}</div>
							<div class="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-500">
								<span class="flex items-center gap-1">
									<Clock class="size-3" />
									{timeAgo(ev.datetime)}
								</span>
								<span class="flex items-center gap-1">
									<MapPin class="size-3" />
									{ev.lat.toFixed(2)}, {ev.lng.toFixed(2)}
								</span>
								<span class="flex items-center gap-1">
									<ArrowDown class="size-3" />
									{ev.depth} km
								</span>
							</div>
						</div>
					</div>
				</div>
			{/each}
		{/if}
	</div>
</div>

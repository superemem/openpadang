<script lang="ts">
	import type { ComponentType } from 'svelte';
	import type { Icon as IconType } from 'lucide-svelte';

	let {
		icon: IconComponent,
		label,
		value,
		sublabel = '',
		color = 'blue'
	}: {
		icon: ComponentType<IconType>;
		label: string;
		value: string | number;
		sublabel?: string;
		color?: 'blue' | 'amber' | 'rose' | 'emerald' | 'violet';
	} = $props();

	const colorMap = {
		blue: 'bg-blue-50 text-blue-600',
		amber: 'bg-amber-50 text-amber-600',
		rose: 'bg-rose-50 text-rose-600',
		emerald: 'bg-emerald-50 text-emerald-600',
		violet: 'bg-violet-50 text-violet-600'
	};
</script>

<div class="rounded-xl border border-gray-200 bg-white p-5 transition hover:border-gray-300">
	<div class="flex items-start justify-between gap-3">
		<div class="flex-1">
			<div class="text-xs font-medium uppercase tracking-wide text-gray-500">{label}</div>
			<div class="mt-2 text-2xl font-bold text-gray-900">{value}</div>
			{#if sublabel}
				<div class="mt-1 text-xs text-gray-500">{sublabel}</div>
			{/if}
		</div>
		<div class="flex size-10 items-center justify-center rounded-lg {colorMap[color]}">
			<IconComponent class="size-5" />
		</div>
	</div>
</div>

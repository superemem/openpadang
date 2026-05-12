<script lang="ts">
	import { onMount, onDestroy } from 'svelte';

	let { forecasts, kelurahan }: { forecasts: any[]; kelurahan: string } = $props();

	let canvas: HTMLCanvasElement;
	let chart: any;

	onMount(async () => {
		const { Chart, registerables } = await import('chart.js');
		Chart.register(...registerables);

		const labels = forecasts.map((f) => {
			const dt = new Date(f.datetime);
			return dt.toLocaleString('id-ID', {
				weekday: 'short',
				day: 'numeric',
				month: 'short',
				hour: '2-digit',
				minute: '2-digit'
			});
		});

		chart = new Chart(canvas, {
			type: 'line',
			data: {
				labels,
				datasets: [
					{
						label: 'Suhu (°C)',
						data: forecasts.map((f) => f.temp),
						borderColor: '#f59e0b',
						backgroundColor: 'rgba(245, 158, 11, 0.1)',
						yAxisID: 'y',
						tension: 0.4,
						fill: true
					},
					{
						label: 'Kelembapan (%)',
						data: forecasts.map((f) => f.humidity),
						borderColor: '#3b82f6',
						backgroundColor: 'rgba(59, 130, 246, 0.1)',
						yAxisID: 'y1',
						tension: 0.4,
						fill: false
					}
				]
			},
			options: {
				responsive: true,
				maintainAspectRatio: false,
				interaction: { intersect: false, mode: 'index' },
				plugins: {
					legend: { position: 'top' },
					title: { display: false }
				},
				scales: {
					y: {
						type: 'linear',
						position: 'left',
						title: { display: true, text: '°C' },
						suggestedMin: 18,
						suggestedMax: 35
					},
					y1: {
						type: 'linear',
						position: 'right',
						title: { display: true, text: '%' },
						grid: { drawOnChartArea: false },
						min: 0,
						max: 100
					},
					x: {
						ticks: { maxTicksLimit: 8, autoSkip: true }
					}
				}
			}
		});
	});

	onDestroy(() => chart?.destroy());
</script>

<div class="rounded-xl border border-gray-200 bg-white">
	<div class="border-b border-gray-100 px-5 py-4">
		<h3 class="font-semibold text-gray-900">Trend Cuaca — {kelurahan}</h3>
		<p class="mt-1 text-xs text-gray-500">
			Prakiraan {forecasts.length} jam ke depan · Source: BMKG
		</p>
	</div>
	<div class="p-5">
		<div class="h-64 md:h-72">
			<canvas bind:this={canvas}></canvas>
		</div>
	</div>
</div>

// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://openpadang.info',
	integrations: [
		starlight({
			title: 'OpenPadang',
			description:
				'Data publik Padang & Sumbar — terbuka, terstandar, gratis untuk siapa saja.',
			social: [
				{
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/superemem/openpadang',
				},
			],
			editLink: {
				baseUrl: 'https://github.com/superemem/openpadang/edit/main/site/',
			},
			lastUpdated: true,
			sidebar: [
				{
					label: 'Mulai',
					items: [{ label: 'Roadmap', slug: 'roadmap' }],
				},
				{
					label: 'Data Catalog',
					items: [{ label: 'Sumber Data Publik', slug: 'datasets/catalog' }],
				},
				{
					label: 'Guides',
					items: [
						{
							label: 'BMKG Gempa Real-Time',
							collapsed: true,
							items: [
								{ label: 'Quick Start', slug: 'guides/bmkg-gempa/quickstart' },
								{ label: 'Endpoint Reference', slug: 'guides/bmkg-gempa/endpoints' },
								{ label: 'Use Cases Padang', slug: 'guides/bmkg-gempa/use-cases' },
								{ label: 'Gotchas & Limitations', slug: 'guides/bmkg-gempa/gotchas' },
							],
						},
						{
							label: 'BMKG Cuaca Prakiraan',
							collapsed: true,
							items: [
								{ label: 'Quick Start', slug: 'guides/bmkg-cuaca/quickstart' },
								{ label: 'Endpoint Reference', slug: 'guides/bmkg-cuaca/endpoints' },
								{ label: 'Use Cases Padang', slug: 'guides/bmkg-cuaca/use-cases' },
								{ label: 'Gotchas & Limitations', slug: 'guides/bmkg-cuaca/gotchas' },
							],
						},
						{
							label: 'OSM Overpass API',
							collapsed: false,
							items: [
								{ label: 'Quick Start', slug: 'guides/osm-overpass/quickstart' },
								{ label: 'Query Reference', slug: 'guides/osm-overpass/endpoints' },
								{ label: 'Use Cases Padang', slug: 'guides/osm-overpass/use-cases' },
								{ label: 'Gotchas & Limitations', slug: 'guides/osm-overpass/gotchas' },
							],
						},
					],
				},
				{
					label: 'Kontribusi',
					items: [{ label: 'Cara Berkontribusi', slug: 'contributing' }],
				},
			],
		}),
	],
});

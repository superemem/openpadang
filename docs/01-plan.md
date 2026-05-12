# OpenPadang — Plan & Roadmap

## Vision

Bikin **data publik Padang & Sumbar** terbuka, terstandar, dan gratis untuk siapa saja — supaya warga, developer, jurnalis, akademisi gak lagi struggle dengan data pemerintah yang **terpisah, gak lengkap, dan susah diakses**.

## Motivation (Why)

> "Data yang diprovide pemerintahan itu tidak lengkap, terpisah, susah diakses." — Emen

Project ini muncul dari **civic frustration**, bukan portfolio chase atau monetisasi. Itu yang bikin sustainable long-term.

## Mission

1. **Curate** — kumpulkan dataset publik Padang/Sumbar dari berbagai sumber
2. **Standardize** — convert ke format machine-readable (CSV, JSON, GeoJSON, GTFS)
3. **Document** — kasih schema, license, source attribution, contoh use
4. **Publish** — open license (CC-BY 4.0), accessible via web + API
5. **Visualize** — kasih dashboard publik untuk data stories

## Position

**Komplementer**, bukan kompetitor:

- **vs Padang Mobile (Pemkot):** Padang Mobile = closed system, internal use. OpenPadang = open layer publik dengan data yang sama atau aggregated dari multiple sources.
- **vs Satu Data Indonesia (national):** Satu Data fokus statistik nasional. OpenPadang fokus Padang/Sumbar dengan kedalaman lokal.
- **vs PetaBencana.id (civic tech):** PetaBencana spesifik bencana. OpenPadang multi-domain (transport, demografi, geo, dll).

## Scope: Hybrid Approach

OpenPadang **listing semua** sumber data publik Padang/Sumbar di catalog, tapi **curation/hosting selective**:

### Listing Tier

| Tier | Cara Akses | Yang OpenPadang Lakukan |
|---|---|---|
| 🟢 **Direct API** (BMKG, OSM, PetaBencana, OWM) | User akses ke source asli | Buatkan **Quick Start + Code Examples + Use Cases + Gotchas** docs. Tidak re-host. |
| 🟡 **Curated by OpenPadang** | User akses via `api.openpadang.info` atau download dari repo | Scrape, transform, standardize, host. Untuk source yang belum ada API atau format jelek. |
| 🔴 **To Be Curated** | Planned | Roadmap untuk Phase berikutnya |
| 💎 **Partner Required** | Butuh akses resmi | Trans Padang GPS, Shelter ZMS — perlu permohonan ke Dishub/BPBD |
| ⚡ **Aggregation Endpoints** | `api.openpadang.info/realtime/...` | Combine multiple sources jadi 1 response. Padang-specific filtering. |

### Differentiator Utama

Untuk source yang punya API resmi tapi **dokumentasinya jelek**, OpenPadang berfungsi sebagai **documentation & education layer**:
- Quick Start (5 menit copy-paste-able)
- Code Examples (cURL, JS, Python)
- Real Use Cases (3-5 skenario Padang/Sumbar)
- Gotchas & Limitations
- Padang/Sumbar specific tips (cara filter ke daerah lokal)
- Last Verified date

## Mode Kerja

- **Marathon, bukan sprint.** Capek istirahat, gak mood skip.
- **Independent.** Bisa diteruskan siapa pun. Anyone can fork.
- **Solo-friendly tapi community-ready.** Infrastructure designed untuk accept kontributor sejak awal.
- **Bandwidth realistic:** 4-6 jam/minggu sustained.
- **Time horizon:** 6-12 bulan untuk foundation. Maintenance ongoing.

## Phased Roadmap

### Phase 0: Foundation Setup (1-2 weekend) — IN PROGRESS

**Tujuan:** Setup dasar yang bikin project "alive" walaupun konten masih minimal.

- [x] Folder structure dibuat
- [x] CLAUDE.md, memory.md, docs initial (01-plan, 02-tech-stack, 03-agents-skills, 04-data-catalog, 05-roadmap-detail)
- [ ] Git init + first commit
- [ ] Lock final brand: **OpenPadang** (domain register postponed)
- [ ] GitHub repo public
- [ ] Setup project skeleton SvelteKit + Tailwind + shadcn-svelte + Lucide via **pnpm**
- [ ] Setup design tokens
- [ ] Bikin landing static page sederhana ("Coming Soon" tapi proper)
- [ ] Mobile responsive + a11y check
- [ ] Deploy ke Vercel (pakai default URL `openpadang.vercel.app` dulu)
- [ ] LICENSE files (MIT + CC-BY 4.0)
- [ ] CONTRIBUTING.md (untuk future kontributor)

**Output Phase 0:** Landing page online di `openpadang.vercel.app` + repo public. **Domain custom postponed** — register nanti saat ada substance (Phase 1+).

> **Detail step-by-step lihat:** [`docs/05-roadmap-detail.md`](05-roadmap-detail.md)

### Phase 1: Catalog & Documentation (1-2 weeks)

**Tujuan:** Inventarisasi data publik Padang/Sumbar yang available.

- [ ] Lengkapi `docs/04-data-catalog.md` dengan minimal 20 sumber data
- [ ] Per source: URL, format, license, refresh rate, contact, reliability rating
- [ ] Publish catalog di static site (browseable + searchable)
- [ ] Outreach pertama: post di Twitter/LinkedIn (lo content creator!) sebagai signaling

**Output:** Comprehensive catalog yang sudah berguna untuk developer/researcher walau belum ada dataset terkurasi.

### Phase 2: First Curated Dataset (2-3 weeks)

**Tujuan:** Pilih 1 dataset lowest-hanging-fruit + curate end-to-end.

**Kandidat (priority order):**
1. **OSM POI Padang** — 1 query Overpass API → JSON. Lowest effort, immediate value.
2. **BPS Padang demographic** — scrape sekali, update tahunan.
3. **BMKG real-time wrapper** — API gateway untuk gempa/cuaca filtered Sumbar.

- [ ] Pilih 1 sebagai pilot
- [ ] Build pipeline: fetch → transform → validate → publish
- [ ] Documentation lengkap (README, schema, examples)
- [ ] Validate format (CSV/JSON/GeoJSON sesuai standar)

**Output:** 1 dataset production-ready di `datasets/<name>/`, accessible via GitHub raw.

### Phase 3: Showcase — Padang Real-Time Status PWA (2 weekend)

**Tujuan:** Build pilot use case yang konsumsi data dari OpenPadang.

- [ ] SvelteKit PWA dengan dashboard sederhana
- [ ] Konsumsi BMKG (gempa+cuaca) + PetaBencana (banjir) + OWM (cuaca)
- [ ] "Powered by OpenPadang" branding
- [ ] Deploy di subdomain (e.g., `realtime.openpadang.info`)

**Output:** Live PWA shareable yang **prove value** dari Open Data Initiative.

### Phase 4: API Gateway (1-2 weeks)

**Tujuan:** REST API yang easy-to-use untuk developer.

- [ ] SvelteKit `+server.ts` endpoints
- [ ] OpenAPI/Swagger documentation
- [ ] Rate limiting + caching
- [ ] Code examples (JS, Python, cURL)

**Output:** `api.openpadang.info` dengan minimal 3 endpoints + docs.

### Phase 5: Visualization Layer (ongoing, ad-hoc)

**Tujuan:** Dashboard publik & data stories.

- [ ] Chart.js interactive dashboards di SvelteKit (custom-built, full control)
- [ ] Data story article series ("Demografi Padang Visualized", "Why Lubuk Buaya Floods?")
- [ ] Embeddable widget untuk media partner

### Phase 6: Outreach & Community (ongoing)

- [ ] Submit ke DataPortals.org
- [ ] Approach Diskominfo Padang (formal letter)
- [ ] Approach UNAND/UNP untuk kolaborasi akademik
- [ ] Article/thread di Twitter, LinkedIn
- [ ] Open call for contributors

## Success Metrics

**Foundation success (Phase 0-1):**
- ✅ Project online dengan domain & repo
- ✅ Catalog 20+ data sources documented

**Pilot success (Phase 2-3):**
- ✅ 1+ dataset curated & accessible
- ✅ 1 showcase use case (Real-Time Status PWA) live

**Sustained success (Phase 4-6):**
- ✅ 5+ datasets curated
- ✅ Active API endpoint
- ✅ Min 1 community contributor (atau partnership Pemkot/akademisi)
- ✅ Data stories published

**Long-term vision (1-2 tahun):**
- ✅ 20+ datasets
- ✅ Recognized civic tech project di Indonesia
- ✅ Sustainable contributor base
- ✅ Possible partnership Pemkot Padang untuk akses data resmi

## Anti-Goals (Apa yang BUKAN OpenPadang)

- ❌ **Bukan startup** — gak ada funding, gak ada exit strategy
- ❌ **Bukan kompetitor Padang Mobile** — komplementer
- ❌ **Bukan replacement Pemkot** — civic layer
- ❌ **Bukan portfolio piece doang** — meaningful civic project
- ❌ **Bukan rush project** — sustainable pace, no deadline

# OpenPadang — Roadmap Detail (Step-by-Step)

> Detail urutan kerjaan dari awal sampai akhir, per phase.
> Sumber: hasil diskusi 2026-05-09.
> **Mode:** Marathon, sustainable. Capek istirahat. Skip task gak urgent kalau gak mood.

---

## 🎯 PHASE 0 — Foundation Setup

**Goal:** Project online dengan landing page minimal. Bisa pause kapan aja setelah ini tanpa rusak.
**Effort:** 1-2 weekend (~12-16 jam)
**Output:** Landing page live di Vercel default URL (`openpadang.vercel.app`), repo public, foundation siap.

### Step-by-Step

| # | Task | Tools | Skill |
|---|---|---|---|
| 0.1 | Lock final brand: **OpenPadang** (domain register postponed) | manual | — |
| 0.2 | Decide GitHub: personal (`superemem/openpadang`) atau bikin org `openpadang` baru | gh CLI | — |
| 0.3 | Init git lokal di `~/openpadang/` | `git init`, `git add .`, commit | — |
| 0.4 | Push ke GitHub repo (public) | `gh repo create` + `git push` | — |
| 0.5 | Setup project skeleton SvelteKit + Tailwind via **pnpm** | `pnpm create svelte@latest`, `pnpm install`, `pnpm add -D tailwindcss postcss autoprefixer` | `frontend-component-builder` |
| 0.6 | Install component lib: shadcn-svelte + Bits UI + Lucide Svelte | `pnpm dlx shadcn-svelte@latest init`, `pnpm add lucide-svelte bits-ui` | `frontend-component-builder` |
| 0.7 | Install Inter font (Google Fonts atau `@fontsource/inter`) | `pnpm add @fontsource/inter` | `ui-design-reviewer` |
| 0.8 | Setup design tokens di `tailwind.config.ts` (colors, fonts, spacing, breakpoints) | manual | `ui-design-reviewer` |
| 0.9 | Build landing page sederhana ("OpenPadang — Coming Soon, dengan visi") | SvelteKit + shadcn-svelte | `frontend-component-builder` |
| 0.10 | Mobile responsive check (375px, 768px, 1024px viewport) | DevTools | `responsive-checker` |
| 0.11 | A11y baseline check | DevTools + axe extension | `a11y-checker` |
| 0.12 | Deploy ke Vercel — pakai Vercel default URL (`openpadang.vercel.app`) | Vercel CLI atau dashboard | — |
| 0.13 | LICENSE files (`LICENSE` MIT untuk code, `LICENSE-DATA` CC-BY 4.0 untuk data) | manual | — |
| 0.14 | CONTRIBUTING.md + Code of Conduct boilerplate | manual | `contributor-onboarder` |
| 0.15 | Update `memory.md` Phase 0 progress | manual | — |

**Domain registrasi: POSTPONED.** Vercel default URL cukup untuk awal. Custom domain `openpadang.info` di-register nanti (Phase 1 atau setelah ada dataset pertama).

---

## 📊 PHASE 1 — Catalog & Documentation

**Goal:** Static documentation site dengan **catalog 20+ data sources** terdokumentasi rapi.
**Effort:** 1-2 weeks (~16-20 jam)
**Output:** Browseable & searchable catalog di Vercel URL atau subdomain.

### Step-by-Step

| # | Task | Skill |
|---|---|---|
| 1.1 | Setup Astro Starlight di subfolder `docs/` atau separate repo | `pnpm create astro@latest -- --template starlight` |
| 1.2 | Structure docs Starlight: Home, Datasets Catalog, API (placeholder), About, Contributing | manual |
| 1.3 | Setup design tokens Starlight (sync dengan SvelteKit app) | `ui-design-reviewer` |
| 1.4 | Build "Dataset Card" reusable component | `frontend-component-builder` |
| 1.5 | Build "Catalog Browser" page dengan filter (kategori, format, tier) | `frontend-component-builder` + `responsive-checker` |
| 1.6 | Lengkapi `04-data-catalog.md` jadi 20+ sumber (tier 1, 2, 3 + hidden gems) | `data-source-curator` |
| 1.7 | Tiap source: URL, format, license, refresh, contact, reliability rating | `data-source-curator` |
| 1.8 | Generate page detail per source di static site | `documentation-writer` |
| 1.9 | A11y audit semua page | `a11y-checker` |
| 1.10 | Lighthouse mobile audit (target ≥85) | `performance-auditor` |
| 1.11 | (Optional) Register custom domain `openpadang.info` + connect ke Vercel | manual |
| 1.12 | Submit ke DataPortals.org global registry | manual |
| 1.13 | Soft announcement: thread Twitter/LinkedIn | manual |

---

## 🌍 PHASE 2 — First Curated Dataset

**Goal:** 1 dataset production-ready, accessible via GitHub raw + dokumentasi lengkap.
**Effort:** 2-3 weeks (~20-30 jam)
**Recommended starter:** **OSM POI Padang** (lowest hanging fruit)

### Step-by-Step

| # | Task | Skill |
|---|---|---|
| 2.1 | Pilih dataset pilot (rekomen: OSM POI Padang) | manual |
| 2.2 | Build ETL Python script: query Overpass API → transform → save GeoJSON/CSV | `etl-pipeline-builder` |
| 2.3 | Validate format & schema | `dataset-validator` |
| 2.4 | Scan PII | `pii-scrubber` |
| 2.5 | Check license compliance (OSM = ODbL, attribution wajib) | `data-license-checker` |
| 2.6 | Save ke `datasets/osm-poi-padang/` di repo | manual |
| 2.7 | Generate README per dataset (schema, license, examples, contributors) | `documentation-writer` |
| 2.8 | Setup auto-update via GitHub Actions (weekly cron) | `github-actions-builder` |
| 2.9 | Register di catalog page static site | manual |
| 2.10 | Build dataset preview page (table + map) di SvelteKit | `frontend-component-builder` |
| 2.11 | Mobile responsive + a11y check | `responsive-checker` + `a11y-checker` |
| 2.12 | Write tests (Vitest unit + Playwright e2e) | `qa-test-writer` |
| 2.13 | Run tests, fix failures | `qa-test-runner` |

**Output Phase 2:** OSM POI Padang dataset live, accessible, terdokumentasi, auto-update.

---

## ⚡ PHASE 3 — Showcase: Padang Real-Time Status PWA

**Goal:** Live PWA yang konsumsi data publik (BMKG, PetaBencana, OWM) — bukti konkret value Open Data.
**Effort:** 2-3 weeks (~20-30 jam)
**Output:** Installable PWA, offline-capable, branded "Powered by OpenPadang".

### Step-by-Step

| # | Task | Skill |
|---|---|---|
| 3.1 | Build SvelteKit subroute `/realtime` (atau subdomain `realtime.openpadang.info`) | manual |
| 3.2 | Integrate BMKG real-time gempa (`autogempa.json` + `gempaterkini.json`) | `api-endpoint-designer` |
| 3.3 | Integrate BMKG cuaca prakiraan (per kelurahan via `adm4`) | `api-endpoint-designer` |
| 3.4 | Integrate InaTEWS BMKG tsunami warning | `api-endpoint-designer` |
| 3.5 | Integrate PetaBencana.id (banjir crowd-source) | `api-endpoint-designer` |
| 3.6 | Integrate OpenWeatherMap (cuaca + AQI) | `api-endpoint-designer` |
| 3.7 | Build dashboard UI: cards untuk gempa, cuaca, tsunami, banjir, AQI | `frontend-component-builder` |
| 3.8 | Build map view dengan Leaflet (titik gempa + banjir overlay) | `frontend-component-builder` |
| 3.9 | Setup PWA manifest + service worker (offline-cache critical) | `pwa-helper` |
| 3.10 | Web Push notification untuk gempa M≥5 Sumbar | `api-endpoint-designer` |
| 3.11 | Mobile-first audit (target Lighthouse mobile ≥85) | `performance-auditor` |
| 3.12 | A11y audit (target ≥95) | `a11y-checker` |
| 3.13 | SEO setup (meta, OG, structured data) | `seo-optimizer` |
| 3.14 | Write tests (Vitest + Playwright) | `qa-test-writer` |
| 3.15 | Deploy & test di real device (Android + iPhone) | manual |

---

## 🔌 PHASE 4 — API Gateway

**Goal:** REST API publik dengan dokumentasi OpenAPI.
**Effort:** 1-2 weeks (~10-16 jam)
**Output:** `api.openpadang.info` (atau subroute `/api`) dengan ≥5 endpoints + interactive docs.

### Step-by-Step

| # | Task | Skill |
|---|---|---|
| 4.1 | Design endpoint structure (REST best practice) | `api-endpoint-designer` |
| 4.2 | Build SvelteKit `+server.ts` per endpoint | `api-endpoint-designer` |
| 4.3 | Setup Supabase (kalau perlu cache atau dynamic query) | `database-schema-designer` |
| 4.4 | Generate OpenAPI 3.0 spec | `api-endpoint-designer` |
| 4.5 | Build interactive API docs page (Swagger UI atau Scalar) | `frontend-component-builder` |
| 4.6 | Rate limiting (Upstash Redis free tier atau Vercel Edge Config) | manual |
| 4.7 | Caching strategy (CDN headers, SWR pattern) | `api-endpoint-designer` |
| 4.8 | API integration tests | `qa-test-writer` |
| 4.9 | Deploy `api.openpadang.info` (subdomain Vercel) | manual |
| 4.10 | Code examples per endpoint (cURL, JS, Python) | `documentation-writer` |

---

## 📈 PHASE 5 — Visualization & Data Stories

**Goal:** Dashboard publik + data journalism content.
**Pace:** 1 story per bulan / kapan mood.
**Output:** Library data stories + embedded charts di static site.

### Step-by-Step

| # | Task | Skill |
|---|---|---|
| 5.1 | Setup Chart.js wrapper untuk SvelteKit (component reusable) | `frontend-component-builder` |
| 5.2 | Build dashboard "Demografi Padang Visualized" (BPS data) | `frontend-component-builder` + `civic-data-storyteller` |
| 5.3 | Data story: "Mengapa Lubuk Buaya Banjir?" (geo + historical) | `civic-data-storyteller` |
| 5.4 | Data story: "Trans Padang Koridor Mana Paling Sepi?" (kalau dapat data) | `civic-data-storyteller` |
| 5.5 | Embeddable widget untuk media partner | `frontend-component-builder` |
| 5.6 | Build dataset-specific visualization page per dataset baru | `frontend-component-builder` |

---

## 🌐 PHASE 6 — Outreach & Community

**Goal:** Project gak solo lagi. Ada kontributor, partnership, recognition.

### Step-by-Step

| # | Task | Skill |
|---|---|---|
| 6.1 | Submit ke DataPortals.org (dari Phase 1) | manual |
| 6.2 | Surat resmi ke Diskominfo Padang — propose kolaborasi open data | manual (Claude bantu draft) |
| 6.3 | Approach UNAND/UNP — kolaborasi research/skripsi pakai data OpenPadang | manual |
| 6.4 | Write Medium/blog article story OpenPadang | `civic-data-storyteller` |
| 6.5 | Thread Twitter/LinkedIn announcement | manual |
| 6.6 | Setup Discord/Telegram untuk komunitas | manual |
| 6.7 | Onboarding doc untuk first contributor | `contributor-onboarder` |
| 6.8 | Apply ke civic tech grant (Code for Indonesia, OGP, Mozilla, dll) | manual |
| 6.9 | Hackathon partnership Diskominfo Padang | manual |

---

## 🔄 ONGOING — Maintenance & Growth

Setelah Phase 6 stabil, ini ongoing:

| Task | Frequency | Skill |
|---|---|---|
| Tambah dataset baru | Monthly | Workflow #1 (lihat `03-agents-skills.md`) |
| Update data via auto-actions | Weekly/daily | `github-actions-builder` |
| Performance audit | Quarterly | `performance-auditor` |
| Security review | Quarterly | built-in `security-review` + `data-license-checker` |
| Data story baru | 1-2 per bulan | `civic-data-storyteller` |
| Community engagement | Weekly | manual |
| Outreach baru (media, partner) | Quarterly | manual |

---

## 📊 Total Timeline Estimate

| Phase | Effort | Cumulative |
|---|---|---|
| Phase 0 | 12-16 jam | Week 1-2 |
| Phase 1 | 16-20 jam | Week 3-5 |
| Phase 2 | 20-30 jam | Week 6-9 |
| Phase 3 | 20-30 jam | Week 10-13 |
| Phase 4 | 10-16 jam | Week 14-15 |
| Phase 5+ | Ongoing | Month 4+ |
| Phase 6+ | Ongoing | Month 6+ |

**Total foundation (Phase 0-4):** ~3-4 bulan @ 4-6 jam/minggu (sustainable solo).

**Phase 5+ ongoing:** Kapan mood. No deadline.

---

## 🎯 Key Milestones (Visible Wins)

| Milestone | When | Surface |
|---|---|---|
| 🟢 Project online (Vercel default URL) | End of Phase 0 | Foundation |
| 🟢 Custom domain (kalau lo decide register) | Phase 1 (optional) | Branding |
| 🟢 First 20 datasets in catalog | End of Phase 1 | Documentation |
| 🟢 First curated dataset live | End of Phase 2 | Data |
| 🟢 Live PWA showcase | End of Phase 3 | Showcase |
| 🟢 Public API | End of Phase 4 | Developer access |
| 🟢 First data story published | Phase 5 | Visibility |
| 🟢 First external contributor | Phase 6 | Community |
| 🟢 Pemkot/Academic partnership | Phase 6+ | Recognition |

---

## 📌 Catatan Penting

### Domain Strategy

Domain `openpadang.info` (atau alternatif) di-register **NANTI**, bukan di Phase 0. Selagi project online di Vercel default URL (`openpadang.vercel.app`), itu udah cukup buat kerja & demo.

**Trigger untuk register domain:**
- Mau soft-announcement public (Phase 1 atau 2)
- Mau partnership outreach Pemkot (Phase 6)
- Project udah punya substance (catalog ≥20 sources atau ≥1 dataset)

**Sebelum trigger di atas:** biarin pake Vercel default URL. Hemat budget + reduce commitment psikologis.

### Pace Rule

- Capek istirahat. Project gak akan rusak.
- Skip step yang gak resonate. Pilih yang lo mood ngerjain.
- Marathon, bukan sprint.
- Self-paced, no external deadline.
- Phase 5-6 gak harus selesai — kalaupun stuck di Phase 4, project udah valuable.

### Skill Build Strategy

Bukan harus dibikin semua sekaligus. **Build skill saat lo butuh** — lazy approach, sesuai pattern actual usage. Lihat `03-agents-skills.md` section "Skills Build Priority".

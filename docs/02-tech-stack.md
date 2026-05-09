# OpenPadang — Tech Stack

## Prinsip Pemilihan Tech

1. **Reuse skill yang udah lo pegang** — SvelteKit, Supabase, Tailwind, Vercel
2. **Free/open tier first** — gak ada lock-in vendor
3. **Simple is better** — pilih tool yang lo nyaman maintain solo
4. **Standar terbuka** — format machine-readable yang siapa pun bisa pakai

## Stack Overview

```
┌──────────────────────────────────────────────────────────┐
│ FRONTEND                                                  │
│ ├─ Static docs site: Astro Starlight (atau Docusaurus)   │
│ ├─ Data viewer: SvelteKit                                │
│ ├─ Styling: Tailwind CSS                                 │
│ ├─ Component lib: shadcn-svelte + Bits UI (headless)    │
│ ├─ Icons: Lucide Svelte                                  │
│ ├─ Font: Inter (Google Fonts)                            │
│ └─ Map: Leaflet + OSM tiles                              │
├──────────────────────────────────────────────────────────┤
│ DATA LAYER                                                │
│ ├─ Storage utama: GitHub repo (versioned, transparent)   │
│ ├─ Cache & dynamic API: Supabase (PostgreSQL)            │
│ └─ Format: CSV, JSON, GeoJSON, GTFS                      │
├──────────────────────────────────────────────────────────┤
│ API GATEWAY                                               │
│ └─ SvelteKit `+server.ts` endpoints (di Vercel)          │
├──────────────────────────────────────────────────────────┤
│ AUTOMATION                                                │
│ ├─ GitHub Actions: scheduled scrape (BPS, BMKG)          │
│ ├─ Validation: GTFS Validator (MobilityData), JSON Schema│
│ └─ Deploy: Vercel auto-deploy on git push                │
├──────────────────────────────────────────────────────────┤
│ VISUALIZATION                                             │
│ └─ Chart.js (interactive charts, embedded di SvelteKit) │
└──────────────────────────────────────────────────────────┘
```

## Detail per Layer

### Frontend — Static Documentation Site

**Pilihan utama: Astro Starlight**
- ✅ Docs-first, design clean
- ✅ Built-in search, sidebar, dark mode
- ✅ Mendukung MDX (markdown + components)
- ✅ Deploy mudah di Vercel/GitHub Pages
- ✅ Performance excellent (static generated)

**Alternative: Docusaurus**
- Pro: Bigger ecosystem, dipake Meta/dll
- Con: React-heavy, lebih opinionated

**Decision:** Astro Starlight (lebih ringan, fit dengan philosophy "simple")

### Frontend — Interactive Data Viewer

**SvelteKit** (lo udah pegang)
- ✅ SSR + static generation hybrid
- ✅ Form actions untuk submit issue/contribute
- ✅ `+server.ts` untuk API endpoints
- ✅ Vercel native support

### UI Design System & Components

Goal: **konsistensi UI lintas page** + **leverage HIG-inspired clean style** Emen.

**Stack:**

| Layer | Tool |
|---|---|
| **Styling utility** | Tailwind CSS |
| **Component library** | shadcn-svelte (port dari shadcn/ui) |
| **Headless primitives** | Bits UI (foundation shadcn-svelte) |
| **Icons** | Lucide Svelte |
| **Typography** | Inter (Google Fonts) |
| **Charts** | Chart.js |

**Why shadcn-svelte:**
- ✅ Copy-paste components (gak install ratusan KB)
- ✅ Full ownership — code di repo lo, modify sebebasnya
- ✅ Accessible by default (built on Bits UI)
- ✅ HIG-friendly aesthetic (clean, generous whitespace, subtle borders)
- ✅ Tailwind-based — fit 8pt grid system

**Alternative considered:**
- **Skeleton UI** — Svelte-native tapi more opinionated design
- **Flowbite Svelte** — banyak component pre-built tapi less customizable
- **Custom from scratch** — overhead besar, gak worth untuk solo project

**Decision:** shadcn-svelte + Tailwind + Lucide. Bisa swap ke Skeleton kalau ternyata gak fit.

### Design Tokens (Konsistensi)

**Colors (HIG-inspired):**
```
- Background: white (#FFFFFF) + subtle gray (#F9FAFB)
- Text primary: #111827 (gray-900)
- Text secondary: #6B7280 (gray-500)
- Brand primary: TBD (lock saat branding final)
- Accent: TBD
- Decorative SVG (sparkle/plus/diamond): #374151 with low opacity
```

**Typography:**
- Font family: Inter (300, 400, 500, 600, 700)
- Hierarchy: 28-32px (H1), 22-24px (H2), 18-20px (H3), 14-16px (body), 12px (caption)
- Line height: 1.5-1.6

**Spacing:** 8pt grid (4, 8, 12, 16, 24, 32, 48, 64, 96)

**Komponen wajib konsisten:**
- KPI Box / Stat Card
- Data Table
- Filter Pills / Select
- Map Marker
- Insight Card
- Action Button (primary, secondary, ghost)
- Code Block (untuk API examples)
- Dataset Card (di catalog page)

### UI References (Inspirasi)

Project civic tech / open data dengan UI yang worth study:

| Reference | URL | Yang Worth Dipelajari |
|---|---|---|
| **NYC Open Data** | https://opendata.cityofnewyork.us/ | Catalog page, dataset detail, search |
| **PetaBencana.id** | https://petabencana.id | Map UI, real-time data display |
| **data.gov.uk** | https://data.gov.uk/ | Documentation site, API doc style |
| **Code for America Brigades** | https://brigade.codeforamerica.org/ | Civic tech aesthetic |
| **Linear** | https://linear.app | Clean spacing, typography hierarchy |
| **Vercel Dashboard** | https://vercel.com/ | Component library reference |
| **Stripe Dashboard** | https://stripe.com/dashboard | Data table pattern, stats display |

**Brand inspiration buat positioning:**
- **Mapbox** style (technical, clean) untuk geo visualization
- **Observable HQ** untuk data exploration
- **GitHub** untuk repo browsing pattern

### Mobile Optimization & Responsive Design

**Wajib hukumnya:** Project ini harus **nyaman di desktop & mobile**. Banyak warga Padang akses via HP — terutama saat butuh data emergency (gempa, banjir, evacuation).

**Approach:**

| Aspek | Strategi |
|---|---|
| **Mobile-first** | Tailwind default style untuk mobile, scale up via breakpoint (`sm:`, `md:`, `lg:`) |
| **Breakpoints** | Tailwind default: `sm` 640px, `md` 768px, `lg` 1024px, `xl` 1280px |
| **Touch targets** | Minimum 44x44px untuk tap area (Apple HIG + Material) |
| **Typography responsive** | `text-base md:text-lg` pattern |
| **Navigation mobile** | Hamburger menu + bottom nav untuk app-like, NOT desktop sidebar diciutin |
| **Map controls** | Touch-friendly zoom, pinch gesture support, fullscreen toggle |
| **Tables** | Horizontal scroll dengan sticky first column, atau card view di mobile |
| **Forms** | Input height min 44px, font-size ≥16px (cegah iOS zoom) |
| **Performance** | Lazy load images/charts, code-split per route |
| **Offline (PWA)** | Service worker cache critical assets — penting untuk disaster scenarios |

**Test wajib:**
- Chrome DevTools mobile emulator (iPhone 12, Pixel 5, iPad)
- Test di **real device** sebelum publish (Android murah + iPhone)
- Lighthouse score: Performance ≥85, Accessibility ≥95 di mobile
- Touch test: bisa pakai 1 jempol di mobile (one-handed UX)

**Pattern referensi mobile-first civic apps:**
- PetaBencana.id (mobile-optimized map)
- JAKI (Jakarta super-app, mobile-first)
- Citymapper (transit app gold standard)

**Checklist sebelum ship per page:**
- [ ] Mobile viewport (375px) gak ada horizontal scroll
- [ ] Tap target semua ≥44px
- [ ] Font readable tanpa zoom
- [ ] Image responsive (`<img sizes>`)
- [ ] Map fits & usable di mobile
- [ ] Form input gak trigger iOS zoom
- [ ] Loading state visible di slow connection
- [ ] Lighthouse mobile score ≥85

### Map Visualization

**Leaflet + OpenStreetMap tiles**
- ✅ Free, no API key
- ✅ Open-source, well-documented
- ✅ Mobile-friendly

**Alternative:** MapLibre GL (lebih modern, vector tiles), tapi lebih heavy.

**Decision:** Leaflet untuk Phase awal, upgrade ke MapLibre kalau butuh advanced features.

### Data Storage

**Strategi 2-tier:**

**Tier 1: GitHub Repo (source of truth)**
- Semua dataset versioned di Git
- CSV/JSON/GeoJSON files langsung readable
- Pull via raw URL: `https://raw.githubusercontent.com/openpadang/data/main/datasets/...`
- Free hosting, transparent history

**Tier 2: Supabase (cache + dynamic queries)**
- Untuk query yang complex (filter, aggregate, join)
- Untuk realtime subscription (kalau ada streaming data)
- Free tier: 500MB DB + 1GB file storage + 2GB bandwidth (cukup awal)

**Sync strategy:** GitHub = canonical, Supabase mirror via GitHub Actions saat ada update.

### API Gateway

**SvelteKit `+server.ts` endpoints di Vercel**
- `GET /api/v1/datasets` → list semua dataset
- `GET /api/v1/<dataset-id>` → fetch dataset
- `GET /api/v1/<dataset-id>?filter=...` → filtered query
- `GET /api/v1/realtime/bmkg-gempa` → wrapper BMKG dengan cache

**Rate limiting:** Vercel Edge config atau Upstash Redis (free tier).

### Automation

**GitHub Actions:**

```yaml
# .github/workflows/scrape-bmkg.yml
on:
  schedule:
    - cron: '*/15 * * * *'  # tiap 15 menit
jobs:
  scrape:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: python scripts/scrape-bmkg.py
      - uses: stefanzweifel/git-auto-commit-action@v5
```

**Validators:**
- **GTFS:** MobilityData GTFS Validator (Java CLI)
- **JSON:** AJV (Node.js) atau pydantic (Python)
- **GeoJSON:** geojsonhint (Node.js)
- **CSV:** csvlint atau custom Pandas check

### Visualization

**Chart.js** (charting utama)
- Free, lightweight
- Integration ke SvelteKit gampang
- Plugin ecosystem mature
- Customizable via Tailwind utility colors
- Wrapper Svelte: `chartjs-svelte` atau direct integration via Svelte action

## Hosting & Deployment

| Component | Service | Cost |
|---|---|---|
| Static site | **Vercel** atau GitHub Pages | Free |
| API | **Vercel** (SvelteKit endpoints) | Free tier (100GB bandwidth) |
| Database | **Supabase** | Free tier (500MB DB) |
| Domain | **Cloudflare Registrar** atau Niagahoster | Rp 200-300rb/tahun |
| DNS | **Cloudflare** | Free |
| Analytics | **Plausible** (kalau mau privacy-friendly) atau GA4 | Free / berbayar |

**Total estimated cost Phase 0-2:** Rp 200-300rb/tahun (cuma domain).

## License Strategy

- **Code:** MIT License (`LICENSE`)
- **Data:** CC-BY 4.0 (`LICENSE-DATA`)
- **Documentation:** CC-BY 4.0

**Mengapa CC-BY:**
- Allow commercial use (developer/startup bisa pakai)
- Require attribution (OpenPadang dapet kredit)
- Compatible dengan most open data licenses

## Standards yang Dipakai

| Domain | Standard |
|---|---|
| **Transit** | GTFS (General Transit Feed Specification) |
| **Geospatial** | GeoJSON, Shapefile (kalau perlu compatibility) |
| **Tabular** | CSV (RFC 4180) |
| **Hierarchical** | JSON dengan JSON Schema |
| **Map tiles** | OSM tile spec |
| **Metadata** | DCAT (Data Catalog Vocabulary) — untuk catalog page |

## Package Manager

**WAJIB pakai `pnpm`** — bukan npm atau yarn. Konsisten dengan migration Emen ke pnpm di semua project.

```bash
pnpm install          # install dependencies
pnpm add <pkg>        # add new package
pnpm add -D <pkg>     # add dev dependency
pnpm dev              # run dev server
pnpm build            # production build
pnpm test             # run tests
```

**Lockfile:** `pnpm-lock.yaml` (commit ke git, bukan `package-lock.json`).

**Workspace mode** (kalau pakai monorepo nanti): `pnpm-workspace.yaml`.

## Tools yang Akan Dipakai

| Tool | Purpose |
|---|---|
| **VSCode + Claude Code** | IDE utama (lo udah pegang) |
| **pnpm** | Package manager (wajib, bukan npm/yarn) |
| **GitHub** | Repo + Actions + Pages |
| **Vercel** | Hosting frontend + API |
| **Supabase** | Database + Auth (kalau perlu) |
| **Astro Starlight** | Documentation site |
| **SvelteKit** | Interactive data viewer + API |
| **Tailwind CSS** | Styling utility-first |
| **shadcn-svelte** | Component library (copy-paste) |
| **Bits UI** | Headless component primitives |
| **Lucide Svelte** | Icon library |
| **Inter (Google Fonts)** | Typography |
| **Chart.js** | Charting & visualization |
| **Leaflet** | Map rendering |
| **MobilityData GTFS Validator** | Validate GTFS |
| **Overpass Turbo** | OSM data extraction |
| **Python (pandas, requests)** | Scrape & ETL |
| **gh CLI** | GitHub workflow management |

## Decisions yang Belum Final

- 🔲 SvelteKit single-app (docs + viewer + API) atau **split** docs (Astro) + app (SvelteKit)?
- 🔲 Supabase atau pure static (no DB) di Phase awal?
- 🔲 Authentication needed? (Open data biasanya enggak, kecuali ada admin panel)
- 🔲 Subdomain strategy: `realtime.openpadang.info`, `api.openpadang.info`, `docs.openpadang.info`?

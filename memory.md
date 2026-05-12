# OpenPadang — Memory Log

> Shared memory antara Claude Code (CLI/VSCode) dan Claude Cowork (Desktop).
> Update file ini di akhir sesi yang ada progress signifikan.

---

## Status Saat Ini

- **Phase:** 0 — Foundation Setup
- **Last updated:** 2026-05-09
- **Active branch:** `main`
- **Domain status:** Belum register. Top candidate: `openpadang.info` (verified available 2026-05-09)
- **Github repo:** ✅ LIVE → https://github.com/superemem/openpadang (public)
- **First commit:** `8c28634` chore: initial foundation setup (2026-05-09)

---

## Decision Log

### 2026-05-09 — Project Initialization

- ✅ Folder dibuat: `/Users/azwary/openpadang/`
- ✅ CLAUDE.md project-level dibuat (inherit identity dari Emen Workspace CLAUDE.md)
- ✅ Memory log dibuat (file ini)
- ✅ Initial docs disusun: plan, tech-stack, agents-skills, data-catalog, roadmap-detail
- ✅ Git init + first commit (`8c28634`)
- ✅ GitHub repo public: https://github.com/superemem/openpadang
- ✅ pnpm monorepo workspace setup (commit `4b01800`)
- ✅ `site/` Astro Starlight (build pass)
- ✅ `app/` SvelteKit + Tailwind 4 + Lucide Svelte + Inter + Bits UI (build pass)
- ✅ `packages/shared/` design tokens + types
- ✅ Landing page sederhana di app/
- ✅ LICENSE (MIT untuk code) + LICENSE-DATA (CC-BY 4.0 untuk data)
- ✅ CONTRIBUTING.md (panduan kontribusi)
- ✅ README.md updated dengan link ke LICENSE & CONTRIBUTING
- ✅ Vercel deployment 2 project (site + app) — by Emen
- ✅ Scope HYBRID locked (2026-05-12) — list all, curate selective, docs layer untuk Direct API
- ✅ Custom favicon SVG (site + app) + OG image SVG
- ✅ shadcn-svelte config manual (components.json + lib/utils.ts)
- ✅ Landing app improved: CTA buttons, footer, OG meta tags
- ✅ **BMKG Gempa Guide** — 4 page: quickstart, endpoints, use-cases, gotchas (commit `8e70e0b`)
- ✅ Tone formal rewrite + UI mockup di use-cases BMKG Gempa (commit `d5088b5`)
- ✅ **BMKG Cuaca Guide** — 4 page dengan UI mockup (commit `36b016e`)
- ✅ **OSM Overpass Guide** — 4 page dengan UI mockup (commit `1d8fe0c`)
- ✅ **Live API validation** — semua endpoint di-test, banyak fix di BMKG Cuaca (mapping kecamatan salah, adm1-3 gak work, missing fields) (commit `fc26bee`)
- ✅ **BMKG Cuaca v2 endpoint discovered** — setelah deep research, ternyata `cuaca.bmkg.go.id/api/df/v1/forecast/adm` support adm1-4 semua. Legacy `api.bmkg.go.id/publik/prakiraan-cuaca` hanya adm4. (commit `304acd6`)
- 🔲 Domain registrasi (postponed)
- 🔲 Guide untuk source Direct API sisa: PetaBencana, OpenWeatherMap, InaTEWS
- 🔲 First curated dataset (Phase 2): kandidat OSM POI Padang atau BPS Padang demographic

## 💡 Lesson Learned (untuk Future Guides)

**SELALU TEST API LIVE sebelum publish documentation.** Dokumentasi BMKG
publik tidak akurat — gue tulis guide berdasarkan asumsi mapping kecamatan
dan parameter level, ternyata setelah test live: hampir semua mapping
kecamatan salah + adm1/adm2/adm3 gak work (return HTML).

Workflow untuk guide berikutnya:
1. Hit endpoint live dengan curl/python dulu
2. Verify response schema match documentation source
3. Test edge cases (empty result, error response, parameter variants)
4. **Cari endpoint alternatif** — banyak service punya multiple endpoint dengan kemampuan berbeda (e.g., BMKG punya legacy `api.bmkg.go.id` vs v2 `cuaca.bmkg.go.id`)
5. Tulis guide berdasarkan observasi aktual, bukan dokumentasi source
6. Tambah disclaimer "Last verified: <date>" + link ke validation test

### Decision yang sudah dibuat
- **Brand:** OpenPadang (locked)
- **Domain candidate:** `openpadang.info` (verified available, **register postponed**)
- **Lokasi project:** `~/openpadang/` (independent, ikut convention project Emen lainnya)
- **CLAUDE.md scope:** project-level dengan inherit reference ke Emen Workspace CLAUDE.md
- **License:** MIT (code) + CC-BY 4.0 (data)
- **Pace:** Marathon, 4-6 jam/minggu sustainable
- **Package manager:** pnpm (wajib, bukan npm/yarn)
- **Phase 0 hosting:** Vercel default URL (`openpadang.vercel.app`) — domain custom nyusul
- **GitHub repo:** `superemem/openpadang` (personal account, public)
- **Repo structure:** pnpm Monorepo (A1) — `site/` (Astro Starlight), `app/` (SvelteKit), `packages/shared/` (design tokens, types)
- **Scope: HYBRID** (2026-05-12) — listing all + curate selective. Untuk Tier "Direct API" (BMKG, OSM, PetaBencana, dll), OpenPadang = **documentation & education layer** (Quick Start, Code Examples, Use Cases, Gotchas) — TIDAK re-host. Untuk yang belum ada API atau format jelek, OpenPadang scrape & host.

### Decision yang masih pending
- 🔲 First dataset to curate — pilih dari shortlist di `docs/04-data-catalog.md` (recommend: OSM POI Padang)
- 🔲 Custom domain register — kapan? (Phase 1 atau setelah ada dataset pertama)

---

## Progress Log

### Sesi 2026-05-09 (Foundation Setup)

**Yang dikerjakan:**
- Diskusi vision, motivation, mode kerja
- Verify domain (padang.info taken, openpadang.info available)
- Setup folder + initial documentation
- Susun phased roadmap
- Adjust tech stack: skip Looker Studio → Chart.js, tambah Lucide Svelte, tambah design system shadcn-svelte + Tailwind + Bits UI, tambah UI references inspirasi
- Tambah section Mobile Optimization (mobile-first, breakpoints, touch targets ≥44px, Lighthouse ≥85, PWA offline-ready)
- Expand skills list jadi 24 planned skills lintas domain: frontend (4), backend (4), QA (4), DevOps (3), performance/SEO (3), content (4), security (2). Dibarengi 6 workflow pattern + build priority per phase.
- Tambah `docs/05-roadmap-detail.md` — step-by-step lengkap end-to-end dari Phase 0 sampai 6+
- Set package manager wajib: **pnpm** (bukan npm/yarn) — sync dengan migration Emen
- **Decision: Domain register postponed.** Phase 0 pakai Vercel default URL (`openpadang.vercel.app`). Custom domain register nanti saat ada substance (Phase 1 atau 2).

**Insight:**
- Emen tertarik dengan Open Data Initiative karena civic frustration (data pemerintah berantakan), bukan portfolio chase
- Padang Mobile super-app udah ada → fill the gap as komplementer (open data layer publik)
- Emen punya bandwidth realistic: marathon, 4-6 jam/minggu
- UI consistency penting → bikin design tokens + component library shadcn-svelte sebagai foundation

**Next session focus:**
- Lock final brand & domain decision
- Decide first dataset to curate (pilih lowest hanging fruit dari catalog)
- Init git + GitHub repo (kalau lo siap)

---

## Notes & Reminders

- **Padang Mobile** = official super-app dari Pemkot. Real-time Trans Padang tracking ada. Posisikan OpenPadang as komplementer.
- **PetaBencana.id** = hero civic tech Indonesia, open API + open-source. Worth study pattern-nya.
- **BMKG API real-time gempa**: `https://data.bmkg.go.id/DataMKG/TEWS/autogempa.json` (free, JSON)
- **OSM Overpass API**: free, gak butuh key, support query POI Padang
- Sebelum ngumumin project, **pastikan minimum 1 dataset publik & accessible** (jangan launch kosong)

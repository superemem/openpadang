# OpenPadang — Claude Agents & Skills Relevant

## Existing Skills (Yang Lo Udah Punya)

### `~/.claude/skills/` (User-level, global)

| Skill | Description | Relevansi ke OpenPadang |
|---|---|---|
| `weekly-report-generator` | Generate weekly Creative Marketing report HTML 5-section dari Excel | ⭐ **Low direct** — tapi pattern-nya bisa diadopsi untuk "weekly data update report" OpenPadang |
| `insight-extractor` | Ekstrak actionable insight dari raw metric pakai What → So What → Now What | ⭐⭐⭐ **High** — bisa dipakai untuk **data stories** di OpenPadang (e.g., "Demografi Padang Visualized") |

## Built-in Skills (Claude Code)

| Skill | Relevansi |
|---|---|
| `init` | Initialize CLAUDE.md di subfolder kalau perlu |
| `simplify` | Review code yang lo tulis untuk reuse, quality, efficiency |
| `review` | Review pull request (saat ada kontributor) |
| `security-review` | Security audit (sebelum publish API/dataset sensitive) |
| `update-config` | Manage settings.json Claude Code |
| `claude-api` | Build/debug Claude API apps (kalau bikin AI feature di OpenPadang) |
| `schedule` | Cron remote agent (kalau butuh scheduled task) |
| `loop` | Recurring task (e.g., monitor BMKG feed) |

## Skills yang Akan Dibuat (Future)

> Naming convention: `<role>-<action>` untuk role-based, `<noun>-<helper>` untuk operational. Stored at user-level (`~/.claude/skills/`) kalau reusable lintas project, project-level kalau OpenPadang-specific.

### 🎨 Frontend Skills

#### `frontend-component-builder`
- **Fungsi:** Generate Svelte component pakai pattern shadcn-svelte + Tailwind + responsive (mobile-first). Auto-include accessibility attributes & touch-friendly targets.
- **Tahap:** Phase 2+
- **Trigger:** "bikin komponen X", "buatkan KPI card", "/component <name>"
- **Output:** `.svelte` file + Tailwind classes + Lucide icon import + ARIA attributes

#### `responsive-checker`
- **Fungsi:** Review code Svelte/HTML untuk mobile responsiveness — check breakpoints, touch targets, viewport, horizontal scroll issues
- **Tahap:** Setiap PR/commit yang touch UI
- **Trigger:** "/check-responsive <file>" atau auto pre-commit hook
- **Output:** Issue list + fix suggestions

#### `a11y-checker`
- **Fungsi:** Check accessibility — ARIA, keyboard nav, color contrast, alt text, semantic HTML
- **Tahap:** Setiap PR yang touch UI
- **Trigger:** "/check-a11y <file>"
- **Tools backing:** axe-core, ESLint a11y plugin

#### `ui-design-reviewer`
- **Fungsi:** Review consistency dengan design tokens OpenPadang (Inter, color palette, 8pt grid, spacing scale, typography hierarchy)
- **Tahap:** Setiap PR yang add/modify UI
- **Trigger:** "/review-design <file>"

### ⚙️ Backend Skills

#### `api-endpoint-designer`
- **Fungsi:** Design REST API endpoints sesuai REST best practice + OpenAPI 3.0 spec. Generate `+server.ts` SvelteKit boilerplate.
- **Tahap:** Phase 4 (API Gateway)
- **Trigger:** "design API untuk <dataset>", "/api-design <resource>"
- **Output:** Endpoint signature + OpenAPI YAML + SvelteKit handler

#### `database-schema-designer`
- **Fungsi:** Design Supabase PostgreSQL schema untuk dataset. Generate migration SQL + RLS policies.
- **Tahap:** Phase 4+ (saat ada dataset complex butuh DB)
- **Trigger:** "design schema untuk <dataset>", "/schema <description>"

#### `etl-pipeline-builder`
- **Fungsi:** Generate Python ETL script (scrape → transform → validate → save) untuk source data. Pakai pandas, requests, dengan error handling.
- **Tahap:** Phase 1+ (per source baru di catalog)
- **Trigger:** "bikin ETL untuk BPS Padang", "/etl <source-url>"

#### `auth-implementer` *(future, kalau perlu)*
- **Fungsi:** Implement Supabase Auth flow di SvelteKit (login, register, RBAC)
- **Tahap:** Phase 6+ (kalau ada admin panel)
- **Trigger:** "implement auth"

### 🧪 QA Skills

#### `qa-test-writer`
- **Fungsi:** Write test sesuai stack — Vitest untuk Svelte unit, Playwright untuk e2e, Pytest untuk Python ETL
- **Tahap:** Bareng dengan setiap fitur baru
- **Trigger:** "write tests untuk <component/function>", "/test <target>"

#### `qa-test-runner`
- **Fungsi:** Run test suite + analyze failures + suggest fixes
- **Tahap:** Pre-commit / pre-deploy
- **Trigger:** "run tests", "/qa"

#### `dataset-validator`
- **Fungsi:** Validate dataset (CSV/JSON/GeoJSON/GTFS) sebelum publish — schema, format consistency, license compliance, attribution
- **Tahap:** Phase 2+ (per dataset publication)
- **Trigger:** "/validate-dataset <path>"

#### `data-source-curator`
- **Fungsi:** Saat lo nemu data source publik baru, generate template dokumentasi (URL, schema, license, refresh rate, contact)
- **Tahap:** Phase 1 (Catalog & Documentation)
- **Trigger:** "tambah data source X ke catalog", "/curate <url>"

### 🚀 DevOps & Infrastructure Skills

#### `github-actions-builder`
- **Fungsi:** Generate `.github/workflows/*.yml` untuk scheduled scrape, validation, deploy
- **Tahap:** Phase 1+ (saat first dataset perlu auto-update)
- **Trigger:** "bikin GitHub Action untuk X", "/workflow <task>"

#### `deploy-checker`
- **Fungsi:** Pre-deploy check — run tests, validate datasets, check broken links, lighthouse audit
- **Tahap:** Setiap deploy
- **Trigger:** "/predeploy" atau auto pada git push

#### `monitoring-setup` *(future)*
- **Fungsi:** Setup error tracking (Sentry free tier), analytics (Plausible), uptime monitoring (UptimeRobot)
- **Tahap:** Phase 4+ (saat traffic mulai naik)
- **Trigger:** "setup monitoring"

### ⚡ Performance & SEO Skills

#### `performance-auditor`
- **Fungsi:** Lighthouse-style audit — performance, best practices, SEO, PWA. Auto-suggest optimizations.
- **Tahap:** Pre-deploy & periodic
- **Trigger:** "/audit <url>", "performance check"

#### `seo-optimizer`
- **Fungsi:** Generate meta tags, OpenGraph, structured data (JSON-LD), sitemap, robots.txt
- **Tahap:** Phase 3+ (saat content publik)
- **Trigger:** "/seo <page>"

#### `pwa-helper`
- **Fungsi:** Setup PWA manifest + service worker + offline-cache strategy
- **Tahap:** Phase 3 (Padang Real-Time PWA)
- **Trigger:** "/pwa-setup"

### 📚 Content & Community Skills

#### `civic-data-storyteller`
- **Fungsi:** Generate data story article dari raw dataset pakai framework What → So What → Now What (extension dari `insight-extractor`)
- **Tahap:** Phase 5 (Visualization Layer)
- **Trigger:** "bikin data story dari <dataset>"
- **Style:** Casual Indonesia, audience: warga umum + jurnalis. Bukan academic.

#### `gtfs-helper`
- **Fungsi:** Helper khusus GTFS — convert raw schedule data ke GTFS format, validate, suggest fixes, integrate dengan Overpass API untuk halte
- **Tahap:** Phase 5+ (saat handle Trans Padang GTFS)
- **Trigger:** "/build-gtfs <input>"

#### `documentation-writer`
- **Fungsi:** Generate documentation per dataset/API — README, schema doc, examples, FAQ
- **Tahap:** Setiap dataset/API baru
- **Trigger:** "/docs <target>"

#### `contributor-onboarder`
- **Fungsi:** Generate onboarding doc untuk kontributor baru — PR template, code of conduct, first task suggestion
- **Tahap:** Phase 6 (Outreach & Community)
- **Trigger:** "onboard contributor"

### 🔒 Security Skills

> **Note:** Built-in `security-review` skill Claude Code udah cover banyak. Ini extension specific ke OpenPadang.

#### `data-license-checker`
- **Fungsi:** Verify license compliance — source data license vs project license (CC-BY 4.0). Flag potential conflict.
- **Tahap:** Setiap dataset baru
- **Trigger:** "/check-license <source>"

#### `pii-scrubber`
- **Fungsi:** Scan dataset untuk Personally Identifiable Information (nama, NIK, alamat detail) sebelum publish
- **Tahap:** Pre-publish setiap dataset
- **Trigger:** "/scrub-pii <dataset>"

## Agents yang Relevan

### Built-in Agents (Claude Code)

| Agent | Use Case di OpenPadang |
|---|---|
| `Explore` | Search codebase saat lupa structure / cari implementasi tertentu |
| `general-purpose` | Multi-step research (e.g., "research GTFS-realtime implementation patterns") |
| `Plan` | Architecting implementation plan untuk feature kompleks |
| `Agent` (custom) | Bisa spawn untuk paralel task (e.g., scrape multiple data sources concurrently) |

### Custom Agent yang Bisa Dibikin Nanti

#### `data-scout-agent`
- **Use case:** Search internet untuk data publik baru tentang Padang/Sumbar yang belum ada di catalog
- **Tools:** WebSearch, WebFetch, Bash (untuk dig/whois)
- **Trigger:** Manual ("scout new data sources for X")

#### `civic-research-agent`
- **Use case:** Research civic tech precedent (gimana kota lain handle issue X)
- **Tools:** WebSearch, WebFetch
- **Trigger:** "research how <city> handle <issue>"

## Plugin yang Bisa Dipertimbangkan

### Untuk Future Phase

| Plugin | Purpose | Phase |
|---|---|---|
| `claude-watch` (kalau Claude Code update support) | Transcribe video lecture/tutorial → notes (untuk research bahan) | Anytime |
| GitHub plugin (kalau ada) | Manage Issues/PR via Claude Code | Phase 6 |

## MCP Servers yang Mungkin Relevan

| MCP | Use Case |
|---|---|
| `claude_ai_Supabase` (built-in di akun lo) | Manage Supabase project untuk OpenPadang |
| `google-drive` | Akses dokumen pemerintahan yang share via Drive |
| `pencil` | Design diagram/flow visualisasi |

## Workflow Pattern (Skills Bekerja Bareng)

### Workflow 1: Tambah Dataset Baru (End-to-End)

```
1. /curate <source-url>           → data-source-curator
   └─ Generate doc template
2. /etl <source-url>              → etl-pipeline-builder
   └─ Generate Python script scrape & transform
3. /scrub-pii <dataset>           → pii-scrubber
   └─ Scan PII
4. /validate-dataset <path>       → dataset-validator
   └─ Validate format & license
5. /check-license <source>        → data-license-checker
   └─ Verify license compatible
6. /docs <dataset>                → documentation-writer
   └─ Generate README + schema
7. /workflow scheduled-update     → github-actions-builder
   └─ Auto-update mingguan/bulanan
8. Commit + push
```

### Workflow 2: Build UI Component (Konsisten)

```
1. /component <name>              → frontend-component-builder
   └─ Generate Svelte file dengan shadcn pattern
2. /check-responsive <file>       → responsive-checker
   └─ Verify mobile breakpoints
3. /check-a11y <file>             → a11y-checker
   └─ Accessibility audit
4. /review-design <file>          → ui-design-reviewer
   └─ Consistency dengan design tokens
5. /test <component>              → qa-test-writer
   └─ Generate Vitest tests
6. /qa                            → qa-test-runner
   └─ Run all tests
```

### Workflow 3: Build Data Story

```
1. Pilih dataset
2. "bikin data story dari <dataset>"  → civic-data-storyteller
   └─ insight-extractor (existing) untuk What→So What→Now What
3. Generate draft markdown
4. /seo <page>                    → seo-optimizer
   └─ Meta tags, OG, structured data
5. User polish + publish ke static site
```

### Workflow 4: Real-Time Data Monitor

```
1. /workflow scheduled-fetch      → github-actions-builder
   └─ Generate cron-based GitHub Action
2. /loop 15m "cek BMKG gempa Sumbar"  → built-in loop skill
3. Fetch & save ke Supabase
4. Trigger PWA update via webhook
```

### Workflow 5: Pre-Deploy

```
1. /qa                            → qa-test-runner
   └─ All tests pass?
2. /audit <url>                   → performance-auditor
   └─ Lighthouse score ≥85?
3. /predeploy                     → deploy-checker
   └─ Validate datasets, check broken links
4. /seo <site>                    → seo-optimizer
   └─ Meta tags up-to-date?
5. Deploy via Vercel auto on git push
```

### Workflow 6: Build API Endpoint

```
1. /api-design <resource>         → api-endpoint-designer
   └─ OpenAPI spec + handler boilerplate
2. /schema <resource>             → database-schema-designer (kalau perlu DB)
   └─ Migration SQL
3. /test <endpoint>               → qa-test-writer
   └─ API integration tests
4. /docs <endpoint>               → documentation-writer
   └─ API doc + code examples
```

## Catatan untuk Future Self

- **Skill creation pattern:** simpan di `~/.claude/skills/` (user-level) kalau dipake lintas project. Simpan di `<project>/.claude/skills/` kalau project-specific.
- **OpenPadang specific skills** mungkin worth simpan di `/Users/azwary/openpadang/.claude/skills/` supaya scope-nya tight.
- **Naming convention:** `verb-noun` atau `noun-action` (e.g., `dataset-validator`, `gtfs-helper`)
- **SKILL.md template:** lihat existing skill `weekly-report-generator` sebagai referensi format

## Skills Build Priority (Kapan Dibikin)

Bukan harus dibuat semua sekaligus. Guideline order:

### Phase 0-1 (Foundation, Catalog) — Build Minimal:
- ✅ `data-source-curator` — kepake banget pas curate catalog
- ✅ `dataset-validator` — basic validation
- ✅ `documentation-writer` — generate README per dataset

### Phase 2-3 (First Dataset, Showcase PWA) — Frontend Heavy:
- ✅ `frontend-component-builder`
- ✅ `responsive-checker`
- ✅ `a11y-checker`
- ✅ `ui-design-reviewer`
- ✅ `qa-test-writer`
- ✅ `pwa-helper`

### Phase 4 (API Gateway):
- ✅ `api-endpoint-designer`
- ✅ `database-schema-designer`
- ✅ `etl-pipeline-builder`

### Phase 5+ (Visualization, Community):
- ✅ `civic-data-storyteller`
- ✅ `gtfs-helper`
- ✅ `contributor-onboarder`
- ✅ `seo-optimizer`
- ✅ `performance-auditor`

### Anytime (kapan butuh):
- ✅ `github-actions-builder`
- ✅ `data-license-checker`
- ✅ `pii-scrubber`
- ✅ `deploy-checker`

## Summary Skill Coverage

| Domain | Skills Count | Coverage |
|---|---|---|
| 🎨 Frontend | 4 | Component build + responsive + a11y + design consistency |
| ⚙️ Backend | 4 | API design + schema + ETL + auth |
| 🧪 QA | 4 | Test write + run + dataset valid + curate |
| 🚀 DevOps | 3 | CI/CD + deploy check + monitoring |
| ⚡ Performance/SEO | 3 | Lighthouse + SEO + PWA |
| 📚 Content | 4 | Story + GTFS + docs + onboard |
| 🔒 Security | 2 | License + PII (+ built-in `security-review`) |
| **TOTAL** | **24 skills planned** | Full web dev lifecycle |

## Decisions yang Belum Final

- 🔲 Skills khusus OpenPadang taro di user-level atau project-level?
- 🔲 Custom agents perlu dibuat sekarang atau wait sampai pattern terlihat?
- 🔲 MCP server tambahan yang perlu setup (e.g., GitHub MCP untuk manage issues)?
- 🔲 Build semua skill di awal (overhead) vs build saat butuh (lazy, recommended)

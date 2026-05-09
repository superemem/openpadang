# OpenPadang — Claude Project Context

## Tentang Project Ini

**OpenPadang** adalah civic tech project independent untuk **buka akses data publik Padang & Sumbar** dalam format machine-readable, terstandar, dan gratis. Visi: ngebantu warga, developer, jurnalis, akademisi akses data pemerintah yang saat ini terpisah, gak lengkap, dan susah diakses.

- **Status:** Foundation phase (2026-05-09)
- **Brand candidate:** OpenPadang (domain: `openpadang.info` — to be finalized)
- **Owner:** Muhammad Irfan Mursyidin (Azwary / Emen)
- **Mode:** Marathon, sustainable, capek istirahat. Independent — bisa diteruskan siapa pun nanti.
- **License:** MIT (code) + CC-BY 4.0 (data)

## Inherit dari Emen Workspace CLAUDE.md

Identity dasar (panggil Emen "bro", lo/gue, framework Emen, bahasa Indonesia casual) **tetap berlaku di project ini** — referensi dari `/Users/azwary/Documents/Emen Workspace/CLAUDE.md`. Project ini gak override gaya komunikasi.

## Project-Specific Rules

### Prinsip Project
1. **Open by default** — semua data, kode, decision public via GitHub
2. **Sustainable pace** — gak ada deadline keras, push to commit kalau lo capek = anti-pattern
3. **Independent** — kalau Emen pause/stop, project gak rusak. Anyone can fork & continue
4. **Pragmatic** — minimal viable dulu, baru iterate. Hindari over-engineering
5. **Civic, bukan startup** — bukan kompetitor Padang Mobile. Komplementer

### Aturan Eksekusi
- **Sebelum bikin dataset baru:** cek `docs/04-data-catalog.md` untuk lihat priority list
- **Setiap dataset wajib punya:** schema doc, license info, contributor credit, last updated, source attribution
- **Validation wajib** sebelum publish — pakai tools sesuai `docs/02-tech-stack.md`
- **Mobile-first WAJIB:** setiap UI harus nyaman di desktop & mobile. Check responsive + touch targets ≥44px + Lighthouse mobile score ≥85 sebelum ship. Detail di `docs/02-tech-stack.md` section "Mobile Optimization".
- **UI consistency:** ikutin design tokens di `docs/02-tech-stack.md` (Inter, color palette, 8pt grid). Pakai shadcn-svelte component pattern.
- **Package manager: WAJIB pakai `pnpm`** — bukan npm atau yarn. Lo udah migrate semua project ke pnpm. Contoh: `pnpm install`, `pnpm add <pkg>`, `pnpm dev`, `pnpm build`. Generate `pnpm-lock.yaml` (commit), bukan `package-lock.json`.
- **Naming convention:**
  - Folder dataset: `kebab-case` (e.g., `trans-padang-gtfs/`)
  - Files: `snake_case.csv` atau standard format (e.g., `stops.txt` untuk GTFS)
  - Branch git: `feat/dataset-name` atau `docs/topic`
  - Skill: `<role>-<action>` (e.g., `frontend-component-builder`)

### Memory & Logging
- **Update `memory.md`** setiap akhir sesi yang ada progress signifikan (commit tertentu, decision penting, dataset baru)
- **Memory.md jadi bridge** kalau Emen pakai Claude Cowork (Desktop) — biar context tetap sync

## Quick References

| Topik | File |
|---|---|
| Vision & Roadmap (high-level) | `docs/01-plan.md` |
| Tech Stack & Tools | `docs/02-tech-stack.md` |
| Agents & Skills relevan | `docs/03-agents-skills.md` |
| Data Catalog (inventory) | `docs/04-data-catalog.md` |
| **Roadmap step-by-step detail** | `docs/05-roadmap-detail.md` |
| Memory log | `memory.md` |
| Public-facing intro | `README.md` |

## Useful Commands

```bash
# Setup git (sekali)
cd /Users/azwary/openpadang && git init

# Status
git status

# Validate GTFS dataset (kalau ada)
java -jar gtfs-validator.jar --input datasets/trans-padang-gtfs/

# Start dev server (kalau udah ada SvelteKit/Astro site)
cd site && npm run dev
```

## Catatan Untuk Claude (Future Self)

- Project ini **muncul dari kegelisahan Emen** soal data pemerintah yang berantakan (gak lengkap, terpisah, susah akses) — bukan portfolio chase atau monetisasi
- Padang Mobile super-app sudah exist & comprehensive — **jangan kompetisi**, posisikan komplementer (open data layer di atas closed-system Pemkot)
- Padang itu **kota tsunami-prone** — disaster data layer relevan tinggi
- Emen punya skill kuat di **Data Analyst + dashboard design** — leverage untuk visualization showcase pakai Chart.js custom
- Pace: 4-6 jam/minggu sustainable. Marathon, bukan sprint.

# Contributing to OpenPadang

Makasih udah mau lihat-lihat repo ini! 🙌

OpenPadang adalah **civic open data initiative** independent — tujuannya bantu warga, developer, jurnalis, dan akademisi akses data publik Padang & Sumbar dalam format machine-readable, terstandar, dan gratis.

Project ini lagi di **foundation phase**, tapi kontribusi udah welcome di area yang bisa di-eksplor secara paralel.

---

## 📋 Scope Project

OpenPadang fokus ke:
- **Data publik Padang & Sumbar** (terutama yang gak ada API resmi atau formatnya gak machine-readable)
- **Standardisasi** ke format umum: CSV, JSON, GeoJSON, GTFS
- **Open license**: data CC-BY 4.0, code MIT
- **Komplementer** ke layanan resmi Pemkot (Padang Mobile, dll), bukan kompetitor

---

## 🤝 Cara Kontribusi

### 1. Tambah Data Source ke Catalog

Kalau lo tahu sumber data publik Padang/Sumbar yang belum masuk catalog, tambahin info-nya:

1. Cek `docs/04-data-catalog.md` — pastikan source-nya belum ada
2. Open Issue dengan template "New Data Source"
3. Atau langsung PR — tambah entry di catalog dengan format:
   - Source URL
   - Format (CSV/JSON/HTML/PDF)
   - License (CC-BY, public domain, atau ToS)
   - Refresh rate (real-time/daily/monthly/yearly)
   - Contact (kalau ada)
   - Reliability rating (subjective)

### 2. Curate Dataset Baru

Kalau lo mau bantu kurasi dataset:

1. Diskusi di Issue dulu — biar gak overlap
2. Setup branch `feat/dataset-<name>` dari `main`
3. Buat folder `datasets/<dataset-name>/` dengan:
   - `README.md` (schema, source attribution, license)
   - Data files (CSV/JSON/GeoJSON)
   - `metadata.json` (version, license, contributor)
   - ETL script di `scripts/` (kalau perlu)
4. Validate dataset (lihat `docs/02-tech-stack.md` untuk tools)
5. Open PR ke `main`

### 3. Bug Reports & Feature Requests

- **Bug report:** open Issue dengan label `bug`. Include: steps to reproduce, expected vs actual behavior, environment (browser, OS)
- **Feature request:** open Issue dengan label `enhancement`. Jelaskan: use case, manfaat, alternatif yang udah dipertimbangkan

### 4. Code Contributions

Code di `site/` (Astro) atau `app/` (SvelteKit):

1. Fork repo
2. Create branch: `feat/<feature-name>` atau `fix/<bug-name>`
3. Eksekusi sesuai standar:
   - Pakai **pnpm** (bukan npm/yarn)
   - Follow design tokens di `packages/shared/`
   - Mobile-first: target Lighthouse mobile ≥85, touch ≥44px
   - A11y: ARIA, semantic HTML, keyboard nav
4. Test build pass: `pnpm build`
5. Open PR ke `main` dengan deskripsi jelas

### 5. Documentation

Improvement docs di `site/` atau `docs/`:

- Typos, clarifications, contoh tambahan — sangat welcome
- Langsung PR tanpa Issue
- Pakai bahasa Indonesia kalau target audience warga umum, English untuk technical reference

---

## 🛠️ Setup Development Local

Prerequisite:
- **Node.js** ≥20
- **pnpm** ≥9

```bash
# Clone repo
git clone https://github.com/superemem/openpadang.git
cd openpadang

# Install dependencies
pnpm install

# Run docs site (Astro Starlight)
pnpm dev:site
# → http://localhost:4321

# Run app (SvelteKit)
pnpm dev:app
# → http://localhost:5173

# Build all
pnpm build
```

---

## 🎨 Standards

### Code Style

- **TypeScript** strict mode where applicable
- **Prettier + ESLint** (config per project: `site/` dan `app/`)
- **Naming convention:**
  - Folder: `kebab-case`
  - Files: `kebab-case` (Astro), or follow SvelteKit conventions
  - Branch: `feat/`, `fix/`, `docs/`, `chore/` prefix
  - Skill: `<role>-<action>` (e.g., `frontend-component-builder`)

### Commit Messages

Conventional Commits:
- `feat:` — new feature
- `fix:` — bug fix
- `docs:` — documentation
- `chore:` — maintenance, dependencies, config
- `refactor:` — code refactor without behavior change
- `test:` — adding tests
- `style:` — formatting only

### Dataset Standards

- **Format:** prefer CSV (RFC 4180), JSON (with JSON Schema), GeoJSON, GTFS
- **License:** must be compatible with CC-BY 4.0 (or document specifically why not)
- **Schema:** document fields, types, units in dataset README
- **Validation:** run validator before publishing (lihat tools di `docs/02-tech-stack.md`)
- **PII:** wajib di-scan & di-scrub. Public dataset gak boleh leak info pribadi

---

## 📜 License

By contributing, you agree:
- **Code contributions** licensed under **MIT** (lihat `LICENSE`)
- **Data & documentation contributions** licensed under **CC-BY 4.0** (lihat `LICENSE-DATA`)

---

## 🙏 Code of Conduct

OpenPadang adalah project komunitas — kita welcome semua kontributor regardless of background. Sederhana:

- **Be kind.** Diskusi tetap respectful, bahkan kalau gak setuju.
- **Be patient.** Maintainer & contributor sebagian besar relawan dengan bandwidth terbatas.
- **Be honest.** Kasih credit yang seharusnya, jujur soal limitations.
- **No spam, no harassment, no discrimination.** Standard universal.

Kalau ada issue, hubungi maintainer langsung.

---

## 📬 Kontak Maintainer

- **GitHub:** [@superemem](https://github.com/superemem)
- **Issue tracker:** https://github.com/superemem/openpadang/issues

---

## 💡 Insight Buat Kontributor Baru

- **Gak perlu lo expert** — kontribusi kecil (typo fix, tambah 1 data source ke catalog) tetep valuable
- **Diskusi di Issue dulu** kalau scope besar, biar gak waste effort
- **Marathon, bukan sprint** — kontribusi 1 dataset per bulan udah luar biasa
- **Project independent** — kalau eventually lo mau fork & continue versi sendiri, silakan (license-nya MIT + CC-BY)

Makasih udah peduli sama data publik Padang! 🌱

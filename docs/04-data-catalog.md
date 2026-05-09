# OpenPadang — Data Catalog (Inventory)

> Inventory awal sumber data publik Padang & Sumbar yang available untuk kurasi.
> Update file ini saat nemu source baru.
> Last updated: 2026-05-09

---

## Tier 1: API Real-Time + FREE (Langsung Jalan, No Partnership)

### 🌍 OpenStreetMap (OSM) ⭐ TOP PRIORITY

| Field | Value |
|---|---|
| **Source** | https://overpass-turbo.eu/ |
| **Format** | GeoJSON (via Overpass API) |
| **License** | ODbL (Open Database License) |
| **Refresh** | Real-time community-edited |
| **Coverage** | POI, building, road, fasilitas publik Padang |
| **Cost** | FREE |
| **API endpoint** | `https://overpass-api.de/api/interpreter` |
| **Effort to curate** | LOW (1 query → JSON, 30 menit setup) |
| **Status** | 🔲 Not started |

**Use case:**
- POI Padang (resto, masjid, sekolah, halte, ATM, hotel, dll)
- Batas administratif (kelurahan, kecamatan)
- Road network
- Building footprints

### 🌊 BMKG Gempa Real-Time

| Field | Value |
|---|---|
| **Source** | https://data.bmkg.go.id/DataMKG/TEWS/autogempa.json |
| **Format** | JSON |
| **License** | Public domain (gov data) |
| **Refresh** | 6 detik latency |
| **Coverage** | Seluruh Indonesia (filter Sumbar di sisi client) |
| **Cost** | FREE |
| **Effort to curate** | LOW (wrapper API, filter Sumbar) |
| **Status** | 🔲 Not started |

**Other endpoints:**
- `gempaterkini.json` — 15 gempa terakhir
- `gempadirasakan.json` — gempa yang dirasakan warga

### ⚠️ InaTEWS BMKG (Tsunami Early Warning)

| Field | Value |
|---|---|
| **Source** | https://inatews.bmkg.go.id/ |
| **Format** | XML/web scrape |
| **License** | Public |
| **Refresh** | Real-time |
| **Coverage** | Indonesia tsunami warning |
| **Status** | 🔲 Not started |

**Note:** Critical untuk Padang yang tsunami-prone.

### 💧 PetaBencana.id

| Field | Value |
|---|---|
| **Source** | https://petabencana.id |
| **Format** | REST API + GeoJSON |
| **License** | Open-source (CC) |
| **Refresh** | Real-time crowd-source |
| **Coverage** | Multi-bencana, multi-kota Indonesia (filter Sumbar) |
| **Cost** | FREE |
| **Status** | 🔲 Not started |

### 🌫️ OpenWeatherMap (Cuaca + Air Quality)

| Field | Value |
|---|---|
| **Source** | https://openweathermap.org/api |
| **Format** | JSON REST |
| **License** | Free tier API |
| **Refresh** | 1 jam (free tier) |
| **Coverage** | Global, support Padang |
| **Cost** | Free tier (1000 calls/day) |
| **Status** | 🔲 Not started |

### 🌤️ BMKG Cuaca Prakiraan

| Field | Value |
|---|---|
| **Source** | https://api.bmkg.go.id/publik/prakiraan-cuaca?adm4=<kode> |
| **Format** | JSON |
| **License** | Public |
| **Refresh** | 6 jam |
| **Coverage** | Per kelurahan dengan kode adm4 |
| **Status** | 🔲 Not started |

---

## Tier 2: Stale Tapi Reliable (Manual Scrape, Update Periodic)

### 📊 BPS Kota Padang ⭐ HIGH PRIORITY

| Field | Value |
|---|---|
| **Source** | https://padangkota.bps.go.id/ |
| **Format** | Web table, PDF publikasi |
| **License** | Government open data (umumnya bebas atribusi) |
| **Refresh** | Tahunan (publikasi resmi) |
| **Coverage** | Demografi, ekonomi, ketenagakerjaan, kemiskinan |
| **API?** | ❌ Belum ada API resmi, perlu scrape |
| **Effort to curate** | MEDIUM (scrape sekali, update tahunan) |
| **Status** | 🔲 Not started |

**Datasets yang prioritas:**
- Penduduk per kecamatan (time-series 2010-2026)
- Distribusi umur per kecamatan
- Sex ratio
- Kepadatan
- Statistik ekonomi

### 📊 BPS Sumatera Barat

| Field | Value |
|---|---|
| **Source** | https://sumbar.bps.go.id/ |
| **Format** | Web table, PDF |
| **License** | Government open data |
| **Refresh** | Tahunan |
| **Coverage** | Sumbar provinsi-level |
| **Status** | 🔲 Not started |

### 🏛️ Geoportal Sumbar

| Field | Value |
|---|---|
| **Source** | https://geoportal.sumbarprov.go.id/ |
| **Format** | Shapefile, GeoJSON, WMS (GeoNode) |
| **License** | Cek per dataset |
| **Coverage** | Tata ruang, batas administratif, mungkin layer banjir/evakuasi |
| **Status** | 🔲 Not started — perlu register account |

### 🏛️ Portal Data Sumbar

| Field | Value |
|---|---|
| **Source** | https://data.sumbarprov.go.id/ |
| **Format** | TBD (perlu eksplor manual) |
| **License** | TBD |
| **Status** | 🔲 Not explored |

### 🇮🇩 Satu Data Indonesia

| Field | Value |
|---|---|
| **Source** | https://data.go.id/ |
| **Format** | CSV/JSON |
| **License** | Open data umumnya |
| **Coverage** | Filter "Sumatera Barat" / "Padang" |
| **Status** | 🔲 Not explored |

### 🏖️ Jadesta Sumbar (Desa Wisata)

| Field | Value |
|---|---|
| **Source** | https://sumbar.jadesta.com/ |
| **Format** | Web data (perlu scrape) |
| **Coverage** | Desa wisata Sumbar |
| **Status** | 🔲 Not started |

### 🏖️ Satu Data Kemenparekraf

| Field | Value |
|---|---|
| **Source** | https://satudata.kemenparekraf.go.id/ |
| **Format** | CSV/web table |
| **Coverage** | Tourism + ekonomi kreatif Sumbar/Padang |
| **Status** | 🔲 Not started |

---

## Tier 3: Butuh Partnership / Permintaan Resmi

### 🚌 Trans Padang GPS Real-Time

| Field | Value |
|---|---|
| **Source** | Padang Mobile / Dishub Kota Padang (internal) |
| **Format** | Unknown (mungkin GTFS-realtime atau proprietary) |
| **Status** | 🔲 Need partnership |
| **Approach** | Surat permohonan ke Diskominfo / Dishub |

### 🆘 Data Shelter ZMS (Zona Aman Shelter Tsunami) 

| Field | Value |
|---|---|
| **Source** | BPBD Sumbar / Pemkot Padang |
| **Format** | Belum publik dalam machine-readable |
| **Status** | 🔲 Need partnership |

### 🏥 Faskes & Puskesmas Padang

| Field | Value |
|---|---|
| **Source** | Dinkes Padang / Kemenkes SatuSehat |
| **Format** | TBD |
| **Status** | 🔲 Not explored |

### 🎓 Education Data (Dapodik)

| Field | Value |
|---|---|
| **Source** | Kemdikbud Dapodik |
| **Format** | Limited public, mostly aggregated |
| **Status** | 🔲 Not explored |

### 🗳️ KPU (Election Data)

| Field | Value |
|---|---|
| **Source** | https://data.kpu.go.id/ |
| **Format** | Web data |
| **Coverage** | Pilkada/Pemilu Sumbar (Pilgub, Pilwako) |
| **Status** | 🔲 Not explored |

---

## Hidden Gems (Belum Banyak Di-explore)

### 📰 Media Lokal

| Source | Coverage |
|---|---|
| Padang.go.id berita | Berita resmi Pemkot |
| InfoSumbar | Berita Sumbar |
| Padek.jawapos.com | Berita Padang Ekspres |
| TribunPadang | Berita Tribun |

### 🎓 Universitas (Skripsi & Riset)

| Source | Coverage |
|---|---|
| UNAND eskripsi | Skripsi mahasiswa UNAND, ada beberapa tentang Trans Padang, banjir, dll |
| UNP repository | Skripsi UNP |

---

## Total Inventory Summary

| Tier | Sumber | Effort to Onboard |
|---|---|---|
| **Tier 1 (Free + API)** | 6 sumber | LOW — bisa onboarded dalam 1-2 weekend |
| **Tier 2 (Scrape)** | 7 sumber | MEDIUM — per source 1-3 hari |
| **Tier 3 (Partnership)** | 5 sumber | HIGH — depend on Pemkot response |
| **Hidden Gems** | 6 sumber | VARIES |
| **TOTAL** | **24+ sumber** | |

## Priority Onboarding Queue (Rekomendasi)

Berdasarkan effort vs value:

1. **OSM POI Padang** (Tier 1, low effort, high value) — Phase 2 starter
2. **BMKG real-time wrapper** (Tier 1, low effort, daily relevance) — Phase 2 atau 3
3. **PetaBencana.id integration** (Tier 1, low effort, civic impact) — Phase 2 atau 3
4. **BPS Padang demographic** (Tier 2, medium effort, data analyst showcase) — Phase 2-3
5. **Geoportal Sumbar exploration** (Tier 2, unknown content) — Phase 3
6. **Trans Padang GTFS community-maintained** (Tier 2, high effort) — Phase 5+

---

## Maintenance Note

- **Update tabel saat nemu source baru** — tambah row dengan format konsisten
- **Update status** saat onboard dataset (🔲 → ✅ + link ke folder dataset)
- **Cek refresh rate** per source secara berkala (apakah masih aktif update)

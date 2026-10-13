# ELIF DEV - Company Profile (Single Page Application)

Website resmi Company Profile Agency **ELIF DEV** yang dibangun dengan arsitektur Single Page Application (SPA / One-Page), navigasi *smooth scroll*, dan tema visual **Pure Dark Monochrome** berkelas futuristik.

---

## 🚀 Fitur & Keunggulan Utama

- **Single Page Application (SPA) & Smooth Scroll**: Navigasi presisi dengan active section spy pada Navbar sticky glassmorphism.
- **Pure Dark Monochrome Theme**: Nuansa hitam pekat (`#050507`, `zinc-950`), aksen abu-abu elegan, teks kontras tinggi (`zinc-100`), dan border minimalis (`zinc-800`).
- **Pendekatan CTA WhatsApp Elegan**:
  - Draf otomatis: *"Halo ELIF DEV, saya tertarik untuk mendiskusikan project saya."*
  - Tombol WhatsApp proporsional di Navbar, Hero, Kartu Layanan, Showcase Modal, dan Footer.
  - Floating WhatsApp launcher yang responsif dan tidak mengganggu.
  - Nomor resmi: `+62 851-4750-1617`.
- **Layanan & Infrastruktur Terintegrasi**:
  - **Jasa Utama**: Pembuatan Website, Upgrade Website, Aplikasi Mobile, CS AI, Chatbot AI, Custom CMS, API/Backend.
  - **Layanan Infrastruktur**: Domain (.com, .id, dll), Hosting NVMe Kinerja Tinggi, Server / VPS Cloud Terkelola.
- **3 Pilar Keunggulan**: Harga Lebih Terjangkau, Fleksibilitas Kustomisasi Luas, dan Garansi Layanan 100%.
- **Showcase Portofolio Interaktif**: Filter kategori (Semua, Web, Mobile, AI, Enterprise) dengan modal rincian dampak dan arsitektur teknis.
- **Testimonial & FAQ Accordion**: Ulasan autentik berbintang serta accordion FAQ interaktif.
- **SEO & Search Engine Optimized**:
  - Open Graph, Twitter Cards, Semantic HTML5 (`header`, `main`, `section`, `footer`).
  - Schema.org JSON-LD structured data (`ProfessionalService`, `Organization`, `OfferCatalog`).

---

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Library**: React 19, TypeScript
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React + Custom Brand SVGs
- **Fonts**: Geist Sans & Geist Mono

---

## 📁 Struktur Direktori

```text
├── app/
│   ├── globals.css          # Tema Pure Dark Monochrome, background tech grid, scrollbar
│   ├── layout.tsx           # SEO metadata, font loader, OpenGraph, JSON-LD Schema
│   └── page.tsx             # Entry page (SPA modular layout)
├── components/
│   ├── Navbar.tsx           # Sticky glassmorphic navbar, active section spy, mobile drawer
│   ├── Hero.tsx             # High-tech hero, interactive terminal code preview, metrics
│   ├── Services.tsx         # Grid kartu Jasa Utama & Infrastruktur, filter tab, direct CTA
│   ├── WhyChooseUs.tsx      # 3 Pilar keunggulan + Garansi 100% banner
│   ├── Portfolio.tsx        # Grid portofolio dengan filter & detail modal
│   ├── Testimonials.tsx     # Kartu review klien & rating bintang
│   ├── Faq.tsx              # Accordion pertanyaan umum
│   ├── ContactFooter.tsx    # Direct WhatsApp launcher, kontak, sosial media, copyright
│   ├── FloatingWhatsApp.tsx # Floating quick contact button
│   └── JsonLd.tsx           # Schema.org ProfessionalService
├── data/
│   └── site-data.ts         # Sumber data terpusat (layanan, proyek, kontak, WhatsApp link)
├── lib/
│   └── utils.ts             # Helper fungsi tailwind class merger (cn)
└── next.config.ts           # Konfigurasi Next.js & remote image patterns (ImageKit & Unsplash)
```

---

## 🏃 Menjalankan Project

### 1. Mode Development
```bash
npm run dev
```
Buka browser di `http://localhost:3000`.

### 2. Build untuk Production
```bash
npm run build
```

### 3. Menjalankan Server Production
```bash
npm run start
```

---

## ⚙️ Kustomisasi Data

Semua data profil usaha, layanan, portofolio, FAQ, dan sosial media dapat diperbarui dengan mudah melalui satu file:
👉 **[`data/site-data.ts`](file:///C:/Users/user/Documents/My-projek/Elif%20dev/data/site-data.ts)**

- **Nomor WhatsApp**: Ubah `SITE_CONFIG.whatsappNumber` dan `SITE_CONFIG.whatsappCleanNumber`
- **Email & Sosial Media**: Ubah `SITE_CONFIG.email` dan `SITE_CONFIG.socials`
- **Portofolio Proyek**: Tambah/edit data di array `PORTFOLIO_PROJECTS`
- **Daftar Layanan**: Tambah/edit data di array `CORE_SERVICES` atau `INFRASTRUCTURE_SERVICES`

---

© 2026 **ELIF DEV**. All rights reserved.

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  category: "core" | "infrastructure";
  shortDesc: string;
  description: string;
  iconName: string;
  features: string[];
  popular?: boolean;
  ctaText?: string;
}

export interface PillarItem {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  points: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: "Web" | "Mobile" | "AI" | "Enterprise";
  categoryLabel: string;
  description: string;
  tags: string[];
  image: string;
  result: string;
  featured?: boolean;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  avatarText: string;
  content: string;
  rating: number;
  highlight: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

export const SITE_CONFIG = {
  name: "ELIF DEV",
  tagline: "High-Performance Software Engineering & AI Integration",
  description:
    "ELIF DEV adalah tech agency spesialis software engineering modern, pembuatan website performa tinggi, aplikasi mobile, infrastruktur server, dan integrasi kecerdasan buatan (AI) untuk mengakselerasi pertumbuhan bisnis Anda.",
  logoUrl: "https://raw.githubusercontent.com/paraccode-byte/CDN_image/refs/heads/main/ELIF%20(2).png",
  whatsappNumber: "+62 851-4750-1617",
  whatsappCleanNumber: "6285147501617",
  defaultWhatsAppMessage:
    "Halo ELIF DEV, saya tertarik untuk mendiskusikan project saya.",
  email: "elif.web@gmail.com",
  socials: {
    instagram: "https://instagram.com/elif.web.dev?psln=MXd1ZWxqNmNsd20w",
    tiktok: "https://www.tiktok.com/@elif",
    facebook: "https://www.facebook.com/elif",
  },
  meta: {
    title: "ELIF DEV | Software Engineering, Web Development & AI Agency",
    description:
      "ELIF DEV menyediakan jasa pembuatan website profesional, upgrade website, mobile app, chatbot AI, customer service AI, custom CMS, API backend, dan infrastruktur cloud VPS terpercaya.",
    url: "https://elif.my.id",
    keywords: [
      "ELIF DEV",
      "Software House Indonesia",
      "Jasa Pembuatan Website",
      "Web Developer Profesional",
      "Chatbot AI",
      "Customer Service AI",
      "Aplikasi Mobile Android iOS",
      "Custom CMS",
      "Backend API",
      "Hosting dan VPS",
      "Next.js Developer",
    ],
  },
};

export function getWhatsAppUrl(customMessage?: string): string {
  const message = customMessage || SITE_CONFIG.defaultWhatsAppMessage;
  return `https://wa.me/${SITE_CONFIG.whatsappCleanNumber}?text=${encodeURIComponent(
    message
  )}`;
}

export const NAV_LINKS: NavItem[] = [
  { label: "Layanan", href: "#layanan" },
  { label: "Keunggulan", href: "#keunggulan" },
  { label: "Portofolio", href: "#portofolio" },
  { label: "Testimonial", href: "#testimonial" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontak", href: "#kontak" },
];

export const CORE_SERVICES: ServiceItem[] = [
  {
    id: "web-dev",
    title: "Pembuatan Website",
    category: "core",
    shortDesc:
      "Website modern berkecepatan tinggi, SEO-ready, responsive, dan dibangun dengan teknologi terdepan.",
    description:
      "Kami merancang website profesional dari company profile elegan hingga platform web interaktif dengan arsitektur modern (Next.js, Tailwind CSS) yang memuat secepat kilat dan siap menduduki halaman satu Google.",
    iconName: "Globe",
    features: [
      "Performa 95+ Google Lighthouse",
      "Desain Eksklusif & 100% Responsif",
      "SEO Friendly & Mobile First Indexing",
      "Proteksi Keamanan SSL & Anti-DDoS",
    ],
    popular: true,
  },
  {
    id: "web-upgrade",
    title: "Upgrade Website",
    category: "core",
    shortDesc:
      "Modernisasi sistem lama, refactoring kode, peningkatan kecepatan, dan peremajaan UI/UX.",
    description:
      "Punya website lama yang lambat, rentan, atau tampilan ketinggalan zaman? Kami merekayasa ulang kode, memigrasikan database, dan menyulap website Anda menjadi aset digital mutakhir.",
    iconName: "Sparkles",
    features: [
      "Speed Boost & Core Web Vitals Optimization",
      "Redesain UI/UX Kontemporer",
      "Migrasi Platform & Pembaruan Framework",
      "Audit Keamanan Menyeluruh",
    ],
  },
  {
    id: "mobile-dev",
    title: "Pembuatan Aplikasi Mobile",
    category: "core",
    shortDesc:
      "Aplikasi mobile multi-platform (Android & iOS) dengan pengalaman pengguna native yang mulus.",
    description:
      "Kembangkan aplikasi mobile berkinerja tinggi yang siap tayang di Google Play Store dan Apple App Store. Integrasi backend real-time, offline support, dan antarmuka intuitif.",
    iconName: "Smartphone",
    features: [
      "Single Codebase (React Native / Flutter)",
      "Push Notification & Real-time Sync",
      "Integrasi Payment Gateway & Biometric Auth",
      "Publishing Support ke Play Store & App Store",
    ],
  },
  {
    id: "ai-cs",
    title: "Customer Service Berbasis AI",
    category: "core",
    shortDesc:
      "Sistem layanan pelanggan otomatis 24/7 dengan respons kontekstual layaknya manusia.",
    description:
      "Tingkatkan kepuasan pelanggan tanpa menambah beban kerja tim. AI Customer Service kami memahami konteks pertanyaan, melayani ribuan pesan serentak, dan dapat mengambil tindakan terarah sesuai SOP bisnis.",
    iconName: "Bot",
    features: [
      "Dukungan WhatsApp, Web Chat, & Telegram",
      "Pemahaman Bahasa Alami (NLP Bahasa Indonesia)",
      "Smart Escalation ke Human Agent",
      "Analitik Sentimen & Riwayat Percakapan",
    ],
    popular: true,
  },
  {
    id: "ai-chatbot",
    title: "Chatbot AI Kustom",
    category: "core",
    shortDesc:
      "Chatbot kecerdasan buatan terlatih spesifik dengan basis data dan dokumen internal perusahaan Anda.",
    description:
      "Manfaatkan teknologi LLM mutakhir yang dilatih secara privat (Retrieval-Augmented Generation/RAG) menggunakan katalog produk, regulasi internal, manual teknis, atau inventaris bisnis Anda secara aman.",
    iconName: "Cpu",
    features: [
      "Integrasi Custom Knowledge Base (RAG)",
      "Zero Halusinasi dengan Guardrails Ketat",
      "Dukungan Multi-bahasa Otomatis",
      "Dashboard Pemantauan Kinerja Chatbot",
    ],
  },
  {
    id: "custom-cms",
    title: "Pembuatan CMS Custom",
    category: "core",
    shortDesc:
      "Panel kontrol manajemen konten yang dirancang khusus sesuai alur kerja operasional bisnis Anda.",
    description:
      "Tinggalkan CMS kaku yang membingungkan. Kami membangun dashboard admin kustom yang ringkas, aman, cepat, dan mudah dipahami bahkan oleh staf non-teknis sekalipun.",
    iconName: "LayoutDashboard",
    features: [
      "Role-Based Access Control (Hak Akses Berjenjang)",
      "Media Manager Cepat & Optimal",
      "Export/Import Data Laporan (Excel/PDF)",
      "Alur Publikasi Sesuai Kebutuhan Bisnis",
    ],
  },
  {
    id: "api-backend",
    title: "Pembuatan API / Backend",
    category: "core",
    shortDesc:
      "Arsitektur backend scalable, RESTful & GraphQL API yang tangguh, aman, dan berkapasitas tinggi.",
    description:
      "Pondasi sistem yang kuat untuk menopang jutaan permintaan data harian. Dilengkapi sistem autentikasi bertingkat, enkripsi data, caching efisien, dan dokumentasi API terstandarisasi.",
    iconName: "ServerCrash",
    features: [
      "High-Throughput Microservices / Monolith",
      "Database Optimization (PostgreSQL, Redis)",
      "Dokumentasi Interaktif (Swagger / Postman)",
      "Audit Keamanan OWASP Top 10",
    ],
  },
];

export const INFRASTRUCTURE_SERVICES: ServiceItem[] = [
  {
    id: "infra-domain",
    title: "Domain Resmi (.com, .id, dll)",
    category: "infrastructure",
    shortDesc:
      "Registrasi nama domain premium dan konfigurasi DNS terkelola dengan perlindungan privasi WHOIS.",
    description:
      "Amankan identitas digital brand Anda dengan domain pilihan (.com, .id, .co.id, .tech, dll). Kami menangani setup DNS records, Cloudflare CDN, email routing, dan perlindungan keamanan nama domain Anda.",
    iconName: "AtSign",
    features: [
      "Registrasi Ekstensi Global & Domestik",
      "Konfigurasi DNS Cloudflare Terproteksi",
      "WHOIS Privacy Protection",
      "Automated Renewal Reminders",
    ],
  },
  {
    id: "infra-hosting",
    title: "Hosting Website Kinerja Tinggi",
    category: "infrastructure",
    shortDesc:
      "Penyimpanan web NVMe SSD super cepat dengan jaminan uptime 99.9% dan dukungan teknis terdepan.",
    description:
      "Hosting yang dioptimalkan khusus untuk arsitektur web modern. Nikmati kecepatan loading maksimum dengan server LiteSpeed, caching berlapis, SSL otomatis, dan backup data harian tanpa kompromi.",
    iconName: "HardDrive",
    features: [
      "Enterprise NVMe Storage",
      "Sertifikat SSL Let's Encrypt Gratis",
      "Daily Automated Backup & Instant Restore",
      "DDoS Mitigation & Web Application Firewall",
    ],
  },
  {
    id: "infra-vps",
    title: "Server / Cloud VPS Terkelola",
    category: "infrastructure",
    shortDesc:
      "Infrastruktur Virtual Private Server dedicated untuk kebutuhan aplikasi skala besar dan database intensif.",
    description:
      "Kendalikan performa komputasi penuh dengan server cloud terdedikasi. Kami mengonfigurasi arsitektur Docker container, Linux server hardening, load balancer, dan monitoring metrik 24/7.",
    iconName: "Server",
    features: [
      "Spesifikasi CPU & RAM Terdedikasi Penuh",
      "Setup Docker, Nginx, CI/CD Deployment",
      "Linux Server Hardening & Firewall Setup",
      "Monitoring Metrik & Alert Real-time",
    ],
    popular: true,
  },
];

export const PILLARS: PillarItem[] = [
  {
    number: "01",
    title: "Harga Lebih Terjangkau",
    subtitle: "Efisiensi Maksimal Tanpa Biaya Tersembunyi",
    description:
      "Kami menerapkan struktur pembiayaan yang transparan, rasional, dan dirancang khusus agar bisnis dari level UKM hingga enterprise mendapatkan laba atas investasi (ROI) teknologi tertinggi.",
    iconName: "BadgePercent",
    points: [
      "RAB transparan sejak awal tanpa biaya siluman",
      "Pilihan paket fleksibel sesuai fase perkembangan bisnis",
      "Solusi optimal yang disesuaikan dengan anggaran Anda",
      "Tidak ada biaya lisensi tersembunyi yang memberatkan",
    ],
  },
  {
    number: "02",
    title: "Fleksibilitas Kustomisasi Luas",
    subtitle: "Kebebasan Penuh Menyesuaikan Kebutuhan Sistem",
    description:
      "Kami tidak mengurung Anda dalam template kaku atau ekosistem tertutup. Anda memiliki kebebasan menentukan fitur, arsitektur, workflow bisnis, dan integrasi pihak ketiga sesuai visi unik Anda.",
    iconName: "Sliders",
    points: [
      "Pengembangan modular yang mudah diperluas di masa depan",
      "Source code 100% menjadi milik klien tanpa penguncian vendor",
      "Integrasi mulus ke API eksternal, payment gateway, dan AI",
      "Antarmuka pengguna (UI/UX) dirancang eksklusif untuk brand Anda",
    ],
  },
  {
    number: "03",
    title: "Garansi Layanan & Jasa 100%",
    subtitle: "Komitmen Kepuasan dan Perlindungan Purna Jual",
    description:
      "Setiap baris kode yang kami rilis dilindungi oleh garansi resmi. Jika terjadi kendala atau ketidaksesuaian fungsionalitas, tim engineering kami siap memperbaiki tanpa biaya tambahan.",
    iconName: "ShieldCheck",
    points: [
      "Garansi perbaikan bug & error gratis pasca-peluncuran",
      "Uji coba menyeluruh (Quality Assurance) sebelum serah terima",
      "SLA respons cepat untuk penanganan kendala darurat",
      "Pendampingan teknis dan pelatihan operasional tim",
    ],
  },
];

export const PORTFOLIO_PROJECTS: ProjectItem[] = [
  {
    id: "proj-1",
    title: "OmniCore AI Customer Support Agent",
    category: "AI",
    categoryLabel: "AI & Automation",
    description:
      "Sistem agen CS cerdas terintegrasi WhatsApp & Web dengan Retrieval-Augmented Generation (RAG) yang memangkas waktu tunggu pelanggan hingga 85%.",
    tags: ["Next.js", "Python FastAPI", "OpenAI / Claude", "WhatsApp API", "Vector DB"],
    image:
      "https://ik.imagekit.io/jfqsn6cwe/Image_in_web/626941663093e134307fbecab664ec61.jpg",
    result: "Penurunan waktu respons pelanggan dari 25 menit menjadi 8 detik",
    featured: true,
  },
  {
    id: "proj-2",
    title: "Aura Logistics Fleet Management Platform",
    category: "Enterprise",
    categoryLabel: "Enterprise & CMS",
    description:
      "Platform dashboard operasional logistik nasional dengan pelacakan armada real-time, manajemen manifest digital, dan analitik rute pintar.",
    tags: ["Next.js 15", "PostgreSQL", "Tailwind CSS", "WebSockets", "Docker VPS"],
    image:
      "https://ik.imagekit.io/jfqsn6cwe/Image_in_web/293fb72205314a6c8b1a71493a0cea21.jpg",
    result: "Efisiensi pengiriman meningkat 32% pada 500+ titik distribusi",
    featured: true,
  },
  {
    id: "proj-3",
    title: "Velox Telemedicine & Clinic Management",
    category: "Mobile",
    categoryLabel: "Mobile & Web App",
    description:
      "Aplikasi konsultasi dokter online multi-platform lengkap dengan rekam medis elektronik, jadwal temu, dan integrasi apotek mitra.",
    tags: ["React Native", "Next.js", "WebRTC", "HIPAA-Compliant Security", "Cloud VPS"],
    image:
      "https://ik.imagekit.io/jfqsn6cwe/Image_in_web/247d0658edfab70044dd781353df27f9.jpg",
    result: "40.000+ konsultasi online sukses dengan rating aplikasi 4.9/5",
    featured: true,
  },
  {
    id: "proj-4",
    title: "NexStore Luxury Commerce with AI Search",
    category: "Web",
    categoryLabel: "High-Performance Web",
    description:
      "E-commerce high-end dengan fitur visual semantic search AI, checkout multi-kurir instan, dan skor performa Google Lighthouse 99.",
    tags: ["Next.js", "Tailwind CSS", "Stripe & Midtrans", "Algolia AI", "Redis Cache"],
    image:
      "https://ik.imagekit.io/jfqsn6cwe/Image_in_web/45b2ad9e192e5047f2fe6c96ffcc9ca4.jpg",
    result: "Tingkat konversi penjualan melonjak hingga 45% dalam 3 bulan",
  },
  {
    id: "proj-5",
    title: "Synthetix Document AI Analyzer",
    category: "AI",
    categoryLabel: "AI & Automation",
    description:
      "Platform automasi ekstraksi dokumen legal dan kontrak keuangan dengan pemrosesan OCR cerdas dan ringkasan eksekutif instan.",
    tags: ["Python", "Next.js", "Llama 3 / Mistral", "Tailwind CSS", "FastAPI"],
    image:
      "https://ik.imagekit.io/jfqsn6cwe/Image_in_web/b8360d27e65d3ed943fe6d1a6bb95273.jpg",
    result: "Memangkas waktu audit dokumen manual dari 4 hari menjadi 15 menit",
  },
  {
    id: "proj-6",
    title: "PulseFlow Custom Headless CMS",
    category: "Enterprise",
    categoryLabel: "Custom CMS & Backend",
    description:
      "Content Management System headless ultra-cepat untuk jaringan portal berita 10+ subdomain dengan jutaan pengunjung bulanan.",
    tags: ["Node.js", "PostgreSQL", "Next.js", "Cloudflare Edge", "GraphQL"],
    image:
      "https://ik.imagekit.io/jfqsn6cwe/Image_in_web/725104b54b751c2885cf2c7b542ed5b5.jpg",
    result: "Uptime 99.99% dengan kapasitas menangani lonjakan 10.000 req/detik",
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "testi-1",
    name: "Hendrawan Putra",
    role: "Chief Technology Officer",
    company: "Sinergi Logistik Nusantara",
    avatarText: "HP",
    rating: 5,
    highlight: "Kualitas arsitektur dan kecepatan eksekusi luar biasa.",
    content:
      "ELIF DEV memegang teguh komitmen pengerjaan. Proyek platform armada kami yang cukup rumit berhasil diselesaikan tepat waktu dengan standar arsitektur kelas dunia. Komunikasi tim sangat responsif dan transparan di setiap sprint pengerjaan.",
  },
  {
    id: "testi-2",
    name: "Clarissa Wijaya",
    role: "Founder & Creative Director",
    company: "Aura Brand Atelier",
    avatarText: "CW",
    rating: 5,
    highlight: "Website kami kini super cepat dan konversi naik drastis.",
    content:
      "Sebelumnya website lama kami sangat lambat dan sering down saat ada traffic tinggi. Setelah ditangani oleh tim ELIF DEV dengan Next.js modern, skor kecepatan website langsung 98 dan pelanggan memuji tampilan visual monokrom yang elegan.",
  },
  {
    id: "testi-3",
    name: "Dr. Adrian Satria",
    role: "Managing Director",
    company: "Medika Telehealth Asia",
    avatarText: "AS",
    rating: 5,
    highlight: "Integrasi AI Customer Service sangat akurat & minim revisi.",
    content:
      "Implementasi bot WhatsApp AI dari ELIF DEV benar-benar melampaui ekspektasi. Pasien bisa bertanya informasi poli dan tarif selama 24 jam dengan bahasa yang luwes. Garansi layanan mereka terbukti nyata saat kami butuh penyesuaian regulasi baru.",
  },
  {
    id: "testi-4",
    name: "Bambang Trihatmojo",
    role: "Head of Operations",
    company: "Prima Retail Corpora",
    avatarText: "BT",
    rating: 5,
    highlight: "Fleksibilitas kustomisasi paling memuaskan yang pernah kami temui.",
    content:
      "Banyak software house menawarkan solusi template yang dipaksakan. ELIF DEV berbeda: mereka benar-benar mendengar alur kerja bisnis kami dan membangun custom CMS yang sangat ramah pengguna untuk ratusan staf kami.",
  },
];

export const FAQS: FaqItem[] = [
  {
    question: "Berapa lama estimasi waktu pengerjaan sebuah proyek di ELIF DEV?",
    answer:
      "Durasi pengerjaan bergantung pada kompleksitas dan cakupan proyek. Untuk website profil perusahaan atau landing page biasanya memakan waktu 7 hingga 14 hari kerja. Untuk sistem kustom yang lebih kompleks seperti aplikasi mobile, integrasi AI, atau CMS enterprise, waktu pengerjaan berkisar antara 3 hingga 8 minggu kerja. Jadwal timeline terinci akan disepakati bersama sebelum kontrak dimulai.",
    category: "Proses & Waktu",
  },
  {
    question: "Bagaimana sistem Garansi Layanan & Jasa 100% yang diberikan?",
    answer:
      "Kami memberikan garansi purna jual resmi hingga 3-6 bulan (dapat diperpanjang sesuai paket) setelah proyek dinyatakan selesai dan tayang. Garansi ini mencakup perbaikan bug fungsional, perbaikan celah keamanan, dan monitoring performa tanpa ada pungutan biaya tambahan. Kepuasan Anda adalah prioritas mutlak kami.",
    category: "Garansi",
  },
  {
    question: "Apakah saya memiliki kendali penuh atas kode sumber (source code) dan data?",
    answer:
      "Ya, 100%! Seluruh kode sumber, aset desain, konfigurasi database, dan hak kekayaan intelektual proyek sepenuhnya menjadi milik Anda. Kami tidak menerapkan sistem lock-in atau biaya sewa tersembunyi yang menahan kode Anda.",
    category: "Kepemilikan",
  },
  {
    question: "Bisakah sistem diintegrasikan dengan AI kustom atau sistem yang sudah ada?",
    answer:
      "Tentu saja. Kami mengkhususkan diri dalam arsitektur modern yang mudah dihubungkan dengan berbagai sistem pihak ketiga melalui REST API, GraphQL, webhooks, database legacy, hingga integrasi model AI LLM privat (RAG) yang dilatih khusus dengan data SOP bisnis Anda.",
    category: "Teknologi & AI",
  },
  {
    question: "Bagaimana alur kerja dan komunikasi dari awal hingga proyek dirilis?",
    answer:
      "Alur kerja kami mengadopsi metodologi Agile yang transparan: (1) Konsultasi & Analisis Kebutuhan, (2) Penyusunan Spesifikasi Teknis & Desain Prototipe, (3) Tahap Development dengan laporan berkala, (4) Pengujian Kualitas (QA) & Uji Coba Klien, dan (5) Peluncuran resmi serta pendampingan masa garansi. Anda dapat berdiskusi langsung melalui channel WhatsApp atau pertemuan terjadwal.",
    category: "Alur Kerja",
  },
  {
    question: "Apakah ELIF DEV juga menyediakan bantuan pengelolaan server dan infrastruktur domain?",
    answer:
      "Ya, kami menyediakan solusi end-to-end lengkap. Mulai dari pendaftaran domain resmi, setup hosting NVMe cepat, instalasi Cloud VPS terkelola, konfigurasi SSL, hingga automasi backup berkala. Anda tidak perlu pusing memikirkan hal-hal teknis server.",
    category: "Infrastruktur",
  },
];

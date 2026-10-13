"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  MessageSquare,
  ArrowUp,
  ExternalLink,
  Send,
  CheckCircle2,
  Phone,
} from "lucide-react";
import { NAV_LINKS, SITE_CONFIG, getWhatsAppUrl } from "@/data/site-data";

// Custom Brand Icons for Social Media
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

// Custom TikTok icon since Lucide does not include tiktok directly in standard export
function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.49 6.27 6.27 0 0 0 1.87-4.48V8.75a8.28 8.28 0 0 0 4.75 1.5v-3.56a4.83 4.83 0 0 1-.85 0Z" />
    </svg>
  );
}

export default function ContactFooter() {
  const [userNote, setUserNote] = useState("");

  const handleCustomWaSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const finalMsg = userNote.trim()
      ? `Halo ELIF DEV, saya tertarik untuk mendiskusikan project saya: "${userNote.trim()}"`
      : SITE_CONFIG.defaultWhatsAppMessage;
    window.open(getWhatsAppUrl(finalMsg), "_blank", "noopener,noreferrer");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="kontak" className="relative border-t border-zinc-900 bg-black pt-20 pb-12 scroll-mt-20">
      {/* Background Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-40 bg-zinc-800/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main CTA & Discussion Box */}
        <div className="relative rounded-3xl bg-zinc-950 border border-zinc-800/90 p-8 sm:p-12 mb-20 shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden">
          {/* Subtle line glow */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-500 to-transparent opacity-50" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-mono mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                MULAI KOLABORASI
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                Siap Mewujudkan Visi Digital &amp; AI Bisnis Anda?
              </h2>
              <p className="mt-4 text-base text-zinc-400 font-light leading-relaxed max-w-xl">
                Diskusikan kebutuhan proyek Anda secara santai dan langsung bersama tech lead ELIF DEV.
                Kami siap memberikan rekomendasi arsitektur terbaik dan estimasi biaya yang transparan.
              </p>

              {/* Trust highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8">
                <div className="flex items-center gap-2.5 text-xs text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Konsultasi Teknis &amp; Estimasi Gratis</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Respon Cepat Tim Engineering</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Garansi Resmi &amp; Tanpa Biaya Siluman</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>100% Hak Milik Source Code</span>
                </div>
              </div>
            </div>

            {/* Right Interactive WhatsApp Form Card */}
            <div className="lg:col-span-5 bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 sm:p-7 backdrop-blur-md">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-700 flex items-center justify-center text-white">
                  <MessageSquare className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">
                    Direct WhatsApp Launcher
                  </h3>
                  <p className="text-xs text-zinc-400 font-mono">
                    {SITE_CONFIG.whatsappNumber}
                  </p>
                </div>
              </div>

              <form onSubmit={handleCustomWaSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="project-note"
                    className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2"
                  >
                    Ceritakan Singkat Rencana Project (Opsional):
                  </label>
                  <textarea
                    id="project-note"
                    rows={3}
                    value={userNote}
                    onChange={(e) => setUserNote(e.target.value)}
                    placeholder="Contoh: Saya butuh website company profile + AI chatbot untuk klinik kesehatan saya..."
                    className="w-full rounded-xl bg-zinc-950 border border-zinc-800 p-3 text-xs text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2.5 py-3 px-5 rounded-xl text-xs font-bold text-zinc-950 bg-white hover:bg-zinc-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:scale-[1.01] active:scale-[0.99]"
                >
                  <Send className="w-3.5 h-3.5 text-zinc-950" />
                  <span>Kirim Pesan via WhatsApp</span>
                </button>

                <p className="text-[11px] text-zinc-500 text-center font-light leading-tight">
                  Format draf pesan otomatis: &ldquo;Halo ELIF DEV, saya tertarik untuk mendiskusikan project saya.&rdquo;
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* Footer Links & Contact Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-zinc-900">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-700/60 p-1 flex items-center justify-center overflow-hidden">
                <Image
                  src={SITE_CONFIG.logoUrl}
                  alt="ELIF DEV Logo"
                  width={32}
                  height={32}
                  className="object-contain w-full h-full"
                />
              </div>
              <span className="font-mono text-lg font-bold tracking-wider text-white">
                ELIF<span className="text-zinc-400 font-light">DEV</span>
              </span>
            </div>

            <p className="text-xs text-zinc-400 font-light leading-relaxed max-w-sm">
              Agensi teknologi rekayasa perangkat lunak modern, integrasi AI mutakhir,
              pengembangan website cepat, aplikasi mobile, dan penyediaan infrastruktur server handal.
            </p>

            <div className="pt-2 text-xs font-mono text-zinc-400 flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500" />
              STATUS: OPEN FOR NEW PROJECTS &amp; PARTNERSHIPS
            </div>
          </div>

          {/* Nav Links Col */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-300 font-semibold mb-4">
              Navigasi Halaman
            </h4>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contacts Col */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-300 font-semibold mb-4">
              Kontak Langsung
            </h4>
            <ul className="space-y-3 text-xs text-zinc-400">
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-center gap-2 hover:text-white transition-colors group"
                >
                  <Mail className="w-3.5 h-3.5 text-zinc-400 group-hover:text-white" />
                  <span>{SITE_CONFIG.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white transition-colors group"
                >
                  <Phone className="w-3.5 h-3.5 text-zinc-400 group-hover:text-white" />
                  <span>{SITE_CONFIG.whatsappNumber}</span>
                </a>
              </li>
              <li className="pt-2 text-[11px] text-zinc-400 font-light">
                Respons chat aktif setiap hari kerja (Senin - Sabtu)
              </li>
            </ul>
          </div>

          {/* Social Channels Col */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-300 font-semibold mb-4">
              Media Sosial
            </h4>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              <li>
                <a
                  href={SITE_CONFIG.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white transition-colors group"
                >
                  <InstagramIcon className="w-3.5 h-3.5 text-zinc-400 group-hover:text-white" />
                  <span>Instagram</span>
                  <ExternalLink className="w-3 h-3 text-zinc-600 ml-auto" />
                </a>
              </li>
              <li>
                <a
                  href={SITE_CONFIG.socials.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white transition-colors group"
                >
                  <TikTokIcon className="w-3.5 h-3.5 text-zinc-400 group-hover:text-white" />
                  <span>TikTok</span>
                  <ExternalLink className="w-3 h-3 text-zinc-600 ml-auto" />
                </a>
              </li>
              <li>
                <a
                  href={SITE_CONFIG.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white transition-colors group"
                >
                  <FacebookIcon className="w-3.5 h-3.5 text-zinc-400 group-hover:text-white" />
                  <span>Facebook</span>
                  <ExternalLink className="w-3 h-3 text-zinc-600 ml-auto" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400 font-light">
          <div>
            &copy; 2026 <span className="font-semibold text-zinc-300">ELIF DEV</span>. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span className="text-[11px] font-mono text-zinc-400">
              Crafted with Next.js, Tailwind &amp; Pure Monochrome
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
              aria-label="Kembali ke atas"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

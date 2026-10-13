"use client";

import React from "react";
import {
  BadgePercent,
  Sliders,
  ShieldCheck,
  CheckCircle2,
  Lock,
  HeartHandshake,
  MessageSquare,
} from "lucide-react";
import { PILLARS, getWhatsAppUrl } from "@/data/site-data";

export default function WhyChooseUs() {
  const getPillarIcon = (name: string) => {
    switch (name) {
      case "BadgePercent":
        return <BadgePercent className="w-6 h-6 text-white" />;
      case "Sliders":
        return <Sliders className="w-6 h-6 text-white" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-6 h-6 text-white" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-white" />;
    }
  };

  return (
    <section id="keunggulan" className="py-24 relative scroll-mt-20 border-t border-zinc-900 bg-zinc-950/40">
      {/* Background Tech Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-4xl h-72 bg-zinc-800/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-mono mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            KEUNGGULAN UTAMA
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Mengapa Memilih ELIF DEV?
          </h2>
          <p className="mt-4 text-base text-zinc-400 font-light">
            Kami mengeliminasi friksi umum dalam industri software house: biaya siluman,
            ketergantungan template tertutup, dan purna jual yang diabaikan. Inilah 3 pilar komitmen kami.
          </p>
        </div>

        {/* 3 Pillar Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.number}
              className="relative flex flex-col justify-between p-8 rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-zinc-600 transition-all duration-300 shadow-xl group hover:-translate-y-1"
            >
              {/* Subtle top gradient accent */}
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-zinc-600 to-transparent group-hover:via-white transition-all duration-500" />

              <div>
                {/* Number & Icon */}
                <div className="flex items-center justify-between mb-8">
                  <span className="text-4xl font-mono font-bold text-zinc-800 group-hover:text-zinc-600 transition-colors">
                    {pillar.number}
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-700/80 flex items-center justify-center shadow-inner group-hover:scale-105 group-hover:border-zinc-500 transition-all">
                    {getPillarIcon(pillar.iconName)}
                  </div>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-zinc-100 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-4">
                  {pillar.subtitle}
                </p>

                {/* Description */}
                <p className="text-sm text-zinc-400 leading-relaxed font-light mb-8">
                  {pillar.description}
                </p>

                {/* Checklist Points */}
                <div className="space-y-3 pt-6 border-t border-zinc-900">
                  {pillar.points.map((pt, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-snug">{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom tag */}
              <div className="mt-8 pt-4 border-t border-zinc-900/80 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                <span>STANDAR MUTU</span>
                <span className="text-zinc-400">100% VERIFIED</span>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantee Banner Box */}
        <div className="relative rounded-2xl bg-zinc-900/60 border border-zinc-800 p-8 sm:p-10 backdrop-blur-xl overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-zinc-700/10 rounded-full blur-[80px] pointer-events-none" />
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 rounded-2xl bg-zinc-950 border border-zinc-700 flex items-center justify-center text-white shrink-0 shadow-lg">
                <ShieldCheck className="w-8 h-8 text-white" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-mono uppercase tracking-wider text-emerald-400">
                    Jaminan Ketenangan Klien
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Garansi Purna Jual &amp; Source Code Hak Milik Penuh 100%
                </h3>
                <p className="text-sm text-zinc-400 mt-1 max-w-2xl font-light">
                  Bebas dari rasa khawatir. Anda mendapatkan garansi bug free, SLA pendampingan responsif,
                  serta hak kepemilikan penuh tanpa royalti berkelanjutan.
                </p>
              </div>
            </div>

            <div className="shrink-0 w-full md:w-auto">
              <a
                href={getWhatsAppUrl("Halo ELIF DEV, saya ingin mengetahui lebih detail mengenai skema garansi dan transparansi harga untuk project saya.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-semibold text-zinc-950 bg-white hover:bg-zinc-200 transition-all shadow-md"
              >
                <MessageSquare className="w-4 h-4 text-zinc-950" />
                <span>Pelajari Kebijakan Garansi</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import {
  ArrowRight,
  MessageSquare,
  ShieldCheck,
  Zap,
  Code2,
  Cpu,
  Sparkles,
  Terminal,
} from "lucide-react";
import { getWhatsAppUrl } from "@/data/site-data";

export default function Hero() {
  const scrollToServices = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById("layanan");
    if (target) {
      const navOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-tech-grid">
      {/* Background ambient lighting glows (Pure Dark Monochrome) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-zinc-700/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[250px] bg-zinc-800/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[280px] h-[200px] bg-white/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Top Status Pill */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-zinc-300 text-xs font-mono mb-8 shadow-sm hover:border-zinc-700 transition-colors">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-zinc-200 font-medium">ELIF DEV</span>
            <span className="text-zinc-600">|</span>
            <span className="text-zinc-400">Software House &amp; AI Integration Agency</span>
            <Sparkles className="w-3.5 h-3.5 text-zinc-400 ml-0.5" />
          </div>

          {/* Main Title / Tagline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-6">
            Engineering Digital Excellence &amp;{" "}
            <span className="bg-gradient-to-r from-white via-zinc-300 to-zinc-500 bg-clip-text text-transparent underline decoration-zinc-800 underline-offset-8">
              Next-Gen AI Solutions
            </span>
          </h1>

          {/* Subtitle Description */}
          <p className="text-base sm:text-lg md:text-xl text-zinc-400 max-w-2xl mb-10 leading-relaxed font-light">
            Kami merancang ekosistem digital presisi tinggi: pembuatan website super cepat,
            aplikasi mobile tangguh, custom CMS, hingga otomatisasi kecerdasan buatan (AI)
            yang terukur untuk melesatkan performa bisnis Anda.
          </p>

          {/* CTA Button Group */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-16">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-semibold text-zinc-950 bg-white hover:bg-zinc-200 transition-all duration-200 shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_35px_rgba(255,255,255,0.35)] hover:scale-[1.02] active:scale-[0.98]"
            >
              <MessageSquare className="w-4 h-4 text-zinc-950" />
              <span>Konsultasi Project Sekarang</span>
            </a>

            <a
              href="#layanan"
              onClick={scrollToServices}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium text-zinc-300 bg-zinc-900/80 hover:bg-zinc-800/90 hover:text-white border border-zinc-800 transition-all duration-200 hover:border-zinc-700"
            >
              <span>Eksplorasi Layanan</span>
              <ArrowRight className="w-4 h-4 text-zinc-400" />
            </a>
          </div>

          {/* Futuristic Agency Code / Architecture Terminal Visual */}
          <div className="w-full max-w-3xl rounded-2xl bg-zinc-950 border border-zinc-800 shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden text-left relative group">
            {/* Window titlebar */}
            <div className="flex items-center justify-between px-4 py-3 bg-zinc-900/90 border-b border-zinc-800/80">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-zinc-700" />
                <div className="w-3 h-3 rounded-full bg-zinc-700" />
                <div className="w-3 h-3 rounded-full bg-zinc-700" />
                <span className="text-xs font-mono text-zinc-400 ml-2 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-zinc-400" />
                  elif-dev-architecture.config.ts
                </span>
              </div>
              <div className="text-[11px] font-mono text-zinc-500 hidden sm:block">
                NODE_ENV=production • v2026.1
              </div>
            </div>

            {/* Code Body */}
            <div className="p-5 sm:p-6 font-mono text-xs sm:text-sm text-zinc-300 overflow-x-auto leading-relaxed bg-zinc-950/80 backdrop-blur-md">
              <div className="text-zinc-500">// ELIF DEV Core Engine Specifications</div>
              <div className="mt-1">
                <span className="text-zinc-500">export const</span>{" "}
                <span className="text-zinc-100 font-semibold">agencySolutions</span> = {"{"}
              </div>
              <div className="pl-4 sm:pl-6 text-zinc-400">
                <div>
                  <span className="text-zinc-500">stack:</span> [
                  <span className="text-zinc-200">&apos;Next.js&apos;</span>,{" "}
                  <span className="text-zinc-200">&apos;React Native&apos;</span>,{" "}
                  <span className="text-zinc-200">&apos;FastAPI&apos;</span>,{" "}
                  <span className="text-zinc-200">&apos;Custom LLM RAG&apos;</span>],
                </div>
                <div>
                  <span className="text-zinc-500">performance:</span>{" "}
                  <span className="text-emerald-400">&apos;99+ Lighthouse Ready&apos;</span>,
                </div>
                <div>
                  <span className="text-zinc-500">guarantee:</span>{" "}
                  <span className="text-emerald-400">&apos;100% Service &amp; Code Warranty&apos;</span>,
                </div>
                <div>
                  <span className="text-zinc-500">ownership:</span>{" "}
                  <span className="text-zinc-200">&apos;100% Full Client Source Code Rights&apos;</span>,
                </div>
                <div>
                  <span className="text-zinc-500">support:</span>{" "}
                  <span className="text-zinc-300">&apos;24/7 Monitored Infrastructure &amp; SLA&apos;</span>
                </div>
              </div>
              <div className="text-zinc-300">{"};"}</div>

              <div className="mt-3 pt-3 border-t border-zinc-900 flex items-center justify-between text-zinc-500 text-xs">
                <span className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-emerald-500" />
                  System ready for deployment
                </span>
                <span className="text-zinc-600 font-mono">Status: ALL_SYSTEMS_OPTIMAL</span>
              </div>
            </div>
          </div>

          {/* Quick Metrics & Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full mt-12 pt-8 border-t border-zinc-900 text-left">
            <div className="flex items-start gap-3 p-3 rounded-xl bg-zinc-950/40 border border-zinc-900">
              <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-white shrink-0">
                <Zap className="w-4 h-4" />
              </div>
              <div>
                <div className="text-lg font-bold text-white font-mono">&lt; 1.0s</div>
                <div className="text-xs text-zinc-400">Ultra-Fast Loading</div>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-xl bg-zinc-950/40 border border-zinc-900">
              <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-white shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <div className="text-lg font-bold text-white font-mono">100%</div>
                <div className="text-xs text-zinc-400">Garansi Purna Jual</div>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-xl bg-zinc-950/40 border border-zinc-900">
              <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-white shrink-0">
                <Cpu className="w-4 h-4" />
              </div>
              <div>
                <div className="text-lg font-bold text-white font-mono">24/7</div>
                <div className="text-xs text-zinc-400">AI Automation</div>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-xl bg-zinc-950/40 border border-zinc-900">
              <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-white shrink-0">
                <Code2 className="w-4 h-4" />
              </div>
              <div>
                <div className="text-lg font-bold text-white font-mono">0 Lock-in</div>
                <div className="text-xs text-zinc-400">Source Code Milik Anda</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useState, useEffect } from "react";
import { MessageSquare, X } from "lucide-react";
import { SITE_CONFIG, getWhatsAppUrl } from "@/data/site-data";

export default function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show floating button once user scrolled past 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2 animate-in fade-in slide-in-from-bottom-4 duration-300">
      {/* Tooltip Preview */}
      {showTooltip && (
        <div className="relative max-w-xs p-3.5 rounded-2xl bg-zinc-950 border border-zinc-800 text-xs text-zinc-300 shadow-2xl mb-1">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-2 right-2 text-zinc-500 hover:text-white"
            aria-label="Tutup tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="font-semibold text-white mb-1 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            ELIF DEV Support
          </div>
          <p className="text-zinc-400 font-light text-[11px] leading-snug">
            Ada pertanyaan seputar project? Konsultasikan langsung bersama kami.
          </p>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-zinc-900/90 hover:bg-white text-zinc-200 hover:text-zinc-950 border border-zinc-800 hover:border-white shadow-[0_4px_25px_rgba(0,0,0,0.8)] hover:shadow-[0_0_30px_rgba(255,255,255,0.25)] transition-all duration-300 hover:scale-105 active:scale-95 backdrop-blur-md"
        aria-label="Chat WhatsApp ELIF DEV"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
        </span>
        <MessageSquare className="w-4 h-4 text-emerald-400 group-hover:text-zinc-950 transition-colors" />
        <span className="text-xs font-semibold tracking-wide">
          Konsultasi WhatsApp
        </span>
      </a>
    </div>
  );
}

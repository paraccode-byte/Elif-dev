"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageSquare, Menu, X, ArrowUpRight } from "lucide-react";
import { NAV_LINKS, SITE_CONFIG, getWhatsAppUrl } from "@/data/site-data";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section spy
      const sections = NAV_LINKS.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass-nav py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)] border-b border-zinc-800/80"
          : "bg-transparent py-5 border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <Link
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="group flex items-center gap-3 transition-transform duration-200 hover:scale-[1.02]"
            aria-label="ELIF DEV Beranda"
          >
            <div className="relative w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-700/60 p-1 flex items-center justify-center overflow-hidden shadow-inner group-hover:border-zinc-500 transition-colors">
              <Image
                src={SITE_CONFIG.logoUrl}
                alt="ELIF DEV Logo"
                width={36}
                height={36}
                className="object-contain w-full h-full"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-base font-bold tracking-wider text-white flex items-center gap-1.5">
                ELIF<span className="text-zinc-400 font-light">DEV</span>
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              </span>
              <span className="text-[10px] tracking-widest uppercase text-zinc-400 font-mono">
                Tech Agency
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-1 bg-zinc-950/60 border border-zinc-800/80 px-3 py-1.5 rounded-full backdrop-blur-md"
          >
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-xs font-medium px-3.5 py-1.5 rounded-full transition-all duration-200 ${
                    isActive
                      ? "text-white bg-zinc-800 shadow-sm border border-zinc-700/60"
                      : "text-zinc-400 hover:text-white hover:bg-zinc-900/60"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wide text-zinc-950 bg-white hover:bg-zinc-200 transition-all duration-200 shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_25px_rgba(255,255,255,0.25)] hover:scale-[1.02] active:scale-[0.98]"
            >
              <MessageSquare className="w-3.5 h-3.5 text-zinc-950" />
              <span>Konsultasi</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-700 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 focus:outline-none"
            aria-expanded={mobileMenuOpen}
            aria-label="Buka Menu Navigasi"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-zinc-950/95 border-b border-zinc-800 px-4 pt-3 pb-6 backdrop-blur-2xl transition-all">
          <div className="flex flex-col space-y-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === link.href.substring(1)
                    ? "bg-zinc-900 text-white border border-zinc-800"
                    : "text-zinc-400 hover:text-white hover:bg-zinc-900/50"
                }`}
              >
                {link.label}
              </a>
            ))}

            <div className="pt-3 border-t border-zinc-900">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold text-zinc-950 bg-white hover:bg-zinc-200 transition-colors shadow-lg"
              >
                <MessageSquare className="w-4 h-4 text-zinc-950" />
                <span>Konsultasi WhatsApp</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

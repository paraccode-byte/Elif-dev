"use client";

import React, { useState } from "react";
import {
  Globe,
  Sparkles,
  Smartphone,
  Bot,
  Cpu,
  LayoutDashboard,
  ServerCrash,
  AtSign,
  HardDrive,
  Server,
  CheckCircle2,
  ArrowUpRight,
  Layers,
  Cloud,
} from "lucide-react";
import {
  CORE_SERVICES,
  INFRASTRUCTURE_SERVICES,
  ServiceItem,
  getWhatsAppUrl,
} from "@/data/site-data";

// Icon mapping helper
const getServiceIcon = (name: string) => {
  switch (name) {
    case "Globe":
      return <Globe className="w-5 h-5" />;
    case "Sparkles":
      return <Sparkles className="w-5 h-5" />;
    case "Smartphone":
      return <Smartphone className="w-5 h-5" />;
    case "Bot":
      return <Bot className="w-5 h-5" />;
    case "Cpu":
      return <Cpu className="w-5 h-5" />;
    case "LayoutDashboard":
      return <LayoutDashboard className="w-5 h-5" />;
    case "ServerCrash":
      return <ServerCrash className="w-5 h-5" />;
    case "AtSign":
      return <AtSign className="w-5 h-5" />;
    case "HardDrive":
      return <HardDrive className="w-5 h-5" />;
    case "Server":
      return <Server className="w-5 h-5" />;
    default:
      return <Layers className="w-5 h-5" />;
  }
};

export default function Services() {
  const [activeTab, setActiveTab] = useState<"all" | "core" | "infrastructure">(
    "all"
  );

  const filterServices = () => {
    if (activeTab === "core") return CORE_SERVICES;
    if (activeTab === "infrastructure") return INFRASTRUCTURE_SERVICES;
    return [...CORE_SERVICES, ...INFRASTRUCTURE_SERVICES];
  };

  const displayedServices = filterServices();

  return (
    <section id="layanan" className="py-24 relative scroll-mt-20">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-zinc-800/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-mono mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              LAYANAN &amp; INFRASTRUKTUR
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Solusi Terpadu Rekayasa Digital &amp; AI
            </h2>
            <p className="mt-4 text-base text-zinc-400 font-light">
              Dari perancangan arsitektur web performa tinggi, aplikasi mobile, automasi kecerdasan buatan,
              hingga fondasi server cloud tangguh—semua dibangun dengan standar industri mutakhir.
            </p>
          </div>

          {/* Segmented Filter Buttons */}
          <div className="mt-6 md:mt-0 flex items-center p-1 bg-zinc-900/90 border border-zinc-800 rounded-xl backdrop-blur-md self-start md:self-auto">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-4 py-2 text-xs font-medium rounded-lg transition-all ${
                activeTab === "all"
                  ? "bg-white text-zinc-950 font-semibold shadow-sm"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Semua ({CORE_SERVICES.length + INFRASTRUCTURE_SERVICES.length})
            </button>
            <button
              onClick={() => setActiveTab("core")}
              className={`px-4 py-2 text-xs font-medium rounded-lg transition-all flex items-center gap-1.5 ${
                activeTab === "core"
                  ? "bg-white text-zinc-950 font-semibold shadow-sm"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Jasa Utama</span>
            </button>
            <button
              onClick={() => setActiveTab("infrastructure")}
              className={`px-4 py-2 text-xs font-medium rounded-lg transition-all flex items-center gap-1.5 ${
                activeTab === "infrastructure"
                  ? "bg-white text-zinc-950 font-semibold shadow-sm"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <Cloud className="w-3.5 h-3.5" />
              <span>Infrastruktur</span>
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedServices.map((service: ServiceItem) => {
            const isInfrastructure = service.category === "infrastructure";
            const customWaMsg = `Halo ELIF DEV, saya tertarik untuk mendiskusikan layanan ${service.title}.`;

            return (
              <div
                key={service.id}
                className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-zinc-950/70 border border-zinc-800/80 hover:border-zinc-600/80 hover:bg-zinc-900/40 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:shadow-[0_10px_35px_rgba(0,0,0,0.8)]"
              >
                {/* Popular or Category Pill */}
                {service.popular && (
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium tracking-wide bg-zinc-100 text-zinc-950 shadow-sm">
                      PILIHAN UTAMA
                    </span>
                  </div>
                )}

                <div>
                  {/* Icon & Category */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-11 h-11 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-200 group-hover:text-white group-hover:border-zinc-600 transition-colors">
                      {getServiceIcon(service.iconName)}
                    </div>
                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400">
                        {isInfrastructure ? "Infrastruktur Cloud" : "Software Engineering"}
                      </span>
                      <h3 className="text-lg font-bold text-white group-hover:text-zinc-100 transition-colors">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-zinc-400 leading-relaxed mb-6 font-light">
                    {service.shortDesc}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2.5 mb-8 pt-4 border-t border-zinc-900">
                    {service.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-zinc-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-zinc-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Button */}
                <div className="pt-2">
                  <a
                    href={getWhatsAppUrl(customWaMsg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-xl text-xs font-semibold text-zinc-300 bg-zinc-900 border border-zinc-800/90 hover:text-zinc-950 hover:bg-white hover:border-white transition-all duration-200 group/btn"
                  >
                    <span>Konsultasi {service.title}</span>
                    <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover/btn:text-zinc-950 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

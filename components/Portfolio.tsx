"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ExternalLink,
  Layers,
  Sparkles,
  ArrowUpRight,
  X,
  CheckCircle2,
  MessageSquare,
} from "lucide-react";
import {
  PORTFOLIO_PROJECTS,
  ProjectItem,
  getWhatsAppUrl,
} from "@/data/site-data";

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const categories = ["All", "Web", "Mobile", "AI", "Enterprise"];

  const filteredProjects =
    selectedCategory === "All"
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="portofolio" className="py-24 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-mono mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              SHOWCASE &amp; PORTOFOLIO
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Karya Rekayasa &amp; Implementasi Nyata
            </h2>
            <p className="mt-4 text-base text-zinc-400 font-light">
              Eksplorasi portofolio proyek perangkat lunak, sistem AI terintegrasi, dan arsitektur web modern yang telah kami kembangkan dengan keandalan maksimal.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="mt-6 md:mt-0 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-medium rounded-full transition-all ${
                  selectedCategory === cat
                    ? "bg-white text-zinc-950 font-semibold shadow-md"
                    : "bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800 hover:border-zinc-700"
                }`}
              >
                {cat === "All" ? "Semua Proyek" : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveModalProject(project)}
              className="group cursor-pointer rounded-2xl bg-zinc-950 border border-zinc-800/80 hover:border-zinc-600 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-[0_4px_25px_rgba(0,0,0,0.6)] hover:shadow-[0_10px_40px_rgba(0,0,0,0.9)] hover:-translate-y-1"
            >
              <div>
                {/* Image Box */}
                <div className="relative aspect-video w-full overflow-hidden bg-zinc-900">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105 filter grayscale-[30%] group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-80" />

                  {/* Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-mono tracking-wider uppercase bg-zinc-900/90 text-zinc-200 border border-zinc-700 backdrop-blur-md">
                      {project.categoryLabel}
                    </span>
                  </div>

                  {/* Quick Expand Icon */}
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-zinc-900/80 border border-zinc-700 flex items-center justify-center text-zinc-300 opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-md">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white group-hover:text-zinc-200 transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs text-zinc-400 line-clamp-2 font-light leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-zinc-900 border border-zinc-800 text-zinc-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Result Highlight */}
              <div className="px-6 pb-6 pt-3 border-t border-zinc-900 flex items-center justify-between text-xs text-zinc-400">
                <span className="truncate pr-2 font-light italic">
                  &ldquo;{project.result}&rdquo;
                </span>
                <span className="text-white shrink-0 font-medium underline underline-offset-4 text-[11px]">
                  Detail
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-2xl bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col animate-in fade-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-5 border-b border-zinc-800 bg-zinc-900/60">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-zinc-400 uppercase">
                  {activeModalProject.categoryLabel}
                </span>
                <span className="text-zinc-600">•</span>
                <span className="text-xs font-mono text-emerald-400">Kasus Sukses</span>
              </div>
              <button
                onClick={() => setActiveModalProject(null)}
                className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
                aria-label="Tutup Modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-6">
              <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800">
                <Image
                  src={activeModalProject.image}
                  alt={activeModalProject.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {activeModalProject.title}
                </h3>
                <p className="text-sm text-zinc-300 leading-relaxed font-light">
                  {activeModalProject.description}
                </p>
              </div>

              {/* Impact / Result */}
              <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800">
                <div className="text-xs font-mono uppercase text-zinc-400 mb-1">
                  Hasil / Metrik Keberhasilan
                </div>
                <div className="text-sm font-semibold text-white flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{activeModalProject.result}</span>
                </div>
              </div>

              {/* Technologies */}
              <div>
                <div className="text-xs font-mono uppercase text-zinc-400 mb-2">
                  Teknologi &amp; Arsitektur yang Digunakan
                </div>
                <div className="flex flex-wrap gap-2">
                  {activeModalProject.tags.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-zinc-900 border border-zinc-800 text-zinc-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-5 border-t border-zinc-800 bg-zinc-900/60 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-zinc-500 font-mono hidden sm:inline">
                Tertarik dengan arsitektur serupa?
              </span>
              <a
                href={getWhatsAppUrl(
                  `Halo ELIF DEV, saya tertarik untuk mendiskusikan project yang mirip dengan portofolio "${activeModalProject.title}".`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-zinc-950 bg-white hover:bg-zinc-200 transition-all shadow-md"
              >
                <MessageSquare className="w-3.5 h-3.5 text-zinc-950" />
                <span>Konsultasikan Solusi Serupa</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

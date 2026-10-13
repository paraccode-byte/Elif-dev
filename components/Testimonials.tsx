"use client";

import React from "react";
import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/data/site-data";

export default function Testimonials() {
  return (
    <section id="testimonial" className="py-24 relative scroll-mt-20 border-t border-zinc-900 bg-zinc-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-mono mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            KEPUASAN KLIEN
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Dipercaya Oleh Para Inovator Bisnis
          </h2>
          <p className="mt-4 text-base text-zinc-400 font-light">
            Pengalaman nyata mitra bisnis yang telah mempercayakan rekayasa sistem, transformasi web, dan otomatisasi AI kepada ELIF DEV.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="relative p-7 sm:p-8 rounded-2xl bg-zinc-950 border border-zinc-800/80 hover:border-zinc-600/80 transition-all duration-300 shadow-xl flex flex-col justify-between group"
            >
              <div>
                {/* Header: Stars & Quote Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-zinc-800 group-hover:text-zinc-600 transition-colors" />
                </div>

                {/* Highlight */}
                <p className="text-base font-semibold text-white mb-3">
                  &ldquo;{item.highlight}&rdquo;
                </p>

                {/* Testimonial Content */}
                <p className="text-sm text-zinc-400 leading-relaxed font-light mb-6">
                  {item.content}
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-5 border-t border-zinc-900 flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center text-xs font-mono font-bold text-zinc-200">
                  {item.avatarText}
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">
                    {item.name}
                  </h3>
                  <p className="text-xs text-zinc-400 font-mono">
                    {item.role} • {item.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

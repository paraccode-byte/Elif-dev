"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, MessageSquare } from "lucide-react";
import { FAQS, getWhatsAppUrl } from "@/data/site-data";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 relative scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-xs font-mono mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-zinc-400" />
            PERTANYAAN UMUM
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base text-zinc-400 font-light">
            Jawaban transparan seputar proses development, sistem garansi, kepemilikan kode, dan dukungan teknis ELIF DEV.
          </p>
        </div>

        {/* Accordion List (shadcn/ui accordion style) */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="rounded-2xl bg-zinc-950/80 border border-zinc-800/80 transition-colors duration-200 overflow-hidden hover:border-zinc-700"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-6 text-left transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-white"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold text-zinc-100 pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-zinc-800 text-white" : "text-zinc-400"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-0 animate-in fade-in slide-in-from-top-2 duration-200">
                    <p className="text-sm text-zinc-400 leading-relaxed font-light border-t border-zinc-900 pt-4">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions? Help Card */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h3 className="text-sm font-semibold text-white">
              Punya pertanyaan teknis spesifik yang belum terjawab?
            </h3>
            <p className="text-xs text-zinc-400 font-light mt-0.5">
              Konsultasikan langsung dengan engineer ELIF DEV tanpa dipungut biaya.
            </p>
          </div>
          <a
            href={getWhatsAppUrl("Halo ELIF DEV, saya memiliki pertanyaan seputar pengerjaan project saya.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-zinc-950 bg-white hover:bg-zinc-200 transition-colors shrink-0 shadow-sm"
          >
            <MessageSquare className="w-3.5 h-3.5 text-zinc-950" />
            <span>Tanya Tim Kami</span>
          </a>
        </div>
      </div>
    </section>
  );
}

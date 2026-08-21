import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Eye, Sparkles, Palette } from 'lucide-react';

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 sm:py-32 bg-[#F6F6F6] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Tag */}
        <div className="flex items-center gap-3 mb-6">
          <span className="h-[1px] w-12 bg-[#111111]" />
          <span className="text-xs uppercase font-mono tracking-widest text-[#666666]">01 / Who We Are</span>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Main Title Left */}
          <div className="lg:col-span-5">
            <h2 className="text-4xl sm:text-6xl font-extrabold text-[#111111] tracking-tight leading-tight">
              Engineering meets <br />
              <span className="font-serif-italic font-normal text-[#444444]">design excellence</span>.
            </h2>
            <p className="mt-6 text-xs font-mono text-[#666666] uppercase tracking-wider">
              "Kesign" — Design with us.
            </p>
          </div>

          {/* Detailed Content Right */}
          <div className="lg:col-span-7 space-y-8 text-base sm:text-lg text-[#666666] font-normal leading-relaxed">
            <p>
              We are four engineering students from <span className="text-[#111111] font-semibold">IIT Delhi</span> building an AI-assisted creative studio that delivers world-class design work for startups, brands, and creators.
            </p>

            <p>
              We combine engineering rigor with high-end aesthetic taste to deliver premium design solutions — from pitch decks and brand systems to social media assets and course launch suites.
            </p>

            <p className="text-[#111111] font-medium">
              The "K" in kesign represents our four founders — Krinjal, Kshitija, Krishna, and Krishan.
              Together, we craft designs that push boundaries and elevate brands.
            </p>

            {/* Core Pillars */}
            <div className="pt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-2xl bg-white border border-[#E5E5E5] shadow-sm">
                <div className="w-9 h-9 rounded-xl bg-[#F6F6F6] text-[#111111] flex items-center justify-center mb-4">
                  <Cpu size={18} />
                </div>
                <h3 className="text-sm font-bold text-[#111111]">Speed</h3>
                <p className="text-xs text-[#666666] mt-1 leading-relaxed">24-48h turnaround powered by AI generation engines.</p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-[#E5E5E5] shadow-sm">
                <div className="w-9 h-9 rounded-xl bg-[#F6F6F6] text-[#111111] flex items-center justify-center mb-4">
                  <Eye size={18} />
                </div>
                <h3 className="text-sm font-bold text-[#111111]">Quality</h3>
                <p className="text-xs text-[#666666] mt-1 leading-relaxed">Minimal editorial aesthetic inspired by Kyne Jang &amp; Framer Gallery.</p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-[#E5E5E5] shadow-sm">
                <div className="w-9 h-9 rounded-xl bg-[#F6F6F6] text-[#111111] flex items-center justify-center mb-4">
                  <Sparkles size={18} />
                </div>
                <h3 className="text-sm font-bold text-[#111111]">Thoughtful</h3>
                <p className="text-xs text-[#666666] mt-1 leading-relaxed">Every element is reviewed and finalized by human hands.</p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-[#FF5733]/30 shadow-sm ring-1 ring-[#FF5733]/10">
                <div className="w-9 h-9 rounded-xl bg-[#FF5733]/10 text-[#FF5733] flex items-center justify-center mb-4">
                  <Palette size={18} />
                </div>
                <h3 className="text-sm font-bold text-[#111111]">Creative Vision</h3>
                <p className="text-xs text-[#666666] mt-1 leading-relaxed">Bold concepts and elevated aesthetics for brands that want to stand out.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

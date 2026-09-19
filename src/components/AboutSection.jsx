import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Eye, Sparkles, Palette, Layers, Compass } from 'lucide-react';

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 sm:py-32 bg-[#F6F6F6] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Tag */}
        <div className="flex items-center gap-3 mb-6">
          <span className="h-[1px] w-12 bg-[#FF5733]" />
          <span className="text-xs uppercase font-mono tracking-widest text-[#666666]">03 / About Kesign</span>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Main Title Left */}
          <div className="lg:col-span-5">
            <h2 className="text-4xl sm:text-6xl font-extrabold text-[#111111] tracking-tight leading-tight">
              Engineering rigor meets <br />
              <span className="font-serif-italic font-normal text-[#FF5733]">visual distinction</span>.
            </h2>
            <p className="mt-6 text-xs font-mono text-[#666666] uppercase tracking-wider">
              "Kesign" — IIT Delhi Student-Founded Design Studio.
            </p>
          </div>

          {/* Detailed Content Right */}
          <div className="lg:col-span-7 space-y-8 text-base sm:text-lg text-[#555555] font-normal leading-relaxed">
            <p>
              <strong className="text-[#111111]">Kesign</strong> is a modern design studio founded by four students from <strong className="text-[#111111]">IIT Delhi</strong>: Krinjal Agrawal, Kshitija Karmore, Krishna Thakur, and Krishan Sawariya.
            </p>

            <p>
              We craft high-quality visual work across 9 specialized design worlds — from high-impact advertising campaigns, branding systems, and e-commerce packaging to sophisticated editorial layouts, event experiences, and high-CTR social media creatives.
            </p>

            <p className="text-[#111111] font-medium">
              We leverage modern AI-assisted pipelines to eliminate repetitive lag and explore more creative variations, while every final deliverable is shaped, judged, and perfected by human hands.
            </p>

            {/* Core Pillars */}
            <div className="pt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-5 rounded-2xl bg-white border border-[#E5E5E5] shadow-sm">
                <div className="w-9 h-9 rounded-xl bg-[#F6F6F6] text-[#FF5733] flex items-center justify-center mb-3">
                  <Compass size={18} />
                </div>
                <h3 className="text-sm font-bold text-[#111111]">Human Direction</h3>
                <p className="text-xs text-[#666666] mt-1 leading-relaxed">Design thinking, taste, and strategic intent guide every choice.</p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-[#E5E5E5] shadow-sm">
                <div className="w-9 h-9 rounded-xl bg-[#F6F6F6] text-[#FF5733] flex items-center justify-center mb-3">
                  <Eye size={18} />
                </div>
                <h3 className="text-sm font-bold text-[#111111]">Visual Precision</h3>
                <p className="text-xs text-[#666666] mt-1 leading-relaxed">Clean typography, strict grid hierarchy, and restrained elegance.</p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-[#E5E5E5] shadow-sm">
                <div className="w-9 h-9 rounded-xl bg-[#F6F6F6] text-[#FF5733] flex items-center justify-center mb-3">
                  <Cpu size={18} />
                </div>
                <h3 className="text-sm font-bold text-[#111111]">24–48h Velocity</h3>
                <p className="text-xs text-[#666666] mt-1 leading-relaxed">Automated scaffolding compresses production from weeks to hours.</p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-[#E5E5E5] shadow-sm">
                <div className="w-9 h-9 rounded-xl bg-[#F6F6F6] text-[#FF5733] flex items-center justify-center mb-3">
                  <Layers size={18} />
                </div>
                <h3 className="text-sm font-bold text-[#111111]">09 Disciplines</h3>
                <p className="text-xs text-[#666666] mt-1 leading-relaxed">Unified visual design stack across print, physical merch, and digital.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

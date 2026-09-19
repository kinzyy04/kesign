import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, UserCheck, FastForward, HeartHandshake } from 'lucide-react';

export const AIPhilosophySection = () => {
  return (
    <section id="philosophy" className="py-24 sm:py-32 bg-[#F6F6F6] relative overflow-hidden">
      
      {/* Studio Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-gradient-to-r from-[#FF5733]/15 via-[#FF7755]/10 to-transparent rounded-full blur-[140px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="h-[1px] w-12 bg-gradient-to-r from-[#FF5733] to-[#FF8C66]" />
          <span className="text-xs uppercase font-mono tracking-widest text-[#666666]">04 / Philosophy & Workflow</span>
        </div>

        <div className="max-w-4xl">
          <h2 className="text-3xl sm:text-6xl md:text-7xl font-extrabold text-[#111111] tracking-tight leading-tight">
            Speed accelerates.<br />
            <span className="font-serif-italic text-transparent bg-clip-text bg-gradient-to-r from-[#FF5733] to-[#FF8C66]">Humans direct.</span>
          </h2>

          <div className="mt-8 space-y-6 text-base sm:text-xl text-[#555555] leading-relaxed font-normal">
            <p>
              We believe great design is not about endless manual drag-and-drop or generic AI output. We build custom studio pipelines to eliminate repetitive friction so our team can focus on what matters: creative vision, brand storytelling, and pixel-level judgment.
            </p>

            <p className="text-[#111111] font-semibold">
              "AI helps us move faster. Humans decide what actually works."
            </p>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 sm:p-8 rounded-3xl bg-white/95 backdrop-blur-md border border-[#E5E5E5] flex flex-col justify-between shadow-sm hover:border-[#FF5733]/40 transition-colors">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#F6F6F6] text-[#111111] flex items-center justify-center mb-6">
                <FastForward size={22} className="text-[#FF5733]" />
              </div>
              <h3 className="text-lg font-bold text-[#111111]">Rapid Ideation</h3>
              <p className="mt-2 text-xs sm:text-sm text-[#666666] leading-relaxed">
                Automated scaffolding generates dozens of composition options and palette variations in minutes, giving us more creative paths to explore.
              </p>
            </div>
            <div className="mt-6 text-[10px] font-mono text-[#FF5733] font-semibold">HIGH-SPEED EXPLORATION</div>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-white/95 backdrop-blur-md border border-[#E5E5E5] flex flex-col justify-between shadow-sm hover:border-[#FF5733]/40 transition-colors">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#F6F6F6] text-[#111111] flex items-center justify-center mb-6">
                <UserCheck size={22} className="text-[#FF5733]" />
              </div>
              <h3 className="text-lg font-bold text-[#111111]">Human Taste & QA</h3>
              <p className="mt-2 text-xs sm:text-sm text-[#666666] leading-relaxed">
                Every margin, typographic ligature, contrast ratio, and vector curve is inspected and refined by our IIT Delhi designers before final delivery.
              </p>
            </div>
            <div className="mt-6 text-[10px] font-mono text-[#111111] font-semibold">HUMAN DIRECTION</div>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-white/95 backdrop-blur-md border border-[#E5E5E5] flex flex-col justify-between shadow-sm hover:border-[#FF5733]/40 transition-colors">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#F6F6F6] text-[#111111] flex items-center justify-center mb-6">
                <Cpu size={22} className="text-[#FF5733]" />
              </div>
              <h3 className="text-lg font-bold text-[#111111]">Zero Repetitive Lag</h3>
              <p className="mt-2 text-xs sm:text-sm text-[#666666] leading-relaxed">
                We automate mechanical resizing, format exports, and file conversions so deadlines are met with ease and zero quality degradation.
              </p>
            </div>
            <div className="mt-6 text-[10px] font-mono text-[#666666]">STUDIO PIPELINE</div>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-white/95 backdrop-blur-md border border-[#E5E5E5] flex flex-col justify-between shadow-sm hover:border-[#FF5733]/40 transition-colors">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#F6F6F6] text-[#111111] flex items-center justify-center mb-6">
                <HeartHandshake size={22} className="text-[#FF5733]" />
              </div>
              <h3 className="text-lg font-bold text-[#111111]">Direct Founder Access</h3>
              <p className="mt-2 text-xs sm:text-sm text-[#666666] leading-relaxed">
                You work directly with the studio founders — no middle managers, no miscommunication, and 100% accountable partnership.
              </p>
            </div>
            <div className="mt-6 text-[10px] font-mono text-[#111111] font-semibold">PARTNERSHIP</div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, UserCheck, FastForward, HeartHandshake } from 'lucide-react';

export const AIPhilosophySection = () => {
  return (
    <section id="ai-philosophy" className="py-24 sm:py-32 bg-[#F6F6F6] relative overflow-hidden">
      
      {/* Kyne Orange Background Ambient Gradient Blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-gradient-to-r from-[#FF5733]/18 via-[#FF7755]/10 to-transparent rounded-full blur-[140px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="h-[1px] w-12 bg-gradient-to-r from-[#FF5733] to-[#FF8C66]" />
          <span className="text-xs uppercase font-mono tracking-widest text-[#666666]">09 / Our Philosophy</span>
        </div>

        <div className="max-w-4xl">
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-[#111111] tracking-tight leading-tight">
            Speed accelerates.<br />
            <span className="font-serif-italic text-transparent bg-clip-text bg-gradient-to-r from-[#FF5733] to-[#FF8C66]">Craft elevates.</span>
          </h2>

          <div className="mt-8 space-y-6 text-base sm:text-xl text-[#666666] leading-relaxed font-normal">
            <p>
              We embrace modern design tools because repetitive work shouldn't consume creative energy.
              High-performance design workflows help us move faster, explore more ideas, and dramatically reduce production time.
            </p>

            <p className="text-[#111111] font-medium">
              Every deliverable is refined, reviewed, and finalized by our team before it reaches you.
              Technology helps us work smarter — human craft makes the work meaningful.
            </p>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-8 rounded-3xl bg-white/95 backdrop-blur-md border border-[#E5E5E5] flex flex-col justify-between shadow-sm hover:border-[#FF5733]/40 transition-colors">
            <div>
              <div className="w-11 h-11 rounded-2xl bg-[#F6F6F6] text-[#111111] flex items-center justify-center mb-6">
                <FastForward size={22} className="text-[#FF5733]" />
              </div>
              <h3 className="text-lg font-bold text-[#111111]">Rapid Exploration</h3>
              <p className="mt-2 text-xs text-[#666666] leading-relaxed">
                Our custom design pipelines generate dozens of layout variations and color palettes in seconds, giving us more creative directions to select from.
              </p>
            </div>
            <div className="mt-6 text-[10px] font-mono text-[#FF5733] font-semibold">DESIGN ENGINE</div>
          </div>

          <div className="p-8 rounded-3xl bg-white/95 backdrop-blur-md border border-[#E5E5E5] flex flex-col justify-between shadow-sm hover:border-[#FF5733]/40 transition-colors">
            <div>
              <div className="w-11 h-11 rounded-2xl bg-[#F6F6F6] text-[#111111] flex items-center justify-center mb-6">
                <UserCheck size={22} className="text-[#FF5733]" />
              </div>
              <h3 className="text-lg font-bold text-[#111111]">Human QA & Taste</h3>
              <p className="mt-2 text-xs text-[#666666] leading-relaxed">
                Our IIT Delhi team manually inspects every margin, font hierarchy, and vector curves to ensure 100% brand perfection.
              </p>
            </div>
            <div className="mt-6 text-[10px] font-mono text-[#111111] font-semibold">HUMAN REVIEW</div>
          </div>

          <div className="p-8 rounded-3xl bg-white/95 backdrop-blur-md border border-[#E5E5E5] flex flex-col justify-between shadow-sm hover:border-[#FF5733]/40 transition-colors">
            <div>
              <div className="w-11 h-11 rounded-2xl bg-[#F6F6F6] text-[#111111] flex items-center justify-center mb-6">
                <Cpu size={22} className="text-[#FF5733]" />
              </div>
              <h3 className="text-lg font-bold text-[#111111]">Zero Repetitive Lag</h3>
              <p className="mt-2 text-xs text-[#666666] leading-relaxed">
                Automated document formatting and layout scaffolding frees us up to focus on visual storytelling and message impact.
              </p>
            </div>
            <div className="mt-6 text-[10px] font-mono text-[#666666]">AUTOMATION</div>
          </div>

          <div className="p-8 rounded-3xl bg-white/95 backdrop-blur-md border border-[#E5E5E5] flex flex-col justify-between shadow-sm hover:border-[#FF5733]/40 transition-colors">
            <div>
              <div className="w-11 h-11 rounded-2xl bg-[#F6F6F6] text-[#111111] flex items-center justify-center mb-6">
                <HeartHandshake size={22} className="text-[#FF5733]" />
              </div>
              <h3 className="text-lg font-bold text-[#111111]">Complete Alignment</h3>
              <p className="mt-2 text-xs text-[#666666] leading-relaxed">
                You get high-speed delivery combined with the security of dedicated human partners accountable for your success.
              </p>
            </div>
            <div className="mt-6 text-[10px] font-mono text-[#111111] font-semibold">COLLABORATION</div>
          </div>
        </div>
      </div>
    </section>
  );
};

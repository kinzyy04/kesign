import React from 'react';
import { motion } from 'framer-motion';
import { XCircle, CheckCircle2, Zap } from 'lucide-react';
import { COMPARISON_DATA } from '../data/portfolioData';

export const ComparisonSection = () => {
  return (
    <section className="py-24 sm:py-32 bg-[#F6F6F6] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="h-[1px] w-12 bg-[#FF5733]" />
          <span className="text-xs uppercase font-mono tracking-widest text-[#666666]">05 / Why Kesign</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-3xl sm:text-6xl font-extrabold text-[#111111] tracking-tight">
              The Kesign Difference<span className="font-serif-italic text-[#FF5733]">.</span>
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-[#666666] max-w-xl font-normal">
              Compare traditional agency friction with our agile, engineering-driven design studio.
            </p>
          </div>
        </div>

        {/* Comparison Grid - 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Traditional Agency Card */}
          <div className="p-6 sm:p-10 rounded-3xl bg-white border border-[#E5E5E5] relative shadow-sm">
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <XCircle className="text-red-500 shrink-0 w-5 h-5" />
              <h3 className="text-lg sm:text-2xl font-bold text-[#111111]">Traditional Agency / Freelancers</h3>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <div className="p-3.5 sm:p-4 rounded-2xl bg-[#F6F6F6] border border-[#E5E5E5] flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-red-500 mt-2 shrink-0" />
                <div>
                  <div className="text-xs sm:text-sm font-bold text-[#111111]">Slow Turnaround</div>
                  <div className="text-xs text-[#666666] mt-0.5 leading-relaxed">Takes 5 to 10 business days for simple concepts.</div>
                </div>
              </div>

              <div className="p-3.5 sm:p-4 rounded-2xl bg-[#F6F6F6] border border-[#E5E5E5] flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-red-500 mt-2 shrink-0" />
                <div>
                  <div className="text-xs sm:text-sm font-bold text-[#111111]">Inconsistent Standards</div>
                  <div className="text-xs text-[#666666] mt-0.5 leading-relaxed">Delegated to rotating junior freelancers with variable quality.</div>
                </div>
              </div>

              <div className="p-3.5 sm:p-4 rounded-2xl bg-[#F6F6F6] border border-[#E5E5E5] flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-red-500 mt-2 shrink-0" />
                <div>
                  <div className="text-xs sm:text-sm font-bold text-[#111111]">Fragmented Disciplines</div>
                  <div className="text-xs text-[#666666] mt-0.5 leading-relaxed">Forced to hire separate vendors for social, branding, print, and ads.</div>
                </div>
              </div>

              <div className="p-3.5 sm:p-4 rounded-2xl bg-[#F6F6F6] border border-[#E5E5E5] flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-red-500 mt-2 shrink-0" />
                <div>
                  <div className="text-xs sm:text-sm font-bold text-[#111111]">Locked Deliverables</div>
                  <div className="text-xs text-[#666666] mt-0.5 leading-relaxed">Source files withheld or billed as expensive agency add-ons.</div>
                </div>
              </div>
            </div>
          </div>

          {/* Kesign Studio Card */}
          <div className="p-6 sm:p-10 rounded-3xl bg-white border-2 border-[#111111] relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 px-4 py-1.5 bg-[#FF5733] text-white font-bold text-[9px] sm:text-[10px] uppercase font-mono rounded-bl-2xl">
              KESIGN STUDIO
            </div>

            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <CheckCircle2 className="text-[#111111] shrink-0 w-5 h-5" />
              <h3 className="text-lg sm:text-2xl font-bold text-[#111111]">Kesign High-Velocity Studio</h3>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <div className="p-3.5 sm:p-4 rounded-2xl bg-[#F6F6F6] border border-[#E5E5E5] flex items-start gap-3">
                <Zap className="text-[#FF5733] shrink-0 mt-1 w-4 h-4" />
                <div>
                  <div className="text-xs sm:text-sm font-bold text-[#111111]">24–48h Rapid Delivery</div>
                  <div className="text-xs text-[#666666] mt-0.5 leading-relaxed">High-speed studio pipelines compress production time dramatically.</div>
                </div>
              </div>

              <div className="p-3.5 sm:p-4 rounded-2xl bg-[#F6F6F6] border border-[#E5E5E5] flex items-start gap-3">
                <Zap className="text-[#FF5733] shrink-0 mt-1 w-4 h-4" />
                <div>
                  <div className="text-xs sm:text-sm font-bold text-[#111111]">IIT Delhi Engineering Precision</div>
                  <div className="text-xs text-[#666666] mt-0.5 leading-relaxed">Rigorous typography, mathematical grid systems, and zero generic output.</div>
                </div>
              </div>

              <div className="p-3.5 sm:p-4 rounded-2xl bg-[#F6F6F6] border border-[#E5E5E5] flex items-start gap-3">
                <Zap className="text-[#FF5733] shrink-0 mt-1 w-4 h-4" />
                <div>
                  <div className="text-xs sm:text-sm font-bold text-[#111111]">09 Unified Disciplines</div>
                  <div className="text-xs text-[#666666] mt-0.5 leading-relaxed">One dedicated studio handling your entire brand, product, and digital stack.</div>
                </div>
              </div>

              <div className="p-3.5 sm:p-4 rounded-2xl bg-[#F6F6F6] border border-[#E5E5E5] flex items-start gap-3">
                <Zap className="text-[#FF5733] shrink-0 mt-1 w-4 h-4" />
                <div>
                  <div className="text-xs sm:text-sm font-bold text-[#111111]">100% Vector & Source Ownership</div>
                  <div className="text-xs text-[#666666] mt-0.5 leading-relaxed">Editable Figma, AI, PDF, and high-res master exports included standard.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { motion } from 'framer-motion';
import { XCircle, CheckCircle2, Zap } from 'lucide-react';

export const ComparisonSection = () => {
  return (
    <section className="py-24 sm:py-32 bg-[#F6F6F6] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="h-[1px] w-12 bg-[#111111]" />
          <span className="text-xs uppercase font-mono tracking-widest text-[#666666]">07 / Why Kesign</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-3xl sm:text-6xl font-extrabold text-[#111111] tracking-tight">
              The Kesign Advantage<span className="font-serif-italic text-[#666666]">.</span>
            </h2>
            <p className="mt-3 text-[9px] sm:text-sm text-[#666666] max-w-xl font-normal">
              Compare traditional agency friction with our high-performance creative workflow.
            </p>
          </div>
        </div>

        {/* Comparison Grid - Always 2 columns side by side */}
        <div className="grid grid-cols-2 gap-3 sm:gap-8">
          {/* Traditional Card */}
          <div className="p-2.5 sm:p-10 rounded-2xl sm:rounded-3xl bg-white border border-[#E5E5E5] relative shadow-sm">
            <div className="flex items-center gap-1.5 sm:gap-3 mb-4 sm:mb-8">
              <XCircle className="text-red-500 shrink-0 w-3.5 h-3.5 sm:w-5 sm:h-5" />
              <h3 className="text-[11px] sm:text-2xl font-bold text-[#111111]">Traditional Workflow</h3>
            </div>

            <div className="space-y-2 sm:space-y-4">
              <div className="p-2 sm:p-4 rounded-xl sm:rounded-2xl bg-[#F6F6F6] border border-[#E5E5E5] flex items-start gap-2 sm:gap-3">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-red-500 mt-1.5 sm:mt-2 shrink-0" />
                <div>
                  <div className="text-[10px] sm:text-sm font-bold text-[#111111]">Slow Execution</div>
                  <div className="text-[9px] sm:text-xs text-[#666666] mt-0.5 sm:mt-1 leading-tight">Takes 5 to 10 business days for basic presentation decks.</div>
                </div>
              </div>

              <div className="p-2 sm:p-4 rounded-xl sm:rounded-2xl bg-[#F6F6F6] border border-[#E5E5E5] flex items-start gap-2 sm:gap-3">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-red-500 mt-1.5 sm:mt-2 shrink-0" />
                <div>
                  <div className="text-[10px] sm:text-sm font-bold text-[#111111]">Fragmented Quality</div>
                  <div className="text-[9px] sm:text-xs text-[#666666] mt-0.5 sm:mt-1 leading-tight">Delegated to junior freelancers with inconsistent design standards.</div>
                </div>
              </div>

              <div className="p-2 sm:p-4 rounded-xl sm:rounded-2xl bg-[#F6F6F6] border border-[#E5E5E5] flex items-start gap-2 sm:gap-3">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-red-500 mt-1.5 sm:mt-2 shrink-0" />
                <div>
                  <div className="text-[10px] sm:text-sm font-bold text-[#111111]">Revision Overhead</div>
                  <div className="text-[9px] sm:text-xs text-[#666666] mt-0.5 sm:mt-1 leading-tight">Multiple back-and-forth cycles caused by misunderstandings.</div>
                </div>
              </div>

              <div className="p-2 sm:p-4 rounded-xl sm:rounded-2xl bg-[#F6F6F6] border border-[#E5E5E5] flex items-start gap-2 sm:gap-3">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-red-500 mt-1.5 sm:mt-2 shrink-0" />
                <div>
                  <div className="text-[10px] sm:text-sm font-bold text-[#111111]">Manual Repetition</div>
                  <div className="text-[9px] sm:text-xs text-[#666666] mt-0.5 sm:mt-1 leading-tight">Designers wasting hours on repetitive slide alignment.</div>
                </div>
              </div>
            </div>
          </div>

          {/* Kesign Card */}
          <div className="p-2.5 sm:p-10 rounded-2xl sm:rounded-3xl bg-white border-2 border-[#111111] relative overflow-hidden shadow-lg">
            <div className="absolute top-0 right-0 px-1.5 py-0.5 sm:px-4 sm:py-1.5 bg-[#111111] text-white font-bold text-[7px] sm:text-[10px] uppercase font-mono rounded-bl-xl sm:rounded-bl-2xl">
              RECOMMENDED
            </div>

            <div className="flex items-center gap-1.5 sm:gap-3 mb-4 sm:mb-8">
              <CheckCircle2 className="text-[#111111] shrink-0 w-3.5 h-3.5 sm:w-5 sm:h-5" />
              <h3 className="text-[11px] sm:text-2xl font-bold text-[#111111]">Kesign Workflow</h3>
            </div>

            <div className="space-y-2 sm:space-y-4">
              <div className="p-2 sm:p-4 rounded-xl sm:rounded-2xl bg-[#F6F6F6] border border-[#E5E5E5] flex items-start gap-2 sm:gap-3">
                <Zap className="text-[#111111] shrink-0 mt-0.5 sm:mt-1 w-3.5 h-3.5 sm:w-5 sm:h-5" />
                <div>
                  <div className="text-[10px] sm:text-sm font-bold text-[#111111]">Rapid 24-48h Delivery</div>
                  <div className="text-[9px] sm:text-xs text-[#666666] mt-0.5 sm:mt-1 leading-tight">High-speed design engines compress layout generation time significantly.</div>
                </div>
              </div>

              <div className="p-2 sm:p-4 rounded-xl sm:rounded-2xl bg-[#F6F6F6] border border-[#E5E5E5] flex items-start gap-2 sm:gap-3">
                <Zap className="text-[#111111] shrink-0 mt-0.5 sm:mt-1 w-3.5 h-3.5 sm:w-5 sm:h-5" />
                <div>
                  <div className="text-[10px] sm:text-sm font-bold text-[#111111]">IIT Delhi Engineer Standards</div>
                  <div className="text-[9px] sm:text-xs text-[#666666] mt-0.5 sm:mt-1 leading-tight">Rigorous visual quality, minimal editorial aesthetic, and zero compromise.</div>
                </div>
              </div>

              <div className="p-2 sm:p-4 rounded-xl sm:rounded-2xl bg-[#F6F6F6] border border-[#E5E5E5] flex items-start gap-2 sm:gap-3">
                <Zap className="text-[#111111] shrink-0 mt-0.5 sm:mt-1 w-3.5 h-3.5 sm:w-5 sm:h-5" />
                <div>
                  <div className="text-[10px] sm:text-sm font-bold text-[#111111]">Collaborative & Consistent</div>
                  <div className="text-[9px] sm:text-xs text-[#666666] mt-0.5 sm:mt-1 leading-tight">Custom design tokens guarantee every slide matches your brand identity.</div>
                </div>
              </div>

              <div className="p-2 sm:p-4 rounded-xl sm:rounded-2xl bg-[#F6F6F6] border border-[#E5E5E5] flex items-start gap-2 sm:gap-3">
                <Zap className="text-[#111111] shrink-0 mt-0.5 sm:mt-1 w-3.5 h-3.5 sm:w-5 sm:h-5" />
                <div>
                  <div className="text-[10px] sm:text-sm font-bold text-[#111111]">Human Reviewed Perfection</div>
                  <div className="text-[9px] sm:text-xs text-[#666666] mt-0.5 sm:mt-1 leading-tight">Every element manually polished before reaching your inbox.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

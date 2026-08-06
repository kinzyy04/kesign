import React from 'react';
import { motion } from 'framer-motion';
import { PROCESS_STEPS } from '../data/portfolioData';

export const ProcessSection = () => {
  return (
    <section id="process" className="py-24 sm:py-32 bg-[#F6F6F6] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="h-[1px] w-12 bg-[#111111]" />
          <span className="text-xs uppercase font-mono tracking-widest text-[#666666]">05 / Process</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <h2 className="text-4xl sm:text-6xl font-extrabold text-[#111111] tracking-tight">
            How We Work<span className="font-serif-italic font-normal text-[#666666]">.</span>
          </h2>
          <p className="max-w-md text-xs text-[#666666] font-mono uppercase tracking-wider">
            Engineered precision from discovery call to final vector handoff.
          </p>
        </div>

        {/* Process Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {PROCESS_STEPS.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="kyne-card rounded-3xl p-8 hover:border-[#111111] transition-all duration-300 relative group flex flex-col justify-between"
            >
              <div>
                {/* Step Number */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-4xl font-light font-serif-italic text-[#111111]">
                    {item.step}
                  </span>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#E5E5E5] group-hover:bg-[#111111] transition-colors" />
                </div>

                <h3 className="text-xl font-bold text-[#111111]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm text-[#666666] leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#E5E5E5] text-[10px] font-mono text-[#666666] uppercase tracking-wider">
                STAGE {index + 1} OF 6
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

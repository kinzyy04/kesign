import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export const TestimonialsSection = () => {
  return (
    <section className="py-24 sm:py-32 bg-[#F6F6F6] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 text-center">
        {/* Section Header */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="h-[1px] w-12 bg-gradient-to-r from-[#FF5733] to-[#FF8C66]" />
          <span className="text-xs uppercase font-mono tracking-widest text-[#666666]">08 / Client Stories</span>
          <span className="h-[1px] w-12 bg-gradient-to-l from-[#FF5733] to-[#FF8C66]" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="kyne-card rounded-3xl p-10 sm:p-16 relative overflow-hidden shadow-lg border border-[#E5E5E5]"
        >
          {/* Subtle Ambient Background Gradient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-[#FF5733]/10 via-[#FF8C66]/5 to-transparent rounded-full blur-[100px] pointer-events-none" />

          <p className="text-xs font-mono text-[#666666] uppercase tracking-widest mb-6">
            HONEST TRANSPARENCY
          </p>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#111111] tracking-tight leading-tight">
            "Your success story could be the <span className="font-serif-italic text-transparent bg-clip-text bg-gradient-to-r from-[#FF5733] to-[#FF8C66]">first one here</span>."
          </h2>

          <p className="mt-6 max-w-xl mx-auto text-sm sm:text-base text-[#666666] leading-relaxed">
            We don't manufacture fake testimonials. We let our pitch deck concepts, design precision, and engineering workflow speak for themselves.
            Partner with us today to launch your next flagship deck or brand campaign.
          </p>

          <div className="mt-10 inline-flex">
            <a
              href="#contact"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-[#111111] via-[#222222] to-[#111111] text-white font-bold text-xs uppercase font-mono tracking-wider hover:from-[#FF5733] hover:to-[#FF8C66] transition-all duration-300 interactive-hover flex items-center gap-2 shadow-md"
            >
              <span>Be Our Founding Client Story</span>
              <ArrowUpRight size={16} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

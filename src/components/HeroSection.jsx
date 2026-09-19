import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Sparkles } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] sm:min-h-screen flex flex-col justify-between pt-24 sm:pt-32 pb-12 overflow-hidden bg-[#F6F6F6] select-none">
      
      {/* Warm Peach & Orange Ambient Studio Dome at Bottom */}
      <div className="absolute -bottom-[220px] sm:-bottom-[280px] left-1/2 -translate-x-1/2 w-[350px] sm:w-[720px] h-[350px] sm:h-[720px] rounded-full bg-[#FF5733] blur-[80px] opacity-70 pointer-events-none z-0" />
      <div className="absolute -bottom-[160px] sm:-bottom-[200px] left-1/2 -translate-x-1/2 w-[350px] sm:w-[480px] h-[350px] sm:h-[480px] rounded-full bg-[#FF7755] blur-[60px] opacity-60 pointer-events-none z-0" />

      {/* Top Spacer */}
      <div className="w-full" />

      {/* Main Hero Content Area */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 w-full text-left">
        <div className="relative py-6 sm:py-8">
          
          {/* Subtle Grid Crosshairs */}
          <span className="absolute top-0 left-0 text-xs font-mono text-[#999999] select-none">✦</span>
          <span className="absolute top-0 right-0 text-xs font-mono text-[#999999] select-none">+</span>
          <span className="absolute bottom-0 left-0 text-xs font-mono text-[#999999] select-none">⁘</span>
          <span className="absolute bottom-0 right-0 text-xs font-mono text-[#999999] select-none">∴</span>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="px-0 sm:px-10 py-2 sm:py-4"
          >
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E5E5E5] text-[10px] sm:text-xs font-mono text-[#444444] uppercase tracking-wider mb-6 shadow-sm">
              <Sparkles size={12} className="text-[#FF5733]" />
              <span>MODERN DESIGN STUDIO · IIT DELHI FOUNDED</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-[#111111] leading-[0.95] tracking-tight font-serif-italic">
              crafting visual futures by<br />
              <span className="font-sans font-extrabold not-italic tracking-tighter">kesign</span><span className="text-[#FF5733]">.</span><br />
              <span className="font-sans font-extrabold not-italic tracking-tighter text-[#111111]">
                Studio<span className="text-[#FF5733] font-sans font-bold">.</span>
              </span><br />
              <span className="text-xl sm:text-4xl md:text-5xl lg:text-6xl font-serif-italic font-normal text-[#666666] tracking-normal block -mt-1 sm:-mt-2">
                across 09 design worlds
              </span>
            </h1>

            {/* Subcopy */}
            <p className="mt-8 max-w-2xl text-sm sm:text-xl text-[#444444] font-normal leading-relaxed font-sans">
              Kesign is a modern design studio creating high-quality visual work for brands, businesses, creators, products, and experiences. Founded by four IIT Delhi students combining human creative direction with high-speed studio workflows.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex items-center gap-4 flex-wrap">
              <a
                href="#categories"
                className="px-6 sm:px-8 py-3.5 rounded-full bg-[#111111] text-white font-bold text-xs uppercase font-mono tracking-wider hover:bg-[#FF5733] transition-all duration-300 shadow-md flex items-center gap-2 interactive-hover"
              >
                <span>Explore 09 Categories</span>
                <ArrowUpRight size={15} />
              </a>

              <a
                href="#contact"
                className="px-6 sm:px-8 py-3.5 rounded-full bg-white border border-[#E5E5E5] text-[#111111] font-bold text-xs uppercase font-mono tracking-wider hover:border-[#111111] transition-all duration-300 shadow-sm interactive-hover"
              >
                <span>Start a Project</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="relative z-10 w-full pt-8 flex flex-col items-center justify-center">
        <motion.a
          href="#work"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#111111] uppercase hover:opacity-80 transition-opacity interactive-hover bg-white/85 backdrop-blur-md px-6 py-2.5 rounded-full border border-black/10 shadow-md font-semibold"
          aria-label="Scroll down to portfolio work"
        >
          <span>[ EXPLORE PORTFOLIO WORK ]</span>
          <ArrowDown size={14} className="text-[#FF5733]" />
        </motion.a>
      </div>

    </section>
  );
};

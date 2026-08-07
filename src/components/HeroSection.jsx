import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] sm:min-h-screen flex flex-col justify-between pt-24 sm:pt-32 pb-16 overflow-hidden bg-[#F6F6F6] select-none">
      
      {/* Kyne Jang Exact Semi-Circular Glowing Orb / Dome at Bottom Center */}
      <div className="absolute -bottom-[220px] sm:-bottom-[280px] left-1/2 -translate-x-1/2 w-[350px] sm:w-[720px] h-[350px] sm:h-[720px] rounded-full bg-[#FF5733] blur-[75px] opacity-75 pointer-events-none z-0" />
      
      {/* Inner Soft Warm Peach Highlight for Depth */}
      <div className="absolute -bottom-[160px] sm:-bottom-[200px] left-1/2 -translate-x-1/2 w-[350px] sm:w-[480px] h-[350px] sm:h-[480px] rounded-full bg-[#FF7755] blur-[55px] opacity-65 pointer-events-none z-0" />

      {/* Top Spacer for Centered Layout */}
      <div className="w-full" />

      {/* Main Hero Content Area */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 w-full text-left">
        <div className="relative py-8">
          
          {/* Top-Left Crosshair */}
          <span className="absolute top-0 left-0 text-xs font-mono text-[#666666] select-none">✦</span>
          {/* Top-Right Crosshair */}
          <span className="absolute top-0 right-0 text-xs font-mono text-[#666666] select-none">+</span>
          {/* Bottom-Left Crosshair */}
          <span className="absolute bottom-0 left-0 text-xs font-mono text-[#666666] select-none">⁘</span>
          {/* Bottom-Right Crosshair */}
          <span className="absolute bottom-0 right-0 text-xs font-mono text-[#666666] select-none">∴</span>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="px-0 sm:px-12 py-4"
          >
            {/* Tag label */}
            <div className="text-xs font-mono text-[#666666] uppercase tracking-widest mb-6">
              [ CREATIVE DESIGN STUDIO · IIT DELHI ]
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-[#111111] leading-[0.95] tracking-tight font-serif-italic">
              crafting futures by<br />
              <span className="font-sans font-extrabold not-italic tracking-tighter">kesign</span><span className="text-[#FF5733]">.</span><br />
              <span className="font-sans font-extrabold not-italic tracking-tighter text-[#111111]">Design</span><span className="text-[#111111]">.</span><br />
              <span className="text-xl sm:text-4xl md:text-5xl lg:text-6xl font-serif-italic font-normal text-[#666666] tracking-normal block -mt-1 sm:-mt-2">
                by IITD Students
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-sm sm:text-xl text-[#444444] font-normal leading-relaxed font-sans">
              Founded by four engineering students from IIT Delhi. From premium pitch decks &amp; luxury brand assets to complete creative solutions — we craft designs that help you grow beyond boundaries.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Bottom Scroll Down & Explore Indicator over the Semi-Circular Orb */}
      <div className="relative z-10 w-full pt-12 flex flex-col items-center justify-center">
        <motion.a
          href="#team"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#111111] uppercase hover:opacity-80 transition-opacity interactive-hover bg-white/80 backdrop-blur-md px-6 py-2.5 rounded-full border border-black/10 shadow-md font-semibold"
        >
          <span>[ SCROLL DOWN & EXPLORE ]</span>
          <ArrowDown size={14} className="text-[#FF5733]" />
        </motion.a>
      </div>

    </section>
  );
};

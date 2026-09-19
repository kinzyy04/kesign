import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, Sparkles, ArrowUpRight } from 'lucide-react';
import { PRIMARY_CATEGORIES } from '../data/portfolioData';
import { ServiceWorkModal } from './ServiceWorkModal';

export const ServicesSection = () => {
  const [activeModalCategory, setActiveModalCategory] = useState(null);

  return (
    <section id="categories" className="py-16 sm:py-24 md:py-32 bg-[#F6F6F6] relative overflow-hidden select-none">
      
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-1/4 right-0 w-[700px] h-[550px] bg-gradient-to-bl from-[#FF5733]/15 via-[#FF7755]/10 to-transparent rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute bottom-10 left-0 w-[600px] h-[450px] bg-gradient-to-tr from-[#FF5733]/12 via-[#FF8C66]/8 to-transparent rounded-full blur-[130px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-3 sm:mb-4">
          <span className="h-[1px] w-8 sm:w-12 bg-gradient-to-r from-[#FF5733] to-[#FF8C66]" />
          <span className="text-[10px] sm:text-xs uppercase font-mono tracking-widest text-[#666666]">02 / Core Disciplines</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-16 gap-4 sm:gap-6">
          <div>
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-extrabold text-[#111111] tracking-tight">
              09 Design Worlds<span className="font-serif-italic text-[#FF5733]">.</span>
            </h2>
            <p className="mt-2 sm:mt-4 text-xs sm:text-base text-[#666666] max-w-2xl font-normal">
              From high-converting e-commerce and editorial publications to viral social suites and architectural identity systems. Click <strong className="text-[#111111]">[ View Work ]</strong> to explore real client assets inside any category.
            </p>
          </div>

          <div className="text-[10px] sm:text-xs font-mono text-[#666666] flex items-center gap-2 bg-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-[#E5E5E5] shadow-sm shrink-0 w-fit">
            <Sparkles size={13} className="text-[#FF5733]" />
            <span>9 PRIMARY CATEGORIES</span>
          </div>
        </div>

        {/* 2 Columns on Phone & Tablet, 3 Columns on Large Screens */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 md:gap-8">
          {PRIMARY_CATEGORIES.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.04 }}
              className="group rounded-2xl sm:rounded-3xl overflow-hidden border border-[#E5E5E5] bg-white shadow-sm hover:shadow-2xl hover:border-[#FF5733]/40 transition-all duration-500 flex flex-col cursor-pointer"
              onClick={() => setActiveModalCategory(cat)}
            >
              {/* Image Preview Container - Large on phone so artwork is hero */}
              <div className="relative aspect-[4/3] sm:aspect-[16/10] overflow-hidden bg-black flex items-center justify-center">
                <img
                  src={cat.bannerImage}
                  alt={cat.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

                {/* Number badge top-left */}
                <div className="absolute top-1.5 left-1.5 sm:top-4 sm:left-4 z-10">
                  <span className="px-1.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[8px] sm:text-xs font-mono font-bold uppercase bg-black/60 backdrop-blur-md text-white border border-white/20">
                    {cat.number}
                  </span>
                </div>

                {/* Stats badge top-right */}
                <div className="absolute top-1.5 right-1.5 sm:top-4 sm:right-4 z-10">
                  <span className="px-1.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[7px] sm:text-[10px] font-mono uppercase backdrop-blur-md text-white border border-white/20 bg-black/60">
                    {cat.gallery.length} ASSETS
                  </span>
                </div>

                {/* Hover overlay with Eye icon */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                  <div className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-1.5 sm:py-2.5 rounded-full bg-white text-[#111111] font-bold text-[10px] sm:text-xs font-mono uppercase tracking-wider shadow-lg">
                    <Eye size={13} className="text-[#FF5733]" />
                    <span className="hidden sm:inline">View Category Work</span>
                    <span className="sm:hidden">View Work</span>
                  </div>
                </div>
              </div>

              {/* Card Body - Compact on mobile to keep focus on design */}
              <div className="flex flex-col flex-1 p-2.5 sm:p-6 md:p-7">
                {/* Tag */}
                <span className="text-[7.5px] sm:text-[10px] font-mono uppercase tracking-wider sm:tracking-widest mb-0.5 sm:mb-2 text-[#888888] truncate">
                  {cat.tag}
                </span>

                {/* Title */}
                <h3 className="text-xs sm:text-xl md:text-2xl font-bold sm:font-extrabold text-[#111111] tracking-tight leading-snug sm:leading-tight mb-1 sm:mb-3 group-hover:text-[#FF5733] transition-colors duration-300 line-clamp-1 sm:line-clamp-none">
                  {cat.title}
                </h3>

                {/* Description - subtle and brief on mobile */}
                <p className="text-[9px] sm:text-xs md:text-sm text-[#666666] leading-relaxed flex-1 mb-1.5 sm:mb-6 line-clamp-1 sm:line-clamp-none">
                  {cat.shortDesc}
                </p>

                {/* Action Bar */}
                <div className="pt-2 sm:pt-4 border-t border-[#F0F0F0] flex items-center justify-between gap-1">
                  <button
                    onClick={(e) => { e.stopPropagation(); setActiveModalCategory(cat); }}
                    className="inline-flex items-center gap-1 sm:gap-2 px-2.5 sm:px-4 py-1 sm:py-2 rounded-full bg-[#111111] text-white font-bold text-[8.5px] sm:text-xs font-mono uppercase tracking-wider hover:bg-[#FF5733] transition-all duration-300"
                  >
                    <Eye size={10} className="sm:w-3.5 sm:h-3.5" />
                    <span>View Work</span>
                  </button>

                  <div className="text-[8.5px] sm:text-[11px] font-mono text-[#888888] flex items-center gap-0.5 sm:gap-1 group-hover:text-[#FF5733] transition-colors">
                    <span className="hidden sm:inline">EXPLORE</span>
                    <ArrowUpRight size={11} className="sm:w-3.5 sm:h-3.5" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Category Work Modal */}
      <ServiceWorkModal
        service={activeModalCategory}
        onClose={() => setActiveModalCategory(null)}
      />

    </section>
  );
};

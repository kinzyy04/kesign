import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, Sparkles, ArrowUpRight } from 'lucide-react';
import { PRIMARY_CATEGORIES } from '../data/portfolioData';
import { ServiceWorkModal } from './ServiceWorkModal';

export const ServicesSection = () => {
  const [activeModalCategory, setActiveModalCategory] = useState(null);

  return (
    <section id="categories" className="py-24 sm:py-32 bg-[#F6F6F6] relative overflow-hidden select-none">
      
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-1/4 right-0 w-[700px] h-[550px] bg-gradient-to-bl from-[#FF5733]/15 via-[#FF7755]/10 to-transparent rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute bottom-10 left-0 w-[600px] h-[450px] bg-gradient-to-tr from-[#FF5733]/12 via-[#FF8C66]/8 to-transparent rounded-full blur-[130px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="h-[1px] w-12 bg-gradient-to-r from-[#FF5733] to-[#FF8C66]" />
          <span className="text-xs uppercase font-mono tracking-widest text-[#666666]">02 / Core Disciplines</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-extrabold text-[#111111] tracking-tight">
              09 Design Worlds<span className="font-serif-italic text-[#FF5733]">.</span>
            </h2>
            <p className="mt-4 text-base text-[#666666] max-w-2xl font-normal">
              From high-converting e-commerce and editorial publications to viral social suites and architectural identity systems. Click <strong className="text-[#111111]">[ View Work ]</strong> to explore real client assets inside any category.
            </p>
          </div>

          <div className="text-xs font-mono text-[#666666] flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-[#E5E5E5] shadow-sm shrink-0">
            <Sparkles size={14} className="text-[#FF5733]" />
            <span>9 PRIMARY CATEGORIES</span>
          </div>
        </div>

        {/* 3-Column Card Grid for the 9 Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {PRIMARY_CATEGORIES.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group rounded-3xl overflow-hidden border border-[#E5E5E5] bg-white shadow-sm hover:shadow-2xl hover:border-[#FF5733]/40 transition-all duration-500 flex flex-col cursor-pointer"
              onClick={() => setActiveModalCategory(cat)}
            >
              {/* Image Preview Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-black flex items-center justify-center">
                <img
                  src={cat.bannerImage}
                  alt={cat.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

                {/* Number badge top-left */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase bg-black/60 backdrop-blur-md text-white border border-white/20">
                    {cat.number}
                  </span>
                </div>

                {/* Stats badge top-right */}
                <div className="absolute top-4 right-4 z-10">
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase backdrop-blur-md text-white border border-white/20 bg-black/60">
                    {cat.gallery.length} ASSETS
                  </span>
                </div>

                {/* Hover overlay with Eye icon */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                  <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#111111] font-bold text-xs font-mono uppercase tracking-wider shadow-lg">
                    <Eye size={14} className="text-[#FF5733]" />
                    <span>View Category Work</span>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="flex flex-col flex-1 p-6 sm:p-7">
                {/* Tag */}
                <span className="text-[10px] font-mono uppercase tracking-widest mb-2 text-[#888888]">
                  {cat.tag}
                </span>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#111111] tracking-tight leading-tight mb-3 group-hover:text-[#FF5733] transition-colors duration-300">
                  {cat.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#666666] leading-relaxed flex-1 mb-6">
                  {cat.shortDesc}
                </p>

                {/* Action Bar */}
                <div className="pt-4 border-t border-[#F0F0F0] flex items-center justify-between">
                  <button
                    onClick={(e) => { e.stopPropagation(); setActiveModalCategory(cat); }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#111111] text-white font-bold text-xs font-mono uppercase tracking-wider hover:bg-[#FF5733] transition-all duration-300"
                  >
                    <Eye size={13} />
                    <span>View Work</span>
                  </button>

                  <div className="text-[11px] font-mono text-[#888888] flex items-center gap-1 group-hover:text-[#FF5733] transition-colors">
                    <span>EXPLORE</span>
                    <ArrowUpRight size={14} />
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

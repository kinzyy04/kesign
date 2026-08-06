import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

// All gallery images from the 9 service verticals including real uploaded work samples
const allWorkImages = [
  // Real Uploaded Work - Teaching Decks & Notes
  { id: 'w-1', src: '/assets/work_deck_1.jpg', label: 'NEET Biology Deck' },
  { id: 'w-2', src: '/assets/work_deck_2.jpg', label: 'Poem Analysis Slide' },
  { id: 'w-3', src: '/assets/work_deck_3.jpg', label: 'Physics Trajectory Deck' },
  // Real Uploaded Work - Teaching Assets
  { id: 'w-4', src: '/assets/work_teaching_assests_10.jpg', label: 'Formula Cheat Sheet' },
  { id: 'w-5', src: '/assets/work_teaching_assests_11.jpg', label: 'Physics Revision Notes' },
  { id: 'w-6', src: '/assets/work_teaching_assests_12.jpg', label: 'Python Recursion Sheet' },
  { id: 'w-7', src: '/assets/work_teaching_assests_13.jpg', label: 'Poem Themes Study Note' },
  // Real Uploaded Work - Social Media Posts
  { id: 'w-8', src: '/assets/work_post_6.jpg', label: 'Active Recall Carousel' },
  { id: 'w-9', src: '/assets/work_post_7.jpg', label: 'Promotional Post' },
  // Real Uploaded Work - Digital Assets & Strategy
  { id: 'w-10', src: '/assets/work_digital_assests_4.jpg', label: 'Academic Planner Guide' },
  { id: 'w-11', src: '/assets/work_digital_assests_5.jpg', label: 'UPSC Polity Strategy' },
  // Real Uploaded Work - Promotional Posters
  { id: 'w-12', src: '/assets/work_posters_8.jpg', label: 'JEE 2027 Batch Poster' },
  { id: 'w-13', src: '/assets/work_posters_9.jpg', label: 'Studio Promotional Banner' },
  // Curated High-End Design Verticals — YouTube Thumbnails (real work samples)
  { id: 'w-14', src: '/assets/yt_thumbnail_1.jpg', label: 'YouTube Thumbnails' },
  { id: 'w-15', src: '/assets/yt_thumbnail_2.jpg', label: 'YouTube Thumbnails' },
  { id: 'w-27', src: '/assets/yt_thumbnail_3.jpg', label: 'YouTube Thumbnails' },
  { id: 'w-26', src: '/assets/logo_aurelia.jpg', label: 'Channel Branding' },
  { id: 'w-16', src: '/assets/logo_a_lettermark.jpg', label: 'Channel Branding' },
  { id: 'w-17', src: '/assets/logo_s_swirl.jpg', label: 'Channel Branding' },
  { id: 'w-23', src: '/assets/logo_olea_organics.jpg', label: 'Channel Branding' },
  { id: 'w-18', src: '/assets/project_fashion_carousel.jpg', label: 'Social Media' },
  { id: 'w-21', src: '/assets/work_merch_tshirt_1.png', label: 'Merchandise' },
  { id: 'w-24', src: '/assets/work_merch_kit_2.jpg', label: 'Merchandise' },
  { id: 'w-25', src: '/assets/work_merch_bottle_4.jpg', label: 'Merchandise' },
  { id: 'w-22', src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=900&auto=format&fit=crop', label: 'Custom Design' },
];

// Interleave items evenly across row 1 and row 2 for balanced visual variety
const row1 = allWorkImages.filter((_, i) => i % 2 === 0);
const row2 = allWorkImages.filter((_, i) => i % 2 !== 0);

export const WorkRibbonShowcase = () => {
  const row1Triple = [...row1, ...row1, ...row1];
  const row2Triple = [...row2, ...row2, ...row2];

  return (
    <section className="py-20 bg-[#F6F6F6] relative overflow-hidden select-none">

      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="h-[1px] w-12 bg-[#111111]" />
            <span className="text-xs uppercase font-mono tracking-widest text-[#666666]">03 / Featured Visuals</span>
          </div>
          <h2 className="text-2xl sm:text-5xl font-extrabold text-[#111111] tracking-tight">
            Work in Motion<span className="font-serif-italic text-[#FF5733]">.</span>
          </h2>
        </div>

        <div className="text-xs font-mono text-[#666666] flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-[#E5E5E5] shadow-sm">
          <Sparkles size={14} className="text-[#FF5733]" />
          <span>FEATURED CLIENT &amp; TEACHING WORKS</span>
        </div>
      </div>

      {/* Tilted Ribbon Container */}
      <div className="relative w-full overflow-hidden py-10 -rotate-1 sm:-rotate-3 scale-[1.03]">

        {/* Edge fades */}
        <div className="absolute top-0 left-0 bottom-0 w-16 sm:w-48 bg-gradient-to-r from-[#F6F6F6] to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 right-0 bottom-0 w-16 sm:w-48 bg-gradient-to-l from-[#F6F6F6] to-transparent z-20 pointer-events-none" />

        {/* Row 1 — scrolls left */}
        <div className="flex w-max gap-6 mb-6 animate-marquee-left">
          {row1Triple.map((item, idx) => (
            <motion.div
              key={`r1-${item.id}-${idx}`}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ duration: 0.25 }}
              className="w-64 sm:w-[380px] shrink-0 rounded-2xl overflow-hidden shadow-md border border-[#E5E5E5] bg-white group relative"
            >
              {/* Uniform aspect-ratio frame */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-black flex items-center justify-center">
                <img
                  src={item.src}
                  alt={item.label}
                  className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
              </div>

              {/* Category Pill Tag */}
              <div className="absolute top-3 left-3 z-10">
                <span className="px-3 py-1 rounded-full text-[9px] font-mono uppercase bg-white/90 backdrop-blur-md text-[#111111] font-semibold border border-[#E5E5E5] shadow-sm">
                  {item.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Row 2 — scrolls right */}
        <div className="flex w-max gap-6 animate-marquee-right">
          {row2Triple.map((item, idx) => (
            <motion.div
              key={`r2-${item.id}-${idx}`}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ duration: 0.25 }}
              className="w-64 sm:w-[380px] shrink-0 rounded-2xl overflow-hidden shadow-md border border-[#E5E5E5] bg-white group relative"
            >
              {/* Uniform aspect-ratio frame */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-black flex items-center justify-center">
                <img
                  src={item.src}
                  alt={item.label}
                  className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
              </div>

              {/* Category Pill Tag */}
              <div className="absolute top-3 left-3 z-10">
                <span className="px-3 py-1 rounded-full text-[9px] font-mono uppercase bg-white/90 backdrop-blur-md text-[#111111] font-semibold border border-[#E5E5E5] shadow-sm">
                  {item.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

    </section>
  );
};

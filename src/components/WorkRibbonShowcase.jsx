import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Eye } from 'lucide-react';
import { PORTFOLIO_PROJECTS } from '../data/portfolioData';

// Curate showcase items across the 9 primary categories with real optimized assets
const ribbonItems = [
  { id: 'r-1', src: '/assets/portfolio/advertising-nova-rift-billboard.webp', label: 'Advertising Billboard', category: '01 Advertising', alt: 'NOVA The Rift Billboard' },
  { id: 'r-2', src: '/assets/portfolio/branding-aurelia-botanicals-identity.webp', label: 'Aurelia Botanicals', category: '02 Branding', alt: 'Aurelia Botanicals Brand Identity' },
  { id: 'r-3', src: '/assets/portfolio/ecommerce-auren-botanical-serum.webp', label: 'AUREN Serum Visual', category: '03 Products & E-Com', alt: 'AUREN Botanical Serum Product Visual' },
  { id: 'r-4', src: '/assets/portfolio/editorial-architectural-magazine-spread.webp', label: 'STRUCT Magazine', category: '04 Editorials', alt: 'STRUCT Modern Architecture Editorial Magazine' },
  { id: 'r-5', src: '/assets/portfolio/events-creative-summit-poster.webp', label: 'Design Summit 2026', category: '05 Events', alt: 'Prism Design Summit Poster' },
  { id: 'r-6', src: '/assets/portfolio/infographics-data-visualization-matrix.webp', label: 'Process Matrix', category: '06 Infographics', alt: 'Nexus Process Architecture Infographic' },
  { id: 'r-7', src: '/assets/portfolio/pod-club-1994-tote-front.webp', label: 'CLUB 1994 Tote', category: '07 Print-on-Demand', alt: 'CLUB 1994 Streetwear Canvas Tote' },
  { id: 'r-8', src: '/assets/portfolio/restaurant-gulmohar-house-menu.webp', label: 'Gulmohar House Menu', category: '08 Restaurant & Café', alt: 'Gulmohar House Dining Menu' },
  { id: 'r-9', src: '/assets/portfolio/social-creator-brand-suite.webp', label: 'Creator Brand Suite', category: '09 Social Media', alt: 'Nexus Media Creator Brand Suite' },
  { id: 'r-10', src: '/assets/portfolio/advertising-clay-co-standee.webp', label: 'Clay & Co Standee', category: '01 Advertising', alt: 'Clay & Co Editorial Standee' },
  { id: 'r-11', src: '/assets/portfolio/branding-merchandise-matte-bottle.webp', label: 'Brand Merchandise', category: '02 Branding', alt: 'Matte Bottle Brand Merchandise' },
  { id: 'r-12', src: '/assets/portfolio/ecommerce-form-linen-apparel.webp', label: 'FORM / 01 Linen', category: '03 Products & E-Com', alt: 'FORM 01 Linen Lookbook' },
  { id: 'r-13', src: '/assets/portfolio/editorial-minimalist-publication-cover.webp', label: 'Publication Cover', category: '04 Editorials', alt: 'Minimalist Publication Cover Layout' },
  { id: 'r-14', src: '/assets/portfolio/pod-offline-tee-back-graphic.webp', label: 'OFFLINE Back Graphic', category: '07 Print-on-Demand', alt: 'OFFLINE Cyber Minimalist T-Shirt Graphic' },
  { id: 'r-15', src: '/assets/portfolio/restaurant-mellow-milk-cafe-menu.webp', label: 'Mellow & Milk Menu', category: '08 Restaurant & Café', alt: 'Mellow and Milk Cafe Menu' },
  { id: 'r-16', src: '/assets/portfolio/social-youtube-thumbnail-tech.webp', label: 'Tech Video Thumbnail', category: '09 Social Media', alt: 'Tech YouTube Thumbnail' }
];

const row1 = ribbonItems.filter((_, i) => i % 2 === 0);
const row2 = ribbonItems.filter((_, i) => i % 2 !== 0);

export const WorkRibbonShowcase = ({ onSelectProject }) => {
  const row1Triple = [...row1, ...row1, ...row1];
  const row2Triple = [...row2, ...row2, ...row2];

  const handleItemClick = (item) => {
    // Find matching project in PORTFOLIO_PROJECTS if available
    const matched = PORTFOLIO_PROJECTS.find(p => p.image === item.src || p.title.toLowerCase().includes(item.label.toLowerCase())) || PORTFOLIO_PROJECTS[0];
    if (onSelectProject) {
      onSelectProject(matched);
    }
  };

  return (
    <section id="work" className="py-20 bg-[#F6F6F6] relative overflow-hidden select-none">
      
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[350px] bg-gradient-to-r from-[#FF5733]/10 to-transparent rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[350px] bg-gradient-to-l from-[#FF7755]/10 to-transparent rounded-full blur-[120px] pointer-events-none" />

      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 mb-12 relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <span className="h-[1px] w-12 bg-[#FF5733]" />
            <span className="text-xs uppercase font-mono tracking-widest text-[#666666]">01 / Portfolio Ribbon</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#111111] tracking-tight">
            Selected Studio Work<span className="font-serif-italic text-[#FF5733]">.</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#666666] max-w-xl font-normal">
            A continuous gallery across all 9 design disciplines. Click on any asset to view detailed project specifications.
          </p>
        </div>

        <div className="text-xs font-mono text-[#666666] flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-[#E5E5E5] shadow-sm shrink-0">
          <Sparkles size={14} className="text-[#FF5733]" />
          <span>ALL 9 CATEGORIES REPRESENTED</span>
        </div>
      </div>

      {/* Row 1 — Moving Left */}
      <div className="relative w-full overflow-hidden mb-4 sm:mb-6">
        <div className="flex gap-3 sm:gap-6 animate-marquee-left w-max">
          {row1Triple.map((item, idx) => (
            <div
              key={`row1-${idx}`}
              onClick={() => handleItemClick(item)}
              className="group relative w-64 sm:w-80 md:w-96 aspect-[16/10] rounded-2xl overflow-hidden bg-black border border-[#E5E5E5] shrink-0 cursor-pointer shadow-sm hover:shadow-xl hover:border-[#FF5733]/50 transition-all duration-300"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              <div className="absolute top-3 left-3">
                <span className="px-2.5 py-1 rounded-full text-[9px] font-mono uppercase bg-black/60 backdrop-blur-md text-white border border-white/20">
                  {item.category}
                </span>
              </div>

              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <span className="text-xs font-bold text-white tracking-tight truncate mr-2">{item.label}</span>
                <div className="w-7 h-7 rounded-full bg-white text-[#111111] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 shrink-0">
                  <Eye size={13} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 — Moving Right */}
      <div className="relative w-full overflow-hidden">
        <div className="flex gap-3 sm:gap-6 animate-marquee-right w-max">
          {row2Triple.map((item, idx) => (
            <div
              key={`row2-${idx}`}
              onClick={() => handleItemClick(item)}
              className="group relative w-64 sm:w-80 md:w-96 aspect-[16/10] rounded-2xl overflow-hidden bg-black border border-[#E5E5E5] shrink-0 cursor-pointer shadow-sm hover:shadow-xl hover:border-[#FF5733]/50 transition-all duration-300"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              <div className="absolute top-3 left-3">
                <span className="px-2.5 py-1 rounded-full text-[9px] font-mono uppercase bg-black/60 backdrop-blur-md text-white border border-white/20">
                  {item.category}
                </span>
              </div>

              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <span className="text-xs font-bold text-white tracking-tight truncate mr-2">{item.label}</span>
                <div className="w-7 h-7 rounded-full bg-white text-[#111111] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 shrink-0">
                  <Eye size={13} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

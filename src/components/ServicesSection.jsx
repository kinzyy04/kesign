import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, Sparkles } from 'lucide-react';
import { ServiceWorkModal } from './ServiceWorkModal';

export const ServicesSection = () => {
  const [activeModal, setActiveModal] = useState(null);

  const capabilities = [
    {
      id: 'youtube-thumbnail',
      number: '(01)',
      title: 'YouTube Thumbnail Design',
      tag: 'HIGH-CLICK VISUALS',
      description: 'Eye-catching, scroll-stopping thumbnails engineered for maximum CTR — bold typography, vibrant colors, and strategic composition.',
      bannerImage: '/assets/yt_thumbnail_1.jpg',
      stats: 'HIGH CTR DESIGNS',
      gallery: [
        '/assets/yt_thumbnail_1.jpg',
        '/assets/yt_thumbnail_2.jpg',
        '/assets/yt_thumbnail_3.jpg',
      ],
    },
    {
      id: 'channel-branding',
      number: '(02)',
      title: 'Channel Branding',
      tag: 'LOGO · BANNER · IDENTITY',
      description: 'Complete channel identity — custom logos, banners, end screens, watermarks, and brand guidelines that make your channel unforgettable.',
      bannerImage: '/assets/logo_aurelia.jpg',
      stats: 'FULL BRAND SYSTEM',
      gallery: [
        '/assets/logo_aurelia.jpg',
        '/assets/logo_a_lettermark.jpg',
        '/assets/logo_s_swirl.jpg',
        '/assets/logo_olea_organics.jpg',
      ],
    },
    {
      id: 'social-media',
      number: '(03)',
      title: 'Social Media Creatives',
      tag: 'POSTS · CAROUSELS',
      description: 'High-conversion posts and editorial carousels for Instagram, LinkedIn, and beyond — designed to build authority and drive engagement.',
      bannerImage: '/assets/work_post_6.jpg',
      stats: '8-10 SLIDE CAROUSELS',
      gallery: [
        '/assets/work_post_6.jpg',
        '/assets/work_post_7.jpg',
        '/assets/project_fashion_carousel.jpg',
      ],
    },
    {
      id: 'presentations',
      number: '(04)',
      title: 'Presentation, Pitch & Teaching Decks',
      tag: 'SLIDES · PITCH · TEACHING',
      description: 'Investor-ready pitch decks, polished teaching presentations, and high-stakes keynotes — built to inform, impress, and convert.',
      bannerImage: '/assets/work_deck_1.jpg',
      stats: '18+ SLIDE DECKS',
      gallery: [
        '/assets/work_deck_1.jpg',
        '/assets/work_deck_2.jpg',
        '/assets/work_deck_3.jpg',
      ],
    },
    {
      id: 'teaching-assets',
      number: '(05)',
      title: 'Teaching Assets',
      tag: 'WORKSHEETS · NOTES · ASSESSMENTS',
      description: 'Beautifully designed worksheets, study notes, assessments, and educational handouts that make learning clear and engaging.',
      bannerImage: '/assets/work_teaching_assests_10.jpg',
      stats: 'EDITABLE TEMPLATES',
      gallery: [
        '/assets/work_teaching_assests_10.jpg',
        '/assets/work_teaching_assests_11.jpg',
        '/assets/work_teaching_assests_12.jpg',
        '/assets/work_teaching_assests_13.jpg',
      ],
    },
    {
      id: 'digital-assets',
      number: '(06)',
      title: 'Digital Assets',
      tag: 'PLANNERS · GUIDES · E-BOOKS',
      description: 'Premium digital products — planners, resource guides, templates, and e-books that elevate your brand and generate passive income.',
      bannerImage: '/assets/work_digital_assests_4.jpg',
      stats: 'DIGITAL PRODUCTS',
      gallery: [
        '/assets/work_digital_assests_4.jpg',
        '/assets/work_digital_assests_5.jpg',
      ],
    },
    {
      id: 'promotional',
      number: '(07)',
      title: 'Promotional Creatives',
      tag: 'POSTERS · FLYERS · BANNERS',
      description: 'Bold, attention-grabbing posters, flyers, and banners for events, launches, and campaigns — print-ready and digital-optimised.',
      bannerImage: '/assets/work_posters_8.jpg',
      stats: 'PRINT & DIGITAL',
      gallery: [
        '/assets/work_posters_8.jpg',
        '/assets/work_posters_9.jpg',
      ],
    },
    {
      id: 'merchandise',
      number: '(08)',
      title: 'Merchandise & Digital Product Design',
      tag: 'MERCH · DIGITAL PRODUCTS',
      description: 'From custom merch mockups and packaging to digital product covers — designs that sell your brand in the physical and digital world.',
      bannerImage: '/assets/work_merch_tshirt_1.png',
      stats: 'BRAND MERCHANDISE',
      gallery: [
        '/assets/work_merch_tshirt_1.png',
        '/assets/work_merch_kit_2.jpg',
        '/assets/work_merch_tshirt_3.jpg',
        '/assets/work_merch_bottle_4.jpg',
      ],
    },
    {
      id: 'custom',
      number: '(09)',
      title: 'Custom Design Solutions',
      tag: 'TAILORED TO YOUR BRAND',
      description: 'Have something unique in mind? We craft fully bespoke design solutions tailored precisely to your brand vision, audience, and goals.',
      bannerImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
      stats: 'FULLY BESPOKE',
      gallery: [
        'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1400&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1400&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?q=80&w=1400&auto=format&fit=crop',
      ],
    },
  ];

  return (
    <section id="services" className="py-24 sm:py-32 bg-[#F6F6F6] relative overflow-hidden select-none">
      
      {/* Background Ambient Orange Gradient Blobs */}
      <div className="absolute top-1/4 right-0 w-[700px] h-[550px] bg-gradient-to-bl from-[#FF5733]/18 via-[#FF7755]/10 to-transparent rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute bottom-10 left-0 w-[600px] h-[450px] bg-gradient-to-tr from-[#FF5733]/12 via-[#FF8C66]/8 to-transparent rounded-full blur-[130px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="h-[1px] w-12 bg-gradient-to-r from-[#FF5733] to-[#FF8C66]" />
          <span className="text-xs uppercase font-mono tracking-widest text-[#666666]">04 / Capabilities & Portfolio</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-[#111111] tracking-tight">
              What We Build<span className="font-serif-italic text-[#FF5733]">.</span>
            </h2>
            <p className="mt-4 text-base text-[#666666] max-w-xl font-normal">
              Nine specialised design verticals — click <strong className="text-[#111111]">[ View Work ]</strong> on any card to see real client work &amp; design samples.
            </p>
          </div>

          <div className="text-xs font-mono text-[#666666] flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-[#E5E5E5] shadow-sm">
            <Sparkles size={14} className="text-[#FF5733]" />
            <span>9 DESIGN VERTICALS</span>
          </div>
        </div>

        {/* 3-Column Card Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {capabilities.map((cap, idx) => (
            <motion.div
              key={cap.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              className="group rounded-3xl overflow-hidden border border-[#E5E5E5] bg-white shadow-sm hover:shadow-xl hover:border-[#FF5733]/30 transition-all duration-500 flex flex-col cursor-pointer"
              onClick={() => setActiveModal(cap)}
            >
              {/* Image */}
              <div className="relative aspect-[16/9] overflow-hidden bg-black flex items-center justify-center">
                <img
                  src={cap.bannerImage}
                  alt={cap.title}
                  className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />

                {/* Number badge top-left */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="text-sm font-serif-italic text-white/80">{cap.number}</span>
                </div>

                {/* Stats badge top-right */}
                <div className="absolute top-4 right-4 z-10">
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase backdrop-blur-md text-white border border-white/20 bg-black/60">
                    {cap.stats}
                  </span>
                </div>

                {/* Hover overlay with Eye icon */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                  <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#111111] font-bold text-xs font-mono uppercase tracking-wider shadow-lg">
                    <Eye size={14} />
                    <span>View Work</span>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="flex flex-col flex-1 p-3 sm:p-6">
                {/* Tag */}
                <span className="text-[8px] sm:text-[10px] font-mono uppercase tracking-widest mb-1.5 sm:mb-3 text-[#999999] line-clamp-1">
                  {cap.tag}
                </span>

                {/* Title */}
                <h3 className="text-sm sm:text-xl font-extrabold text-[#111111] tracking-tight leading-tight mb-1.5 sm:mb-3 group-hover:text-[#FF5733] transition-colors duration-300">
                  {cap.title}
                </h3>

                {/* Description */}
                <p className="text-[10px] sm:text-xs text-[#666666] leading-relaxed flex-1 mb-3 sm:mb-5 line-clamp-3 sm:line-clamp-none">
                  {cap.description}
                </p>

                {/* View Work button */}
                <div>
                  <button
                    onClick={(e) => { e.stopPropagation(); setActiveModal(cap); }}
                    className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-1.5 sm:py-2.5 rounded-full bg-[#111111] text-white font-bold text-[10px] sm:text-xs font-mono uppercase tracking-wider hover:bg-[#FF5733] transition-all duration-300"
                  >
                    <Eye size={11} className="sm:w-[13px] sm:h-[13px]" />
                    <span>View</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Service Work Modal */}
      <ServiceWorkModal
        service={activeModal}
        onClose={() => setActiveModal(null)}
      />

    </section>
  );
};

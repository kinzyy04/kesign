import React, { useState, useEffect } from 'react';
import { Star, Quote, PlusCircle, Sparkles } from 'lucide-react';
import { AddReviewModal } from './AddReviewModal';

const DEFAULT_REVIEWS = [
  {
    id: "rev-1",
    name: "Aarav Singhania",
    role: "CMO, Nova Mobility",
    categoryNumber: "01",
    service: "Advertising & Marketing",
    text: "The outdoor billboard campaign Kesign crafted for our product launch had incredible visual weight. The high-contrast typography and cinematic layout made our launch impossible to miss across Delhi NCR.",
    stars: 5,
    initials: "AS"
  },
  {
    id: "rev-2",
    name: "Devika Rao",
    role: "Founder, Aurelia Botanicals",
    categoryNumber: "02",
    service: "Branding & Identity",
    text: "Kesign built our entire brand identity system from scratch — logo marks, typography rules, packaging tokens, and stationery. The design sophistication easily matches multi-million dollar luxury studios.",
    stars: 5,
    initials: "DR"
  },
  {
    id: "rev-3",
    name: "Kavya Patel",
    role: "D2C Brand Director, Form Living",
    categoryNumber: "03",
    service: "Products & E-Commerce",
    text: "Our Shopify and Amazon conversion rates jumped by 34% after revamping our hero renders and feature infographics with Kesign. The clean product lighting and macro callouts look stellar.",
    stars: 5,
    initials: "KP"
  },
  {
    id: "rev-4",
    name: "Dr. Alok Sen",
    role: "Editor-in-Chief, ArchDesign Journal",
    categoryNumber: "04",
    service: "Editorials & Publishing",
    text: "Designing a 48-page architectural monograph with strict typographic grids is no easy feat. Kesign delivered pure editorial perfection — balanced whitespace, sharp captions, and flawless print spreads.",
    stars: 5,
    initials: "AS"
  },
  {
    id: "rev-5",
    name: "Siddharth Menon",
    role: "Convenor, National Creative Summit",
    categoryNumber: "05",
    service: "Events & Experiences",
    text: "From stage backdrops and illuminated standees to VIP passes and speaker badges, the visual atmosphere was magnetic. Attendees kept taking photos with the event branding backdrop all day.",
    stars: 5,
    initials: "SM"
  },
  {
    id: "rev-6",
    name: "Rhea Chawla",
    role: "Principal, DeepTech Ventures",
    categoryNumber: "06",
    service: "Infographics & Information Design",
    text: "They transformed our dense 20-page cloud orchestration architecture into clear, intuitive diagrams that seed investors understood in seconds. We closed our seed round 2 weeks later.",
    stars: 5,
    initials: "RC"
  },
  {
    id: "rev-7",
    name: "Kabir Mathur",
    role: "Creative Director, CLUB 1994 Apparel",
    categoryNumber: "07",
    service: "Print-on-Demand",
    text: "Sold out our first drop of heavyweight streetwear tees and canvas totes in 48 hours. The vector typography and screenprint-ready asset preparation saved us weeks of production hassle.",
    stars: 5,
    initials: "KM"
  },
  {
    id: "rev-8",
    name: "Meera Oberoi",
    role: "Hospitality Lead, Gulmohar House",
    categoryNumber: "08",
    service: "Restaurant & Café",
    text: "Our dinner and beverage menus look like luxury art pieces. Guests frequently compliment the physical menu layout and aesthetic typography before even placing their order.",
    stars: 5,
    initials: "MO"
  },
  {
    id: "rev-9",
    name: "Tanmay Bansal",
    role: "Creator & Tech Founder",
    categoryNumber: "09",
    service: "Social Media Creatives",
    text: "Our YouTube thumbnail CTR doubled from 4.2% to 8.9% within three weeks of working with Kesign. Their carousel layouts consistently drive thousands of saves and profile visits.",
    stars: 5,
    initials: "TB"
  }
];

const LOCAL_STORAGE_KEY = 'kesign_custom_reviews_v1';

const StarRating = ({ count }) => (
  <div className="flex gap-0.5 mb-2">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`w-3 h-3 ${
          i < count
            ? 'fill-[#FF5733] text-[#FF5733]'
            : 'fill-transparent text-white/20'
        }`}
      />
    ))}
  </div>
);

export const TestimonialsMarquee = () => {
  const [reviewsList, setReviewsList] = useState(DEFAULT_REVIEWS);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Load custom reviews from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setReviewsList([...parsed, ...DEFAULT_REVIEWS]);
        }
      }
    } catch (e) {
      console.warn('Could not load custom reviews', e);
    }
  }, []);

  const handleAddReview = (newReview) => {
    const formatted = {
      ...newReview,
      initials: newReview.name
        ? newReview.name
            .split(' ')
            .map((n) => n[0])
            .join('')
            .toUpperCase()
            .slice(0, 2)
        : 'CL'
    };

    setReviewsList((prev) => {
      const updated = [formatted, ...prev];
      try {
        const customOnly = updated.filter((r) => r.isCustom);
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(customOnly));
      } catch (e) {
        console.warn('Could not persist review to storage', e);
      }
      return updated;
    });
  };

  // Double the array for smooth infinite continuous scrolling
  const doubled = [...reviewsList, ...reviewsList];

  return (
    <section id="reviews" className="py-24 bg-[#111111] relative overflow-hidden select-none border-t border-b border-white/5">
      {/* Background glowing orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#FF5733]/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#FF5733] animate-pulse" />
              <span className="text-xs uppercase font-mono tracking-widest text-[#FF5733]">
                Verified Client Words
              </span>
              <span className="text-xs font-mono text-white/40">
                · 09 Core Design Worlds
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
              What founders & leaders say about <span className="text-[#FF5733]">Kesign.</span>
            </h2>
          </div>

          {/* Add Review Button */}
          <div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="group inline-flex items-center gap-2.5 px-5 py-3 rounded-full bg-white/5 hover:bg-[#FF5733] border border-white/15 hover:border-[#FF5733] text-white text-xs font-mono font-semibold uppercase tracking-wider transition-all duration-300 hover:shadow-lg hover:shadow-[#FF5733]/25 cursor-pointer"
            >
              <PlusCircle size={15} className="text-[#FF5733] group-hover:text-white transition-colors" />
              <span>Add a Review</span>
              <Sparkles size={13} className="text-[#FF5733] group-hover:text-white transition-colors opacity-70 group-hover:opacity-100" />
            </button>
          </div>
        </div>
      </div>

      {/* Marquee wrapper with gradient edge fades */}
      <div className="relative w-full overflow-hidden">
        {/* Left fade gradient */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-[#111111] via-[#111111]/90 to-transparent z-20 pointer-events-none" />
        {/* Right fade gradient */}
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-[#111111] via-[#111111]/90 to-transparent z-20 pointer-events-none" />

        {/* Scrolling Belt Track */}
        <div className="flex gap-5 marquee-track py-2">
          {doubled.map((review, idx) => (
            <div
              key={`${review.id}-${idx}`}
              className="flex-shrink-0 w-[300px] sm:w-[360px] bg-[#171717] border border-white/10 rounded-2xl p-5 sm:p-6 flex flex-col justify-between hover:border-[#FF5733]/50 hover:bg-[#1a1a1a] transition-all duration-300 group shadow-lg shadow-black/40"
            >
              <div>
                {/* Header: Quote & Service Category Badge */}
                <div className="flex items-center justify-between mb-4">
                  <Quote size={20} className="text-[#FF5733]/60 group-hover:text-[#FF5733] transition-colors" />
                  <span className="text-[9px] font-mono uppercase tracking-widest text-[#FF5733] bg-[#FF5733]/10 border border-[#FF5733]/25 px-2.5 py-1 rounded-full">
                    {review.service}
                  </span>
                </div>

                {/* Star Rating */}
                <StarRating count={review.stars} />

                {/* Review Quote Text */}
                <p className="text-xs sm:text-sm text-white/80 leading-relaxed italic font-light my-2">
                  "{review.text}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="flex items-center gap-3 pt-4 mt-3 border-t border-white/8">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FF5733] to-[#ff8c66] flex items-center justify-center text-white text-[11px] font-mono font-bold shadow-md shadow-[#FF5733]/20">
                  {review.initials || 'CL'}
                </div>
                <div className="overflow-hidden">
                  <p className="text-xs font-bold text-white tracking-tight truncate">
                    {review.name}
                  </p>
                  <p className="text-[10px] font-mono text-white/45 truncate">
                    {review.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add Review Modal */}
      <AddReviewModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddReview={handleAddReview}
      />
    </section>
  );
};

export default TestimonialsMarquee;

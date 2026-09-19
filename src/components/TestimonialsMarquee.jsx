import React, { useState, useEffect } from 'react';
import { Star, Quote, PlusCircle, Sparkles } from 'lucide-react';
import { AddReviewModal } from './AddReviewModal';

const DEFAULT_REVIEWS = [
  {
    id: "rev-1",
    name: "Aarav Singhania",
    role: "Founder, Nova Mobility",
    categoryNumber: "01",
    service: "Advertising & Marketing",
    text: "We needed last-minute standees and hoardings done for our weekend launch pop-up. The team turned them around in 2 days and the print quality was super crisp. People actually stopped to click pictures.",
    stars: 5,
    initials: "AS"
  },
  {
    id: "rev-2",
    name: "Devika Rao",
    role: "Founder, Aurelia Botanicals",
    categoryNumber: "02",
    service: "Branding & Identity",
    text: "They redesigned our whole brand look—from the logo to our unboxing boxes and thank-you cards. Super polite team, took feedback with zero fuss, and our customers always compliment the packaging.",
    stars: 5,
    initials: "DR"
  },
  {
    id: "rev-3",
    name: "Kavya Patel",
    role: "Co-Founder, Form Living",
    categoryNumber: "03",
    service: "Products & E-Commerce",
    text: "Our Amazon and Shopify listings were looking pretty basic before. Kesign created clean feature graphics and lifestyle banners for our homeware line. Sales noticeably went up within a week.",
    stars: 5,
    initials: "KP"
  },
  {
    id: "rev-4",
    name: "Dr. Alok Sen",
    role: "Editor, ArchDesign Journal",
    categoryNumber: "04",
    service: "Editorials & Publishing",
    text: "Handed them a messy draft with rough photos for our studio's 40-page annual journal. They turned it into an aesthetic, print-ready book that felt straight out of a premium design bookstore.",
    stars: 5,
    initials: "AS"
  },
  {
    id: "rev-5",
    name: "Siddharth Menon",
    role: "Organizer, National Creative Summit",
    categoryNumber: "05",
    service: "Events & Experiences",
    text: "Handled our stage backdrop, speaker passes, and photo booth signage. Everything arrived 3 days before the event without a single delay or misprint. The venue looked incredible in all the attendee photos.",
    stars: 5,
    initials: "SM"
  },
  {
    id: "rev-6",
    name: "Rhea Chawla",
    role: "Co-Founder, DeepTech Labs",
    categoryNumber: "06",
    service: "Infographics & Information Design",
    text: "Our pitch deck slides were way too technical and cluttered. Kesign turned our 4-step backend flow into clear, visual diagrams that even non-technical investors understood right away.",
    stars: 5,
    initials: "RC"
  },
  {
    id: "rev-7",
    name: "Kabir Mathur",
    role: "Creator, CLUB 1994 Apparel",
    categoryNumber: "07",
    service: "Print-on-Demand",
    text: "Designed the back graphics for our oversized tees and tote bags. The vector files were completely print-ready for screen printing with zero color bleeding. We sold out our first 100 tees in 2 days.",
    stars: 5,
    initials: "KM"
  },
  {
    id: "rev-8",
    name: "Meera Oberoi",
    role: "Owner, Gulmohar Bakery & Café",
    categoryNumber: "08",
    service: "Restaurant & Café",
    text: "Kesign redesigned our cafe and bakery menu along with the counter display cards. Customers constantly compliment the clean aesthetic before even ordering their coffee. Beautiful work!",
    stars: 5,
    initials: "MO"
  },
  {
    id: "rev-9",
    name: "Tanmay Bansal",
    role: "Tech Creator & YouTuber",
    categoryNumber: "09",
    service: "Social Media Creatives",
    text: "They make all my YouTube thumbnails and carousel graphics for LinkedIn now. My video CTR jumped from 4% to almost 9%, and the LinkedIn posts get saved and shared constantly. Super reliable turnaround.",
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

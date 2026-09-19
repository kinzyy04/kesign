import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ArrowUpRight, Sparkles, CheckCircle } from 'lucide-react';

export const ServiceWorkModal = ({ service, onClose }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (service) {
      setActiveIndex(0);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [service]);

  useEffect(() => {
    const handleKey = (e) => {
      if (!service) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') setActiveIndex(i => (i + 1) % service.gallery.length);
      if (e.key === 'ArrowLeft') setActiveIndex(i => (i - 1 + service.gallery.length) % service.gallery.length);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [service, onClose]);

  if (!service) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 md:p-8 overflow-y-auto"
        onClick={onClose}
      >
        {/* Backdrop */}
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md" />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative z-10 w-full max-w-5xl bg-white rounded-3xl overflow-hidden shadow-2xl my-auto max-h-[92vh] flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header Bar */}
          <div className="px-4 py-3 sm:px-6 sm:py-4 border-b border-[#E5E5E5] bg-white flex items-center justify-between sticky top-0 z-20">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <span className="px-2 sm:px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-mono font-bold bg-[#FF5733] text-white">
                {service.number}
              </span>
              <h3 className="text-sm sm:text-xl font-extrabold text-[#111111] tracking-tight">
                {service.title}
              </h3>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 sm:p-2 rounded-full bg-[#F6F6F6] text-[#666666] hover:text-[#111111] hover:bg-[#E5E5E5] transition-all"
              aria-label="Close modal"
            >
              <X size={16} className="sm:w-[18px] sm:h-[18px]" />
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="overflow-y-auto p-3 sm:p-6 space-y-3.5 sm:space-y-6">
            
            {/* Main Active Visual Showcase - Dominant and big on mobile screens */}
            <div className="relative aspect-[4/3] sm:aspect-[16/9] bg-[#0A0A0A] rounded-2xl overflow-hidden flex items-center justify-center border border-[#E5E5E5]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeIndex}
                  src={service.gallery[activeIndex]}
                  alt={`${service.title} artwork sample ${activeIndex + 1}`}
                  className="w-full h-full object-contain"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                />
              </AnimatePresence>

              {/* Prev / Next controls */}
              {service.gallery.length > 1 && (
                <>
                  <button
                    onClick={() => setActiveIndex(i => (i - 1 + service.gallery.length) % service.gallery.length)}
                    className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 p-1.5 sm:p-2 rounded-full bg-black/60 backdrop-blur-md text-white hover:bg-[#FF5733] transition-all"
                    aria-label="Previous artwork"
                  >
                    <ChevronLeft size={16} className="sm:w-5 sm:h-5" />
                  </button>
                  <button
                    onClick={() => setActiveIndex(i => (i + 1) % service.gallery.length)}
                    className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 p-1.5 sm:p-2 rounded-full bg-black/60 backdrop-blur-md text-white hover:bg-[#FF5733] transition-all"
                    aria-label="Next artwork"
                  >
                    <ChevronRight size={16} className="sm:w-5 sm:h-5" />
                  </button>
                </>
              )}

              {/* Counter badge */}
              <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full bg-black/70 backdrop-blur-md text-white text-[8.5px] sm:text-[10px] font-mono uppercase">
                {activeIndex + 1} / {service.gallery.length} ASSETS
              </div>
            </div>

            {/* Thumbnail Strip */}
            {service.gallery.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
                {service.gallery.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={`relative w-16 sm:w-32 aspect-[4/3] sm:aspect-video rounded-lg sm:rounded-xl overflow-hidden border-2 transition-all shrink-0 ${
                      i === activeIndex ? 'border-[#FF5733] shadow-md ring-2 ring-[#FF5733]/20' : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt={`thumbnail-${i}`} className="w-full h-full object-cover bg-black" />
                  </button>
                ))}
              </div>
            )}

            {/* Category Description & Deliverables - Compact on mobile */}
            <div className="grid md:grid-cols-12 gap-3.5 sm:gap-6 pt-2 border-t border-[#F0F0F0]">
              <div className="md:col-span-8 space-y-1.5 sm:space-y-3">
                <span className="text-[8.5px] sm:text-[10px] font-mono uppercase tracking-widest text-[#FF5733] font-semibold">
                  {service.tag}
                </span>
                <h4 className="text-sm sm:text-xl font-bold text-[#111111]">
                  Discipline Overview & Execution
                </h4>
                <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                  {service.description}
                </p>

                {/* Tags */}
                {service.tags && (
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1 sm:pt-2">
                    {service.tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-[9.5px] sm:text-[11px] font-mono bg-[#F6F6F6] text-[#444444] border border-[#E5E5E5]">
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="md:col-span-4 flex flex-col justify-between p-3.5 sm:p-5 rounded-2xl bg-[#F6F6F6] border border-[#E5E5E5]">
                <div>
                  <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-mono font-bold text-[#111111] uppercase mb-1 sm:mb-2">
                    <Sparkles size={13} className="text-[#FF5733]" />
                    <span>STUDIO TURNAROUND</span>
                  </div>
                  <p className="text-[10px] sm:text-xs text-[#666666] leading-relaxed">
                    Delivered in 24–48 hours with full vector source files & dedicated IIT Delhi creative direction.
                  </p>
                </div>

                <a
                  href="#contact"
                  onClick={onClose}
                  className="mt-3 sm:mt-6 w-full py-2.5 sm:py-3 rounded-full bg-[#111111] text-white font-bold text-[10px] sm:text-xs uppercase font-mono tracking-wider hover:bg-[#FF5733] transition-all flex items-center justify-center gap-2 shadow-md"
                >
                  <span>Discuss This Project</span>
                  <ArrowUpRight size={13} className="sm:w-3.5 sm:h-3.5" />
                </a>
              </div>
            </div>

          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

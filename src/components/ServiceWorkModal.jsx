import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';

export const ServiceWorkModal = ({ service, onClose }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (service) {
      setActiveIndex(0);
      // Increment open-modal counter on body to track nested modals
      const current = parseInt(document.body.dataset.modalCount || '0', 10);
      document.body.dataset.modalCount = current + 1;
      document.body.style.overflow = 'hidden';
    }
    return () => {
      const current = parseInt(document.body.dataset.modalCount || '1', 10);
      const next = Math.max(0, current - 1);
      document.body.dataset.modalCount = next;
      if (next === 0) document.body.style.overflow = '';
    };
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

  return (
    <AnimatePresence>
      {service && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-8"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/75 backdrop-blur-md" />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="relative z-10 w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 backdrop-blur-md text-white hover:bg-[#FF5733] transition-all duration-200"
            >
              <X size={18} />
            </button>

            {/* Main Image Viewer */}
            <div className="relative aspect-[16/9] bg-black overflow-hidden flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeIndex}
                  src={service.gallery[activeIndex]}
                  alt={`${service.title} - ${activeIndex + 1}`}
                  className="w-full h-full object-contain"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.25 }}
                />
              </AnimatePresence>

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

              {/* Prev / Next arrows */}
              {service.gallery.length > 1 && (
                <>
                  <button
                    onClick={() => setActiveIndex(i => (i - 1 + service.gallery.length) % service.gallery.length)}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-1.5 sm:p-2.5 rounded-full bg-black/50 backdrop-blur-md text-white hover:bg-[#FF5733] transition-all duration-200"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={() => setActiveIndex(i => (i + 1) % service.gallery.length)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-1.5 sm:p-2.5 rounded-full bg-black/50 backdrop-blur-md text-white hover:bg-[#FF5733] transition-all duration-200"
                  >
                    <ChevronRight size={20} />
                  </button>
                </>
              )}

              {/* Image counter */}
              <div className="absolute bottom-4 right-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[10px] font-mono uppercase">
                {activeIndex + 1} / {service.gallery.length}
              </div>
            </div>

            {/* Thumbnail strip */}
            {service.gallery.length > 1 && (
              <div className="flex gap-3 px-6 pt-4 pb-1 overflow-x-auto no-scrollbar">
                {service.gallery.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={`relative flex-1 aspect-video rounded-xl overflow-hidden border-2 transition-all duration-200 ${
                      i === activeIndex ? 'border-[#FF5733] shadow-md' : 'border-transparent opacity-60 hover:opacity-90'
                    }`}
                  >
                    <img src={img} alt={`thumb-${i}`} className="w-full h-full object-contain bg-black" />
                  </button>
                ))}
              </div>
            )}

            {/* Info footer */}
            <div className="px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
              <div>
                <p className="text-[10px] font-mono uppercase tracking-widest text-[#999999] mb-1">{service.tag}</p>
                <h3 className="text-lg font-extrabold text-[#111111] tracking-tight">{service.title}</h3>
                <p className="text-xs text-[#666666] mt-1 leading-relaxed max-w-lg">{service.description}</p>
              </div>
              <a
                href="#contact"
                onClick={onClose}
                className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#FF5733] text-white font-bold text-xs font-mono uppercase tracking-wider hover:bg-[#111111] transition-all duration-300 shadow-md"
              >
                <span>Connect with us</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { PRIMARY_CATEGORIES } from '../data/portfolioData';

export const Footer = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#F6F6F6] border-t border-[#E5E5E5] pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16 border-b border-[#E5E5E5]">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <a href="#" className="inline-block text-3xl sm:text-4xl font-extrabold tracking-tighter text-[#111111]">
              kesign<span className="font-serif-italic text-[#FF5733]">.</span>
            </a>
            <p className="text-xs sm:text-sm text-[#666666] max-w-sm leading-relaxed font-normal">
              A modern design studio creating high-quality visual work for brands, businesses, creators, products, and experiences. Founded by four IIT Delhi students.
            </p>
            <div className="flex items-center gap-3 text-xs font-mono text-[#666666] pt-2">
              <span className="w-2 h-2 rounded-full bg-[#FF5733] animate-pulse" />
              <span>DELHI, IN — {time || '12:00:00'} IST</span>
            </div>
          </div>

          {/* 9 Categories List Col */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-mono text-[#111111] font-bold uppercase tracking-wider mb-4">
              09 DESIGN WORLDS
            </div>
            <div className="grid grid-cols-1 gap-1.5 text-xs font-mono text-[#666666]">
              {PRIMARY_CATEGORIES.map((cat) => (
                <a
                  key={cat.id}
                  href="#categories"
                  className="hover:text-[#FF5733] transition-colors"
                >
                  {cat.number} — {cat.title}
                </a>
              ))}
            </div>
          </div>

          {/* Founders Col */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-mono text-[#111111] font-bold uppercase tracking-wider mb-4">
              STUDIO FOUNDERS
            </div>
            <div className="space-y-1.5 text-xs font-mono text-[#666666]">
              <div>Krinjal Agrawal</div>
              <div>Kshitija Karmore</div>
              <div>Krishna Thakur</div>
              <div>Krishan Sawariya</div>
            </div>
            <div className="pt-4 text-[11px] font-mono text-[#FF5733] font-semibold">
              IIT DELHI STUDENTS
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#666666]">
          <div>
            © {new Date().getFullYear()} Kesign Studio. High-performance visual design. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-white border border-[#E5E5E5] text-[#666666] hover:text-[#111111] hover:border-[#111111] transition-all interactive-hover flex items-center gap-2 shadow-sm text-xs font-mono"
            aria-label="Scroll back to top of page"
          >
            <span>BACK TO TOP</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

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
    <footer className="bg-[#F6F6F6] border-t border-[#E5E5E5] pt-12 pb-8 sm:pt-16 sm:pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#E5E5E5]">
          {/* Brand Col */}
          <div className="md:col-span-6 space-y-4">
            <a href="#" className="inline-block text-3xl sm:text-4xl font-extrabold tracking-tighter text-[#111111]">
              kesign<span className="font-serif-italic text-[#666666]">.</span>
            </a>
            <p className="text-xs text-[#666666] max-w-sm leading-relaxed font-normal">
              High-performance creative studio founded by three IIT Delhi engineers. World-class design that speaks louder than words.
            </p>
            <div className="flex items-center gap-3 text-xs font-mono text-[#666666]">
              <span className="w-2 h-2 rounded-full bg-[#111111] animate-pulse" />
              <span>DELHI, IN — {time || '16:30:00'} IST</span>
            </div>
          </div>


          {/* Founders Col */}
          <div className="md:col-span-6 space-y-3">
            <div className="text-xs font-mono text-[#666666] uppercase tracking-wider mb-4">FOUNDED BY</div>
            <div className="grid grid-cols-2 gap-2 text-xs font-mono text-[#666666]">
              <div>Krinjal Agrawal</div>
              <div>Kshitija Karmore</div>
              <div>Krishna Thakur</div>
            </div>
            <div className="pt-4 text-[10px] font-mono text-[#111111] font-semibold">
              IIT DELHI ENGINEERS
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] sm:text-xs font-mono text-[#666666]">
          <div>
            © {new Date().getFullYear()} kesign studio. All rights reserved. Design with us.
          </div>

          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-white border border-[#E5E5E5] text-[#666666] hover:text-[#111111] hover:border-[#111111] transition-all interactive-hover flex items-center gap-2 shadow-sm"
          >
            <span>BACK TO TOP</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};

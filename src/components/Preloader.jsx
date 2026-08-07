import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsFinished(true);
            if (onComplete) onComplete();
          }, 300);
          return 100;
        }
        const increment = Math.floor(Math.random() * 14) + 6;
        return Math.min(prev + increment, 100);
      });
    }, 50);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ y: '-100%', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[100] bg-[#F6F6F6] flex flex-col items-center justify-between p-8 sm:p-12 select-none overflow-hidden"
        >
          {/* Top metadata */}
          <div className="w-full flex justify-between items-center text-xs tracking-widest uppercase text-[#666666] font-mono">
            <span>kesign studio</span>
            <span>IIT Delhi</span>
          </div>

          {/* Center Brand typography */}
          <div className="relative flex flex-col items-center justify-center my-auto">
            <motion.h1
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-5xl sm:text-8xl md:text-9xl font-extrabold tracking-tighter text-[#111111] font-sans"
            >
              kesign<span className="font-serif-italic font-normal text-[#666666]">.</span>
            </motion.h1>
            
            <p className="mt-4 text-xs sm:text-sm text-[#666666] tracking-widest uppercase font-mono">
              Design with us
            </p>

            {/* Minimal Progress Bar */}
            <div className="mt-8 w-40 sm:w-64 h-[2px] bg-[#E5E5E5] overflow-hidden rounded-full">
              <motion.div
                className="h-full bg-[#111111]"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Bottom Counter */}
          <div className="w-full flex justify-between items-end">
            <div className="text-xs text-[#666666] font-mono max-w-[200px] hidden sm:block">
              ENGINEERING RIGOR.<br />HUMAN PRECISION.
            </div>

            <div className="text-4xl sm:text-7xl font-light font-serif-italic text-[#111111] tracking-tighter">
              {progress}<span className="text-2xl font-sans text-[#666666]">%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

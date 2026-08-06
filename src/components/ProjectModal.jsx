import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Clock, Layers, Star, CheckCircle, ArrowRight } from 'lucide-react';

export const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 md:p-10 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#111111]/40 backdrop-blur-md"
        />

        {/* Modal Drawer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-5xl bg-[#F6F6F6] border border-[#E5E5E5] rounded-3xl overflow-hidden shadow-2xl z-10 my-auto max-h-[90vh] flex flex-col"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between p-6 border-b border-[#E5E5E5] bg-white/90 backdrop-blur-md sticky top-0 z-20">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase bg-[#111111] text-white">
                {project.clientType}
              </span>
              <span className="text-xs font-mono text-[#666666]">{project.category}</span>
            </div>

            <button
              onClick={onClose}
              className="p-2.5 rounded-full bg-[#F6F6F6] text-[#666666] hover:text-[#111111] hover:bg-[#E5E5E5] transition-all interactive-hover"
            >
              <X size={20} />
            </button>
          </div>

          {/* Modal Scrollable Body */}
          <div className="p-6 sm:p-8 md:p-10 overflow-y-auto space-y-10">
            {/* Header Title */}
            <div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-[#111111] tracking-tight">
                {project.title}
              </h2>
              <p className="mt-4 text-base sm:text-lg text-[#666666] max-w-3xl leading-relaxed font-normal">
                {project.subtitle}
              </p>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 p-5 rounded-2xl bg-white border border-[#E5E5E5]">
              <div className="flex items-center gap-3">
                <Layers className="text-[#111111]" size={20} />
                <div>
                  <div className="text-[10px] sm:text-xs font-mono text-[#666666]">DELIVERABLES</div>
                  <div className="text-lg sm:text-2xl font-bold text-[#111111] font-mono">{project.stats.slides} Slides / Pages</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="text-[#111111]" size={20} />
                <div>
                  <div className="text-[10px] sm:text-xs font-mono text-[#666666]">TURNAROUND</div>
                  <div className="text-lg sm:text-2xl font-bold text-[#111111] font-mono">{project.stats.turnAround}</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Star className="text-[#111111]" size={20} />
                <div>
                  <div className="text-[10px] sm:text-xs font-mono text-[#666666]">DESIGN QUALITY</div>
                  <div className="text-lg sm:text-2xl font-bold text-[#111111] font-mono">{project.stats.rating}</div>
                </div>
              </div>
            </div>

            {/* Main Visual */}
            <div className="rounded-2xl overflow-hidden border border-[#E5E5E5] bg-black flex items-center justify-center">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto max-h-[500px] object-contain"
              />
            </div>

            {/* Challenge & Solution Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-4 sm:p-6 rounded-2xl bg-white border border-[#E5E5E5]">
                <h3 className="text-xs font-mono text-[#111111] uppercase tracking-wider mb-3 font-semibold">
                  01 / The Creative Challenge
                </h3>
                <p className="text-sm text-[#666666] leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              <div className="p-4 sm:p-6 rounded-2xl bg-white border border-[#E5E5E5]">
                <h3 className="text-xs font-mono text-[#111111] uppercase tracking-wider mb-3 font-semibold">
                  02 / Kesign Execution
                </h3>
                <p className="text-sm text-[#666666] leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Deliverables List */}
            <div>
              <h3 className="text-lg font-bold text-[#111111] mb-4">Included Assets & Formats</h3>
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                {project.deliverables.map((item) => (
                  <div key={item} className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-[#E5E5E5]">
                    <CheckCircle size={16} className="text-[#111111] shrink-0" />
                    <span className="text-xs font-mono text-[#111111]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tags Footer */}
            <div className="pt-6 border-t border-[#E5E5E5] flex flex-wrap gap-2 items-center justify-between">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full text-xs font-mono bg-white text-[#666666] border border-[#E5E5E5]">
                    #{tag}
                  </span>
                ))}
              </div>

              <a
                href="#contact"
                onClick={onClose}
                className="px-6 py-3 rounded-full bg-[#111111] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#333333] transition-colors flex items-center gap-2"
              >
                <span>Request Similar Design</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

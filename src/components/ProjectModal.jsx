import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Clock, Layers, Star, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';

export const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 md:p-10 overflow-y-auto" onClick={onClose}>
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-[#111111]/60 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-5xl bg-[#F6F6F6] border border-[#E5E5E5] rounded-3xl overflow-hidden shadow-2xl z-10 my-auto max-h-[90vh] flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between p-3.5 sm:p-6 border-b border-[#E5E5E5] bg-white/95 backdrop-blur-md sticky top-0 z-20">
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[9px] sm:text-[10px] font-mono uppercase bg-[#111111] text-white font-semibold">
                {project.clientType || 'STUDIO WORK'}
              </span>
              <span className="text-[10px] sm:text-xs font-mono text-[#666666]">{project.category}</span>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 sm:p-2 rounded-full bg-[#F6F6F6] text-[#666666] hover:text-[#111111] hover:bg-[#E5E5E5] transition-all"
              aria-label="Close Project Modal"
            >
              <X size={16} className="sm:w-[18px] sm:h-[18px]" />
            </button>
          </div>

          {/* Modal Scrollable Body */}
          <div className="p-3.5 sm:p-8 md:p-10 overflow-y-auto space-y-4 sm:space-y-8">
            {/* Main Visual Showcase First - Large on Phone */}
            <div className="rounded-2xl overflow-hidden border border-[#E5E5E5] bg-[#0A0A0A] flex items-center justify-center aspect-[4/3] sm:aspect-auto sm:max-h-[500px]">
              <img
                src={project.image}
                alt={project.alt || project.title}
                className="w-full h-full sm:h-auto max-h-[500px] object-contain"
              />
            </div>

            {/* Header Title */}
            <div>
              <h2 className="text-xl sm:text-4xl md:text-5xl font-extrabold text-[#111111] tracking-tight leading-tight">
                {project.title}
              </h2>
              <p className="mt-1.5 sm:mt-3 text-xs sm:text-base text-[#666666] max-w-3xl leading-relaxed font-normal">
                {project.subtitle}
              </p>
            </div>

            {/* Quick Metrics Bar */}
            {project.stats && (
              <div className="grid grid-cols-3 gap-1.5 sm:gap-3 p-2.5 sm:p-4 rounded-2xl bg-white border border-[#E5E5E5]">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1.5 sm:gap-3">
                  <Layers className="text-[#FF5733] shrink-0" size={16} />
                  <div>
                    <div className="text-[8px] sm:text-[10px] font-mono text-[#666666] uppercase">DELIVERABLES</div>
                    <div className="text-[10px] sm:text-sm font-bold text-[#111111] font-mono leading-tight">{project.stats.deliverables || 'Full Suite'}</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1.5 sm:gap-3">
                  <Clock className="text-[#FF5733] shrink-0" size={16} />
                  <div>
                    <div className="text-[8px] sm:text-[10px] font-mono text-[#666666] uppercase">TURNAROUND</div>
                    <div className="text-[10px] sm:text-sm font-bold text-[#111111] font-mono leading-tight">{project.stats.turnAround || '24–48 Hours'}</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1.5 sm:gap-3">
                  <Sparkles className="text-[#FF5733] shrink-0" size={16} />
                  <div>
                    <div className="text-[8px] sm:text-[10px] font-mono text-[#666666] uppercase">FORMAT</div>
                    <div className="text-[10px] sm:text-sm font-bold text-[#111111] font-mono leading-tight">{project.stats.format || 'Vector Files'}</div>
                  </div>
                </div>
              </div>
            )}

            {/* Challenge & Solution Grid */}
            <div className="grid sm:grid-cols-2 gap-3 sm:gap-6">
              <div className="p-3.5 sm:p-5 rounded-2xl bg-white border border-[#E5E5E5]">
                <h3 className="text-[10px] sm:text-xs font-mono text-[#FF5733] uppercase tracking-wider mb-1 sm:mb-2 font-semibold">
                  01 / The Design Challenge
                </h3>
                <p className="text-[11px] sm:text-sm text-[#555555] leading-relaxed">
                  {project.challenge || 'Balancing aesthetic boldness with commercial clarity and brand memorability.'}
                </p>
              </div>

              <div className="p-3.5 sm:p-5 rounded-2xl bg-white border border-[#E5E5E5]">
                <h3 className="text-[10px] sm:text-xs font-mono text-[#111111] uppercase tracking-wider mb-1 sm:mb-2 font-semibold">
                  02 / Kesign Studio Solution
                </h3>
                <p className="text-[11px] sm:text-sm text-[#555555] leading-relaxed">
                  {project.solution || 'Developed bespoke typographic tokens, clean grid compositions, and responsive visual variations.'}
                </p>
              </div>
            </div>

            {/* Deliverables List */}
            {project.deliverables && (
              <div>
                <h3 className="text-xs sm:text-base font-bold text-[#111111] mb-2 sm:mb-3">Included Production Assets</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-2.5">
                  {project.deliverables.map((item) => (
                    <div key={item} className="flex items-center gap-2 sm:gap-2.5 p-2 sm:p-3 rounded-xl bg-white border border-[#E5E5E5]">
                      <CheckCircle size={13} className="text-[#FF5733] shrink-0" />
                      <span className="text-[11px] sm:text-xs font-mono text-[#222222]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tags Footer */}
            <div className="pt-4 sm:pt-6 border-t border-[#E5E5E5] flex flex-wrap gap-3 sm:gap-4 items-center justify-between">
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {project.tags && project.tags.map((tag) => (
                  <span key={tag} className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-xs font-mono bg-white text-[#666666] border border-[#E5E5E5]">
                    #{tag}
                  </span>
                ))}
              </div>

              <a
                href="#contact"
                onClick={onClose}
                className="w-full sm:w-auto px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-[#111111] text-white font-bold text-[10px] sm:text-xs uppercase font-mono tracking-wider hover:bg-[#FF5733] transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Request Similar Design</span>
                <ArrowRight size={13} className="sm:w-3.5 sm:h-3.5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

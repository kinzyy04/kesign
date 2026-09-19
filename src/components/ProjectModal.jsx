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
          <div className="flex items-center justify-between p-5 sm:p-6 border-b border-[#E5E5E5] bg-white/95 backdrop-blur-md sticky top-0 z-20">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase bg-[#111111] text-white font-semibold">
                {project.clientType || 'STUDIO WORK'}
              </span>
              <span className="text-xs font-mono text-[#666666]">{project.category}</span>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-[#F6F6F6] text-[#666666] hover:text-[#111111] hover:bg-[#E5E5E5] transition-all"
              aria-label="Close Project Modal"
            >
              <X size={18} />
            </button>
          </div>

          {/* Modal Scrollable Body */}
          <div className="p-6 sm:p-8 md:p-10 overflow-y-auto space-y-8">
            {/* Header Title */}
            <div>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#111111] tracking-tight">
                {project.title}
              </h2>
              <p className="mt-3 text-sm sm:text-base text-[#666666] max-w-3xl leading-relaxed font-normal">
                {project.subtitle}
              </p>
            </div>

            {/* Quick Metrics Bar */}
            {project.stats && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-white border border-[#E5E5E5]">
                <div className="flex items-center gap-3">
                  <Layers className="text-[#FF5733]" size={20} />
                  <div>
                    <div className="text-[10px] font-mono text-[#666666] uppercase">DELIVERABLES</div>
                    <div className="text-xs sm:text-sm font-bold text-[#111111] font-mono">{project.stats.deliverables || 'Full Vector Suite'}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="text-[#FF5733]" size={20} />
                  <div>
                    <div className="text-[10px] font-mono text-[#666666] uppercase">TURNAROUND</div>
                    <div className="text-xs sm:text-sm font-bold text-[#111111] font-mono">{project.stats.turnAround || '24–48 Hours'}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Sparkles className="text-[#FF5733]" size={20} />
                  <div>
                    <div className="text-[10px] font-mono text-[#666666] uppercase">DELIVERY FORMAT</div>
                    <div className="text-xs sm:text-sm font-bold text-[#111111] font-mono">{project.stats.format || 'Vector / Source Files'}</div>
                  </div>
                </div>
              </div>
            )}

            {/* Main Visual */}
            <div className="rounded-2xl overflow-hidden border border-[#E5E5E5] bg-black flex items-center justify-center">
              <img
                src={project.image}
                alt={project.alt || project.title}
                className="w-full h-auto max-h-[500px] object-contain"
              />
            </div>

            {/* Challenge & Solution Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 rounded-2xl bg-white border border-[#E5E5E5]">
                <h3 className="text-xs font-mono text-[#FF5733] uppercase tracking-wider mb-2 font-semibold">
                  01 / The Design Challenge
                </h3>
                <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                  {project.challenge || 'Balancing aesthetic boldness with commercial clarity and brand memorability.'}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-[#E5E5E5]">
                <h3 className="text-xs font-mono text-[#111111] uppercase tracking-wider mb-2 font-semibold">
                  02 / Kesign Studio Solution
                </h3>
                <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
                  {project.solution || 'Developed bespoke typographic tokens, clean grid compositions, and responsive visual variations.'}
                </p>
              </div>
            </div>

            {/* Deliverables List */}
            {project.deliverables && (
              <div>
                <h3 className="text-base font-bold text-[#111111] mb-3">Included Production Assets</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {project.deliverables.map((item) => (
                    <div key={item} className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-[#E5E5E5]">
                      <CheckCircle size={15} className="text-[#FF5733] shrink-0" />
                      <span className="text-xs font-mono text-[#222222]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tags Footer */}
            <div className="pt-6 border-t border-[#E5E5E5] flex flex-wrap gap-4 items-center justify-between">
              <div className="flex flex-wrap gap-2">
                {project.tags && project.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full text-xs font-mono bg-white text-[#666666] border border-[#E5E5E5]">
                    #{tag}
                  </span>
                ))}
              </div>

              <a
                href="#contact"
                onClick={onClose}
                className="px-6 py-3 rounded-full bg-[#111111] text-white font-bold text-xs uppercase font-mono tracking-wider hover:bg-[#FF5733] transition-colors flex items-center gap-2 shadow-sm"
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

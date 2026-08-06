import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, CheckCircle, Clock, Layers, Star, Eye } from 'lucide-react';
import { PORTFOLIO_PROJECTS } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

export const CategoryWorkModal = ({ category, onClose }) => {
  const [selectedSingleProject, setSelectedSingleProject] = useState(null);

  if (!category) return null;

  // Filter projects matching this category
  const categoryProjects = PORTFOLIO_PROJECTS.filter((p) => {
    if (category.id === 'pitchdeck') return p.category === 'Pitch Decks';
    if (category.id === 'carousels') return p.category === 'Social & Carousels' || p.tags.includes('Social Media') || p.tags.includes('Instagram Carousel');
    if (category.id === 'brandassets') return p.category === 'Brand & Print' || p.tags.includes('Brand Identity');
    if (category.id === 'pdfbeautify') return p.category === 'Brand & Print' || p.tags.includes('PDF Beautification') || p.tags.includes('Brochure');
    if (category.id === 'coursetemplates') return p.category === 'Course Launch' || p.tags.includes('Course Launch');
    return true;
  });

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 md:p-10 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#111111]/50 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-5xl bg-[#F6F6F6] border border-[#E5E5E5] rounded-3xl overflow-hidden shadow-2xl z-10 my-auto max-h-[90vh] flex flex-col"
        >
          {/* Top Header */}
          <div className="flex items-center justify-between p-6 border-b border-[#E5E5E5] bg-white/90 backdrop-blur-md sticky top-0 z-20">
            <div>
              <div className="text-[10px] font-mono uppercase text-[#FF5733] font-semibold tracking-wider">
                {category.number} / WORK SHOWCASE
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111111] font-sans">
                {category.title} <span className="font-serif-italic text-[#666666]">Portfolio.</span>
              </h2>
            </div>

            <button
              onClick={onClose}
              className="p-2.5 rounded-full bg-[#F6F6F6] text-[#666666] hover:text-[#111111] hover:bg-[#E5E5E5] transition-all interactive-hover"
            >
              <X size={20} />
            </button>
          </div>

          {/* Modal Scrollable Body */}
          <div className="p-6 sm:p-8 md:p-10 overflow-y-auto space-y-8">
            <p className="text-sm text-[#666666] leading-relaxed max-w-2xl font-sans">
              Explore our concept design suites for <strong className="text-[#111111]">{category.title}</strong>. Each suite represents investor-grade layouts, typography hierarchy, and publication-ready assets.
            </p>

            {/* Projects Grid in Modal */}
            <div className="grid grid-cols-2 gap-3 sm:gap-6">
              {categoryProjects.map((project) => (
                <div
                  key={project.id}
                  onClick={() => setSelectedSingleProject(project)}
                  className="kyne-card rounded-2xl overflow-hidden cursor-pointer hover:border-[#FF5733] transition-all group interactive-hover bg-white p-3 sm:p-5 flex flex-col justify-between"
                >
                  <div>
                    <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-black mb-4 flex items-center justify-center">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="px-2.5 py-0.5 rounded-full text-[9px] font-mono uppercase bg-white/90 backdrop-blur-md text-[#111111] font-semibold border border-[#E5E5E5]">
                          {project.clientType}
                        </span>
                      </div>
                    </div>

                    <div className="text-[10px] font-mono text-[#666666] uppercase mb-1">{project.category}</div>
                    <h3 className="text-lg font-bold text-[#111111] group-hover:text-[#FF5733] transition-colors">
                      {project.title}
                    </h3>
                    <p className="mt-1.5 text-xs text-[#666666] line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-[#E5E5E5] flex items-center justify-between text-xs font-mono text-[#111111] font-semibold">
                    <span>{project.stats.slides} PAGES</span>
                    <div className="flex items-center gap-1 text-[#FF5733]">
                      <span>VIEW CASE STUDY</span>
                      <ArrowRight size={14} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Nested Detailed Project Case Study Drawer if user clicks a single project inside this category */}
        {selectedSingleProject && (
          <ProjectModal
            project={selectedSingleProject}
            onClose={() => setSelectedSingleProject(null)}
          />
        )}
      </div>
    </AnimatePresence>
  );
};

import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';
import { TEAM_MEMBERS } from '../data/portfolioData';

export const TeamSection = () => {
  return (
    <section id="team" className="py-16 sm:py-24 bg-[#F6F6F6] relative">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="h-[1px] w-12 bg-[#111111]" />
              <span className="text-xs uppercase font-mono tracking-widest text-[#666666]">06 / Founders</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111111] tracking-tight">
              Meet the Team<span className="font-serif-italic text-[#666666]">.</span>
            </h2>
            <p className="mt-2 text-2xl sm:text-3xl font-extrabold tracking-tight">
              <span className="text-[#111111]">Students of </span><span className="text-[#FF5733]">IIT Delhi</span>
            </p>
          </div>
          <p className="max-w-md text-xs text-[#666666] font-mono uppercase tracking-wider">
            Three IIT Delhi engineers driving the next evolution of AI-assisted design.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-3 gap-2 sm:gap-5">
          {TEAM_MEMBERS.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="kyne-card rounded-2xl p-3 sm:p-5 hover:border-[#111111] transition-all duration-300 group flex flex-col justify-between interactive-hover"
            >
              <div>
                {/* Avatar Box */}
                <div className="relative aspect-[4/5] rounded-xl sm:rounded-2xl overflow-hidden mb-4 bg-[#E5E5E5] flex items-center justify-center">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    style={{ objectPosition: member.objectPosition || 'center' }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="hidden absolute inset-0 bg-[#F1F1F0] items-center justify-center text-4xl font-extrabold text-[#111111]/30">
                    {member.initials}
                  </div>
                </div>

                {/* Name & Role */}
                <h3 className="text-sm sm:text-lg font-bold text-[#111111]">
                  {member.name}
                </h3>
                <div className="text-[10px] sm:text-[11px] font-mono text-[#666666] mt-1 uppercase tracking-wider">
                  {member.role}
                </div>

                <p className="mt-2 text-[10px] sm:text-xs text-[#666666] leading-snug line-clamp-3 sm:line-clamp-none">
                  {member.bio}
                </p>
              </div>

              {/* Card Footer / Social */}
              <div className="mt-4 pt-3 border-t border-[#E5E5E5] flex items-center justify-between">
                <span className="text-[10px] font-mono text-[#666666]">ENGINEERING STUDENT</span>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 sm:p-2 rounded-full bg-[#F6F6F6] text-[#666666] hover:text-[#111111] hover:bg-[#E5E5E5] transition-colors"
                  aria-label={`${member.name} LinkedIn Profile`}
                >
                  <Linkedin size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

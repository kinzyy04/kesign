import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Target, Clock, Heart, BookOpen, Users, ArrowUpRight, Building2 } from 'lucide-react';

const pillars = [
  {
    icon: Clock,
    title: 'Time Management',
    desc: 'Personalised schedules that balance study, revision, and recovery — built around each aspirant\'s rhythm.',
  },
  {
    icon: Heart,
    title: 'Stress & Wellbeing',
    desc: 'Practical techniques to manage exam anxiety, stay emotionally grounded, and maintain peak performance.',
  },
  {
    icon: Target,
    title: 'Goal Setting',
    desc: 'Breaking down a 2-year JEE journey into weekly milestones that feel achievable and motivating.',
  },
  {
    icon: Brain,
    title: 'Mindset Coaching',
    desc: 'Cognitive frameworks from IIT toppers to build resilience, self-belief, and a growth-oriented study identity.',
  },
  {
    icon: BookOpen,
    title: 'Study Planning',
    desc: 'Non-academic guidance on structuring study blocks, choosing resources, and avoiding burnout spirals.',
  },
  {
    icon: Users,
    title: '1-on-1 Counseling',
    desc: 'Private sessions with our IIT Delhi founders — real students who cracked JEE and understand the grind.',
  },
];

const coachingPartners = [
  { name: 'Allen Career Institute', location: 'Pan India', tag: 'PARTNER' },
  { name: 'Resonance Eduventures', location: 'Kota & Online', tag: 'PARTNER' },
  { name: 'Narayana Group', location: 'Pan India', tag: 'PARTNER' },
  { name: 'Coaching Partner', location: 'Delhi NCR', tag: 'COMING SOON' },
];

export const MentorshipPartnersSection = () => {
  return (
    <section id="mentorship" className="py-24 sm:py-32 bg-[#F6F6F6] relative overflow-hidden select-none">
      {/* Ambient blobs */}
      <div className="absolute top-0 left-0 w-[700px] h-[500px] bg-gradient-to-br from-[#FF5733]/15 via-[#FF7755]/8 to-transparent rounded-full blur-[150px] pointer-events-none z-0" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-gradient-to-tl from-[#FF5733]/12 to-transparent rounded-full blur-[130px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">

        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="h-[1px] w-12 bg-gradient-to-r from-[#FF5733] to-[#FF8C66]" />
          <span className="text-xs uppercase font-mono tracking-widest text-[#666666]">06 / Mentorship & Counseling</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-[#111111] tracking-tight">
              Beyond the<span className="font-serif-italic text-[#FF5733]"> syllabus.</span>
            </h2>
            <p className="mt-4 text-base text-[#666666] max-w-xl font-normal leading-relaxed">
              JEE is 80% mental, 20% academic. We provide the non-academic guidance that coaching centers don't — 
              helping aspirants thrive as students <em>and</em> as people.
            </p>
          </div>

          <div className="text-xs font-mono text-[#FF5733] flex items-center gap-2 bg-[#FF5733]/8 px-4 py-2 rounded-full border border-[#FF5733]/25 shadow-sm">
            <Brain size={14} />
            <span>IIT DELHI FOUNDERS · REAL EXPERIENCE</span>
          </div>
        </div>

        {/* Pillars Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.07 }}
              className="group p-7 rounded-2xl bg-white border border-[#E5E5E5] hover:border-[#FF5733]/40 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-[#FF5733]/10 text-[#FF5733] flex items-center justify-center mb-5 group-hover:bg-[#FF5733] group-hover:text-white transition-all duration-300">
                <pillar.icon size={20} />
              </div>
              <h3 className="text-base font-bold text-[#111111] mb-2">{pillar.title}</h3>
              <p className="text-xs text-[#666666] leading-relaxed">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

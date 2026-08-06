import React, { useState } from 'react';
import { Preloader } from './components/Preloader';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TeamSection } from './components/TeamSection';
import { WorkRibbonShowcase } from './components/WorkRibbonShowcase';
import { ServicesSection } from './components/ServicesSection';
import { ProjectModal } from './components/ProjectModal';
import { AIPhilosophySection } from './components/AIPhilosophySection';
import { ComparisonSection } from './components/ComparisonSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

import { TestimonialsMarquee } from './components/TestimonialsMarquee';

export function App() {
  const [loading, setLoading] = useState(true);
  const [modalProject, setModalProject] = useState(null);

  return (
    <div className="bg-[#F6F6F6] min-h-screen text-[#111111] relative selection:bg-[#111111] selection:text-white">
      {/* Preloader */}
      <Preloader onComplete={() => setLoading(false)} />

      {/* Magnetic Cursor */}
      <CustomCursor />

      {/* Main App */}
      {!loading && (
        <main className="relative z-10">
          <Navbar />
          <HeroSection />
          <WorkRibbonShowcase onSelectProject={(project) => setModalProject(project)} />
          <ServicesSection />
          <TestimonialsMarquee />

          <ContactSection />
          <ComparisonSection />
          <TeamSection />
          <AIPhilosophySection />
          <Footer />

          {/* Project Modal Triggered from Ribbon Showcase */}
          <ProjectModal
            project={modalProject}
            onClose={() => setModalProject(null)}
          />
        </main>
      )}
    </div>
  );
}

export default App;

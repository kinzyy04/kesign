import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "[FOUNDERS]", href: "#team" },
    { name: "[WORK RIBBON]", href: "#services" },
    { name: "[WHAT WE BUILD]", href: "#services" },

    { name: "[LET'S TALK]", href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.1 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-4 bg-[#F6F6F6]/90 backdrop-blur-xl border-b border-[#E5E5E5]' : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2 group interactive-hover">
          <span className="text-3xl font-normal font-serif-italic tracking-tight text-[#111111] group-hover:opacity-80 transition-opacity">
            kesign
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF5733]" />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-mono tracking-wider text-[#666666] hover:text-[#111111] transition-colors py-1 relative group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#FF5733] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Right CTA Button */}
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden lg:inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#111111] text-white font-semibold text-xs font-mono uppercase tracking-wider hover:bg-[#FF5733] transition-all duration-300 interactive-hover shadow-sm"
          >
            <span>[LET'S TALK]</span>
            <ArrowUpRight size={14} />
          </a>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-full bg-white border border-[#E5E5E5] text-[#111111] lg:hidden interactive-hover"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#F6F6F6] border-b border-[#E5E5E5] px-6 py-6 pb-8"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-mono text-[#666666] hover:text-[#111111] transition-colors py-1"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-[#E5E5E5]">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full inline-block text-center py-3 rounded-full bg-[#111111] text-white font-bold text-xs uppercase font-mono tracking-wider"
                >
                  [LET'S TALK]
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

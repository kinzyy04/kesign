import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Copy, Check, ArrowUpRight, Linkedin, Instagram, MessageCircle, Send, Loader2, Phone, Sparkles } from 'lucide-react';

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzPaOdQQZtkj43fjY6_hnw_Bfk4B8BLehdGt0BGnwBxINYbjOEmHFOc1dxG9NRjiVx4/exec';

const PROJECT_OPTIONS = [
  '01 — Advertising & Marketing',
  '02 — Branding & Identity',
  '03 — Products & E-Commerce',
  '04 — Editorials & Publishing',
  '05 — Events & Experiences',
  '06 — Infographics & Information Design',
  '07 — Print-on-Demand',
  '08 — Restaurant & Café',
  '09 — Social Media Creatives',
  'Multiple Categories / Full Brand Suite',
  'Other',
];

export const ContactSection = () => {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    project: '',
    otherProject: '',
  });

  const email = 'kesign04@gmail.com';

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    const payload = {
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      project: formData.project === 'Other' ? formData.otherProject : formData.project,
    };

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      setSubmitted(true);
      setFormData({
        name: '',
        phone: '',
        email: '',
        project: '',
        otherProject: '',
      });
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitError('Something went wrong. Please try again or email us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-32 bg-[#F6F6F6] relative">
      {/* Background Studio Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-[800px] h-[550px] bg-gradient-to-tr from-[#FF5733]/18 via-[#FF7755]/10 to-transparent rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-[700px] h-[500px] bg-gradient-to-bl from-[#FF5733]/15 via-[#FF8C66]/8 to-transparent rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="h-[1px] w-12 bg-gradient-to-r from-[#FF5733] to-[#FF8C66]" />
          <span className="text-xs uppercase font-mono tracking-widest text-[#666666]">06 / Connect With Us</span>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h2 className="text-3xl sm:text-6xl font-extrabold text-[#111111] tracking-tight leading-tight">
                Let's build something <br />
                <span className="font-serif-italic text-transparent bg-clip-text bg-gradient-to-r from-[#FF5733] to-[#FF8C66]">exceptional</span>.
              </h2>

              <p className="mt-4 text-sm sm:text-base text-[#666666] leading-relaxed">
                Whether you're launching a product, refreshing your brand identity, scaling social creatives, or planning campaign visuals — our IIT Delhi design studio is ready. We respond within 4 hours.
              </p>
            </div>

            {/* Email Card */}
            <div className="p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-[#E5E5E5] flex items-center justify-between shadow-sm hover:border-[#FF5733]/40 transition-colors">
              <div>
                <div className="text-[10px] font-mono text-[#666666] uppercase tracking-wider">DIRECT STUDIO INBOX</div>
                <a href={`mailto:${email}`} className="text-base sm:text-lg font-mono font-bold text-[#111111] hover:text-[#FF5733] transition-colors">
                  {email}
                </a>
              </div>

              <button
                onClick={copyEmail}
                className="p-3 rounded-xl bg-[#F6F6F6] text-[#666666] hover:text-[#111111] hover:bg-[#E5E5E5] transition-all interactive-hover flex items-center gap-1.5 text-xs font-mono"
                title="Copy email to clipboard"
                aria-label="Copy studio email address"
              >
                {copied ? <Check size={16} className="text-[#FF5733]" /> : <Copy size={16} />}
                <span className="hidden sm:inline">{copied ? 'COPIED' : 'COPY'}</span>
              </button>
            </div>

            {/* Quick WhatsApp Link */}
            <div className="p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-[#E5E5E5] flex items-center justify-between shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#25D366]/10 text-[#25D366] flex items-center justify-center">
                  <Send size={18} />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-[#888888] uppercase">WHATSAPP CHAT</div>
                  <div className="text-xs font-bold text-[#111111]">Instant Project Discovery</div>
                </div>
              </div>

              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-[#111111] text-white text-[11px] font-mono uppercase font-semibold hover:bg-[#25D366] transition-colors flex items-center gap-1.5"
              >
                <span>Chat Now</span>
                <ArrowUpRight size={13} />
              </a>
            </div>

            {/* Social Channels */}
            <div>
              <div className="text-xs font-mono text-[#666666] uppercase tracking-wider mb-4">CONNECT & FOLLOW</div>
              <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                <a
                  href="https://linkedin.com/in/krinjal-agrawal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-2xl bg-white/95 backdrop-blur-md border border-[#E5E5E5] text-[#666666] hover:text-[#111111] hover:border-[#FF5733]/50 transition-all interactive-hover flex items-center gap-2 text-xs font-mono shadow-sm"
                >
                  <Linkedin size={16} />
                  <span>LinkedIn</span>
                </a>

                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-2xl bg-white/95 backdrop-blur-md border border-[#E5E5E5] text-[#666666] hover:text-[#111111] hover:border-[#FF5733]/50 transition-all interactive-hover flex items-center gap-2 text-xs font-mono shadow-sm"
                >
                  <Instagram size={16} />
                  <span>Instagram</span>
                </a>

                <a
                  href="https://threads.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-2xl bg-white/95 backdrop-blur-md border border-[#E5E5E5] text-[#666666] hover:text-[#111111] hover:border-[#FF5733]/50 transition-all interactive-hover flex items-center gap-2 text-xs font-mono shadow-sm"
                >
                  <MessageCircle size={16} />
                  <span>Threads</span>
                </a>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <div className="kyne-card rounded-3xl p-6 sm:p-10 border border-[#E5E5E5] relative bg-white/95 backdrop-blur-md shadow-xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#FF5733]/15 to-transparent rounded-full blur-3xl pointer-events-none" />

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-[#FF5733]/15 text-[#FF5733] flex items-center justify-center mx-auto border border-[#FF5733]/30">
                    <Check size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#111111]">Project Brief Received!</h3>
                  <p className="text-sm text-[#666666] max-w-md mx-auto">
                    Thank you for contacting <strong className="text-[#111111]">Kesign</strong>. One of our IIT Delhi student founders will review your requirements and reach out within 4 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2 rounded-full bg-[#111111] text-white text-xs font-mono uppercase"
                  >
                    Submit Another Inquiry
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  {/* Row 1: Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono text-[#666666] uppercase mb-2">YOUR NAME *</label>
                      <input
                        type="text"
                        required
                        placeholder="Alex Morgan"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-[#F6F6F6] border border-[#E5E5E5] text-[#111111] focus:outline-none focus:border-[#FF5733] text-sm font-sans transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-[#666666] uppercase mb-2">PHONE NUMBER *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-[#F6F6F6] border border-[#E5E5E5] text-[#111111] focus:outline-none focus:border-[#FF5733] text-sm font-sans transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 2: Email & Category */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono text-[#666666] uppercase mb-2">YOUR EMAIL *</label>
                      <input
                        type="email"
                        required
                        placeholder="alex@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-[#F6F6F6] border border-[#E5E5E5] text-[#111111] focus:outline-none focus:border-[#FF5733] text-sm font-sans transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-[#666666] uppercase mb-2">DESIGN CATEGORY *</label>
                      <select
                        required
                        value={formData.project}
                        onChange={(e) => setFormData({ ...formData, project: e.target.value, otherProject: '' })}
                        className="w-full px-4 py-3.5 rounded-xl bg-[#F6F6F6] border border-[#E5E5E5] text-[#111111] focus:outline-none focus:border-[#FF5733] text-sm font-sans transition-colors"
                      >
                        <option value="" disabled>Select a design category</option>
                        {PROJECT_OPTIONS.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Conditional "Other" text field */}
                  <AnimatePresence>
                    {(formData.project === 'Other' || formData.project === 'Multiple Categories / Full Brand Suite') && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <label className="block text-xs font-mono text-[#666666] uppercase mb-2">DESCRIBE YOUR VISION & TIMELINE *</label>
                        <textarea
                          rows={3}
                          required
                          placeholder="Tell us about your brand, scope, or specific deliverables..."
                          value={formData.otherProject}
                          onChange={(e) => setFormData({ ...formData, otherProject: e.target.value })}
                          className="w-full px-4 py-3.5 rounded-xl bg-[#F6F6F6] border border-[#E5E5E5] text-[#111111] focus:outline-none focus:border-[#FF5733] text-sm font-sans transition-colors resize-none"
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {submitError && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-600 text-xs font-mono"
                    >
                      {submitError}
                    </motion.div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 rounded-full text-white font-bold text-xs uppercase font-mono tracking-wider transition-all duration-300 flex items-center justify-center gap-2 shadow-md ${
                      isSubmitting
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-gradient-to-r from-[#111111] via-[#222222] to-[#111111] hover:from-[#FF5733] hover:to-[#FF8C66] interactive-hover'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        <span>Transmitting Brief...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Project Brief</span>
                        <ArrowUpRight size={16} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

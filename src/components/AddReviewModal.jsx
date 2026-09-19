import React, { useState, useEffect } from 'react';
import { X, Star, Sparkles, CheckCircle2 } from 'lucide-react';
import { PRIMARY_CATEGORIES } from '../data/portfolioData';

export const AddReviewModal = ({ isOpen, onClose, onAddReview }) => {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [category, setCategory] = useState(PRIMARY_CATEGORIES[0]?.title || 'Branding & Identity');
  const [stars, setStars] = useState(5);
  const [hoverStars, setHoverStars] = useState(0);
  const [reviewText, setReviewText] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Close modal on Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !reviewText.trim()) return;

    setIsSubmitting(true);

    const newReview = {
      id: `review-${Date.now()}`,
      name: name.trim(),
      role: role.trim() || 'Verified Client',
      service: category,
      stars: Number(stars),
      text: reviewText.trim(),
      timestamp: new Date().toISOString(),
      isCustom: true
    };

    setTimeout(() => {
      onAddReview(newReview);
      setIsSubmitting(false);
      setIsSubmitted(true);

      setTimeout(() => {
        setIsSubmitted(false);
        setName('');
        setRole('');
        setReviewText('');
        setStars(5);
        onClose();
      }, 1600);
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md transition-all animate-fadeIn">
      {/* Background click to close */}
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-lg bg-[#141414] border border-white/10 rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 text-white z-10 overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute -top-24 -right-24 w-60 h-60 bg-[#FF5733]/20 rounded-full blur-[90px] pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-colors border border-white/10 cursor-pointer"
        >
          <X size={18} />
        </button>

        {isSubmitted ? (
          <div className="py-12 flex flex-col items-center justify-center text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-[#FF5733]/20 border border-[#FF5733]/40 flex items-center justify-center text-[#FF5733] animate-bounce">
              <CheckCircle2 size={32} />
            </div>
            <h3 className="text-xl font-bold tracking-tight text-white">Review Submitted!</h3>
            <p className="text-xs sm:text-sm text-white/60 max-w-xs font-mono">
              Thank you for supporting Kesign and our IIT Delhi student design collective. Your review is now live in the showcase!
            </p>
          </div>
        ) : (
          <div>
            {/* Header */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#FF5733] bg-[#FF5733]/10 px-2.5 py-0.5 rounded-full border border-[#FF5733]/20">
                  Client Feedback
                </span>
                <span className="text-[10px] font-mono text-white/40 flex items-center gap-1">
                  <Sparkles size={11} className="text-[#FF5733]" /> Live Showcase
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                Share Your Experience with <span className="text-[#FF5733]">Kesign</span>
              </h2>
              <p className="text-xs text-white/50 mt-1">
                Tell us about your project across any of our 9 design worlds.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Rating Selector */}
              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-white/70 mb-1.5">
                  Rating
                </label>
                <div className="flex items-center gap-1.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      type="button"
                      key={star}
                      onMouseEnter={() => setHoverStars(star)}
                      onMouseLeave={() => setHoverStars(0)}
                      onClick={() => setStars(star)}
                      className="p-1 hover:scale-110 transition-transform focus:outline-none cursor-pointer"
                    >
                      <Star
                        size={24}
                        className={`${
                          (hoverStars || stars) >= star
                            ? 'fill-[#FF5733] text-[#FF5733]'
                            : 'text-white/20'
                        } transition-colors`}
                      />
                    </button>
                  ))}
                  <span className="text-xs font-mono text-white/50 ml-2">
                    {stars}.0 / 5.0
                  </span>
                </div>
              </div>

              {/* Name & Role */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-white/70 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Vikram Sharma"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#FF5733] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-white/70 mb-1">
                    Role or Company / Handle
                  </label>
                  <input
                    type="text"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    placeholder="e.g. Founder, Nova / @vikram"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#FF5733] transition-colors"
                  />
                </div>
              </div>

              {/* Category Dropdown */}
              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-white/70 mb-1">
                  Design Category / Project World
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full bg-[#1e1e1e] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#FF5733] transition-colors cursor-pointer"
                >
                  {PRIMARY_CATEGORIES.map((cat) => (
                    <option key={cat.id} value={cat.title} className="bg-[#1e1e1e] text-white">
                      {cat.number} — {cat.title}
                    </option>
                  ))}
                  <option value="Custom Design System" className="bg-[#1e1e1e] text-white">
                    General / Full Studio Partnership
                  </option>
                </select>
              </div>

              {/* Review Text */}
              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-white/70 mb-1">
                  Your Review / Feedback *
                </label>
                <textarea
                  required
                  rows={3}
                  value={reviewText}
                  onChange={(e) => setReviewText(e.target.value)}
                  placeholder="How was your design experience with Kesign? Mention turnaround speed, visual quality, or project results..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#FF5733] transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2.5 rounded-xl border border-white/10 text-xs font-mono text-white/60 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting || !name.trim() || !reviewText.trim()}
                  className="px-5 py-2.5 rounded-xl bg-[#FF5733] hover:bg-[#ff6d4d] text-white text-xs font-mono font-semibold tracking-wide transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-[#FF5733]/20 flex items-center gap-2 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>Posting...</span>
                  ) : (
                    <>
                      <span>Post Review</span>
                      <Sparkles size={14} />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

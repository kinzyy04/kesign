import React from 'react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: "Riya Sharma",
    handle: "@riyacreates",
    role: "EdTech YouTuber",
    text: "Ok so I was skeptical at first but my thumbnails actually started getting clicks?? Like my CTR went from 4% to almost 9 in two weeks. Didn't expect that honestly.",
    stars: 5,
    service: "YouTube Thumbnails",
  },
  {
    name: "Arjun Mehta",
    handle: "@arjunmentors",
    role: "JEE/NEET Faculty",
    text: "I run a coaching batch of 8k+ students and my slides used to be... embarrassing lol. Kesign cleaned them up properly. Students actually pay attention to the screen now instead of just the whiteboard.",
    stars: 5,
    service: "Teaching Deck Design",
  },
  {
    name: "Priya Nair",
    handle: "@priyabrandco",
    role: "Edtech Consultant",
    text: "Got branding done for two of my edtech clients through Kesign. The logo, channel art, everything just looked cohesive for once. Only reason it's not 5 stars — first revision took a bit longer than expected.",
    stars: 4,
    service: "Channel Branding",
  },
  {
    name: "Sahil Gupta",
    handle: "@sahilstartup",
    role: "Edtech Founder",
    text: "Needed a pitch deck for our Series A and these guys turned it around in like 2 days. Investors actually complimented the deck which... never happens lol. We closed the round btw 🙌",
    stars: 5,
    service: "Pitch Deck Design",
  },
  {
    name: "Neha Kapoor",
    handle: "@nehaeducates",
    role: "IELTS Trainer",
    text: "I post study tips on Instagram and the carousels Kesign made are getting saved way more than my old Canva ones. Not gonna lie, the difference is pretty noticeable.",
    stars: 4,
    service: "Social Media Creatives",
  },
  {
    name: "Vikram Desai",
    handle: "@vikramcodes",
    role: "Coding Instructor",
    text: "They designed my course worksheets and handouts. Multiple students DMed me asking where I got them done — that says enough I think. Clean stuff.",
    stars: 5,
    service: "Course Material Design",
  },
  {
    name: "Aanya Singh",
    handle: "@aanyalearns",
    role: "Study Planner Creator",
    text: "Sold 300+ copies of my digital planner in the first week itself. People keep asking if I hired a whole design team. Nope, just Kesign haha.",
    stars: 5,
    service: "Digital Study Assets",
  },
  {
    name: "Rohan Verma",
    handle: "@rohancoach",
    role: "Career Counsellor",
    text: "Made a workshop flyer through them, shared on WhatsApp and got like 200 registrations in 3 days. Half the people said they signed up because the flyer looked legit. Worth it.",
    stars: 4,
    service: "Event Creatives",
  },
  {
    name: "Tanvi Joshi",
    handle: "@tanviteaches",
    role: "Online Tutor",
    text: "What I liked is they actually understood the education space. Didn't have to over-explain what I needed. Quick turnaround too — will def come back for more.",
    stars: 5,
    service: "Custom Design",
  },
];

// Double the array for seamless infinite loop
const doubled = [...reviews, ...reviews];

const StarRating = ({ count }) => (
  <div className="flex gap-0.5 mb-3">
    {Array.from({ length: count }).map((_, i) => (
      <Star key={i} className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-[#FF5733] text-[#FF5733]" />
    ))}
  </div>
);

export const TestimonialsMarquee = () => {
  return (
    <section className="py-20 bg-[#111111] relative overflow-hidden select-none">

      {/* Faint background glow */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[300px] bg-[#FF5733]/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Section label */}
      <div className="flex items-center justify-center gap-4 mb-10">
        <span className="h-[1px] w-10 bg-[#FF5733]/50" />
        <span className="text-xs uppercase font-mono tracking-widest text-[#666666]">What Clients Say</span>
        <span className="h-[1px] w-10 bg-[#FF5733]/50" />
      </div>

      {/* Marquee wrapper with fade edges */}
      <div className="relative">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#111111] to-transparent z-10 pointer-events-none" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#111111] to-transparent z-10 pointer-events-none" />

        {/* Scrolling belt */}
        <div className="flex gap-5 marquee-track">
          {doubled.map((review, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-[260px] sm:w-[300px] bg-[#1a1a1a] border border-white/8 rounded-2xl p-4 sm:p-6 flex flex-col gap-3 hover:border-[#FF5733]/40 transition-colors duration-300"
            >
              {/* Quote icon */}
              <Quote size={18} className="text-[#FF5733]/60" />

              {/* Stars */}
              <StarRating count={review.stars} />

              {/* Review text */}
              <p className="text-xs sm:text-sm text-white/75 leading-relaxed flex-1">
                "{review.text}"
              </p>

              {/* Service tag */}
              <span className="text-[9px] font-mono uppercase tracking-widest text-[#FF5733]/70 border border-[#FF5733]/20 px-2.5 py-1 rounded-full w-fit">
                {review.service}
              </span>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-white/8">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FF5733] to-[#FF8C66] flex items-center justify-center text-white text-xs font-extrabold">
                  {review.name[0]}
                </div>
                <div>
                  <p className="text-xs font-bold text-white">{review.name}</p>
                  <p className="text-[10px] font-mono text-white/40">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

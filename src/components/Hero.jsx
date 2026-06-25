"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, Calendar } from "lucide-react";

export default function Hero({ openBooking }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Hydration-safe configuration for particles
  const particles = Array.from({ length: 25 }).map((_, i) => ({
    id: i,
    size: (i % 3) + 2, // 2px to 4px
    left: `${(i * 4) % 100}%`,
    top: `${(i * 7.5) % 100}%`,
    duration: 12 + (i % 6) * 4, // 12s - 32s
    delay: (i % 5) * 1.5,
  }));

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black py-20"
    >
      {/* Background Image with Dark Golden Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-65 scale-105 pointer-events-none"
        style={{ backgroundImage: `url('/hero-bg.png')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/45 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-[#050505] pointer-events-none" />

      {/* Ambient soft glows */}
      <div className="absolute top-[20%] left-[10%] w-[350px] h-[350px] bg-gold-primary/5 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-[20%] right-[10%] w-[350px] h-[350px] bg-gold-dark/5 rounded-full blur-[120px] pointer-events-none animate-pulse" />

      {/* Floating Particles (Rendered only on client side to prevent hydration mismatches) */}
      {mounted && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {particles.map((p) => (
            <motion.div
              key={p.id}
              className="absolute rounded-full bg-gold-primary/30"
              style={{
                width: p.size,
                height: p.size,
                left: p.left,
                top: p.top,
              }}
              animate={{
                y: [0, -120, 0],
                x: [0, 40, 0],
                opacity: [0.1, 0.7, 0.1],
              }}
              transition={{
                duration: p.duration,
                delay: p.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      )}

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Sparkle Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-primary/10 border border-gold-primary/20 mb-8"
        >
          <Sparkles className="w-4 h-4 text-gold-light" />
          <span className="text-xs font-sans tracking-[0.25em] text-gold-light font-semibold uppercase">
            EXPERIENCE LUXURY GROOMING
          </span>
        </motion.div>

        {/* Big title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="font-serif text-5xl sm:text-7xl md:text-8xl tracking-[0.08em] font-extrabold text-[#f5f5f3] mb-6 select-none uppercase"
        >
          HAIR RIZER <span className="gold-text-gradient">LUXE</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-serif text-lg sm:text-2xl md:text-3xl text-gold-accent font-light italic tracking-wider max-w-3xl mb-6"
        >
          “Elevate Your Beauty, One Rizer Luxe Experience at a Time”
        </motion.p>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-sans text-sm sm:text-base text-[#f5f5f3]/70 font-light leading-relaxed max-w-xl mb-12 tracking-wide"
        >
          Step into a realm of bespoke aesthetics, advanced skincare rituals, and master level styling. We redefine confidence with artistry, precision, and elegance.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto justify-center"
        >
          {/* Explore Services CTA */}
          <Link
            href="/services"
            className="flex items-center justify-center h-14 px-8 rounded-full bg-gold-primary text-[#050505] text-xs font-sans tracking-[0.2em] font-bold border border-gold-primary transition-all duration-300 hover:bg-transparent hover:text-gold-primary hover:scale-105 hover:shadow-[0_0_25px_rgba(212,175,55,0.4)]"
          >
            EXPLORE SERVICES
          </Link>
        </motion.div>
      </div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-65 cursor-pointer"
        onClick={() => document.getElementById("about").scrollIntoView({ behavior: "smooth" })}
      >
        <span className="text-[10px] font-sans tracking-[0.35em] text-[#f5f5f3]/50 uppercase mb-2">SCROLL DOWN</span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-gold-primary to-transparent" />
      </motion.div>
    </section>
  );
}

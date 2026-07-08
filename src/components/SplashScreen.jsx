"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function SplashScreen({ isFadingOut }) {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    // Smooth loader counting animation
    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 100); // Approx 5.0 seconds to reach 100%
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`fixed inset-0 bg-[#ffffff] z-[9999] flex flex-col items-center justify-center overflow-hidden transition-all duration-600 ease-in-out ${
        isFadingOut ? "opacity-0 pointer-events-none scale-105" : "opacity-100"
      }`}
    >
      {/* Main Logo & Text Content */}
      <div className="relative z-10 flex flex-col items-center max-w-xs text-center px-4">
        
        {/* Animated circular outer glow frame with buffer animation */}
        <div className="relative w-56 h-56 sm:w-64 sm:h-64 flex items-center justify-center mb-8">
          
          {/* Inner static border */}
          <div className="absolute inset-0 rounded-full border border-gold-primary/10" />

          {/* Buffer Ring 1: Conic Gradient Spinner */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 2.2, ease: "linear" }}
            className="absolute inset-0 rounded-full border-2 border-dashed border-gold-primary/30"
          />

          {/* Buffer Ring 2: Primary Gold Glow Tracer */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 3.5, ease: "linear" }}
            className="absolute inset-[3px] rounded-full border border-dotted border-gold-light/65"
          />

          {/* Buffer Glow Shadow Ring */}
          <div className="absolute inset-0 rounded-full shadow-[0_0_35px_rgba(212,175,55,0.15)] animate-pulse pointer-events-none" />

          {/* Logo container itself (Scaled to 88% of parent width/height) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 90,
              damping: 14,
              delay: 0.1,
            }}
            className="w-[88%] h-[88%] rounded-full bg-[#ffffff] overflow-hidden flex items-center justify-center p-3 border border-gold-primary/20 shadow-2xl relative"
          >
            {/* Logo image filling 92% of inner circle */}
            <img
              src="/hairraiser.png"
              alt="Hair Raiserz-66A Luxe Logo"
              className="object-contain w-[92%] h-[92%] group-hover:scale-105 transition-transform duration-300"
            />
          </motion.div>
        </div>

        {/* Text name and tagline */}
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-sans text-[11px] tracking-[0.35em] uppercase font-bold gold-text-gradient select-none"
        >
          Hair Raiserz-66A Luxe
        </motion.span>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-sans text-[8px] tracking-[0.2em] text-[#f5f5f3] uppercase font-light mt-1.5 select-none"
        >
          Luxe Unisex Sanctuary
        </motion.p>

        {/* Dynamic Loading Timeline Bar */}
        <div className="w-48 h-[1px] bg-white/10 rounded-full mt-10 relative overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${percent}%` }}
            transition={{ ease: "easeOut" }}
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-gold-dark via-gold-primary to-gold-light"
          />
        </div>

        {/* Percentage Counter text */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 0.8 }}
          className="font-sans text-[8px] text-gold-accent mt-2 font-mono tracking-widest"
        >
          {percent}%
        </motion.span>

      </div>
    </div>
  );
}

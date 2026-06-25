"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Sparkles } from "lucide-react";

export default function ServiceModal({ service, onClose, onBook }) {
  // Prevent parent scroll when modal is open
  useEffect(() => {
    if (service) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [service]);

  if (!service) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-8">
        {/* Backdrop Blur Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/85 backdrop-blur-sm"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ type: "spring", duration: 0.45 }}
          className="relative w-full max-w-3xl rounded-3xl glass-panel gold-gradient-border shadow-[0_20px_50px_rgba(0,0,0,0.8),_0_0_35px_rgba(212,175,55,0.2)] overflow-hidden z-10 flex flex-col md:flex-row max-h-[90vh] md:max-h-[85vh] bg-[#0a0a0a]/95"
        >
          {/* Close Icon Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-1.5 rounded-full border border-gold-primary/20 text-[#f5f5f3]/70 hover:text-gold-primary hover:border-gold-primary/60 transition-all duration-300 bg-[#050505]/70 focus:outline-none"
            aria-label="Close modal"
          >
            <X className="w-4.5 h-4.5" />
          </button>

          {/* Left Panel: Service Image (w-full on mobile, w-5/12 on md/desktop) */}
          <div className="relative w-full md:w-5/12 h-52 md:h-auto min-h-[220px] md:min-h-[480px] bg-black/40 overflow-hidden flex-shrink-0">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 40vw"
              priority
            />
            {/* Ambient overlay gradients to ease image-text transition */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-[#0a0a0a]" />
            
            {/* Tag Badge */}
            <div className="absolute top-4 left-4 z-10">
              <span className="text-[9px] font-sans tracking-[0.2em] uppercase px-3 py-1 rounded-full border border-gold-primary/30 text-gold-light bg-black/75 font-bold shadow-md">
                {service.tag}
              </span>
            </div>
          </div>

          {/* Right Panel: Details & Ritual List (w-full on mobile, w-7/12 on md/desktop) */}
          <div className="w-full md:w-7/12 p-6 md:p-8 flex flex-col justify-between overflow-y-auto max-h-[50vh] md:max-h-[85vh] scrollbar-thin">
            <div>
              {/* Header Title */}
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-4 h-4 text-gold-primary animate-pulse" />
                <span className="text-[9px] font-sans tracking-[0.3em] text-gold-accent font-bold uppercase">LUXE RITUAL DETAILS</span>
              </div>

              <h3 className="font-serif text-3xl font-extrabold text-[#f5f5f3] tracking-wide mb-4">
                {service.title.split(" ").slice(0, -1).join(" ") || service.title}{" "}
                <span className="gold-text-gradient">
                  {service.title.split(" ").pop()}
                </span>
              </h3>
              
              <p className="font-sans text-xs sm:text-sm text-[#f5f5f3]/70 font-light leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Ritual Checklist items */}
              <div className="space-y-3.5 mb-8">
                <h4 className="text-[10px] font-sans tracking-widest text-gold-accent font-bold uppercase mb-3">What's Included in this Experience</h4>
                {service.features &&
                  service.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-gold-primary mt-0.5 flex-shrink-0" />
                      <span className="font-sans text-xs sm:text-sm text-[#f5f5f3]/85 font-light leading-relaxed">
                        {feature}
                      </span>
                    </div>
                  ))}
              </div>
            </div>

            {/* Footer Actions */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-gold-primary/10 mt-auto">
              <button
                onClick={onBook}
                className="flex-1 flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl border border-gold-primary bg-gold-primary text-[#050505] text-xs font-sans tracking-[0.2em] font-bold transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:scale-[1.01] cursor-pointer"
              >
                BOOK THIS RITUAL
              </button>
              <button
                onClick={onClose}
                className="sm:w-32 py-3.5 px-6 rounded-xl border border-white/10 text-white/70 text-xs font-sans tracking-[0.2em] hover:text-white hover:border-white/20 transition-all duration-300 cursor-pointer text-center bg-transparent"
              >
                CLOSE
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

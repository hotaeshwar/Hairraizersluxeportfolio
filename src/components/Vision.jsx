"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function Vision() {
  return (
    <section className="py-20 bg-white relative overflow-hidden flex items-center justify-center">
      {/* Background Soft Golden Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-gold-primary/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="p-[2.5px] rounded-[2.5rem] running-gold-stripes shadow-[0_0_35px_rgba(212,175,55,0.25)] relative overflow-hidden"
        >
          {/* Inner card with bg and padding */}
          <div className="bg-white rounded-[calc(2.5rem-2.5px)] p-10 md:p-16 text-center relative overflow-hidden w-full h-full">
            {/* Quote icons */}
            <div className="absolute top-4 left-4 text-gold-primary/10 pointer-events-none">
              <Quote className="w-20 h-20 -scale-x-100" />
            </div>
            <div className="absolute bottom-4 right-4 text-gold-primary/10 pointer-events-none">
              <Quote className="w-20 h-20" />
            </div>

            <div className="relative z-10 flex flex-col items-center">
              
              {/* Vision PNG Icon Header */}
              <div className="w-20 h-20 rounded-2xl bg-gold-primary/10 border border-gold-primary/25 flex items-center justify-center p-3.5 mb-6 shadow-lg">
                <Image
                  src="/shared-vision.png"
                  alt="Our Vision"
                  width={56}
                  height={56}
                  className="object-contain animate-pulse brightness-0"
                />
              </div>

              {/* Title */}
              <span className="font-sans text-xs tracking-[0.4em] text-gold-accent font-bold uppercase mb-4">
                OUR VISION
              </span>

              {/* Vision Body */}
              <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#1a1a1a] leading-relaxed tracking-wide font-medium max-w-2xl mx-auto">
                &ldquo;Our vision is to become a trusted destination for premium hair, beauty, skin, and grooming services, where every client experiences <span className="gold-text-gradient font-bold">confidence, elegance,</span> and <span className="gold-text-gradient font-bold">personalized care</span>.&rdquo;
              </h3>

              {/* Accent divider line */}
              <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-gold-primary/50 to-transparent mt-8" />
              
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Trophy, Users, HeartHandshake } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Background Soft Glows */}
      <div className="absolute top-[10%] right-[-10%] w-[300px] h-[300px] bg-gold-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[300px] h-[300px] bg-gold-dark/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col space-y-6"
          >
            <div className="flex items-center gap-2">
              <span className="h-[1px] w-8 bg-gold-primary" />
              <span className="font-sans text-xs tracking-[0.3em] text-gold-primary uppercase font-bold">
                OUR STORY
              </span>
            </div>
            
            <h2 className="font-serif text-4xl sm:text-5xl tracking-wide font-extrabold leading-tight text-[#1a1a1a]">
              Redefining Beauty <br />
              <span className="gold-text-gradient">As An Experience</span>
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#1a1a1a]/70 font-light leading-relaxed">
              <p>
                At <strong className="text-gold-primary font-normal">Hair Rizer Luxe</strong>, we believe beauty is not just a service — it’s an experience. Since our inception, we’ve redefined grooming with precision, creativity, and care that go beyond the ordinary.
              </p>
              <p>
                Our salons combine cutting-edge styling, advanced hair, skin, and nail care, and an ambience of modern comfort. Each visit is designed to rejuvenate your confidence and leave you feeling your absolute best.
              </p>
              <p>
                Our expert team of stylists, aestheticians, and therapists bring global techniques and years of experience into every appointment. Whether it’s a refreshing haircut, a vibrant hair color transformation, or a calming facial ritual — every touch is guided by artistry and attention to detail.
              </p>
              <p>
                We use premium, salon-grade products that are also available for home care — so your glow continues long after you step out of our doors.
              </p>
              <p className="font-serif text-lg text-gold-light italic pt-2">
                At Hair Rizer Luxe, we don’t just style hair — we shape how you feel about yourself. Your journey to confidence, care, and sophistication begins here.
              </p>
            </div>

            {/* Quick stats / Features */}
            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-gold-primary/10">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-lg bg-gold-primary/10 border border-gold-primary/20 flex items-center justify-center text-gold-primary shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-sans tracking-wider text-[#1a1a1a] font-bold">Expert Stylists</h4>
                  <p className="text-xs text-[#1a1a1a]/50 font-light">Global beauty trends</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-lg bg-gold-primary/10 border border-gold-primary/20 flex items-center justify-center text-gold-primary shrink-0">
                  <Trophy className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-sans tracking-wider text-[#1a1a1a] font-bold">Premium Care</h4>
                  <p className="text-xs text-[#1a1a1a]/50 font-light">Salon-grade rituals</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Overlapping Luxury Collage */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative flex items-center justify-center min-h-[450px]"
          >
            {/* Background gold accent circle */}
            <div className="absolute w-[280px] h-[280px] rounded-full border border-gold-primary/15 -z-10 animate-pulse pointer-events-none" />

            {/* Image 1: Main Styled Card */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
              className="absolute left-0 top-0 w-[65%] aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border border-gold-primary/20"
            >
              <Image
                src="/about-salon.png"
                alt="Hairstyling session"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[10px] font-sans tracking-widest text-gold-primary font-bold uppercase mb-1 block">PRECISION CUTS</span>
                <span className="text-sm font-serif text-[#f5f5f3] font-semibold">Artistic Hair Styling</span>
              </div>
            </motion.div>

            {/* Image 2: Small Overlapping Details Card */}
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.4 }}
              className="absolute right-0 bottom-4 w-[55%] aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-gold-primary/30 z-10"
            >
              <Image
                src="/salon-details.png"
                alt="Luxury salon details"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              
              {/* Overlay Glass Tag */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl glass-panel text-center">
                <span className="text-[9px] font-sans tracking-[0.2em] text-gold-accent font-bold uppercase mb-1 block">GOLDEN TOOLKIT</span>
                <span className="text-xs text-[#1a1a1a]/95 font-light">Only top brands used</span>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  UserCheck,
  Sparkles,
  HeartHandshake,
  MessagesSquare,
  Sparkle,
  Gem,
} from "lucide-react";

const features = [
  {
    title: "Expert Stylists & Professionals",
    description: "Our certified professionals bring global techniques, artistic precision, and years of master grooming expertise.",
    icon: UserCheck,
    image: "/hairdresser.png",
  },
  {
    title: "Premium Salon-Grade Products",
    description: "We use only high-end, luxury care products from top international brands to treat your hair, skin, and nails.",
    icon: Sparkles,
    image: "/products.png",
  },
  {
    title: "Hygienic & Relaxing Ambience",
    description: "Immerse yourself in a sanitized, clean sanctuary designed for comfort, luxury, and peace of mind.",
    icon: HeartHandshake,
    image: "/massage.png",
  },
  {
    title: "Personalized Consultations",
    description: "We evaluate your hair profile, skin type, and lifestyle to deliver highly tailored styling recommendations.",
    icon: MessagesSquare,
    image: "/doctor-consultation.png",
  },
  {
    title: "Modern Grooming Techniques",
    description: "Equipped with state-of-the-art styling tools and contemporary styling philosophies for trendsetting looks.",
    icon: Sparkle,
    image: "/haircut.png",
  },
  {
    title: "Affordable Luxury Experience",
    description: "Enjoy world-class, premium beauty services at competitive pricing, making luxury accessible.",
    icon: Gem,
    image: "/shaving-razor.png",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background glows */}
      <div className="absolute top-[20%] right-[-10%] w-[350px] h-[350px] bg-gold-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[350px] h-[350px] bg-gold-dark/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <span className="h-[1px] w-6 bg-gold-primary" />
            <span className="font-sans text-xs tracking-[0.3em] text-gold-primary uppercase font-bold">
              THE RAISERZ-66A LUXE ADVANTAGE
            </span>
            <span className="h-[1px] w-6 bg-gold-primary" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl tracking-wide font-extrabold text-[#1a1a1a] mb-6"
          >
            Why <span className="gold-text-gradient">Choose Us</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-sm sm:text-base text-[#1a1a1a]/60 leading-relaxed font-light"
          >
            Elevate your grooming standard. We offer an unmatched blend of style, comfort, and professional mastery.
          </motion.p>
        </div>

        {/* Features Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature) => {
            return (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                className="group relative rounded-2xl p-6 glass-panel flex flex-col items-start text-left overflow-hidden cursor-default transition-all duration-400 hover:border-gold-primary/35 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(212,175,55,0.1)]"
              >
                {/* Micro Border Glow */}
                <div className="absolute inset-0 border border-gold-primary/0 group-hover:border-gold-primary/20 rounded-2xl transition-all duration-300 pointer-events-none" />

                {/* Corner light effect */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gold-primary/5 rounded-full blur-2xl group-hover:bg-gold-primary/15 transition-all duration-500 pointer-events-none" />

                {/* Icon container holding the PNG image instead of SVG */}
                <div className="w-14 h-14 rounded-xl bg-gold-primary/10 border border-gold-primary/20 flex items-center justify-center p-2.5 mb-6 group-hover:scale-110 group-hover:bg-gold-primary group-hover:border-gold-primary transition-all duration-500 shadow-md">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={32}
                    height={32}
                    className="object-contain brightness-0"
                  />
                </div>

                {/* Title */}
                <h3 className="font-serif text-lg font-bold text-[#1a1a1a] mb-3 group-hover:text-gold-primary transition-colors duration-300">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="font-sans text-xs sm:text-sm text-[#1a1a1a]/60 leading-relaxed font-light group-hover:text-[#1a1a1a]/75 transition-colors duration-300">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}


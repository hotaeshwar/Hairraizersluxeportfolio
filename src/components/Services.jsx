"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ScissorsIcon, BeardIcon, SkinCareIcon, NailsIcon } from "./Icons";
import { Sparkles, ArrowRight } from "lucide-react";

const services = [
  {
    title: "Classic Haircut",
    description: "Skin fades, pompadours, crew cuts & more. Precision cuts designed to suit your personality.",
    icon: ScissorsIcon,
    iconImage: "/haircut.png",
    image: "/service-haircut.png",
    tag: "Premium Styling",
    features: [
      "Master Stylist Consultation & Hair Profiling",
      "Custom Precision Haircut / Skin Fades / Under-cuts",
      "Relaxing Double Hair Wash & Deep Conditioning",
      "Professional Blow-Dry Styling & Sculpting",
      "Premium Styling Matte Clay / Wax Application"
    ],
  },
  {
    title: "Beard & Shave",
    description: "Hot towel shave & beard styling for a sharp, confident look that defines your charm.",
    icon: BeardIcon,
    iconImage: "/shaving-razor.png",
    image: "/service-beard.png",
    tag: "Luxury Shave",
    features: [
      "Beard Trim, Shape-Up & Detail Outline",
      "Traditional Hot Towel Steam Treatment",
      "Pre-shave Nourishing Oil Facial Massage",
      "Clean Razor Line Edging & Fine Shave",
      "Post-Shave Hydrating Balm & Cooling Finish"
    ],
  },
  {
    title: "Facials & Skin",
    description: "Cleanup, de-tan, and glow facials using premium salon-grade products for fresh skin.",
    icon: SkinCareIcon,
    iconImage: "/facial.png",
    image: "/service-facial.png",
    tag: "Skin Rituals",
    features: [
      "Deep Clean-up & Steam Pore Cleansing",
      "Advanced De-Tan / Charcoal Exfoliating Scrub",
      "Gold Glow / Skin Brightening Hydrating Pack",
      "Relaxing Facial Massage & Skin Nourishment",
      "Premium Protective Moisturizer & Sunscreen Finish"
    ],
  },
  {
    title: "Nails & Grooming",
    description: "Manicure, pedicure, and relaxing head massage — perfect finishing touches to pamper and elevate your personal care.",
    icon: NailsIcon,
    iconImage: "/nail-polish.png",
    image: "/service-nails.png",
    tag: "Complete Care",
    features: [
      "Luxury Manicure & Cuticle Care",
      "Relaxing Pedicure & Exfoliating Foot Scrub",
      "Nail Shaping, Filing, and Buffing Treatment",
      "Deep-Relaxing 15-Minute Head & Neck Massage",
      "Warm Herbal Towel Finishes & Hydrating Balm"
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function Services({ onExplore }) {
  return (
    <section id="services" className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-[20%] left-[-10%] w-[350px] h-[350px] bg-gold-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[350px] h-[350px] bg-gold-dark/5 rounded-full blur-[120px] pointer-events-none" />

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
              THE RITUALS
            </span>
            <span className="h-[1px] w-6 bg-gold-primary" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl tracking-wide font-extrabold text-[#f5f5f3] mb-6"
          >
            Our <span className="gold-text-gradient">Services</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-sm sm:text-base text-[#f5f5f3]/60 leading-relaxed font-light"
          >
            Explore our expert grooming & styling services designed for comfort, class, and confidence.
          </motion.p>
        </div>

        {/* Services Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {services.map((service) => {
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                onClick={() => onExplore(service)}
                className="group relative rounded-3xl p-8 glass-panel glass-panel-hover flex flex-col justify-between h-[300px] cursor-pointer"
              >
                {/* Accent Inner Border Shine */}
                <div className="absolute inset-0 border border-gold-primary/0 group-hover:border-gold-primary/20 rounded-3xl transition-all duration-300 pointer-events-none" />

                <div>
                  {/* Top Bar inside card */}
                  <div className="flex justify-between items-start mb-6">
                    {/* Icon container holding the PNG image instead of SVG */}
                    <div className="w-16 h-16 rounded-2xl bg-gold-primary/10 border border-gold-primary/25 flex items-center justify-center p-2.5 group-hover:scale-110 group-hover:bg-gold-primary group-hover:border-gold-primary transition-all duration-500 shadow-md">
                      <Image
                        src={service.iconImage}
                        alt={service.title}
                        width={40}
                        height={40}
                        className="object-contain brightness-0 invert"
                      />
                    </div>

                    {/* Tag badge */}
                    <span className="text-[10px] font-sans tracking-[0.2em] uppercase px-3 py-1 rounded-full border border-gold-primary/20 text-gold-light bg-black/40 font-semibold group-hover:border-gold-primary/50 transition-colors duration-300">
                      {service.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-2xl font-bold tracking-wide text-[#f5f5f3] mb-3 group-hover:text-gold-primary transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-sm text-[#f5f5f3]/60 leading-relaxed font-light mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Bottom Trigger link */}
                <div className="flex items-center gap-2 text-xs font-sans tracking-[0.2em] text-gold-primary/80 group-hover:text-gold-primary uppercase font-bold transition-all duration-300">
                  <span>EXPLORE RITUAL</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-2" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Custom Styling highlight note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-sm font-sans tracking-widest text-gold-light/60">
            Looking for something specific? Call us at{" "}
            <a
              href="tel:+919915942299"
              className="text-gold-primary font-bold hover:underline"
            >
              +91 99159 42299
            </a>{" "}
            for custom styling appointments.
          </p>
        </motion.div>
        
      </div>
    </section>
  );
}

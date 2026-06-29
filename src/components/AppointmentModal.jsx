"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CalendarDays } from "lucide-react";

export default function AppointmentModal({ isOpen, onClose, preselectedService }) {
  const email = "hairraiserzsec66@gmail.com";
  const [selectedService, setSelectedService] = useState("");

  // Prevent scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Handle preselected service binding
  useEffect(() => {
    if (isOpen) {
      if (preselectedService === "Classic Haircut") {
        setSelectedService("Classic Haircut");
      } else if (preselectedService === "Beard & Shave") {
        setSelectedService("Beard & Shave");
      } else if (preselectedService === "Facials & Skin") {
        setSelectedService("Facials & Skin Care");
      } else if (preselectedService === "Nails & Grooming") {
        setSelectedService("Nails & Grooming");
      } else {
        setSelectedService("");
      }
    }
  }, [isOpen, preselectedService]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop Blur Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-lg p-8 rounded-3xl glass-panel gold-gradient-border shadow-[0_20px_50px_rgba(0,0,0,0.15),_0_0_30px_rgba(212,175,55,0.2)] overflow-hidden z-10"
          >
            {/* Soft gold glow inside */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-2 bg-gold-primary/30 rounded-full blur-md" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-1.5 rounded-full border border-gold-primary/20 text-[#1a1a1a]/70 hover:text-gold-primary hover:border-gold-primary/60 transition-all duration-300 bg-neutral-100 focus:outline-none"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gold-primary/10 border border-gold-primary/25 flex items-center justify-center text-gold-primary">
                <CalendarDays className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold text-[#1a1a1a]">
                  Book <span className="gold-text-gradient">Appointment</span>
                </h3>
                <p className="text-xs text-[#1a1a1a]/50 font-light">
                  Direct callback & slot confirmation request.
                </p>
              </div>
            </div>

            {/* Formsubmit Form */}
            <form
              action={`https://formsubmit.co/${email}`}
              method="POST"
              className="space-y-4"
            >
              <input type="hidden" name="_subject" value="New Appointment Booking Request - HAIR RIZER LUXE" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />

              <div>
                <label className="text-[10px] font-sans tracking-widest text-gold-accent font-bold uppercase mb-1.5 block">Full Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Full Name"
                  required
                  className="w-full bg-white border border-gold-primary/20 hover:border-gold-primary/45 focus:border-gold-primary rounded-xl px-4 py-2.5 text-sm font-sans tracking-wide text-[#1a1a1a] focus:outline-none focus:ring-1 focus:ring-gold-primary/50 placeholder-neutral-400 transition-all duration-300"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] font-sans tracking-widest text-gold-accent font-bold uppercase mb-1.5 block">Email Address</label>
                  <input
                     type="email"
                     name="email"
                     placeholder="name@example.com"
                     required
                     className="w-full bg-white border border-gold-primary/20 hover:border-gold-primary/45 focus:border-gold-primary rounded-xl px-4 py-2.5 text-sm font-sans tracking-wide text-[#1a1a1a] focus:outline-none focus:ring-1 focus:ring-gold-primary/50 placeholder-neutral-400 transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-sans tracking-widest text-gold-accent font-bold uppercase mb-1.5 block">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone number"
                    required
                    className="w-full bg-white border border-gold-primary/20 hover:border-gold-primary/45 focus:border-gold-primary rounded-xl px-4 py-2.5 text-sm font-sans tracking-wide text-[#1a1a1a] focus:outline-none focus:ring-1 focus:ring-gold-primary/50 placeholder-neutral-400 transition-all duration-300"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] font-sans tracking-widest text-gold-accent font-bold uppercase mb-1.5 block">Preferred Date</label>
                  <input
                    type="date"
                    name="preferred_date"
                    required
                    className="w-full bg-white border border-gold-primary/20 hover:border-gold-primary/45 focus:border-gold-primary rounded-xl px-4 py-2.5 text-sm font-sans text-[#1a1a1a] focus:outline-none transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-sans tracking-widest text-gold-accent font-bold uppercase mb-1.5 block">Preferred Time</label>
                  <input
                    type="time"
                    name="preferred_time"
                    required
                    className="w-full bg-white border border-gold-primary/20 hover:border-gold-primary/45 focus:border-gold-primary rounded-xl px-4 py-2.5 text-sm font-sans text-[#1a1a1a] focus:outline-none transition-all duration-300"
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] font-sans tracking-widest text-gold-accent font-bold uppercase mb-1.5 block">Select Service</label>
                <select
                  name="service"
                  required
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full bg-white border border-gold-primary/20 hover:border-gold-primary/45 focus:border-gold-primary rounded-xl px-4 py-2.5 text-sm font-sans text-[#1a1a1a]/75 focus:outline-none focus:ring-1 focus:ring-gold-primary/50 transition-all duration-300"
                >
                  <option value="" disabled>Select Service...</option>
                  <option value="Classic Haircut">Classic Haircut</option>
                  <option value="Beard & Shave">Beard & Shave</option>
                  <option value="Facials & Skin Care">Facials & Skin Care</option>
                  <option value="Nails & Grooming">Nails & Grooming</option>
                  <option value="Other Custom Service">Other Custom Service</option>
                </select>
              </div>

              <div>
                <label className="text-[10px] font-sans tracking-widest text-gold-accent font-bold uppercase mb-1.5 block">Special Instructions</label>
                <textarea
                  name="message"
                  rows="3"
                  placeholder="Any hair/skin conditions or specific notes..."
                  className="w-full bg-white border border-gold-primary/20 hover:border-gold-primary/45 focus:border-gold-primary rounded-xl px-4 py-2.5 text-sm font-sans tracking-wide text-[#1a1a1a] focus:outline-none focus:ring-1 focus:ring-gold-primary/50 placeholder-neutral-400 transition-all duration-300 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl border border-gold-primary bg-gold-primary text-black text-xs font-sans tracking-[0.2em] font-bold transition-all duration-300 hover:shadow-[0_0_25px_rgba(212,175,55,0.5)] hover:scale-[1.01] cursor-pointer"
              >
                SUBMIT BOOKING
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

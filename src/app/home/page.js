"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Vision from "@/components/Vision";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import AppointmentModal from "@/components/AppointmentModal";
import ServiceModal from "@/components/ServiceModal";

export default function HomePage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [activeService, setActiveService] = useState(null);
  const [preselectedService, setPreselectedService] = useState("");

  const openBooking = () => {
    setPreselectedService("");
    setIsBookingOpen(true);
  };
  const closeBooking = () => setIsBookingOpen(false);

  return (
    <div className="relative min-h-screen bg-[#050505] text-[#f5f5f3] flex flex-col justify-between overflow-x-hidden font-sans">
      {/* Global Scroll-to-Top Overlay & Navigation */}
      <Navbar openBooking={openBooking} />

      <main className="flex-1 flex flex-col">
        {/* Sections */}
        <Hero openBooking={openBooking} />
        <About />
        <Services onExplore={(service) => setActiveService(service)} />
        <WhyChooseUs />
        <Vision />
        <Contact openBooking={openBooking} />
      </main>

      {/* Floating WhatsApp Chat Widget */}
      <WhatsAppWidget />

      {/* Appointment Popup Modal */}
      <AppointmentModal
        isOpen={isBookingOpen}
        onClose={closeBooking}
        preselectedService={preselectedService}
      />

      {/* Global Footer */}
      <Footer />

      {activeService && (
        <ServiceModal
          service={activeService}
          onClose={() => setActiveService(null)}
          onBook={() => {
            setPreselectedService(activeService.title);
            setActiveService(null);
            setIsBookingOpen(true);
          }}
        />
      )}
    </div>
  );
}

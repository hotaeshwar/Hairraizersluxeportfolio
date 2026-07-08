"use client";

import React, { useState, useEffect } from "react";
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
import SplashScreen from "@/components/SplashScreen";
import ServiceModal from "@/components/ServiceModal";
import Works from "@/components/Works";

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [showSplash, setShowSplash] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [activeService, setActiveService] = useState(null);
  const [preselectedService, setPreselectedService] = useState("");

  const openBooking = () => {
    setPreselectedService("");
    setIsBookingOpen(true);
  };
  const closeBooking = () => setIsBookingOpen(false);

  useEffect(() => {
    const hasSplashShown = typeof window !== "undefined" && sessionStorage.getItem("splash_shown");
    if (hasSplashShown) {
      setShowSplash(false);
      return;
    }

    // Start fading out after 5.0 seconds
    const fadeTimer = setTimeout(() => {
      setIsFadingOut(true);
    }, 5000);

    // Unmount completely after 5.6 seconds (allowing 600ms transition time)
    const removeTimer = setTimeout(() => {
      setShowSplash(false);
      if (typeof window !== "undefined") {
        sessionStorage.setItem("splash_shown", "true");
      }
    }, 5600);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  return (
    <>
      <div className="relative min-h-screen bg-[#ffffff] text-[#1a1a1a] flex flex-col justify-between overflow-x-hidden font-sans" suppressHydrationWarning>
        {/* Global Scroll-to-Top Overlay & Navigation */}
        <Navbar openBooking={openBooking} />

        <main className="flex-1 flex flex-col">
          {/* Sections */}
          <Hero openBooking={openBooking} />
          <About />
          <Services onExplore={(service) => setActiveService(service)} />
          <Works />
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
      </div>

      {showSplash && <SplashScreen isFadingOut={isFadingOut} />}

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
    </>
  );
}

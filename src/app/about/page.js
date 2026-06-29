"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import AppointmentModal from "@/components/AppointmentModal";

export default function AboutPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const openBooking = () => setIsBookingOpen(true);
  const closeBooking = () => setIsBookingOpen(false);

  return (
    <div className="relative min-h-screen bg-white text-[#1a1a1a] flex flex-col justify-between overflow-x-hidden font-sans">
      <Navbar openBooking={openBooking} />
      <main className="flex-1 flex flex-col justify-center pt-24 pb-12">
        <About />
      </main>
      <WhatsAppWidget />
      <AppointmentModal isOpen={isBookingOpen} onClose={closeBooking} />
      <Footer />
    </div>
  );
}

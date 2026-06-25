"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import AppointmentModal from "@/components/AppointmentModal";

export default function WhyChooseUsPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const openBooking = () => setIsBookingOpen(true);
  const closeBooking = () => setIsBookingOpen(false);

  return (
    <div className="relative min-h-screen bg-[#050505] text-[#f5f5f3] flex flex-col justify-between overflow-x-hidden font-sans">
      <Navbar openBooking={openBooking} />
      <main className="flex-1 flex flex-col justify-center pt-24 pb-12">
        <WhyChooseUs />
      </main>
      <WhatsAppWidget />
      <AppointmentModal isOpen={isBookingOpen} onClose={closeBooking} />
      <Footer />
    </div>
  );
}

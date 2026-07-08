"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import ServiceModal from "@/components/ServiceModal";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import AppointmentModal from "@/components/AppointmentModal";

export default function ServicesPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [activeService, setActiveService] = useState(null);
  const [preselectedService, setPreselectedService] = useState("");

  const openBooking = () => {
    setPreselectedService("");
    setIsBookingOpen(true);
  };
  const closeBooking = () => setIsBookingOpen(false);

  return (
    <div className="relative min-h-screen bg-[#ffffff] text-[#1a1a1a] flex flex-col justify-between overflow-x-hidden font-sans" suppressHydrationWarning>
      <Navbar openBooking={openBooking} />
      <main className="flex-1 flex flex-col justify-center pt-24 pb-12">
        <Services onExplore={(service) => setActiveService(service)} />
      </main>
      <WhatsAppWidget />
      <AppointmentModal
        isOpen={isBookingOpen}
        onClose={closeBooking}
        preselectedService={preselectedService}
      />
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

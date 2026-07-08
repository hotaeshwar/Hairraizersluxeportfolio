"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, PhoneCall, CalendarDays, Navigation } from "lucide-react";

export default function Contact({ openBooking }) {
  const [mounted, setMounted] = useState(false);
  const phone = "+91 99159 42299";
  const rawPhone = "+919915942299";
  const email = "hairraiserzsec66@gmail.com";
  const address = "SCO 63, Airport Road, Sector 66 A, Punjab 140306";
  const hours = "9:30am - 9:30pm";

  // Google Maps address URL
  const mapsUrl = "https://maps.app.goo.gl/RnB8pKiYTotpzrSJ8";

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <section id="contact" className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-xs text-gold-primary tracking-widest uppercase font-bold">THE RITUAL</span>
          <h2 className="font-serif text-4xl font-extrabold text-[#1a1a1a] mt-2">Get In Touch</h2>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Background Soft Glows */}
      <div className="absolute top-[20%] right-[-10%] w-[350px] h-[350px] bg-gold-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[350px] h-[350px] bg-gold-dark/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Block */}
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
              EXPERIENCE THE RITUAL
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
            Get In <span className="gold-text-gradient">Touch</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-sm sm:text-base text-[#1a1a1a]/60 leading-relaxed font-light"
          >
            Schedule your appointment or visit our sanctuary. Our experts are ready to serve you.
          </motion.p>
        </div>

        {/* Contact Info and Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Google Maps (col-span-7) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 flex flex-col min-h-[350px]"
          >
            {/* Google Map Frame */}
            <div className="w-full h-full rounded-2xl overflow-hidden border border-gold-primary/15 relative min-h-[350px] shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3431.1352417724213!2d76.73693437599026!3d30.686520374604313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fee65529f79bd%3A0xe5a363a033f99e3a!2sSCO%2063%2C%20Airport%20Rd%2C%20Sector%2066A%2C%20Sahibzada%20Ajit%20Singh%20Nagar%2C%20Punjab%20140306!5e0!3m2!1sen!2sin!4v1719231450000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{
                  border: 0,
                }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full"
                title="HAIR RAISERZ-66A LUXE Location Map"
              />
            </div>
          </motion.div>

          {/* Right Column: Direct Info Cards & Call CTA (col-span-5) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4">
              {/* Address card */}
              <div className="flex gap-4 p-5 rounded-2xl glass-panel">
                <MapPin className="w-5 h-5 text-gold-primary shrink-0 mt-1" />
                <div>
                  <h4 className="font-serif text-base font-bold text-[#1a1a1a] mb-1">Our Location</h4>
                  <p className="font-sans text-xs sm:text-sm text-[#1a1a1a]/60 font-light leading-relaxed">
                    {address}
                  </p>
                </div>
              </div>

              {/* Contact info card */}
              <div className="flex gap-4 p-5 rounded-2xl glass-panel">
                <Phone className="w-5 h-5 text-gold-primary shrink-0 mt-1" />
                <div>
                  <h4 className="font-serif text-base font-bold text-[#1a1a1a] mb-1">Connect Instantly</h4>
                  <p className="font-sans text-xs sm:text-sm text-[#1a1a1a]/60 font-light leading-none mb-2">
                    Phone: <a href={`tel:${rawPhone}`} className="hover:text-gold-primary transition-colors font-semibold">{phone}</a>
                  </p>
                  <p className="font-sans text-xs sm:text-sm text-[#1a1a1a]/60 font-light leading-none mb-2 flex items-center gap-1.5">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#25D366] fill-current shrink-0">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.97C16.528 2.012 14.07 1.02 11.45 1.02c-5.438 0-9.863 4.373-9.867 9.801-.001 1.736.467 3.43 1.354 4.938l-.993 3.623 3.713-.974zm11.005-5.108c-.244-.122-1.45-.714-1.671-.795-.222-.081-.383-.122-.544.122-.16.244-.622.795-.763.957-.14.163-.28.183-.524.061-.243-.122-.982-.361-1.87-1.151-.69-.614-1.157-1.372-1.292-1.616-.135-.244-.015-.376.107-.497.111-.11.244-.28.365-.42.122-.14.162-.244.243-.406.082-.162.041-.305-.02-.427-.06-.122-.544-1.31-.746-1.796-.197-.476-.399-.413-.544-.42l-.465-.007c-.162 0-.424.06-.647.305-.223.244-.85.83-.85 2.025 0 1.194.87 2.348.99 2.51.122.163 1.712 2.612 4.148 3.66 1.93.83 2.58.667 3.033.626.544-.049 1.45-.591 1.653-1.162.203-.572.203-1.061.142-1.162-.06-.1-.223-.163-.467-.285z" />
                    </svg>
                    WhatsApp: <a href="https://wa.me/919592520666" target="_blank" rel="noopener noreferrer" className="hover:text-gold-primary transition-colors font-semibold">+91 95925 20666</a>
                  </p>
                  <p className="font-sans text-xs sm:text-sm text-[#1a1a1a]/60 font-light leading-none">
                    Email: <a href={`mailto:${email}`} className="hover:text-gold-primary transition-colors font-semibold break-all">{email}</a>
                  </p>
                </div>
              </div>

              {/* Working hours card */}
              <div className="flex gap-4 p-5 rounded-2xl glass-panel">
                <Clock className="w-5 h-5 text-gold-primary shrink-0 mt-1" />
                <div>
                  <h4 className="font-serif text-base font-bold text-[#1a1a1a] mb-1">Hours of Ritual</h4>
                  <p className="font-sans text-xs sm:text-sm text-[#1a1a1a]/60 font-light leading-relaxed">
                    Everyday: {hours}
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Trigger Panel (Call Button only, WhatsApp is floating) */}
            <div className="pt-2">
              <a
                href={`tel:${rawPhone}`}
                className="flex items-center justify-center gap-2 py-4 rounded-xl bg-gold-primary text-black text-xs font-sans tracking-[0.2em] font-bold transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,175,55,0.35)] hover:scale-[1.01]"
              >
                <PhoneCall className="w-4 h-4" />
                CALL NOW
              </a>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

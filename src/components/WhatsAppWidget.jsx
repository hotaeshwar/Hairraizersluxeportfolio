"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function WhatsAppWidget() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <motion.a
      href="https://wa.me/919915942299?text=Hello%20Hair%20Rizer%20Luxe,%20I%27d%20like%20to%20book%20an%20appointment%20for%20a%20premium%20grooming%20session."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_4px_30px_rgba(37,211,102,0.6)] border border-[#25D366]/40 hover:border-gold-primary transition-all duration-300 hover:scale-110 group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5, type: "spring" }}
      aria-label="Chat on WhatsApp"
    >
      {/* Floating tooltip */}
      <span className="absolute right-16 bg-white/95 backdrop-blur-sm border border-gold-primary/20 text-[#1a1a1a] text-[10px] font-sans tracking-widest px-3 py-1.5 rounded-lg opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none uppercase font-bold whitespace-nowrap shadow-xl">
        Book on WhatsApp
      </span>

      {/* Pulsing ring background */}
      <span className="absolute inset-0 rounded-full bg-[#25D366]/20 animate-ping -z-10" />

      {/* SVG Icon */}
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-7 h-7"
      >
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.97C16.528 2.012 14.07 1.02 11.45 1.02c-5.438 0-9.863 4.373-9.867 9.801-.001 1.736.467 3.43 1.354 4.938l-.993 3.623 3.713-.974zm11.005-5.108c-.244-.122-1.45-.714-1.671-.795-.222-.081-.383-.122-.544.122-.16.244-.622.795-.763.957-.14.163-.28.183-.524.061-.243-.122-.982-.361-1.87-1.151-.69-.614-1.157-1.372-1.292-1.616-.135-.244-.015-.376.107-.497.111-.11.244-.28.365-.42.122-.14.162-.244.243-.406.082-.162.041-.305-.02-.427-.06-.122-.544-1.31-.746-1.796-.197-.476-.399-.413-.544-.42l-.465-.007c-.162 0-.424.06-.647.305-.223.244-.85.83-.85 2.025 0 1.194.87 2.348.99 2.51.122.163 1.712 2.612 4.148 3.66 1.93.83 2.58.667 3.033.626.544-.049 1.45-.591 1.653-1.162.203-.572.203-1.061.142-1.162-.06-.1-.223-.163-.467-.285z" />
      </svg>
    </motion.a>
  );
}

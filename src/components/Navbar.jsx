"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

export default function Navbar({ openBooking }) {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Our Services", href: "/services" },
    { name: "Why Choose Us", href: "/why-choose-us" },
    { name: "Contact", href: "/contact" },
  ];

  if (!mounted) return null;

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/85 backdrop-blur-md border-b border-gold-primary/15 py-3 shadow-lg"
            : "bg-transparent py-5"
        }`}
        suppressHydrationWarning
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Custom HTML/CSS Logo matching maps type */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative h-12 w-44 sm:h-14 sm:w-52 transition-transform duration-300 group-hover:scale-[1.03]">
                <Image
                  src="/hairraiser.png"
                  alt="Hair Raiserz-66A Luxe Logo"
                  fill
                  priority
                  className="object-contain object-left"
                />
              </div>
            </Link>

            {/* Desktop Navigation Links with sliding tab pill effect */}
            <div 
              className="hidden lg:flex items-center space-x-1"
              onMouseLeave={() => setHoveredLink(null)}
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onMouseEnter={() => setHoveredLink(link.href)}
                  className="relative px-4 py-2 text-xs uppercase font-sans tracking-[0.2em] text-[#1a1a1a]/70 hover:text-[#050505] transition-colors duration-300 font-bold rounded-full"
                >
                  <span className="relative z-10">{link.name}</span>
                  {hoveredLink === link.href && (
                    <motion.span
                      layoutId="navbar-hover-pill"
                      className="absolute inset-0 bg-gold-primary rounded-full"
                      transition={{ type: "spring", stiffness: 350, damping: 28 }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center">
              <button
                onClick={openBooking}
                className="relative inline-flex items-center justify-center px-6 py-2.5 rounded-full border border-gold-primary/60 text-xs font-sans tracking-[0.2em] font-bold text-gold-primary overflow-hidden group transition-all duration-300 hover:text-[#050505] hover:border-gold-primary hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] cursor-pointer"
              >
                <span className="absolute inset-0 w-full h-full bg-gold-primary scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100 -z-10" />
                BOOK APPOINTMENT
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-[#1a1a1a]/80 hover:text-gold-primary transition-colors duration-300 focus:outline-none"
                aria-label="Toggle mobile menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden bg-white/95 border-b border-gold-primary/10 overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-4 flex flex-col items-center">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="w-full text-center py-2 text-sm font-sans tracking-widest text-[#1a1a1a]/70 hover:text-gold-primary transition-colors duration-300 font-light"
                  >
                    {link.name}
                  </Link>
                ))}
                <button
                  onClick={() => {
                    setIsOpen(false);
                    openBooking();
                  }}
                  className="w-full max-w-[240px] text-center py-3 rounded-full border border-gold-primary/60 text-xs font-sans tracking-[0.2em] font-bold text-gold-primary bg-transparent hover:bg-gold-primary hover:text-[#050505] transition-all duration-300 cursor-pointer"
                >
                  BOOK APPOINTMENT
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}

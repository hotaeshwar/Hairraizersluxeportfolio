import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0a] border-t border-gold-primary/15 relative overflow-hidden">
      {/* Accent Background Glows */}
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-gold-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-[200px] h-[200px] bg-gold-primary/3 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Col */}
          <div className="flex flex-col space-y-5">
            <a href="#home" className="flex items-center gap-3">
              <div className="flex flex-col items-start select-none font-sans">
                <div className="text-xl font-black tracking-[0.12em] text-[#f5f5f3] leading-none">
                  H<span className="text-gold-primary">A</span>IR RIZER LUXE
                </div>
                <div className="flex items-center justify-between w-full my-0.5">
                  <div className="h-[1px] bg-gradient-to-r from-transparent to-gold-primary/70 flex-1" />
                  <span className="text-[9px] tracking-[0.35em] text-gold-primary font-bold px-2">SECTOR 66-A</span>
                  <div className="h-[1px] bg-gradient-to-l from-transparent to-gold-primary/70 flex-1" />
                </div>
                <div className="text-[7px] tracking-[0.2em] text-gold-accent font-semibold uppercase leading-none w-full text-center">
                  HAIR | MAKEUP | NAIL | BEAUTY
                </div>
              </div>
            </a>
            <p className="text-sm text-[#f5f5f3]/60 leading-relaxed font-light">
              Elevate Your Beauty, One Rizer Luxe Experience at a Time. Rediscover luxury grooming tailored to your style.
            </p>
            
            {/* Social SVGs */}
            <div className="flex space-x-4 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gold-primary/30 flex items-center justify-center text-[#f5f5f3]/70 hover:text-gold-primary hover:border-gold-primary transition-all duration-300 bg-black/40"
                aria-label="Instagram"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gold-primary/30 flex items-center justify-center text-[#f5f5f3]/70 hover:text-gold-primary hover:border-gold-primary transition-all duration-300 bg-black/40"
                aria-label="Facebook"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links Col */}
          <div>
            <h4 className="font-serif text-base tracking-widest text-[#f5f5f3] font-bold mb-6 uppercase">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-sm text-[#f5f5f3]/60 hover:text-gold-primary transition-colors font-light">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-sm text-[#f5f5f3]/60 hover:text-gold-primary transition-colors font-light">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm text-[#f5f5f3]/60 hover:text-gold-primary transition-colors font-light">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#why-choose-us" className="text-sm text-[#f5f5f3]/60 hover:text-gold-primary transition-colors font-light">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-[#f5f5f3]/60 hover:text-gold-primary transition-colors font-light">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Services Col */}
          <div>
            <h4 className="font-serif text-base tracking-widest text-[#f5f5f3] font-bold mb-6 uppercase">
              Services
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-sm text-[#f5f5f3]/60 hover:text-gold-primary transition-colors font-light">
                  Classic Haircut
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm text-[#f5f5f3]/60 hover:text-gold-primary transition-colors font-light">
                  Beard & Shave
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm text-[#f5f5f3]/60 hover:text-gold-primary transition-colors font-light">
                  Facials & Skin Care
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm text-[#f5f5f3]/60 hover:text-gold-primary transition-colors font-light">
                  Nails & Grooming
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="font-serif text-base tracking-widest text-[#f5f5f3] font-bold mb-6 uppercase">
              Get In Touch
            </h4>
            <ul className="space-y-4">
              <li className="flex flex-col">
                <span className="text-[10px] text-gold-accent font-bold tracking-widest uppercase mb-1">Address</span>
                <span className="text-sm text-[#f5f5f3]/70 font-light">
                  SCO 63, Airport Road, Sector 66 A, Punjab 140306
                </span>
              </li>
              <li className="flex flex-col">
                <span className="text-[10px] text-gold-accent font-bold tracking-widest uppercase mb-1">Phone</span>
                <a href="tel:+919915942299" className="text-sm text-[#f5f5f3]/70 hover:text-gold-primary transition-colors font-light">
                  +91 99159 42299
                </a>
              </li>
              <li className="flex flex-col">
                <span className="text-[10px] text-gold-accent font-bold tracking-widest uppercase mb-1">Email</span>
                <a href="mailto:hairraiserzsec66@gmail.com" className="text-sm text-[#f5f5f3]/70 hover:text-gold-primary transition-colors font-light">
                  hairraiserzsec66@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#1a1a1a] mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#f5f5f3]/40 font-light">
            &copy; {currentYear} HAIR RIZER LUXE Unisex Salon. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-xs text-[#f5f5f3]/40 font-light">
            <a href="#about" className="hover:text-gold-primary transition-colors">
              Privacy Policy
            </a>
            <span>|</span>
            <a href="#about" className="hover:text-gold-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

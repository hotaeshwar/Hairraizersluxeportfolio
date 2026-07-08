import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#fcfcfc] border-t border-gold-primary/15 relative overflow-hidden">
      {/* Accent Background Glows */}
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-gold-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-[200px] h-[200px] bg-gold-primary/3 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Col */}
          <div className="flex flex-col space-y-5">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative h-12 w-44 transition-transform duration-300 group-hover:scale-[1.03]">
                <Image
                  src="/hairraiser.png"
                  alt="Hair Raiserz-66A Luxe Logo"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <p className="text-sm text-[#1a1a1a]/60 leading-relaxed font-light">
              Elevate Your Beauty, One Raiserz-66A Luxe Experience at a Time. Rediscover luxury grooming tailored to your style.
            </p>
            
            {/* Social SVGs */}
            <div className="flex space-x-4 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gold-primary/30 flex items-center justify-center text-[#1a1a1a]/70 hover:text-gold-primary hover:border-gold-primary transition-all duration-300 bg-neutral-100"
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
                className="w-10 h-10 rounded-full border border-gold-primary/30 flex items-center justify-center text-[#1a1a1a]/70 hover:text-gold-primary hover:border-gold-primary transition-all duration-300 bg-neutral-100"
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
            <h4 className="font-serif text-base tracking-widest text-[#1a1a1a] font-bold mb-6 uppercase">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-sm text-[#1a1a1a]/60 hover:text-gold-primary transition-colors font-light">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-[#1a1a1a]/60 hover:text-gold-primary transition-colors font-light">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-[#1a1a1a]/60 hover:text-gold-primary transition-colors font-light">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/why-choose-us" className="text-sm text-[#1a1a1a]/60 hover:text-gold-primary transition-colors font-light">
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-[#1a1a1a]/60 hover:text-gold-primary transition-colors font-light">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Col */}
          <div>
            <h4 className="font-serif text-base tracking-widest text-[#1a1a1a] font-bold mb-6 uppercase">
              Services
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/services" className="text-sm text-[#1a1a1a]/60 hover:text-gold-primary transition-colors font-light">
                  Classic Haircut
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-[#1a1a1a]/60 hover:text-gold-primary transition-colors font-light">
                  Beard & Shave
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-[#1a1a1a]/60 hover:text-gold-primary transition-colors font-light">
                  Facials & Skin Care
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-[#1a1a1a]/60 hover:text-gold-primary transition-colors font-light">
                  Nails & Grooming
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="font-serif text-base tracking-widest text-[#1a1a1a] font-bold mb-6 uppercase">
              Get In Touch
            </h4>
            <ul className="space-y-4">
              <li className="flex flex-col">
                <span className="text-[10px] text-gold-accent font-bold tracking-widest uppercase mb-1">Address</span>
                <span className="text-sm text-[#1a1a1a]/70 font-light">
                  SCO 63, Airport Road, Sector 66 A, Punjab 140306
                </span>
              </li>
              <li className="flex flex-col">
                <span className="text-[10px] text-gold-accent font-bold tracking-widest uppercase mb-1">Phone</span>
                <a href="tel:+919915942299" className="text-sm text-[#1a1a1a]/70 hover:text-gold-primary transition-colors font-light">
                  +91 99159 42299
                </a>
              </li>
              <li className="flex flex-col">
                <span className="text-[10px] text-gold-accent font-bold tracking-widest uppercase mb-1 flex items-center gap-1">
                  <svg viewBox="0 0 24 24" className="w-3 h-3 text-[#25D366] fill-current">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.97C16.528 2.012 14.07 1.02 11.45 1.02c-5.438 0-9.863 4.373-9.867 9.801-.001 1.736.467 3.43 1.354 4.938l-.993 3.623 3.713-.974zm11.005-5.108c-.244-.122-1.45-.714-1.671-.795-.222-.081-.383-.122-.544.122-.16.244-.622.795-.763.957-.14.163-.28.183-.524.061-.243-.122-.982-.361-1.87-1.151-.69-.614-1.157-1.372-1.292-1.616-.135-.244-.015-.376.107-.497.111-.11.244-.28.365-.42.122-.14.162-.244.243-.406.082-.162.041-.305-.02-.427-.06-.122-.544-1.31-.746-1.796-.197-.476-.399-.413-.544-.42l-.465-.007c-.162 0-.424.06-.647.305-.223.244-.85.83-.85 2.025 0 1.194.87 2.348.99 2.51.122.163 1.712 2.612 4.148 3.66 1.93.83 2.58.667 3.033.626.544-.049 1.45-.591 1.653-1.162.203-.572.203-1.061.142-1.162-.06-.1-.223-.163-.467-.285z" />
                  </svg>
                  WhatsApp
                </span>
                <a href="https://wa.me/919592520666" target="_blank" rel="noopener noreferrer" className="text-sm text-[#1a1a1a]/70 hover:text-gold-primary transition-colors font-light">
                  +91 95925 20666
                </a>
              </li>
              <li className="flex flex-col">
                <span className="text-[10px] text-gold-accent font-bold tracking-widest uppercase mb-1">Email</span>
                <a href="mailto:hairraiserzsec66@gmail.com" className="text-sm text-[#1a1a1a]/70 hover:text-gold-primary transition-colors font-light">
                  hairraiserzsec66@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gold-primary/15 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#1a1a1a]/40 font-light">
            &copy; {currentYear} HAIR RAISERZ-66A LUXE Unisex Salon. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-xs text-[#1a1a1a]/40 font-light">
            <Link href="/about" className="hover:text-gold-primary transition-colors">
              Privacy Policy
            </Link>
            <span>|</span>
            <Link href="/about" className="hover:text-gold-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

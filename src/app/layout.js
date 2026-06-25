import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  metadataBase: new URL('https://hairraizersluxe.buildingindiadigital.com'),
  title: "HAIR RIZER LUXE Unisex Salon | Premium Luxury Salon Sector 66 A",
  description: "Elevate Your Beauty, One Rizer Luxe Experience at a Time. Hair Rizer Luxe Unisex Salon offers expert haircuts, styling, premium facials, skin rituals, and nail care in Sector 66 A, Airport Road, Punjab.",
  keywords: ["Hair Rizer Luxe", "HAIR RIZER", "Unisex Salon Sector 66 A", "Luxury Salon Punjab", "Best Haircut Sector 66 A", "Grooming Salon Airport Road", "Salon Punjab 140306", "Premium Skin Care", "Hair Rizer Luxe Unisex Salon"],
  openGraph: {
    title: "HAIR RIZER LUXE Unisex Salon | Elevate Your Beauty",
    description: "Premium hair, skin, and nails grooming rituals in a luxurious ambiance. Located at Sector 66 A, Punjab.",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 800,
        alt: "HAIR RIZER LUXE Unisex Salon Logo",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${cormorantGaramond.variable} ${inter.variable} h-full scroll-smooth`}
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col font-sans bg-[#050505] text-[#f5f5f3] antialiased">
        {children}
      </body>
    </html>
  );
}

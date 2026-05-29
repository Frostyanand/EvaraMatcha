import { Cormorant_Garamond, DM_Sans, Cinzel } from "next/font/google";
import "./globals.css";
import GrainOverlay from "@/components/GrainOverlay";

import Navbar from "@/components/Navbar";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata = {
  title: "Evara Matcha | A Matcha-Led Café — JP Nagar, Bangalore",
  description:
    "Evara Matcha — a matcha-led café where Japanese tradition meets modern indulgence. Ceremonial-grade matcha, specialty coffee, and weekend desserts. JP Nagar, Bangalore.",
  keywords: [
    "matcha",
    "café",
    "JP Nagar",
    "Bangalore",
    "matcha latte",
    "ceremonial matcha",
    "coffee",
    "desserts",
  ],
  openGraph: {
    title: "Evara Matcha | A Matcha-Led Café",
    description:
      "Experience the art of ceremonial-grade matcha. Crafted slowly, savored deeply.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable} ${cinzel.variable}`}
    >
      <body>
        <GrainOverlay />

        <Navbar />
        {children}
      </body>
    </html>
  );
}

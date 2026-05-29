import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Evara Matcha | Premium Japanese Matcha Cafe & Lounge",
  description: "Experience the art of ceremonial grade Japanese Matcha. Cozy vibes, signature iced matcha lattes, fresh pastries, and a peaceful green lounge.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

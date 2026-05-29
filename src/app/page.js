import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import MenuPreview from "@/components/MenuPreview";
import Ritual from "@/components/Ritual";
import Journey from "@/components/Journey";
import Space from "@/components/Space";
import WeekendSpecials from "@/components/WeekendSpecials";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";

export default function Home() {
  return (
    <main>
      <Hero />
      <Philosophy />
      <MenuPreview />
      <Gallery />
      <Ritual />
      <Journey />
      <Space />
      <WeekendSpecials />
      <Testimonials />
      <Footer />
    </main>
  );
}

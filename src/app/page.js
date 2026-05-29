import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import MenuPreview from "@/components/MenuPreview";
import Ritual from "@/components/Ritual";
import Journey from "@/components/Journey";
import Space from "@/components/Space";
import WeekendSpecials from "@/components/WeekendSpecials";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import DustDissolve from "@/components/DustDissolve";

export default function Home() {
  return (
    <main>
      <Hero />

      <DustDissolve>
        <Philosophy />
      </DustDissolve>

      <DustDissolve>
        <MenuPreview />
      </DustDissolve>

      <DustDissolve>
        <Ritual />
      </DustDissolve>

      <DustDissolve>
        <Journey />
      </DustDissolve>

      <DustDissolve>
        <Space />
      </DustDissolve>

      <DustDissolve>
        <WeekendSpecials />
      </DustDissolve>

      <DustDissolve>
        <Testimonials />
      </DustDissolve>

      <Footer />
    </main>
  );
}

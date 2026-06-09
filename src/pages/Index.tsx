import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Values from "@/components/landing/Values";
import About from "@/components/landing/About";
import WhyImportant from "@/components/landing/WhyImportant";
import Ceremony from "@/components/landing/Ceremony";
import Monument from "@/components/landing/Monument";
import Capsule from "@/components/landing/Capsule";
import Place from "@/components/landing/Place";
import Support from "@/components/landing/Support";
import Faq from "@/components/landing/Faq";
import Footer from "@/components/landing/Footer";

export default function Index() {
  return (
    <div className="bg-[#0a1a3f] min-h-screen overflow-x-hidden">
      <Header />
      <Hero />
      <Values />
      <About />
      <WhyImportant />
      <Ceremony />
      <Monument />
      <Capsule />
      <Place />
      <Support />
      <Faq />
      <Footer />
    </div>
  );
}
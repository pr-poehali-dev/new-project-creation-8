import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CoursesSection from "@/components/CoursesSection";
import AboutContacts from "@/components/AboutContacts";

export default function Index() {
  const [activeSection, setActiveSection] = useState("Главная");
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const scrollTo = (section: string) => {
    setActiveSection(section);
    setMenuOpen(false);
    const map: Record<string, string> = {
      "Главная": "hero",
      "Курсы": "courses",
      "Блог": "blog",
      "О платформе": "about",
      "Контакты": "contacts",
    };
    const el = document.getElementById(map[section]);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#08061a] font-golos overflow-x-hidden">

      {/* Background blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="blob-1 absolute w-[600px] h-[600px] -top-40 -left-40 opacity-60 animate-float" />
        <div className="blob-2 absolute w-[500px] h-[500px] top-1/3 -right-20 opacity-50 animate-float-delay" />
        <div className="blob-3 absolute w-[400px] h-[400px] bottom-20 left-1/3 opacity-40 animate-float" />
      </div>

      <Navbar
        activeSection={activeSection}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        scrollTo={scrollTo}
      />

      <HeroSection visible={visible} scrollTo={scrollTo} />

      <CoursesSection />

      <AboutContacts scrollTo={scrollTo} />

    </div>
  );
}

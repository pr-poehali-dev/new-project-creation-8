import { useEffect, useState } from "react";
import Icon from "@/components/ui/icon";

const NAV = [
  { label: "О проекте", id: "about" },
  { label: "Закладка камня", id: "ceremony" },
  { label: "Капсула времени", id: "capsule" },
  { label: "Место", id: "place" },
  { label: "FAQ", id: "faq" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0a1a3f]/95 backdrop-blur-md shadow-lg shadow-black/20" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => scrollTo("hero")} className="flex items-center">
          <img
            src="https://cdn.poehali.dev/projects/9e6ab7cb-02b9-4bdf-903b-219f3b05fb8d/bucket/46bb4f32-bdde-4795-8b4f-15bac7daff2a.png"
            alt="ОПОРА РОССИИ — Приморское краевое отделение"
            className="h-9 md:h-11 w-auto object-contain"
          />
        </button>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {NAV.map((n) => (
            <button
              key={n.id}
              onClick={() => scrollTo(n.id)}
              className="text-white/80 hover:text-brand-gold text-[15px] font-medium transition-colors"
            >
              {n.label}
            </button>
          ))}
          <span className="flex items-center gap-1.5 text-brand-gold text-sm border border-brand-gold/40 rounded-md px-3 py-1.5">
            <Icon name="Globe" size={14} />
            РУС
          </span>
          <button onClick={() => scrollTo("support")} className="btn-gold px-5 py-2.5 rounded-md text-sm uppercase tracking-wide">
            Поддержать
          </button>
        </nav>

        {/* Mobile burger */}
        <button className="lg:hidden text-white" onClick={() => setOpen(!open)}>
          <Icon name={open ? "X" : "Menu"} size={26} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-[#0a1a3f] border-t border-white/10 px-6 py-5 flex flex-col gap-4">
          {NAV.map((n) => (
            <button key={n.id} onClick={() => scrollTo(n.id)} className="text-white/85 text-left font-medium">
              {n.label}
            </button>
          ))}
          <button onClick={() => scrollTo("support")} className="btn-gold px-5 py-3 rounded-md text-sm uppercase">
            Поддержать
          </button>
        </div>
      )}
    </header>
  );
}
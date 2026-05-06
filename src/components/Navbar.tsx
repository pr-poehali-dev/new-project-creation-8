import Icon from "@/components/ui/icon";

const NAV_LINKS = ["Главная", "Курсы", "Блог", "О платформе", "Контакты"];

interface NavbarProps {
  activeSection: string;
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  scrollTo: (section: string) => void;
}

export default function Navbar({ activeSection, menuOpen, setMenuOpen, scrollTo }: NavbarProps) {
  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4"
        style={{ background: "rgba(8,6,26,0.85)", backdropFilter: "blur(24px)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
      >
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg btn-gradient flex items-center justify-center">
            <Icon name="Zap" size={16} className="text-white" />
          </div>
          <span className="font-montserrat font-black text-xl text-white tracking-tight">
            Learn<span className="gradient-text">Flow</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(link => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className={`nav-link text-sm font-medium transition-colors ${activeSection === link ? "text-violet-400 active" : "text-white/60 hover:text-white"}`}
            >
              {link}
            </button>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button className="btn-outline-gradient text-sm px-4 py-2 rounded-lg font-medium">Войти</button>
          <button className="btn-gradient text-sm px-5 py-2 rounded-lg font-semibold">Начать бесплатно</button>
        </div>

        <button className="md:hidden text-white/70 hover:text-white" onClick={() => setMenuOpen(!menuOpen)}>
          <Icon name={menuOpen ? "X" : "Menu"} size={22} />
        </button>
      </nav>

      {menuOpen && (
        <div className="fixed top-16 left-0 right-0 z-40 glass-card mx-4 mt-2 rounded-2xl p-6 animate-slide-down">
          {NAV_LINKS.map(link => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="block w-full text-left py-3 text-white/80 hover:text-white font-medium border-b border-white/5 last:border-0"
            >
              {link}
            </button>
          ))}
          <div className="flex gap-3 mt-4">
            <button className="btn-outline-gradient flex-1 py-2.5 rounded-lg text-sm font-medium">Войти</button>
            <button className="btn-gradient flex-1 py-2.5 rounded-lg text-sm font-semibold">Начать</button>
          </div>
        </div>
      )}
    </>
  );
}

export { NAV_LINKS };

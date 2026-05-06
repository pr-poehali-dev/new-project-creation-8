import Icon from "@/components/ui/icon";

const NAV_LINKS = ["Главная", "Программа", "Кейсы", "FAQ", "Записаться"];

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
        style={{
          background: "rgba(255,255,255,0.92)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid #e8edf3",
          boxShadow: "0 1px 16px rgba(30,35,48,0.06)",
        }}
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ background: "var(--teal)" }}
          >
            <Icon name="Brain" size={16} className="text-white" />
          </div>
          <span className="font-montserrat font-black text-xl tracking-tight text-[#1e2330]">
            AI<span className="gradient-text-teal">School</span>
          </span>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(link => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className={`nav-link text-sm font-medium transition-colors ${
                activeSection === link
                  ? "active font-semibold"
                  : "text-[#6b7280] hover:text-[#1e2330]"
              }`}
              style={activeSection === link ? { color: "var(--teal)" } : {}}
            >
              {link}
            </button>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => scrollTo("Записаться")}
            className="btn-primary text-sm px-5 py-2.5 rounded-lg font-semibold"
          >
            Забронировать место
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-[#3d4455] hover:text-[#1e2330]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Icon name={menuOpen ? "X" : "Menu"} size={22} />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="fixed top-16 left-0 right-0 z-40 mx-4 mt-2 rounded-2xl p-6 animate-slide-down"
          style={{
            background: "#fff",
            border: "1px solid #e8edf3",
            boxShadow: "0 12px 40px rgba(30,35,48,0.12)",
          }}
        >
          {NAV_LINKS.map(link => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="block w-full text-left py-3 text-[#3d4455] hover:text-[#1e2330] font-medium border-b border-[#f0f4f8] last:border-0 transition-colors"
            >
              {link}
            </button>
          ))}
          <div className="mt-4">
            <button
              onClick={() => scrollTo("Записаться")}
              className="btn-primary w-full py-3 rounded-xl text-sm font-semibold"
            >
              Забронировать место
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export { NAV_LINKS };
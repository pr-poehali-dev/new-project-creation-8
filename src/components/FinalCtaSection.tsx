import { useEffect, useRef, useState } from "react";
import Icon from "@/components/ui/icon";

export default function FinalCtaSection() {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.07 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* ── FINAL CTA ── */}
      <section
        ref={ref}
        id="final-cta"
        className="relative py-28 px-6 overflow-hidden"
        style={{ background: "#0c1a2e" }}
      >
        {/* Subtle grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(rgba(13,122,122,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(13,122,122,0.08) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        {/* Glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(13,122,122,0.18) 0%, transparent 70%)" }}
        />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <div
            className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            {/* Eyebrow */}
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold mb-6"
              style={{ background: "rgba(13,122,122,0.2)", color: "var(--teal)", border: "1px solid rgba(13,122,122,0.3)" }}
            >
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ background: "var(--teal)" }}
              />
              Набор открыт · 8 мест осталось
            </div>

            {/* Headline */}
            <h2
              className="heading-display text-white text-3xl md:text-4xl lg:text-[52px] leading-tight mb-6"
            >
              Не откладывай вход в ИИ{" "}
              <span style={{ color: "var(--teal)" }}>на потом</span>
            </h2>

            {/* Sub */}
            <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
              Пока одни только читают про нейросети, другие уже ускоряют работу, зарабатывают больше и становятся сильнее на рынке.
            </p>

            {/* CTA button */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <button
                className="btn-primary px-10 py-4 rounded-2xl font-bold text-base flex items-center gap-2"
                onClick={() => scrollTo("offer")}
              >
                <Icon name="Calendar" size={18} className="text-white" />
                Оставить заявку
              </button>
              <a
                href="https://t.me/hakni_neiroset"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-sm border transition-all duration-200 hover:bg-white/10"
                style={{ borderColor: "rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.75)" }}
              >
                <Icon name="Send" size={16} style={{ color: "rgba(255,255,255,0.75)" }} />
                Написать в Telegram
              </a>
            </div>

            {/* Trust strip */}
            <div className="flex flex-wrap items-center justify-center gap-6">
              {[
                { icon: "MapPin", text: "Владивосток" },
                { icon: "Users", text: "До 30 человек в потоке" },
                { icon: "Zap", text: "Практика с первого дня" },
              ].map(item => (
                <div key={item.text} className="flex items-center gap-2 text-white/40 text-sm">
                  <Icon name={item.icon} size={13} style={{ color: "rgba(13,122,122,0.8)" }} />
                  {item.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: "#081525" }} className="px-6 pt-14 pb-8">
        <div className="max-w-5xl mx-auto">

          {/* Top row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b" style={{ borderColor: "rgba(255,255,255,0.07)" }}>

            {/* Brand */}
            <div>
              <div className="mb-4">
                <img
                  src="https://cdn.poehali.dev/projects/9e6ab7cb-02b9-4bdf-903b-219f3b05fb8d/bucket/eb2c3a43-a98c-4f83-af2d-ab3f971167a4.png"
                  alt="Хакни Нейросети"
                  className="h-10 w-auto object-contain brightness-0 invert opacity-90"
                />
              </div>
              <p className="text-white/40 text-sm leading-relaxed max-w-xs">
                Единственная живая школа ИИ во Владивостоке. Спикер — Сергей Черников.
              </p>
            </div>

            {/* Nav */}
            <div>
              <p className="text-white/25 text-xs font-semibold uppercase tracking-widest mb-4">Навигация</p>
              <div className="flex flex-col gap-2.5">
                {[
                  { label: "О школе", id: "why" },
                  { label: "Программа", id: "program" },
                  { label: "Кейсы", id: "cases" },
                  { label: "FAQ", id: "faq" },
                  { label: "Записаться", id: "offer" },
                ].map(item => (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className="text-left text-sm text-white/50 hover:text-white transition-colors duration-200 w-fit"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Contacts */}
            <div>
              <p className="text-white/25 text-xs font-semibold uppercase tracking-widest mb-4">Контакты</p>
              <div className="flex flex-col gap-3">
                <a
                  href="https://t.me/hakni_neiroset"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-white/50 hover:text-white transition-colors group"
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: "rgba(13,122,122,0.2)" }}
                  >
                    <Icon name="Send" size={13} style={{ color: "var(--teal)" }} />
                  </div>
                  Telegram-канал
                </a>
                <div className="flex items-center gap-3 text-sm text-white/50">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: "rgba(13,122,122,0.2)" }}
                  >
                    <Icon name="Phone" size={13} style={{ color: "var(--teal)" }} />
                  </div>
                  +7 924 000-00-00
                </div>
                <div className="flex items-center gap-3 text-sm text-white/50">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: "rgba(13,122,122,0.2)" }}
                  >
                    <Icon name="MapPin" size={13} style={{ color: "var(--teal)" }} />
                  </div>
                  Владивосток, ул. Светланская
                </div>
              </div>
            </div>
          </div>

          {/* Bottom row */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/25 text-xs">© 2024–2026 Хакни Нейросети. Все права защищены.</p>
            <p className="text-white/20 text-xs">Единственная живая школа ИИ во Владивостоке</p>
          </div>
        </div>
      </footer>
    </>
  );
}
import { useEffect, useRef, useState } from "react";
import Icon from "@/components/ui/icon";

const BG_IMAGE =
  "https://cdn.poehali.dev/projects/9e6ab7cb-02b9-4bdf-903b-219f3b05fb8d/files/4d9a3096-572a-487c-a47f-9408dbcf714d.jpg";
const TEACHER_IMAGE =
  "https://cdn.poehali.dev/projects/9e6ab7cb-02b9-4bdf-903b-219f3b05fb8d/files/72169462-3795-4c72-85b4-c448ac8b6dd2.jpg";

const BULLETS = [
  { icon: "Users",      text: "Живое обучение в малой группе" },
  { icon: "Zap",        text: "Практика на занятиях, а не сухая теория" },
  { icon: "Briefcase",  text: "Подходит предпринимателям, фрилансерам и самозанятым" },
];

const FLOAT_CARDS = [
  { icon: "UserCheck",  label: "Без IT-опыта" },
  { icon: "PlayCircle", label: "С первого занятия" },
  { icon: "Users",      label: "Живой формат" },
];

interface HeroSectionProps {
  visible: boolean;
  scrollTo: (section: string) => void;
}

export default function HeroSection({ scrollTo }: HeroSectionProps) {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setInView(true), 80);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-screen hero-bg overflow-hidden flex items-center"
    >
      {/* Decorative blobs */}
      <div
        className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full opacity-30 pointer-events-none"
        style={{ background: "radial-gradient(circle, #0fa8a8 0%, transparent 70%)", filter: "blur(80px)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-[380px] h-[380px] rounded-full opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, #0d7a7a 0%, transparent 70%)", filter: "blur(90px)" }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pt-28 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* LEFT: copy */}
        <div className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>

          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 border rounded-full px-4 py-1.5 text-sm font-semibold mb-7 animate-fade-up"
            style={{ background: "var(--teal-pale)", borderColor: "#b2e0e0", color: "var(--teal)" }}
          >
            <span
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ background: "var(--teal)" }}
            />
            Живая офлайн-школа ИИ во Владивостоке
          </div>

          {/* Heading */}
          <h1 className="heading-display text-[#1e2330] text-4xl md:text-5xl lg:text-[52px] mb-5 animate-fade-up delay-100">
            Научись применять нейросети<br className="hidden md:block" />
            в работе и бизнесе —{" "}
            <span className="gradient-text-teal">без опыта в IT</span>
          </h1>

          {/* Subheading */}
          <p className="text-[#3d4455] text-lg leading-relaxed mb-8 max-w-xl animate-fade-up delay-200">
            За 3 месяца освоишь практический ИИ-инструментарий, сократишь время на типовые задачи в разы и начнёшь применять нейросети уже с первого занятия.
          </p>

          {/* Bullets */}
          <ul className="space-y-3 mb-10 animate-fade-up delay-300">
            {BULLETS.map((b) => (
              <li key={b.text} className="flex items-center gap-3 text-[#3d4455] text-base">
                <span
                  className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
                  style={{ background: "var(--teal-pale)" }}
                >
                  <Icon name={b.icon} size={15} style={{ color: "var(--teal)" }} />
                </span>
                {b.text}
              </li>
            ))}
          </ul>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-3 animate-fade-up delay-400">
            <button className="btn-primary px-8 py-4 rounded-xl text-base font-semibold">
              Забронировать место
            </button>
            <button
              className="btn-secondary px-8 py-4 rounded-xl text-base font-semibold flex items-center justify-center gap-2"
              onClick={() => scrollTo("Курсы")}
            >
              <Icon name="FileText" size={18} style={{ color: "var(--teal)" }} />
              Получить программу
            </button>
          </div>

          {/* Social proof */}
          <p className="mt-5 text-sm text-[#6b7280] animate-fade-up delay-500">
            Ближайший поток стартует{" "}
            <strong className="text-[#1e2330]">1 августа</strong> — осталось{" "}
            <strong style={{ color: "var(--teal)" }}>3 места</strong>
          </p>
        </div>

        {/* RIGHT: visual */}
        <div
          className={`relative transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
        >
          {/* Main photo */}
          <div
            className="relative rounded-3xl overflow-hidden"
            style={{ boxShadow: "0 24px 64px rgba(13,122,122,0.18)" }}
          >
            <img
              src={BG_IMAGE}
              alt="Занятие в школе ИИ"
              className="w-full h-[420px] object-cover"
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to top, rgba(13,122,122,0.22) 0%, transparent 55%)" }}
            />
          </div>

          {/* Teacher cutout — bottom-right */}
          <div
            className="absolute -bottom-6 -right-4 w-44 h-52 rounded-2xl overflow-hidden border-2 border-white animate-float"
            style={{ boxShadow: "0 12px 40px rgba(0,0,0,0.18)" }}
          >
            <img
              src={TEACHER_IMAGE}
              alt="Преподаватель"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Floating badges — left side */}
          <div className="absolute -left-5 top-8 flex flex-col gap-3 animate-float-delay">
            {FLOAT_CARDS.map((card) => (
              <div
                key={card.label}
                className="card-float flex items-center gap-2.5 px-4 py-2.5"
              >
                <span
                  className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: "var(--teal-pale)" }}
                >
                  <Icon name={card.icon} size={16} style={{ color: "var(--teal)" }} />
                </span>
                <span className="text-sm font-semibold text-[#1e2330] whitespace-nowrap">{card.label}</span>
              </div>
            ))}
          </div>

          {/* Teal corner glow */}
          <div
            className="absolute -top-3 -right-3 w-24 h-24 rounded-2xl opacity-20 pointer-events-none"
            style={{ background: "var(--teal)", filter: "blur(20px)" }}
          />
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
          style={{ height: 48 }}
        >
          <path d="M0 60 C360 0 1080 0 1440 60 L1440 60 L0 60Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}

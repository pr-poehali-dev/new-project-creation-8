import { useEffect, useRef, useState } from "react";
import Icon from "@/components/ui/icon";

const CARDS = [
  {
    icon: "Youtube",
    title: "Смотришь ролики и читаешь каналы",
    text: "Но не понимаешь, с чего начать и как применить это в своей работе.",
    accent: false,
  },
  {
    icon: "Clock",
    title: "Тратишь часы на задачи",
    text: "Которые можно сократить до минут с правильным ИИ-инструментом.",
    accent: true,
  },
  {
    icon: "Laptop",
    title: "Уже пробовал нейросети",
    text: "Но дальше «поиграться» дело не пошло — без системы результата нет.",
    accent: false,
  },
  {
    icon: "ShieldOff",
    title: "Кажется, что это не для тебя",
    text: "Ощущение, что без технической базы в ИИ делать нечего.",
    accent: false,
  },
];

export default function ProblemSection() {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} id="problem" className="relative py-24 px-6" style={{ background: "#f8fafc" }}>
      {/* Subtle top border accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-1 rounded-full" style={{ background: "var(--teal)" }} />

      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div
          className={`text-center mb-14 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <h2 className="heading-display text-[#1e2330] text-3xl md:text-4xl lg:text-[42px] mb-4">
            Почему большинство до сих пор<br className="hidden md:block" />
            не используют ИИ{" "}
            <span className="gradient-text-teal">себе в пользу</span>
          </h2>
          <p className="text-[#6b7280] text-lg max-w-xl mx-auto leading-relaxed">
            Не потому что это сложно. А потому что вокруг слишком много хаоса, инструментов и теории без понятного применения.
          </p>
        </div>

        {/* 2×2 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {CARDS.map((card, i) => (
            <div
              key={card.title}
              className={`
                group relative rounded-2xl p-7 border cursor-default
                ${card.accent
                  ? "border-transparent text-white card-interactive"
                  : "bg-white border-[#e8edf3] card-interactive"
                }
              `}
              style={
                card.accent
                  ? { background: "var(--teal)", boxShadow: "0 12px 40px rgba(13,122,122,0.25)" }
                  : {}
              }
              // staggered entrance
              {...({
                style: {
                  ...(card.accent
                    ? { background: "var(--teal)", boxShadow: "0 12px 40px rgba(13,122,122,0.25)" }
                    : {}),
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateY(0)" : "translateY(24px)",
                  transition: `opacity 0.6s ease ${i * 0.1 + 0.1}s, transform 0.6s ease ${i * 0.1 + 0.1}s, box-shadow 0.25s, translate 0.25s`,
                },
              } as React.HTMLAttributes<HTMLDivElement>)}
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={
                  card.accent
                    ? { background: "rgba(255,255,255,0.15)" }
                    : { background: "var(--teal-pale)" }
                }
              >
                <Icon
                  name={card.icon}
                  size={22}
                  style={{ color: card.accent ? "#fff" : "var(--teal)" }}
                />
              </div>

              {/* Text */}
              <h3
                className="font-montserrat font-bold text-lg mb-2"
                style={{ color: card.accent ? "#fff" : "#1e2330" }}
              >
                {card.title}
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: card.accent ? "rgba(255,255,255,0.78)" : "#6b7280" }}
              >
                {card.text}
              </p>

              {/* Accent card — decorative corner circle */}
              {card.accent && (
                <div
                  className="absolute -top-6 -right-6 w-28 h-28 rounded-full pointer-events-none"
                  style={{ background: "rgba(255,255,255,0.08)", filter: "blur(2px)" }}
                />
              )}
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p
          className={`text-center mt-10 text-[#6b7280] text-base transition-all duration-700 delay-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          Если хоть один пункт — про тебя,{" "}
          <strong style={{ color: "var(--teal)" }}>ты попал по адресу.</strong>
        </p>
      </div>
    </section>
  );
}
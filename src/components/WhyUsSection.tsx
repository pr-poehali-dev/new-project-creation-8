import { useEffect, useRef, useState } from "react";
import Icon from "@/components/ui/icon";

const ADVANTAGES = [
  {
    icon: "MapPin",
    title: "Живое обучение офлайн во Владивостоке",
    desc: "Встречаемся лично — не очередной запись на YouTube. Реальный контакт, реальные ответы.",
  },
  {
    icon: "Users",
    title: "Маленькие группы и внимание к каждому",
    desc: "Максимум 12 человек. Твои задачи разбираем вживую, не теряем в потоке.",
  },
  {
    icon: "MessageCircle",
    title: "Простое объяснение сложного без перегруза",
    desc: "Никаких формул и программирования. Только то, что можно применить сегодня.",
  },
  {
    icon: "Zap",
    title: "Практика и применение уже на занятиях",
    desc: "Каждое занятие — это работа с твоим реальным кейсом, а не слайды для галочки.",
  },
  {
    icon: "RefreshCw",
    title: "Актуальные инструменты вместо устаревшей теории",
    desc: "Программа обновляется каждый поток. Учим то, что работает сейчас.",
  },
];

export default function WhyUsSection() {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.08 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} id="why" className="relative py-24 px-6 bg-white overflow-hidden">

      {/* Background accent */}
      <div
        className="absolute top-0 right-0 w-[480px] h-[480px] rounded-full pointer-events-none opacity-[0.07]"
        style={{ background: "radial-gradient(circle, var(--teal) 0%, transparent 70%)", transform: "translate(30%, -30%)" }}
      />

      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold mb-5"
            style={{ background: "var(--teal-pale)", color: "var(--teal)" }}
          >
            <Icon name="Star" size={14} style={{ color: "var(--teal)" }} />
            Наши преимущества
          </div>
          <h2 className="heading-display text-[#1e2330] text-3xl md:text-4xl lg:text-[42px] mb-4">
            Почему выбирают{" "}
            <span className="gradient-text-teal">«Хакни Нейросети»</span>
          </h2>
          <p className="text-[#6b7280] text-lg max-w-xl mx-auto leading-relaxed">
            Это не массовый онлайн-курс, а живое внедрение ИИ в понятном человеческом формате.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* Left: Photo + unique badge */}
          <div
            className={`transition-all duration-700 ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
          >
            {/* Photo */}
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://cdn.poehali.dev/projects/9e6ab7cb-02b9-4bdf-903b-219f3b05fb8d/files/0b4f8bb5-ef80-4a4b-a929-43d973e47335.jpg"
                alt="Живое занятие в группе"
                className="w-full h-[340px] object-cover"
              />
              {/* dark overlay */}
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(13,122,122,0.6) 0%, transparent 50%)" }} />

              {/* Floating stat — students */}
              <div
                className="absolute top-4 left-4 rounded-xl px-4 py-2.5 text-white text-sm font-semibold flex items-center gap-2"
                style={{ background: "rgba(13,122,122,0.85)", backdropFilter: "blur(10px)" }}
              >
                <Icon name="GraduationCap" size={15} className="text-white" />
                Живые занятия · Владивосток
              </div>

              {/* Caption */}
              <div className="absolute bottom-5 left-5 right-5">
                <p className="text-white text-sm opacity-90">
                  Занятия проходят вживую — с разбором реальных задач участников
                </p>
              </div>
            </div>

            {/* Unique badge */}
            <div
              className="mt-5 rounded-2xl p-5 flex items-start gap-4 border"
              style={{ background: "var(--teal)", borderColor: "var(--teal)" }}
            >
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                <Icon name="Award" size={20} className="text-white" />
              </div>
              <div>
                <p className="text-white font-bold text-base leading-snug mb-1">
                  Единственная живая школа ИИ во Владивостоке
                </p>
                <p className="text-white/75 text-sm">
                  Пока другие смотрят вебинары — ты внедряешь. Офлайн, в группе, с результатом.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Advantages list */}
          <div className="flex flex-col gap-4">
            {ADVANTAGES.map((adv, i) => (
              <div
                key={adv.title}
                className="flex items-start gap-4 rounded-2xl p-5 border border-[#e8edf3] bg-white"
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateX(0)" : "translateX(24px)",
                  transition: `opacity 0.55s ease ${0.1 + i * 0.1}s, transform 0.55s ease ${0.1 + i * 0.1}s`,
                  boxShadow: "0 2px 8px rgba(30,35,48,0.05)",
                }}
              >
                {/* Icon */}
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: "var(--teal-pale)" }}
                >
                  <Icon name={adv.icon} size={18} style={{ color: "var(--teal)" }} />
                </div>

                {/* Text */}
                <div>
                  <p className="font-semibold text-[#1e2330] text-sm mb-1">{adv.title}</p>
                  <p className="text-[#6b7280] text-xs leading-relaxed">{adv.desc}</p>
                </div>

                {/* Number */}
                <div
                  className="ml-auto text-xs font-bold tabular-nums shrink-0 self-start pt-0.5"
                  style={{ color: "var(--teal)", opacity: 0.4 }}
                >
                  0{i + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

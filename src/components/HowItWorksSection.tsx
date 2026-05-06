import { useEffect, useRef, useState } from "react";
import Icon from "@/components/ui/icon";

const STEPS = [
  {
    icon: "DoorOpen",
    num: "01",
    title: "Приходишь на живые занятия",
    desc: "С первого дня — практика в малой группе. Никаких записей «посмотри потом». Всё вживую, в реальном времени, с ответами на вопросы.",
    detail: "Офлайн · Владивосток",
    detailIcon: "MapPin",
  },
  {
    icon: "Laptop",
    num: "02",
    title: "Осваиваешь инструменты на реальных задачах",
    desc: "Каждый инструмент отрабатываешь на своей задаче — не на учебном примере. Контент, тексты, автоматизация — всё под твой бизнес или работу.",
    detail: "24 урока · 72 часа практики",
    detailIcon: "Calendar",
  },
  {
    icon: "Zap",
    num: "03",
    title: "Закрепляешь навыки через применение",
    desc: "Между занятиями — короткие задания в рабочем контексте. Разобранное на занятии сразу идёт в дело, пока не забылось.",
    detail: "Практика между встречами",
    detailIcon: "CheckCircle",
  },
  {
    icon: "Trophy",
    num: "04",
    title: "Уходишь с рабочим набором решений",
    desc: "На выходе — не конспект, а личная система: список инструментов, сценарии применения и уверенность что ты умеешь это использовать.",
    detail: "Твой личный стек",
    detailIcon: "Package",
  },
];

export default function HowItWorksSection() {
  const [inView, setInView] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [paused, setPaused] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.08 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // auto-cycle steps — stops when paused
  useEffect(() => {
    if (!inView || paused) return;
    const t = setInterval(() => setActiveStep(p => (p + 1) % STEPS.length), 3000);
    return () => clearInterval(t);
  }, [inView, paused]);

  return (
    <section ref={ref} id="how" className="relative py-24 px-6 bg-white overflow-hidden">

      {/* Decorative background line */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: "linear-gradient(var(--teal) 1px, transparent 1px)",
          backgroundSize: "100% 80px",
        }}
      />

      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold mb-5"
            style={{ background: "var(--teal-pale)", color: "var(--teal)" }}
          >
            <Icon name="Route" size={14} style={{ color: "var(--teal)" }} />
            Процесс
          </div>
          <h2 className="heading-display text-[#1e2330] text-3xl md:text-4xl lg:text-[42px] mb-4">
            Как проходит{" "}
            <span className="gradient-text-teal">обучение</span>
          </h2>
          <p className="text-[#6b7280] text-lg max-w-xl mx-auto">
            Четыре шага от первого занятия до рабочей системы в твоих руках.
          </p>
        </div>

        {/* Desktop timeline */}
        <div className="hidden md:block">

          {/* Step numbers row */}
          <div className="relative flex items-center justify-between mb-2 px-8">
            {/* Connecting line */}
            <div className="absolute left-12 right-12 top-1/2 -translate-y-1/2 h-0.5" style={{ background: "#e8edf3" }} />
            {/* Progress line */}
            <div
              className="absolute left-12 top-1/2 -translate-y-1/2 h-0.5 transition-all duration-700"
              style={{
                background: "var(--teal)",
                width: `${(activeStep / (STEPS.length - 1)) * (100 - 24 / 5 * 2)}%`,
                right: "auto",
              }}
            />
            {STEPS.map((step, i) => (
              <button
                key={i}
                onClick={() => { setActiveStep(i); setPaused(true); }}
                className="relative z-10 flex flex-col items-center gap-2 group"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 border-2"
                  style={{
                    background: i <= activeStep ? "var(--teal)" : "#fff",
                    borderColor: i <= activeStep ? "var(--teal)" : "#e8edf3",
                    boxShadow: i === activeStep ? "0 8px 24px rgba(13,122,122,0.28)" : "none",
                    transform: i === activeStep ? "scale(1.12)" : "scale(1)",
                  }}
                >
                  <Icon
                    name={step.icon}
                    size={22}
                    style={{ color: i <= activeStep ? "#fff" : "#9ca3af" }}
                  />
                </div>
              </button>
            ))}
          </div>

          {/* Active card */}
          <div
            key={activeStep}
            className="mt-8 rounded-2xl p-8 border transition-all duration-500"
            style={{
              background: "var(--teal-pale)",
              borderColor: "#b2e0e0",
              opacity: inView ? 1 : 0,
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="font-montserrat font-black text-5xl leading-none"
                    style={{ color: "var(--teal)", opacity: 0.18 }}
                  >
                    {STEPS[activeStep].num}
                  </span>
                  <h3 className="font-bold text-[#1e2330] text-xl leading-tight">
                    {STEPS[activeStep].title}
                  </h3>
                </div>
                <p className="text-[#4b5563] text-base leading-relaxed">
                  {STEPS[activeStep].desc}
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <div
                  className="flex items-center gap-3 rounded-xl px-5 py-4 bg-white border border-[#e0f2f2]"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: "var(--teal)" }}
                  >
                    <Icon name={STEPS[activeStep].detailIcon} size={18} className="text-white" />
                  </div>
                  <span className="font-semibold text-[#1e2330] text-sm">
                    {STEPS[activeStep].detail}
                  </span>
                </div>
                {/* Step dots + pause indicator */}
                <div className="flex items-center gap-2 pl-1">
                  {STEPS.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => { setActiveStep(i); setPaused(true); }}
                      className="transition-all duration-300 rounded-full"
                      style={{
                        width: i === activeStep ? 24 : 8,
                        height: 8,
                        background: i === activeStep ? "var(--teal)" : "#b2e0e0",
                      }}
                    />
                  ))}
                  {paused && (
                    <button
                      onClick={() => setPaused(false)}
                      className="ml-2 flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full transition-all duration-200"
                      style={{ background: "var(--teal-pale)", color: "var(--teal)" }}
                    >
                      <Icon name="Play" size={10} style={{ color: "var(--teal)" }} />
                      авто
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile vertical timeline */}
        <div className="md:hidden flex flex-col gap-0">
          {STEPS.map((step, i) => (
            <div
              key={i}
              className="flex gap-5"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateX(0)" : "translateX(-20px)",
                transition: `opacity 0.5s ease ${i * 0.12}s, transform 0.5s ease ${i * 0.12}s`,
              }}
            >
              {/* Line + dot column */}
              <div className="flex flex-col items-center shrink-0">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center border-2 shrink-0"
                  style={{
                    background: "var(--teal)",
                    borderColor: "var(--teal)",
                    boxShadow: "0 4px 16px rgba(13,122,122,0.22)",
                  }}
                >
                  <Icon name={step.icon} size={20} className="text-white" />
                </div>
                {i < STEPS.length - 1 && (
                  <div className="w-0.5 flex-1 my-2" style={{ background: "#e0f2f2", minHeight: 32 }} />
                )}
              </div>

              {/* Content */}
              <div className={`pb-8 ${i === STEPS.length - 1 ? "pb-0" : ""}`}>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold" style={{ color: "var(--teal)" }}>{step.num}</span>
                  <h3 className="font-bold text-[#1e2330] text-base leading-tight">{step.title}</h3>
                </div>
                <p className="text-[#6b7280] text-sm leading-relaxed mb-3">{step.desc}</p>
                <span
                  className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full"
                  style={{ background: "var(--teal-pale)", color: "var(--teal)" }}
                >
                  <Icon name={step.detailIcon} size={11} style={{ color: "var(--teal)" }} />
                  {step.detail}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className={`mt-12 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 transition-all duration-700 delay-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          style={{ background: "#f0fafa", border: "1px solid #b2e0e0" }}
        >
          <div>
            <p className="font-montserrat font-bold text-[#1e2330] text-base mb-1">
              Готов пройти этот путь?
            </p>
            <p className="text-[#6b7280] text-sm">
              Следующий поток начинается 1 августа. Сергей Черников и 2 ассистента. До 30 участников.
            </p>
          </div>
          <button className="btn-primary shrink-0 px-7 py-3 rounded-xl font-semibold text-sm">
            Записаться в группу
          </button>
        </div>
      </div>
    </section>
  );
}
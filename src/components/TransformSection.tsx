import { useEffect, useRef, useState } from "react";
import Icon from "@/components/ui/icon";

const STEPS = [
  {
    id: "before",
    label: "Было",
    icon: "AlertTriangle",
    color: "#e55a4e",
    bgColor: "#fff5f4",
    borderColor: "#ffd4d0",
    items: [
      "Хаос в инструментах — не знаешь, что выбрать",
      "Страх сделать что-то не так",
      "Часы ручной работы на типовые задачи",
      "Ощущение, что ИИ — не для тебя",
    ],
  },
  {
    id: "process",
    label: "Через школу",
    icon: "BookOpen",
    color: "var(--teal)",
    bgColor: "var(--teal-pale)",
    borderColor: "#b2e0e0",
    items: [
      "Живая практика в группе с первого занятия",
      "Понятные инструменты под конкретные задачи",
      "Сопровождение и разбор твоих кейсов",
      "Внедрение в реальный рабочий процесс",
    ],
    highlight: true,
  },
  {
    id: "after",
    label: "Стало",
    icon: "TrendingUp",
    color: "#16a34a",
    bgColor: "#f0fdf4",
    borderColor: "#bbf7d0",
    items: [
      "Скорость — типовые задачи за минуты, не часы",
      "Уверенность в применении нейросетей",
      "Прикладной результат в работе и бизнесе",
      "Своя система, которая реально работает",
    ],
  },
];

const ARROW = (
  <div className="hidden lg:flex flex-col items-center justify-center gap-1 pt-10 shrink-0">
    <div className="w-px h-8 bg-[#e8edf3]" />
    <Icon name="ChevronRight" size={22} style={{ color: "#cbd5e1" }} />
  </div>
);

export default function TransformSection() {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} id="transform" className="relative py-24 px-6 bg-white overflow-hidden">

      {/* Faint grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(var(--teal) 1px, transparent 1px), linear-gradient(90deg, var(--teal) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto">

        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold mb-5"
            style={{ background: "var(--teal-pale)", color: "var(--teal)" }}
          >
            <Icon name="Repeat2" size={14} style={{ color: "var(--teal)" }} />
            Что меняется после школы
          </div>
          <h2 className="heading-display text-[#1e2330] text-3xl md:text-4xl lg:text-[42px] mb-4">
            Ты перестаёшь искать{" "}
            <span className="gradient-text-teal">«волшебную нейросеть»</span>
          </h2>
          <p className="text-[#6b7280] text-lg max-w-xl mx-auto leading-relaxed">
            И собираешь свою понятную систему под реальные задачи — за 3 месяца практики.
          </p>
        </div>

        {/* Timeline: 3 columns + arrows */}
        <div className="flex flex-col lg:flex-row items-start gap-4 lg:gap-0">
          {STEPS.map((step, i) => (
            <>
              <div
                key={step.id}
                className={`flex-1 rounded-2xl border p-7 transition-all duration-700 ${
                  step.highlight ? "shadow-lg" : ""
                }`}
                style={{
                  background: step.bgColor,
                  borderColor: step.borderColor,
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateY(0)" : "translateY(28px)",
                  transition: `opacity 0.6s ease ${i * 0.15}s, transform 0.6s ease ${i * 0.15}s`,
                  ...(step.highlight
                    ? { boxShadow: "0 16px 48px rgba(13,122,122,0.16)", borderWidth: 1.5 }
                    : {}),
                }}
              >
                {/* Step label */}
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: step.highlight ? "var(--teal)" : `${step.color}18` }}
                  >
                    <Icon
                      name={step.icon}
                      size={19}
                      style={{ color: step.highlight ? "#fff" : step.color }}
                    />
                  </div>
                  <div>
                    <div
                      className="text-xs font-semibold uppercase tracking-widest mb-0.5"
                      style={{ color: step.color }}
                    >
                      {step.label}
                    </div>
                    <div
                      className="text-xs font-medium"
                      style={{ color: step.highlight ? "var(--teal)" : "#9ca3af" }}
                    >
                      {step.id === "before" && "До обучения"}
                      {step.id === "process" && "3 месяца · 12 занятий"}
                      {step.id === "after" && "После обучения"}
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px mb-5" style={{ background: step.borderColor }} />

                {/* Items */}
                <ul className="space-y-3">
                  {step.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span
                        className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                        style={{
                          background: step.highlight ? "rgba(13,122,122,0.12)" : `${step.color}14`,
                        }}
                      >
                        <Icon
                          name={
                            step.id === "before" ? "X" :
                            step.id === "process" ? "Check" : "Check"
                          }
                          size={11}
                          style={{ color: step.id === "before" ? step.color : step.color }}
                        />
                      </span>
                      <span
                        className="text-sm leading-relaxed"
                        style={{ color: step.id === "process" ? "#1e2330" : "#4b5563" }}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Highlight badge */}
                {step.highlight && (
                  <div
                    className="mt-6 flex items-center gap-2 text-xs font-semibold rounded-xl px-4 py-2.5"
                    style={{ background: "var(--teal)", color: "#fff" }}
                  >
                    <Icon name="MapPin" size={13} className="text-white" />
                    AISchool Владивосток
                  </div>
                )}
              </div>

              {/* Arrow between columns */}
              {i < STEPS.length - 1 && ARROW}
            </>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div
          className={`mt-12 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 transition-all duration-700 delay-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          style={{ background: "#f0fafa", border: "1px solid #b2e0e0" }}
        >
          <div>
            <p className="font-montserrat font-bold text-[#1e2330] text-base mb-1">
              Готов перейти из «было» в «стало»?
            </p>
            <p className="text-[#6b7280] text-sm">Ближайший поток — 1 августа. Группы до 12 человек.</p>
          </div>
          <button
            className="btn-primary shrink-0 px-7 py-3 rounded-xl font-semibold text-sm"
          >
            Забронировать место
          </button>
        </div>
      </div>
    </section>
  );
}

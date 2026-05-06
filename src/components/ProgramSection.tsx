import { useEffect, useRef, useState } from "react";
import Icon from "@/components/ui/icon";

const MODULES = [
  {
    id: 1,
    icon: "MessageSquare",
    color: "#6366f1",
    colorPale: "#eef2ff",
    tag: "Модуль 1",
    title: "ИИ для текста и коммуникации",
    desc: "Научишься писать продающие тексты, письма, посты и скрипты с помощью нейросетей — быстро и без «воды».",
    skills: ["Деловая переписка", "Посты и статьи", "Скрипты продаж", "Резюме и питчи"],
    tools: ["ChatGPT", "Claude", "GigaChat"],
  },
  {
    id: 2,
    icon: "Image",
    color: "#ec4899",
    colorPale: "#fdf2f8",
    tag: "Модуль 2",
    title: "ИИ для визуала и контента",
    desc: "Создашь обложки, баннеры, иллюстрации и видео без дизайнера. Научишься делать контент, который работает.",
    skills: ["Генерация изображений", "Монтаж видео", "Презентации", "Брендинг"],
    tools: ["Midjourney", "Runway", "Canva AI"],
  },
  {
    id: 3,
    icon: "BarChart2",
    color: "#f59e0b",
    colorPale: "#fffbeb",
    tag: "Модуль 3",
    title: "ИИ для бизнеса и автоматизации",
    desc: "Автоматизируешь рутинные задачи, настроишь цепочки процессов и высвободишь время для роста.",
    skills: ["Автоворонки", "Аналитика данных", "Боты и автоответы", "Планирование"],
    tools: ["Make", "n8n", "Notion AI"],
  },
  {
    id: 4,
    icon: "Brain",
    color: "#10b981",
    colorPale: "#ecfdf5",
    tag: "Модуль 4",
    title: "ИИ для личной эффективности",
    desc: "Встроишь ИИ в свой рабочий ритм — планирование, обучение, принятие решений станут быстрее и чище.",
    skills: ["Тайм-менеджмент", "Обучение с ИИ", "Принятие решений", "Заметки и идеи"],
    tools: ["Obsidian AI", "Perplexity", "Mem.ai"],
  },
  {
    id: 5,
    icon: "Wrench",
    color: "var(--teal)",
    colorPale: "var(--teal-pale)",
    tag: "Модуль 5",
    title: "Актуальные инструменты и сценарии",
    desc: "Финальный блок — полный обзор рабочего арсенала. Составишь свою личную систему под конкретные задачи.",
    skills: ["Собственная система", "Подбор инструментов", "Реальные кейсы", "Внедрение"],
    tools: ["Личный стек", "Интеграции", "Автопилот"],
  },
];

const TOOL_LOGOS = [
  "ChatGPT", "Claude", "Midjourney", "Make", "Notion AI", "Runway",
  "GigaChat", "n8n", "Perplexity", "Canva AI", "Obsidian", "Mem.ai",
  "ChatGPT", "Claude", "Midjourney", "Make", "Notion AI", "Runway",
];

export default function ProgramSection() {
  const [inView, setInView] = useState(false);
  const [active, setActive] = useState(0);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.08 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const mod = MODULES[active];

  return (
    <section ref={ref} id="program" className="relative py-24 px-6 overflow-hidden" style={{ background: "#f8fafc" }}>

      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className={`text-center mb-14 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold mb-5"
            style={{ background: "var(--teal-pale)", color: "var(--teal)" }}
          >
            <Icon name="BookOpen" size={14} style={{ color: "var(--teal)" }} />
            Программа
          </div>
          <h2 className="heading-display text-[#1e2330] text-3xl md:text-4xl lg:text-[42px] mb-4">
            Что ты{" "}
            <span className="gradient-text-teal">освоишь</span>
          </h2>
          <p className="text-[#6b7280] text-lg max-w-xl mx-auto">
            Программа построена так, чтобы ты быстро начал применять ИИ в реальных задачах.
          </p>
        </div>

        {/* Tab selector — horizontal pills */}
        <div
          className={`flex flex-wrap gap-2 justify-center mb-8 transition-all duration-700 delay-100 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          {MODULES.map((m, i) => (
            <button
              key={m.id}
              onClick={() => setActive(i)}
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200"
              style={{
                background: active === i ? m.color : "#fff",
                color: active === i ? "#fff" : "#4b5563",
                border: `1.5px solid ${active === i ? m.color : "#e8edf3"}`,
                boxShadow: active === i ? `0 4px 16px ${m.color}33` : "none",
              }}
            >
              <Icon name={m.icon} size={14} style={{ color: active === i ? "#fff" : m.color }} />
              {m.tag}
            </button>
          ))}
        </div>

        {/* Active module detail card */}
        <div
          key={mod.id}
          className={`rounded-2xl border p-8 transition-all duration-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          style={{
            background: "#fff",
            borderColor: "#e8edf3",
            borderLeft: `4px solid ${mod.color}`,
            boxShadow: "0 4px 24px rgba(30,35,48,0.07)",
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center"
                  style={{ background: mod.colorPale }}
                >
                  <Icon name={mod.icon} size={22} style={{ color: mod.color }} />
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: mod.color }}>
                    {mod.tag}
                  </span>
                  <h3 className="text-[#1e2330] font-bold text-lg leading-tight">{mod.title}</h3>
                </div>
              </div>
              <p className="text-[#6b7280] text-sm leading-relaxed mb-6">{mod.desc}</p>

              {/* Tools */}
              <div>
                <p className="text-xs font-semibold text-[#9ca3af] uppercase tracking-wider mb-2">Инструменты</p>
                <div className="flex flex-wrap gap-2">
                  {mod.tools.map(t => (
                    <span
                      key={t}
                      className="text-xs font-semibold px-3 py-1 rounded-full"
                      style={{ background: mod.colorPale, color: mod.color }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: skills */}
            <div>
              <p className="text-xs font-semibold text-[#9ca3af] uppercase tracking-wider mb-3">
                Что сможешь после модуля
              </p>
              <div className="grid grid-cols-1 gap-3">
                {mod.skills.map((s, i) => (
                  <div
                    key={s}
                    className="flex items-center gap-3 rounded-xl p-3"
                    style={{ background: mod.colorPale }}
                  >
                    <span
                      className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-xs font-bold text-white"
                      style={{ background: mod.color }}
                    >
                      {i + 1}
                    </span>
                    <span className="text-sm font-medium" style={{ color: "#1e2330" }}>{s}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Marquee — tools */}
        <div
          className={`mt-10 transition-all duration-700 delay-300 ${inView ? "opacity-100" : "opacity-0"}`}
        >
          <p className="text-center text-xs font-semibold text-[#9ca3af] uppercase tracking-widest mb-4">
            Инструменты которые изучаем
          </p>
          <div className="relative overflow-hidden" style={{ maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}>
            <div className="flex gap-4 animate-marquee whitespace-nowrap">
              {TOOL_LOGOS.map((t, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold shrink-0"
                  style={{ background: "#fff", border: "1.5px solid #e8edf3", color: "#4b5563" }}
                >
                  <span className="w-2 h-2 rounded-full inline-block" style={{ background: "var(--teal)" }} />
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

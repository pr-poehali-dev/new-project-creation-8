import { useEffect, useRef, useState } from "react";
import Icon from "@/components/ui/icon";

const CASES = [
  {
    featured: true,
    photo: "https://cdn.poehali.dev/projects/9e6ab7cb-02b9-4bdf-903b-219f3b05fb8d/files/a673cee5-f4c8-418c-ac96-a0f45697bb5a.jpg",
    name: "Ольга",
    role: "Владелец кофейни",
    was: "Тратила 4–5 часов в неделю на посты в соцсети, писала сама, без системы",
    wanted: "Автоматизировать контент и перестать зависать над текстами",
    implemented: "Научилась работать с ChatGPT и создала шаблонную систему постов",
    result: "Экономит 4 часа в неделю",
    metric: "−4 часа\nв неделю",
    quote: "Теперь пишу пост за 10 минут, а не за час. Освободилось время на гостей и кофе.",
    color: "var(--teal)",
    colorPale: "var(--teal-pale)",
  },
  {
    featured: false,
    photo: "https://cdn.poehali.dev/projects/9e6ab7cb-02b9-4bdf-903b-219f3b05fb8d/files/575a2240-cd85-4f3a-874f-9818b517c0c1.jpg",
    name: "Дмитрий",
    role: "Предприниматель, оптовая торговля",
    was: "Готовил коммерческие предложения по 2–3 часа вручную",
    wanted: "Ускорить продажи и снизить время на подготовку документов",
    implemented: "Внедрил ИИ в подготовку КП, аналитику клиентов и переписку",
    result: "Выручка выросла на 30%",
    metric: "+30%\nвыручки",
    quote: "КП теперь делаю за 20 минут. Это изменило темп работы с клиентами.",
    color: "#6366f1",
    colorPale: "#eef2ff",
  },
  {
    featured: false,
    photo: "https://cdn.poehali.dev/projects/9e6ab7cb-02b9-4bdf-903b-219f3b05fb8d/files/7194027f-f867-4ab5-89e4-cd09165953f8.jpg",
    name: "Анастасия",
    role: "SMM-фрилансер",
    was: "Брала 3–4 клиента, больше не успевала — контент съедал всё время",
    wanted: "Масштабироваться без найма помощника",
    implemented: "Выстроила систему генерации контента с помощью Midjourney и Claude",
    result: "Ведёт 8 клиентов одна",
    metric: "×2\nклиентов",
    quote: "Школа дала не инструменты, а систему. Теперь у меня есть процесс.",
    color: "#ec4899",
    colorPale: "#fdf2f8",
  },
  {
    featured: false,
    photo: "https://cdn.poehali.dev/projects/9e6ab7cb-02b9-4bdf-903b-219f3b05fb8d/files/2dd07161-dea7-4d5c-9d6f-7b74dcd27b7d.jpg",
    name: "Артём",
    role: "Руководитель отдела в IT",
    was: "Скептически относился к нейросетям — казалось, это «не для работы»",
    wanted: "Разобраться без лишнего технического погружения",
    implemented: "Встроил ИИ в ежедневные задачи: отчёты, встречи, задачи команде",
    result: "Экономит 2 часа каждый день",
    metric: "−2 часа\nкаждый день",
    quote: "Зашёл скептиком, вышел с набором инструментов, которые реально работают.",
    color: "#10b981",
    colorPale: "#ecfdf5",
  },
];

function CaseCard({ c, i, inView }: { c: typeof CASES[0]; i: number; inView: boolean }) {
  if (c.featured) {
    return (
      <div
        className="col-span-1 md:col-span-2 rounded-2xl overflow-hidden"
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? "translateY(0)" : "translateY(28px)",
          transition: `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s`,
          boxShadow: "0 8px 40px rgba(13,122,122,0.18)",
        }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2" style={{ background: c.color }}>
          {/* Photo side */}
          <div className="relative h-64 sm:h-auto">
            <img src={c.photo} alt={c.name} className="w-full h-full object-cover" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to right, transparent 40%, rgba(13,122,122,0.5))" }} />
          </div>

          {/* Content side */}
          <div className="p-8 flex flex-col justify-between">
            {/* Quote */}
            <div>
              <Icon name="Quote" size={28} className="text-white opacity-40 mb-3" />
              <p className="text-white text-base font-medium leading-relaxed mb-6">
                {c.quote}
              </p>
            </div>

            {/* Metric */}
            <div className="mb-6">
              <div className="text-white font-bold text-4xl leading-tight whitespace-pre-line font-montserrat">
                {c.metric}
              </div>
            </div>

            {/* Name + role */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white/40 shrink-0">
                <img src={c.photo} alt={c.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-white font-bold text-sm">{c.name}</p>
                <p className="text-white/70 text-xs">{c.role}</p>
              </div>
              <span className="ml-auto text-xs font-semibold text-white/60 bg-white/10 px-3 py-1 rounded-full">
                Featured
              </span>
            </div>
          </div>
        </div>

        {/* Journey bar */}
        <div className="grid grid-cols-3 border-t" style={{ background: c.colorPale, borderColor: "#b2e0e0" }}>
          {[
            { label: "Кто был", value: c.was },
            { label: "Что внедрил", value: c.implemented },
            { label: "Что получил", value: c.result },
          ].map((item, j) => (
            <div key={j} className={`px-5 py-4 ${j < 2 ? "border-r border-[#b2e0e0]" : ""}`}>
              <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: c.color }}>
                {item.label}
              </p>
              <p className="text-[#1e2330] text-xs leading-relaxed">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div
      className="rounded-2xl bg-white border border-[#e8edf3] overflow-hidden flex flex-col"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.6s ease ${i * 0.12}s, transform 0.6s ease ${i * 0.12}s`,
        boxShadow: "0 2px 12px rgba(30,35,48,0.06)",
      }}
    >
      {/* Header */}
      <div className="p-5 flex items-center gap-3 border-b border-[#e8edf3]">
        <div className="w-12 h-12 rounded-full overflow-hidden shrink-0">
          <img src={c.photo} alt={c.name} className="w-full h-full object-cover" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-bold text-[#1e2330] text-sm">{c.name}</p>
          <p className="text-[#6b7280] text-xs truncate">{c.role}</p>
        </div>
        {/* Metric badge */}
        <div
          className="shrink-0 text-center px-3 py-2 rounded-xl"
          style={{ background: c.colorPale }}
        >
          <span className="font-bold text-sm whitespace-pre-line leading-tight block" style={{ color: c.color }}>
            {c.metric}
          </span>
        </div>
      </div>

      {/* Quote */}
      <div className="px-5 py-4 flex-1">
        <div className="flex gap-2 mb-2">
          <Icon name="Quote" size={14} style={{ color: c.color }} className="shrink-0 mt-0.5" />
          <p className="text-[#374151] text-sm leading-relaxed italic">{c.quote}</p>
        </div>
      </div>

      {/* Journey */}
      <div className="border-t border-[#e8edf3]">
        {[
          { icon: "User", label: "Кто был", value: c.was },
          { icon: "Lightbulb", label: "Что внедрил", value: c.implemented },
          { icon: "TrendingUp", label: "Результат", value: c.result },
        ].map((row, j) => (
          <div
            key={j}
            className={`flex items-start gap-3 px-5 py-3 ${j < 2 ? "border-b border-[#f3f4f6]" : ""}`}
          >
            <span
              className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
              style={{ background: c.colorPale }}
            >
              <Icon name={row.icon} size={10} style={{ color: c.color }} />
            </span>
            <div className="min-w-0">
              <span className="text-xs font-semibold" style={{ color: c.color }}>{row.label}: </span>
              <span className="text-xs text-[#6b7280]">{row.value}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function CasesSection() {
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

  return (
    <section ref={ref} id="cases" className="relative py-24 px-6 bg-white overflow-hidden">

      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none opacity-[0.05]"
        style={{ background: "radial-gradient(circle, var(--teal) 0%, transparent 70%)", transform: "translate(-30%, 30%)" }}
      />

      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className={`text-center mb-14 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold mb-5"
            style={{ background: "var(--teal-pale)", color: "var(--teal)" }}
          >
            <Icon name="ThumbsUp" size={14} style={{ color: "var(--teal)" }} />
            Результаты учеников
          </div>
          <h2 className="heading-display text-[#1e2330] text-3xl md:text-4xl lg:text-[42px] mb-4">
            Результаты, которые уже{" "}
            <span className="gradient-text-teal">получают ученики</span>
          </h2>
          <p className="text-[#6b7280] text-lg max-w-xl mx-auto">
            Не обещания, а реальные изменения в скорости, доходе, контенте и уверенности.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {CASES.map((c, i) => (
            <CaseCard key={c.name} c={c} i={i} inView={inView} />
          ))}
        </div>

        {/* Stats strip */}
        <div
          className={`mt-12 rounded-2xl p-6 grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-700 delay-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          style={{ background: "#f8fafc", border: "1px solid #e8edf3" }}
        >
          {[
            { value: "3–10×", label: "ускорение типовых задач" },
            { value: "12", label: "человек в группе максимум" },
            { value: "3 мес", label: "от старта до результата" },
            { value: "100%", label: "живая практика, не теория" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-montserrat font-bold text-2xl md:text-3xl mb-1" style={{ color: "var(--teal)" }}>
                {s.value}
              </div>
              <div className="text-xs text-[#6b7280]">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

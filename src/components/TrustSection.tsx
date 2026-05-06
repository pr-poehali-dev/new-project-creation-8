import { useEffect, useRef, useState } from "react";
import Icon from "@/components/ui/icon";

const REVIEWS = [
  {
    photo: "https://cdn.poehali.dev/projects/9e6ab7cb-02b9-4bdf-903b-219f3b05fb8d/files/0e6976ca-2907-40b5-8195-50b666a3b232.jpg",
    name: "Марина Соколова",
    role: "Директор HR-агентства",
    stars: 5,
    text: "Пришла с полным нулём. За три месяца выстроила систему найма с помощью ИИ: описания вакансий, первичный скрининг, шаблоны писем. Сэкономила минимум 6 часов в неделю. Школа — это не курс, это живое внедрение.",
    date: "Март 2025",
  },
  {
    photo: "https://cdn.poehali.dev/projects/9e6ab7cb-02b9-4bdf-903b-219f3b05fb8d/files/d318a8be-d402-4c2c-b277-29759202362a.jpg",
    name: "Сергей Ларин",
    role: "Руководитель логистической компании",
    stars: 5,
    text: "Скептик со стажем. Думал, что ИИ — хайп для молодёжи. После первого занятия понял: это просто инструмент, как Excel. После третьего — уже применял в работе. Чёткое, понятное, без воды.",
    date: "Февраль 2025",
  },
  {
    photo: "https://cdn.poehali.dev/projects/9e6ab7cb-02b9-4bdf-903b-219f3b05fb8d/files/02f98852-2e54-4b39-8fde-b430ad4bbfb7.jpg",
    name: "Екатерина Вонг",
    role: "Маркетолог, самозанятая",
    stars: 5,
    text: "Наконец-то обучение, где не читают лекции с экрана, а разбирают конкретные задачи. Мой кейс прорабатывался на занятии — получила обратную связь и сразу внедрила. Рекомендую всем, кто устал от теории.",
    date: "Апрель 2025",
  },
];

const PARTNERS = [
  { name: "ДВФУ", sub: "Дальневосточный федеральный\nуниверситет" },
  { name: "ТОР", sub: "Территория\nопережающего развития" },
  { name: "КРДВ", sub: "Корпорация развития\nДальнего Востока" },
  { name: "Опора России", sub: "Организация малого и\nсреднего бизнеса" },
  { name: "Владивосток\nБизнес", sub: "Городское бизнес-\nсообщество" },
  { name: "ДВФУ", sub: "Дальневосточный федеральный\nуниверситет" },
  { name: "ТОР", sub: "Территория\nопережающего развития" },
  { name: "КРДВ", sub: "Корпорация развития\nДальнего Востока" },
  { name: "Опора России", sub: "Организация малого и\nсреднего бизнеса" },
  { name: "Владивосток\nБизнес", sub: "Городское бизнес-\nсообщество" },
];

const STATS = [
  { value: "47+", label: "выпускников" },
  { value: "4.9", label: "средний рейтинг" },
  { value: "3", label: "потока проведено" },
  { value: "Владивосток", label: "единственная живая школа" },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Icon key={i} name="Star" size={13} style={{ color: "#f59e0b", fill: "#f59e0b" }} />
      ))}
    </div>
  );
}

export default function TrustSection() {
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
    <section ref={ref} id="trust" className="relative py-24 px-6 overflow-hidden" style={{ background: "#f8fafc" }}>

      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className={`text-center mb-14 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold mb-5"
            style={{ background: "var(--teal-pale)", color: "var(--teal)" }}
          >
            <Icon name="ShieldCheck" size={14} style={{ color: "var(--teal)" }} />
            Доверие и отзывы
          </div>
          <h2 className="heading-display text-[#1e2330] text-3xl md:text-4xl lg:text-[42px] mb-4">
            Школе{" "}
            <span className="gradient-text-teal">доверяют</span>
          </h2>
          <p className="text-[#6b7280] text-lg max-w-xl mx-auto">
            У школы уже есть выпускники, отзывы и поддержка заметных организаций региона.
          </p>
        </div>

        {/* Stats row */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-4 mb-14 transition-all duration-700 delay-100 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          {STATS.map((s) => (
            <div
              key={s.label}
              className="bg-white rounded-2xl p-5 text-center border border-[#e8edf3]"
              style={{ boxShadow: "0 2px 8px rgba(30,35,48,0.05)" }}
            >
              <div
                className="font-montserrat font-bold text-2xl md:text-3xl mb-1"
                style={{ color: "var(--teal)" }}
              >
                {s.value}
              </div>
              <div className="text-xs text-[#6b7280]">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Reviews */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
          {REVIEWS.map((r, i) => (
            <div
              key={r.name}
              className="bg-white rounded-2xl p-6 flex flex-col border border-[#e8edf3]"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(24px)",
                transition: `opacity 0.6s ease ${0.1 + i * 0.12}s, transform 0.6s ease ${0.1 + i * 0.12}s`,
                boxShadow: "0 2px 12px rgba(30,35,48,0.06)",
              }}
            >
              {/* Stars + date */}
              <div className="flex items-center justify-between mb-4">
                <Stars count={r.stars} />
                <span className="text-xs text-[#9ca3af]">{r.date}</span>
              </div>

              {/* Quote icon */}
              <Icon name="Quote" size={20} style={{ color: "var(--teal)", opacity: 0.25 }} className="mb-2" />

              {/* Text */}
              <p className="text-[#374151] text-sm leading-relaxed flex-1 mb-5">{r.text}</p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-[#f3f4f6]">
                <div className="w-10 h-10 rounded-full overflow-hidden shrink-0">
                  <img src={r.photo} alt={r.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="text-[#1e2330] font-semibold text-sm">{r.name}</p>
                  <p className="text-[#9ca3af] text-xs">{r.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Partners marquee */}
        <div
          className={`transition-all duration-700 delay-400 ${inView ? "opacity-100" : "opacity-0"}`}
        >
          <p className="text-center text-xs font-semibold text-[#9ca3af] uppercase tracking-widest mb-5">
            Партнёры и поддерживающие организации
          </p>

          <div
            className="relative overflow-hidden rounded-2xl bg-white border border-[#e8edf3] py-5"
            style={{
              maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
              boxShadow: "0 2px 8px rgba(30,35,48,0.04)",
            }}
          >
            <div className="flex gap-6 animate-marquee whitespace-nowrap">
              {PARTNERS.map((p, i) => (
                <div
                  key={i}
                  className="inline-flex items-center gap-3 px-5 py-2 rounded-xl shrink-0"
                  style={{ background: "#f8fafc", border: "1.5px solid #e8edf3" }}
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: "var(--teal-pale)" }}
                  >
                    <Icon name="Building" size={14} style={{ color: "var(--teal)" }} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#1e2330] whitespace-pre-line leading-tight">{p.name}</p>
                    <p className="text-[10px] text-[#9ca3af] whitespace-pre-line leading-tight">{p.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Trust seal */}
        <div
          className={`mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 transition-all duration-700 delay-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          {[
            { icon: "MapPin", text: "Офлайн во Владивостоке" },
            { icon: "Users", text: "Группы до 12 человек" },
            { icon: "Award", text: "Единственная живая школа ИИ в регионе" },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-2">
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
                style={{ background: "var(--teal-pale)" }}
              >
                <Icon name={item.icon} size={13} style={{ color: "var(--teal)" }} />
              </div>
              <span className="text-sm text-[#4b5563] font-medium">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

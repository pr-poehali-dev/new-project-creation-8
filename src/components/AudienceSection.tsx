import { useEffect, useRef, useState } from "react";
import Icon from "@/components/ui/icon";

const CARDS = [
  {
    photo: "https://cdn.poehali.dev/projects/9e6ab7cb-02b9-4bdf-903b-219f3b05fb8d/files/f2d115ae-22db-4cd1-92ae-cff262d5c832.jpg",
    role: "Предприниматель",
    icon: "Building2",
    headline: "Ускорить бизнес-процессы и не отставать от рынка",
    results: ["Автоматизирует рутину", "Ускоряет аналитику", "Делает презентации за минуты"],
  },
  {
    photo: "https://cdn.poehali.dev/projects/9e6ab7cb-02b9-4bdf-903b-219f3b05fb8d/files/b2a690c8-9252-4b89-af0c-a0ea0bb1fd4f.jpg",
    role: "Фрилансер",
    icon: "Laptop",
    headline: "Делать больше, быстрее и дороже продавать своё время",
    results: ["Ускоряет контент", "Генерирует тексты", "Берёт больше клиентов"],
  },
  {
    photo: "https://cdn.poehali.dev/projects/9e6ab7cb-02b9-4bdf-903b-219f3b05fb8d/files/ef2c1f51-19d5-4428-be48-5810fce41391.jpg",
    role: "Самозанятый / специалист",
    icon: "Briefcase",
    headline: "Встроить ИИ в повседневную работу без лишних усилий",
    results: ["Экономит время", "Готовит отчёты", "Отвечает на запросы"],
  },
  {
    photo: "https://cdn.poehali.dev/projects/9e6ab7cb-02b9-4bdf-903b-219f3b05fb8d/files/2d43821d-cc35-41ca-a3d4-a8c9b6f5ab69.jpg",
    role: "Новичок без IT-опыта",
    icon: "Sparkles",
    headline: "Войти в ИИ без страха, перегруза и технических знаний",
    results: ["Стартует с нуля", "Получает практику", "Уходит с результатом"],
  },
];

export default function AudienceSection() {
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
    <section ref={ref} id="audience" className="relative py-24 px-6" style={{ background: "#f8fafc" }}>

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-1 rounded-full" style={{ background: "var(--teal)" }} />

      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div
          className={`text-center mb-14 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold mb-5"
            style={{ background: "var(--teal-pale)", color: "var(--teal)" }}
          >
            <Icon name="Users" size={14} style={{ color: "var(--teal)" }} />
            Для кого
          </div>
          <h2 className="heading-display text-[#1e2330] text-3xl md:text-4xl lg:text-[42px] mb-4">
            Кому подойдёт{" "}
            <span className="gradient-text-teal">эта школа</span>
          </h2>
          <p className="text-[#6b7280] text-lg max-w-lg mx-auto">
            Узнай себя — и убедись, что это именно для тебя
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CARDS.map((card, i) => (
            <div
              key={card.role}
              className="group bg-white rounded-2xl overflow-hidden border border-[#e8edf3] cursor-default"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(28px)",
                transition: `opacity 0.6s ease ${i * 0.12}s, transform 0.6s ease ${i * 0.12}s, box-shadow 0.25s`,
                boxShadow: "0 2px 12px rgba(30,35,48,0.06)",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 16px 40px rgba(13,122,122,0.14)";
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(-6px)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 2px 12px rgba(30,35,48,0.06)";
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
              }}
            >
              {/* Photo */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={card.photo}
                  alt={card.role}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                {/* teal gradient overlay */}
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(13,122,122,0.55) 0%, transparent 55%)" }}
                />
                {/* Role badge over photo */}
                <div className="absolute bottom-3 left-3">
                  <span
                    className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full text-white"
                    style={{ background: "rgba(13,122,122,0.85)", backdropFilter: "blur(8px)" }}
                  >
                    <Icon name={card.icon} size={11} className="text-white" />
                    {card.role}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-5">
                <p className="text-sm font-semibold text-[#1e2330] leading-snug mb-4">
                  {card.headline}
                </p>

                {/* Result tags */}
                <div className="flex flex-col gap-1.5">
                  {card.results.map(r => (
                    <div key={r} className="flex items-center gap-2">
                      <span
                        className="w-4 h-4 rounded-full flex items-center justify-center shrink-0"
                        style={{ background: "var(--teal-pale)" }}
                      >
                        <Icon name="Check" size={9} style={{ color: "var(--teal)" }} />
                      </span>
                      <span className="text-xs text-[#6b7280]">{r}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom recognition prompt */}
        <div
          className={`mt-12 text-center transition-all duration-700 delay-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <p className="text-[#6b7280] text-base mb-4">
            Узнал себя в одной из карточек?
          </p>
          <button className="btn-primary px-8 py-3.5 rounded-xl font-semibold text-sm">
            Забронировать место в группе
          </button>
        </div>
      </div>
    </section>
  );
}

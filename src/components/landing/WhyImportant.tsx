import { useInView } from "@/hooks/useInView";
import { useCountUp } from "@/hooks/useCountUp";

function StatCard({ target, display, label, index, active }: { target: number; display: string; label: string; index: number; active: boolean }) {
  const count = useCountUp(target, 1400 + index * 150, active);
  const shown = active ? display.replace(String(target), String(count)) : "0";

  return (
    <div
      className="card-navy card-interactive p-5 sm:p-7"
      style={{
        opacity: active ? 1 : 0,
        transform: active ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`,
      }}
    >
      <div className="gradient-gold heading-display text-4xl sm:text-5xl md:text-6xl mb-3 tabular-nums">{shown}</div>
      <p className="text-white/55 text-sm leading-snug">{label}</p>
    </div>
  );
}

export default function WhyImportant() {
  const { ref, inView } = useInView();

  const stats = [
    { target: 165, display: "165", label: "лет истории предпринимательства в Приморье" },
    { target: 20, display: "20", label: "лет «ОПОРЫ РОССИИ» в Приморском крае" },
    { target: 2026, display: "2026", label: "год закладки памятного знака" },
    { target: 2046, display: "2046", label: "год вскрытия капсулы времени" },
  ];

  return (
    <section ref={ref} className="section-dark py-16 sm:py-24 px-5 sm:px-6">
      <div className="bg-watermark hidden md:block">20</div>
      <div className="max-w-7xl mx-auto relative z-10">
        <p className="section-label mb-3">03 — Почему это важно</p>
        <div className="w-16 h-0.5 bg-brand-gold/40 mb-8 sm:mb-10" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-start mb-10 sm:mb-14">
          <h2 className={`heading-display text-white text-3xl sm:text-4xl md:text-5xl ${inView ? "animate-fade-up" : "opacity-0"}`}>
            Почему это важно
          </h2>
          <div className={inView ? "animate-fade-up delay-200" : "opacity-0"}>
            <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-5">
              Предприниматели создают рабочие места, платят налоги, развивают инфраструктуру и формируют культуру региона. Но их вклад редко получает публичное признание.
            </p>
            <p className="text-white/70 text-base sm:text-lg leading-relaxed">
              Памятник — это не привилегия, а справедливость. Это способ сказать: мы видим вас, мы ценим то, что вы делаете.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {stats.map((s, i) => (
            <StatCard key={s.label} {...s} index={i} active={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
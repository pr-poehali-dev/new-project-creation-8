import Icon from "@/components/ui/icon";
import { useInView } from "@/hooks/useInView";

const CEREMONY_IMG = "https://cdn.poehali.dev/projects/9e6ab7cb-02b9-4bdf-903b-219f3b05fb8d/files/1eeb9799-3b90-4aac-8db6-7ba0970c37dd.jpg";

const INFO = [
  { icon: "Calendar", label: "Дата", value: "19 июня 2026 года" },
  { icon: "MapPin", label: "Место", value: "Площадь Адмирала Фокина, Владивосток" },
  { icon: "Flag", label: "Повод", value: "20-летие «ОПОРЫ РОССИИ» в Приморье" },
];

export default function Ceremony() {
  const { ref, inView } = useInView();

  return (
    <section ref={ref} id="ceremony" className="section-dark py-24 px-6">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Banner */}
        <div className="relative rounded-3xl overflow-hidden border border-white/10 mb-12">
          <img src={CEREMONY_IMG} alt="Торжественная закладка камня" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1a3f] via-[#0a1a3f]/85 to-[#0a1a3f]/40" />
          <div className={`relative z-10 p-8 md:p-14 max-w-2xl ${inView ? "animate-fade-up" : "opacity-0"}`}>
            <p className="section-label mb-5">04 — Закладка камня</p>
            <h2 className="heading-display text-white text-4xl md:text-5xl mb-6">
              Торжественная закладка камня
            </h2>
            <span className="inline-block btn-outline-gold px-5 py-2.5 rounded-md text-sm font-bold mb-7">
              19 июня 2026 года
            </span>
            <p className="text-white/80 text-lg leading-relaxed mb-4">
              В честь 20-летия Приморского краевого отделения «ОПОРЫ РОССИИ» состоится торжественная церемония закладки памятного камня и капсулы времени.
            </p>
            <p className="text-white/55 leading-relaxed">
              Место проведения — площадь Адмирала Фокина, Владивосток. Центральная городская площадь, место встреч и событий.
            </p>
          </div>
        </div>

        {/* Info row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5 rounded-2xl overflow-hidden">
          {INFO.map((item, i) => (
            <div
              key={item.label}
              className="bg-[#0a1a3f] p-7 flex items-start gap-4"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.6s ease ${i * 0.12 + 0.2}s, transform 0.6s ease ${i * 0.12 + 0.2}s`,
              }}
            >
              <div className="icon-box">
                <Icon name={item.icon} size={20} />
              </div>
              <div>
                <p className="text-brand-gold text-xs tracking-widest uppercase font-semibold mb-1.5">{item.label}</p>
                <p className="text-white font-semibold leading-snug">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

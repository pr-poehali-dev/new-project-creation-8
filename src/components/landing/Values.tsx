import Icon from "@/components/ui/icon";
import { useInView } from "@/hooks/useInView";

const VALUES = [
  { icon: "Lightbulb", title: "Созидание", text: "Способность создавать то, чего ещё не существует." },
  { icon: "Shield", title: "Ответственность", text: "Готовность отвечать за решения и их последствия." },
  { icon: "Wind", title: "Свобода", text: "Внутренняя сила идти своим путём." },
  { icon: "TrendingUp", title: "Движение вперёд", text: "Постоянный поиск и развитие." },
];

export default function Values() {
  const { ref, inView } = useInView();

  return (
    <section ref={ref} className="section-dark py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 relative z-10">
        {VALUES.map((v, i) => (
          <div
            key={v.title}
            className="card-navy card-interactive p-7"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(24px)",
              transition: `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s`,
            }}
          >
            <div className="icon-box mb-5">
              <Icon name={v.icon} size={22} />
            </div>
            <h3 className="text-white font-bold text-lg mb-2">{v.title}</h3>
            <p className="text-white/55 text-sm leading-relaxed">{v.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

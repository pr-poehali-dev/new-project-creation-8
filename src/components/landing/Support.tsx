import Icon from "@/components/ui/icon";
import { useInView } from "@/hooks/useInView";

const OPTIONS = [
  {
    icon: "Handshake",
    title: "Стать партнёром",
    text: "Поддержите проект как организация или бизнес. Ваше имя войдёт в историю памятника.",
    btn: "Стать партнёром",
  },
  {
    icon: "Send",
    title: "Оставить историю",
    text: "Поделитесь своей историей предпринимательства — она может стать частью проекта.",
    btn: "Оставить историю",
  },
  {
    icon: "HandCoins",
    title: "Поддержать проект",
    text: "Внесите вклад в создание памятника и капсулы времени для будущих поколений.",
    btn: "Поддержать",
  },
];

export default function Support() {
  const { ref, inView } = useInView();

  return (
    <section ref={ref} id="support" className="section-dark py-24 px-6">
      <div className="bg-watermark hidden md:block">20</div>
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="heading-display text-white text-4xl md:text-6xl mb-4">Поддержать проект</h2>
          <p className="text-white/55 text-lg">Стать частью истории Приморья</p>
        </div>

        <div className="card-navy p-8 md:p-12">
          {/* divider */}
          <div className="flex items-center gap-4 mb-12">
            <div className="flex-1 h-px bg-white/10" />
            <Icon name="Diamond" size={14} className="text-brand-gold" />
            <div className="flex-1 h-px bg-white/10" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {OPTIONS.map((o, i) => (
              <div
                key={o.title}
                className="text-center flex flex-col items-center"
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? "translateY(0)" : "translateY(24px)",
                  transition: `opacity 0.6s ease ${i * 0.12}s, transform 0.6s ease ${i * 0.12}s`,
                }}
              >
                <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-5 border border-brand-gold/30" style={{ background: "rgba(216,165,68,0.1)" }}>
                  <Icon name={o.icon} size={28} className="text-brand-gold" />
                </div>
                <h3 className="text-white font-bold text-xl mb-3">{o.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed mb-7 max-w-xs">{o.text}</p>
                <button className="btn-dark mt-auto w-full px-6 py-3.5 rounded-md text-sm uppercase tracking-wide text-brand-gold border-brand-gold/30">
                  {o.btn}
                </button>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-4 mt-12">
            <div className="flex-1 h-px bg-white/10" />
            <Icon name="Diamond" size={14} className="text-brand-gold" />
            <div className="flex-1 h-px bg-white/10" />
          </div>
        </div>
      </div>
    </section>
  );
}

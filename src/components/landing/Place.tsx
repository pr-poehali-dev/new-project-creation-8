import Icon from "@/components/ui/icon";
import { useInView } from "@/hooks/useInView";

const CITY_IMG = "https://cdn.poehali.dev/projects/9e6ab7cb-02b9-4bdf-903b-219f3b05fb8d/files/8ae1a0b1-7e5b-416f-93fe-0ba14d0dfa27.jpg";

const POINTS = [
  { icon: "MapPin", text: "Площадь Адмирала Фокина, Владивосток" },
  { icon: "Navigation", text: "Приморский край, Дальний Восток России" },
  { icon: "QrCode", text: "QR-код на объекте ведёт на эту страницу" },
];

export default function Place() {
  const { ref, inView } = useInView();

  return (
    <section ref={ref} id="place" className="section-dark py-24 px-6">
      <div className="bg-watermark hidden md:block">20</div>
      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        {/* LEFT */}
        <div className={inView ? "animate-fade-up" : "opacity-0"}>
          <p className="section-label mb-3">07 — Место в городе</p>
          <div className="w-16 h-0.5 bg-brand-gold/40 mb-8" />
          <h2 className="heading-display text-white text-4xl md:text-5xl mb-7">Место в городской памяти</h2>
          <p className="text-white/70 text-lg leading-relaxed mb-5">
            Площадь Адмирала Фокина — центральная пешеходная зона Владивостока. Это место встреч горожан, туристов и деловых людей.
          </p>
          <p className="text-white/55 leading-relaxed mb-9">
            Памятный знак органично вписывается в городскую среду и становится точкой притяжения для всех, кто ценит историю предпринимательства Приморья.
          </p>

          <div className="space-y-5">
            {POINTS.map((p) => (
              <div key={p.text} className="flex items-center gap-4">
                <div className="icon-box">
                  <Icon name={p.icon} size={20} />
                </div>
                <span className="text-white/80">{p.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT image */}
        <div className={inView ? "animate-fade-right delay-200" : "opacity-0"}>
          <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <img src={CITY_IMG} alt="Площадь Адмирала Фокина" className="w-full h-[480px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-7">
              <div className="flex items-center gap-2 text-white font-bold text-lg mb-1">
                <Icon name="MapPin" size={20} className="text-brand-gold" />
                Площадь Адмирала Фокина
              </div>
              <p className="text-white/60 text-sm pl-7">Владивосток</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

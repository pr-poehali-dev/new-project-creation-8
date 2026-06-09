import Icon from "@/components/ui/icon";
import AccordionItem from "./AccordionItem";
import { useInView } from "@/hooks/useInView";

const CEREMONY_IMG = "https://cdn.poehali.dev/projects/9e6ab7cb-02b9-4bdf-903b-219f3b05fb8d/bucket/255a22ba-01ab-442f-996b-5f8c2e3e8888.jpg";

const TAGS = [
  { icon: "Landmark", text: "Общественный символ" },
  { icon: "Building2", text: "Деловое сообщество" },
  { icon: "BadgeCheck", text: "Официальный статус" },
];

export default function About() {
  const { ref, inView } = useInView();

  return (
    <section ref={ref} id="about" className="section-dark py-16 sm:py-24 px-5 sm:px-6">
      <div className="bg-watermark hidden md:block">20</div>
      <div className="max-w-7xl mx-auto relative z-10">
        <p className="section-label mb-3">02 — О проекте</p>
        <div className="w-16 h-0.5 bg-brand-gold/40 mb-8 sm:mb-12" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
          {/* LEFT */}
          <div className={inView ? "animate-fade-up" : "opacity-0"}>
            <h2 className="heading-display text-white text-3xl sm:text-4xl md:text-5xl mb-6 sm:mb-7">О проекте</h2>
            <p className="text-white/75 text-base sm:text-lg leading-relaxed mb-5">
              Этот памятник посвящён предпринимателям — тем, кто созидает, берёт ответственность, объединяет людей и формирует экономику региона не лозунгами, а ежедневным трудом.
            </p>
            <p className="text-white/55 text-base leading-relaxed mb-8">
              Проект возник как общественный символ уважения к предпринимательской инициативе и как точка связи между сегодняшним деловым сообществом и будущими поколениями предпринимателей Приморья.
            </p>

            <div className="flex flex-wrap gap-x-7 gap-y-3 mb-10">
              {TAGS.map((t) => (
                <div key={t.text} className="flex items-center gap-2 text-white/70 text-sm">
                  <Icon name={t.icon} size={18} className="text-brand-gold" />
                  {t.text}
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <AccordionItem icon="Sparkles" title="Созидание и ответственность" subtitle="Предпринимательство — это не только про прибыль. Это про смыслы." defaultOpen>
                <p>Есть вещи, которые нельзя измерить цифрами, но именно они определяют развитие. Предпринимательство — одна из них. Это не только про прибыль. Не только про бизнес. И даже не только про экономику.</p>
                <p>Это про созидание — способность создавать то, чего ещё не существует. Про ответственность — готовность отвечать за решения и их последствия.</p>
                <p className="text-brand-gold italic border-l-2 border-brand-gold pl-4">«Мы не просто ведём бизнес — мы создаём регион.»</p>
              </AccordionItem>

              <AccordionItem icon="Globe" title="Приморье как территория предпринимателей" subtitle="165 лет истории — это история людей, которые строили регион.">
                <p>Приморье — это не просто география. Это территория, которая создавалась людьми. На протяжении 165 лет сюда приходили те, кто не ждал готовых условий, не искал простых решений, не боялся неопределённости.</p>
                <p>Они строили порты, предприятия, торговлю, международные связи. Открытый Владивосток стал точкой, где встречались Россия, Азия, Европа, Америка.</p>
              </AccordionItem>

              <AccordionItem icon="UserRound" title="Большая идея — признание роли">
                <p>Памятник предпринимателям — это не просто объект в городской среде. Это высказывание. Оно говорит: здесь ценят тех, кто создаёт, рискует и строит.</p>
                <p>За 20 лет «ОПОРА РОССИИ» в Приморье стала местом объединения предпринимателей, защиты их интересов, взаимодействия с властью.</p>
                <p className="text-brand-gold italic border-l-2 border-brand-gold pl-4">«Мы несём ответственность не только за свои компании, но и за среду, в которой будут жить следующие поколения.»</p>
              </AccordionItem>
            </div>
          </div>

          {/* RIGHT */}
          <div className={inView ? "animate-fade-right delay-200" : "opacity-0"}>
            <div className="rounded-2xl overflow-hidden border border-white/10 mb-6">
              <img src={CEREMONY_IMG} alt="Торжественная церемония закладки камня" className="w-full h-72 object-cover" />
              <div className="bg-[#0e2350] px-5 py-4">
                <p className="text-brand-gold text-xs tracking-widest uppercase font-semibold">
                  Торжественная церемония закладки камня
                </p>
              </div>
            </div>

            <div className="card-navy p-7">
              <p className="text-brand-gold text-xs tracking-widest uppercase font-semibold mb-3">
                20 лет «ОПОРЫ РОССИИ» · Приморский край
              </p>
              <p className="text-white/70 leading-relaxed">
                За 20 лет «ОПОРА» стала местом объединения предпринимателей, защиты интересов, взаимодействия. Сегодня предприниматели — это архитекторы будущего региона.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
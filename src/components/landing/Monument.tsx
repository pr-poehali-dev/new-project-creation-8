import Icon from "@/components/ui/icon";
import AccordionItem from "./AccordionItem";
import { useInView } from "@/hooks/useInView";

const PLAQUE = "https://cdn.poehali.dev/projects/9e6ab7cb-02b9-4bdf-903b-219f3b05fb8d/files/a2e3a144-1eff-490f-8d39-5f733eec7358.jpg";

const FEATURES = [
  { icon: "Info", title: "Смысл", text: "Символ предпринимательской инициативы, созидания и ответственности за будущее региона." },
  { icon: "Square", title: "Форма", text: "Сдержанная, сильная и долговечная — точка опоры, считываемая без лишних слов." },
  { icon: "Gem", title: "Городской контекст", text: "Органичная часть городской среды, место памяти и точка притяжения делового сообщества." },
];

export default function Monument() {
  const { ref, inView } = useInView();

  return (
    <section ref={ref} id="monument" className="section-dark py-24 px-6">
      <div className="bg-watermark hidden md:block">20</div>
      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
        {/* LEFT image */}
        <div className={`flex justify-center ${inView ? "animate-fade-up" : "opacity-0"}`}>
          <div className="relative">
            <div className="absolute inset-0 rounded-2xl blur-3xl opacity-25" style={{ background: "radial-gradient(circle,#d8a544,transparent 70%)" }} />
            <img src={PLAQUE} alt="Памятный знак" className="relative rounded-2xl border border-brand-gold/30 shadow-2xl max-w-[440px] w-full" />
          </div>
        </div>

        {/* RIGHT */}
        <div className={inView ? "animate-fade-right delay-200" : "opacity-0"}>
          <p className="section-label mb-3">05 — Памятный знак</p>
          <div className="w-16 h-0.5 bg-brand-gold/40 mb-8" />
          <h2 className="heading-display text-white text-4xl md:text-5xl mb-6">Памятный знак</h2>
          <p className="text-white/70 text-lg leading-relaxed mb-4">
            Это не декоративный объект, а символ предпринимательской инициативы, созидания и ответственности за будущее региона.
          </p>
          <p className="text-white/55 leading-relaxed mb-8">
            В материале, форме и месте установки знак должен считываться как точка опоры — сдержанная, сильная и долговечная.
          </p>

          <div className="space-y-4 mb-10">
            <AccordionItem icon="History" title="165 лет истории предпринимательства" subtitle="Приморье создавалось людьми, которые не ждали готовых условий.">
              <p>История Приморского края — это история предпринимателей. На протяжении 165 лет купцами и промышленниками из разных стран мира развивался наш край. Открытый порт Владивосток был международной площадкой для торговли в регионе.</p>
              <p>Памятник — это высказывание: этот регион создан людьми, которые действовали. Образ создателя, человека в движении, который строит.</p>
            </AccordionItem>

            <AccordionItem icon="QrCode" title="Цифровой слой — QR и музей истории" subtitle="QR-код рядом с памятником откроет историю края на 5 языках.">
              <p>Рядом с памятником — знак с QR-кодом. Попадая туда, турист и житель города сможет узнать про то, как развивался край предпринимателями.</p>
              <p>Доступно на основных языках мира: русский, английский, китайский, корейский, японский. Цифровой музей истории предпринимательства Приморья.</p>
            </AccordionItem>

            <AccordionItem icon="Trophy" title="Конкурс и реализация" subtitle="Конкурс на эскиз, финансирование от предпринимательского сообщества.">
              <p>Конкурс на эскиз и создание памятника проводится по согласованию с инициаторами проекта, администрацией города и края. Финансирование — методом пожертвований от предпринимательского сообщества.</p>
              <p className="text-brand-gold italic border-l-2 border-brand-gold pl-4">«Предприниматель — это человек, который создаёт среду, в которой могут жить и развиваться другие.»</p>
            </AccordionItem>
          </div>

          <div className="space-y-5">
            {FEATURES.map((f) => (
              <div key={f.title} className="flex items-start gap-4">
                <div className="icon-box">
                  <Icon name={f.icon} size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">{f.title}</h4>
                  <p className="text-white/50 text-sm leading-relaxed">{f.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

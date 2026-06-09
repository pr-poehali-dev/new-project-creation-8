import { useState } from "react";
import Icon from "@/components/ui/icon";
import { useInView } from "@/hooks/useInView";

const FAQ = [
  {
    q: "Кто инициировал проект?",
    a: "Проект инициирован Приморским краевым отделением «ОПОРЫ РОССИИ» в честь 20-летия организации как символ уважения к предпринимателям региона.",
  },
  {
    q: "Где будет установлен памятник?",
    a: "Памятник и закладной камень установлены на площади Адмирала Фокина во Владивостоке — центральной пешеходной зоне города.",
  },
  {
    q: "Когда состоится церемония?",
    a: "Торжественная церемония закладки памятного камня и капсулы времени состоится 19 июня 2026 года.",
  },
  {
    q: "Как можно поддержать проект?",
    a: "Вы можете стать партнёром, оставить свою историю предпринимательства или внести вклад в создание памятника. Подробнее — в разделе «Поддержать проект».",
  },
  {
    q: "Когда будет вскрыта капсула времени?",
    a: "Капсула времени будет вскрыта через 20 лет после закладки — в 2046 году. Внутри — послание нынешних предпринимателей будущим поколениям.",
  },
];

export default function Faq() {
  const { ref, inView } = useInView();
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section ref={ref} id="faq" className="section-dark py-16 sm:py-24 px-5 sm:px-6">
      <div className="bg-watermark hidden md:block">20</div>
      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14">
        {/* LEFT */}
        <div className={inView ? "animate-fade-up" : "opacity-0"}>
          <p className="section-label mb-3">10 — Часто задаваемые вопросы</p>
          <div className="w-16 h-0.5 bg-brand-gold/40 mb-6 sm:mb-8" />
          <h2 className="heading-display text-white text-3xl sm:text-4xl md:text-5xl mb-5">Часто задаваемые вопросы</h2>
          <p className="text-white/50 text-base sm:text-lg">Ответы на основные вопросы о проекте.</p>
        </div>

        {/* RIGHT */}
        <div className={inView ? "animate-fade-right delay-200" : "opacity-0"}>
          {FAQ.map((item, i) => (
            <div key={item.q} className="border-b border-white/10">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 py-6 text-left"
              >
                <span className="text-white font-semibold text-lg">{item.q}</span>
                <Icon
                  name="ChevronDown"
                  size={20}
                  className={`text-brand-gold flex-shrink-0 transition-transform duration-300 ${open === i ? "rotate-180" : ""}`}
                />
              </button>
              <div className="grid transition-all duration-300 ease-in-out" style={{ gridTemplateRows: open === i ? "1fr" : "0fr" }}>
                <div className="overflow-hidden">
                  <p className="text-white/60 leading-relaxed pb-6 pr-8">{item.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
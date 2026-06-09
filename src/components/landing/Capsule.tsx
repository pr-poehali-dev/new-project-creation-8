import Icon from "@/components/ui/icon";
import AccordionItem from "./AccordionItem";
import { useInView } from "@/hooks/useInView";

const CAPSULE_IMG = "https://cdn.poehali.dev/projects/9e6ab7cb-02b9-4bdf-903b-219f3b05fb8d/files/084a0bf7-eb52-41fa-824a-8da6c174d71f.jpg";

const CONSTRUCTION = [
  { n: "01", title: "Бетонный ящик", text: "Устроен в грунте с мини-фундаментом для долгосрочного хранения." },
  { n: "02", title: "Нержавеющий контейнер", text: "Внутри — герметичный контейнер из нержавеющей стали с посланием предпринимателей." },
  { n: "03", title: "Каменная плита", text: "Сверху — натуральный камень с латунной табличкой, датами закладки (2026) и вскрытия (2046)." },
  { n: "04", title: "Благоустройство", text: "Вокруг — облагороженная территория, органично вписанная в городскую среду площади Фокина." },
];

const QUICK = [
  { icon: "Archive", label: "Архив" },
  { icon: "Clock", label: "Время" },
  { icon: "ScrollText", label: "Послание" },
];

export default function Capsule() {
  const { ref, inView } = useInView();

  return (
    <section ref={ref} id="capsule" className="section-dark py-24 px-6">
      <div className="bg-watermark hidden md:block">20</div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-14">
          <p className="section-label mb-4">06 — Капсула времени</p>
          <h2 className="heading-display text-white text-4xl md:text-6xl mb-5">Капсула времени</h2>
          <p className="text-white/55 text-lg max-w-2xl mx-auto leading-relaxed">
            Послание тем, кто будет строить предпринимательскую среду Приморья через 20 лет.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          {/* LEFT image */}
          <div className={inView ? "animate-fade-up" : "opacity-0"}>
            <div className="relative">
              <div className="absolute inset-0 rounded-2xl blur-3xl opacity-30" style={{ background: "radial-gradient(circle,#d8a544,transparent 70%)" }} />
              <img src={CAPSULE_IMG} alt="Капсула времени" className="relative rounded-2xl border border-brand-gold/30 shadow-2xl w-full" />
            </div>
            <button className="btn-outline-gold w-full mt-7 px-6 py-4 rounded-md text-sm font-bold flex items-center justify-center gap-3">
              <Icon name="Clock" size={18} />
              Открыть через 20 лет · 2046 год
            </button>
          </div>

          {/* RIGHT accordions */}
          <div className={inView ? "animate-fade-right delay-200" : "opacity-0"}>
            <div className="space-y-4">
              <AccordionItem icon="Package" title="Конструкция капсулы" subtitle="Бетонный ящик, нержавеющий контейнер, каменная плита." defaultOpen>
                <div className="space-y-3 not-prose">
                  {CONSTRUCTION.map((c) => (
                    <div key={c.n} className="flex items-start gap-4 bg-white/[0.03] rounded-xl p-4 border border-white/5">
                      <span className="text-brand-gold font-bold text-sm border border-brand-gold/40 rounded-md w-9 h-9 flex items-center justify-center flex-shrink-0">{c.n}</span>
                      <div>
                        <h4 className="text-white font-bold text-sm mb-1">{c.title}</h4>
                        <p className="text-white/50 text-sm leading-relaxed">{c.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </AccordionItem>

              <AccordionItem icon="ScrollText" title="Что будет внутри капсулы" subtitle="Послание предпринимателей будущим поколениям — слова, идеи, ценности.">
                <p>19 июня 2026 года в честь 20-летия Приморского отделения «ОПОРЫ РОССИИ» будет заложена капсула времени. В ней будет послание нынешних предпринимателей будущему поколению предпринимателей Приморского края.</p>
                <p>Это символ преемственности, веры в развитие региона и уважения к людям, которые продолжают создавать будущее. Послание будет изъято из капсулы через 20 лет — в 2046 году.</p>
                <p className="text-brand-gold italic border-l-2 border-brand-gold pl-4">«Мы пишем это послание не для истории — мы пишем его для вас.»</p>
              </AccordionItem>

              <AccordionItem icon="MapPin" title="Закладной камень рядом" subtitle="Натуральный камень с латунной табличкой — символ будущего памятника.">
                <p>Рядом с капсулой — натуральный камень размером до 1 м³ с латунной табличкой, где будет текст об установке в будущем памятника предпринимателям Приморского края. Камень органично вписан в городскую среду площади Адмирала Фокина.</p>
              </AccordionItem>
            </div>

            <div className="flex items-center gap-10 mt-8 pt-7 border-t border-white/10">
              {QUICK.map((q) => (
                <div key={q.label} className="flex flex-col items-center gap-2 text-white/50">
                  <Icon name={q.icon} size={22} className="text-brand-gold" />
                  <span className="text-xs tracking-widest uppercase">{q.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

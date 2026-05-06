import { useEffect, useRef, useState } from "react";
import Icon from "@/components/ui/icon";

const FAQS = [
  {
    q: "У меня нет опыта в IT — подойдёт?",
    a: "Да, и это самый частый случай в наших группах. Программа специально построена для людей без технического фона. Объясняем человеческим языком, без кода и терминологии. Главное требование — желание применять.",
    icon: "HelpCircle",
  },
  {
    q: "Я уже пробовал нейросети, но не понял, как применять.",
    a: "Именно для этого существует живая школа. В интернете полно видео и курсов, но они не учитывают твои задачи. Здесь Сергей Черников и ассистенты разбирают применение на твоих реальных кейсах — лично, в зале, с обратной связью.",
    icon: "Lightbulb",
  },
  {
    q: "Это теория или практика?",
    a: "Практика — с первого занятия. Теоретической части минимум, только контекст. Уже на первом уроке ты работаешь с инструментами руками. Каждое занятие заканчивается конкретным результатом, который можно применить сразу.",
    icon: "Zap",
  },
  {
    q: "Подойдёт ли для бизнеса?",
    a: "Да, школа создана с фокусом на прикладное применение в рабочих и бизнес-задачах. Среди участников — предприниматели, руководители и специалисты. Разбираем кейсы из маркетинга, продаж, управления, HR и операционки.",
    icon: "Briefcase",
  },
  {
    q: "Сколько уроков и как долго?",
    a: "Программа — 24 урока и 72 часа практики. В потоке максимум 30 участников, в зале работают Сергей Черников и 2 ассистента. Встречаемся раз в неделю — это удобно, не выбивает из рабочего ритма.",
    icon: "Users",
  },
  {
    q: "Как записаться?",
    a: "Оставь заявку на сайте или напиши напрямую в Telegram. Мы расскажем о ближайшем потоке, ответим на вопросы и зафиксируем твоё место. Набор ограничен — лучше не откладывать.",
    icon: "MessageCircle",
  },
];

export default function FaqSection() {
  const [inView, setInView] = useState(false);
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.07 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const toggle = (i: number) => setOpenIdx(prev => prev === i ? null : i);

  return (
    <section ref={ref} id="faq" className="relative py-24 px-6 overflow-hidden" style={{ background: "#f8fafc" }}>

      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className={`text-center mb-14 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold mb-5"
            style={{ background: "var(--teal-pale)", color: "var(--teal)" }}
          >
            <Icon name="MessageCircleQuestion" size={14} style={{ color: "var(--teal)" }} />
            Частые вопросы
          </div>
          <h2 className="heading-display text-[#1e2330] text-3xl md:text-4xl lg:text-[42px] mb-4">
            Возражения и{" "}
            <span className="gradient-text-teal">ответы</span>
          </h2>
          <p className="text-[#6b7280] text-lg max-w-md mx-auto">
            Снимем сомнения до того, как ты примешь решение.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">

          {/* Left: photo + reassurance */}
          <div
            className={`lg:col-span-2 transition-all duration-700 ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
          >
            <div className="relative rounded-2xl overflow-hidden mb-5">
              <img
                src="https://cdn.poehali.dev/projects/9e6ab7cb-02b9-4bdf-903b-219f3b05fb8d/files/db79948e-ab80-4fd8-ad15-1ccefa531340.jpg"
                alt="Диалог на занятии"
                className="w-full h-64 object-cover"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(13,122,122,0.5) 0%, transparent 50%)" }}
              />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white text-sm font-medium">
                  Задаём вопросы и получаем ответы — прямо на занятии
                </p>
              </div>
            </div>

            {/* Reassurance cards */}
            <div className="flex flex-col gap-3">
              {[
                { icon: "UserCheck", text: "Без опыта в IT — норм" },
                { icon: "HandshakeIcon", text: "Тренер отвечает на вопросы лично" },
                { icon: "Shield", text: "Маленькая группа — не потеряешься" },
              ].map(item => (
                <div
                  key={item.text}
                  className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 border border-[#e8edf3]"
                  style={{ boxShadow: "0 1px 6px rgba(30,35,48,0.05)" }}
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: "var(--teal-pale)" }}
                  >
                    <Icon name={item.icon} size={14} style={{ color: "var(--teal)" }} />
                  </div>
                  <span className="text-sm font-medium text-[#1e2330]">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: accordion */}
          <div
            className={`lg:col-span-3 flex flex-col gap-3 transition-all duration-700 delay-100 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
          >
            {FAQS.map((faq, i) => {
              const isOpen = openIdx === i;
              return (
                <div
                  key={i}
                  className="bg-white rounded-2xl border overflow-hidden transition-all duration-200"
                  style={{
                    borderColor: isOpen ? "var(--teal)" : "#e8edf3",
                    boxShadow: isOpen ? "0 4px 20px rgba(13,122,122,0.1)" : "0 1px 6px rgba(30,35,48,0.04)",
                  }}
                >
                  <button
                    className="w-full flex items-center gap-4 px-5 py-4 text-left"
                    onClick={() => toggle(i)}
                  >
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-200"
                      style={{
                        background: isOpen ? "var(--teal)" : "var(--teal-pale)",
                      }}
                    >
                      <Icon
                        name={faq.icon}
                        size={15}
                        style={{ color: isOpen ? "#fff" : "var(--teal)" }}
                      />
                    </div>
                    <span
                      className="font-semibold text-sm flex-1 leading-snug"
                      style={{ color: isOpen ? "var(--teal)" : "#1e2330" }}
                    >
                      {faq.q}
                    </span>
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-200"
                      style={{
                        background: isOpen ? "var(--teal)" : "#f3f4f6",
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      }}
                    >
                      <Icon
                        name="ChevronDown"
                        size={14}
                        style={{ color: isOpen ? "#fff" : "#6b7280" }}
                      />
                    </div>
                  </button>

                  {/* Answer */}
                  <div
                    className="overflow-hidden transition-all duration-300"
                    style={{ maxHeight: isOpen ? 300 : 0 }}
                  >
                    <div className="px-5 pb-5 pl-[68px]">
                      <p className="text-[#4b5563] text-sm leading-relaxed">{faq.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Still have questions */}
            <div
              className="rounded-2xl p-5 flex items-center gap-4 mt-1"
              style={{ background: "var(--teal)", }}
            >
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                <Icon name="MessageCircle" size={18} className="text-white" />
              </div>
              <div className="flex-1">
                <p className="text-white font-semibold text-sm mb-0.5">Остались вопросы?</p>
                <p className="text-white/75 text-xs">Напишите нам в Telegram — ответим быстро.</p>
              </div>
              <a
                href="https://t.me/hakni_neiroset"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 bg-white text-sm font-bold px-4 py-2 rounded-xl transition-opacity hover:opacity-90"
                style={{ color: "var(--teal)" }}
              >
                Написать
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
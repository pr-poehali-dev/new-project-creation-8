import { useEffect, useRef, useState } from "react";
import Icon from "@/components/ui/icon";

const INCLUDES = [
  { icon: "MapPin", text: "Живые офлайн-занятия во Владивостоке" },
  { icon: "Zap", text: "Практика с первого дня — на твоих задачах" },
  { icon: "Wrench", text: "Актуальные ИИ-инструменты под твой контекст" },
  { icon: "Users", text: "Маленькая группа — максимум 12 человек" },
  { icon: "MessageCircle", text: "Поддержка тренера и понятный путь внедрения" },
  { icon: "Package", text: "Личный набор рабочих решений на выходе" },
];

export default function OfferSection() {
  const [inView, setInView] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.07 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 900);
  };

  return (
    <section
      ref={ref}
      id="offer"
      className="relative py-24 px-6 overflow-hidden"
      style={{ background: "var(--teal)" }}
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.06]"
        style={{
          backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      {/* Glow blobs */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)", transform: "translate(20%, -30%)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,0,0,0.1) 0%, transparent 70%)", transform: "translate(-20%, 30%)" }}
      />

      <div className="relative z-10 max-w-5xl mx-auto">

        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold mb-5 bg-white/15 text-white"
          >
            <Icon name="Flame" size={14} className="text-white" />
            Ближайший поток — 1 августа
          </div>
          <h2 className="heading-display text-white text-3xl md:text-4xl lg:text-[44px] mb-4">
            Забронируй место в живой{" "}
            <span style={{ opacity: 0.85 }}>школе ИИ</span>
          </h2>
          <p className="text-white/75 text-lg max-w-xl mx-auto leading-relaxed">
            Если ты понимаешь, что ИИ уже меняет рынок, но пока не встроил его в свою работу — сейчас лучшее время начать.
          </p>
        </div>

        {/* Two-column */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

          {/* Left: value */}
          <div
            className={`transition-all duration-700 delay-100 ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
          >
            {/* Includes list */}
            <p className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-4">
              Что включено в обучение
            </p>
            <div className="flex flex-col gap-3 mb-8">
              {INCLUDES.map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0 bg-white/15">
                    <Icon name={item.icon} size={14} className="text-white" />
                  </div>
                  <span className="text-white text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </div>

            {/* Seats indicator */}
            <div
              className="rounded-2xl p-5 bg-white/10 border border-white/20"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-white font-semibold text-sm">Мест в ближайшем потоке</span>
                <span className="text-white font-bold text-lg">12</span>
              </div>
              {/* Progress bar */}
              <div className="h-2 rounded-full bg-white/20 overflow-hidden mb-2">
                <div
                  className="h-full rounded-full transition-all duration-1000"
                  style={{
                    width: inView ? "67%" : "0%",
                    background: "linear-gradient(to right, rgba(255,255,255,0.9), rgba(255,255,255,0.6))",
                    transitionDelay: "0.6s",
                  }}
                />
              </div>
              <div className="flex justify-between text-xs text-white/60">
                <span>8 из 12 мест занято</span>
                <span className="text-white font-semibold">4 свободных</span>
              </div>
            </div>
          </div>

          {/* Right: form card */}
          <div
            className={`transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
          >
            <div
              className="bg-white rounded-2xl p-8"
              style={{ boxShadow: "0 24px 60px rgba(0,0,0,0.18)" }}
            >
              {!sent ? (
                <>
                  <div className="mb-6">
                    <h3 className="font-montserrat font-bold text-[#1e2330] text-xl mb-1">
                      Оставить заявку
                    </h3>
                    <p className="text-[#6b7280] text-sm">
                      После заявки с тобой свяжутся и помогут выбрать подходящий формат участия.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#374151] mb-1.5">
                        Ваше имя
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder="Как к вам обращаться?"
                        className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all duration-200 text-[#1e2330]"
                        style={{
                          borderColor: name ? "var(--teal)" : "#e8edf3",
                          background: "#f8fafc",
                        }}
                        onFocus={e => e.currentTarget.style.borderColor = "var(--teal)"}
                        onBlur={e => e.currentTarget.style.borderColor = name ? "var(--teal)" : "#e8edf3"}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#374151] mb-1.5">
                        Телефон или Telegram
                      </label>
                      <input
                        type="text"
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                        placeholder="+7 924 ... или @username"
                        className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all duration-200 text-[#1e2330]"
                        style={{
                          borderColor: phone ? "var(--teal)" : "#e8edf3",
                          background: "#f8fafc",
                        }}
                        onFocus={e => e.currentTarget.style.borderColor = "var(--teal)"}
                        onBlur={e => e.currentTarget.style.borderColor = phone ? "var(--teal)" : "#e8edf3"}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading || !name.trim() || !phone.trim()}
                      className="w-full py-3.5 rounded-xl font-bold text-sm text-white transition-all duration-200 flex items-center justify-center gap-2"
                      style={{
                        background: loading || !name.trim() || !phone.trim() ? "#b2e0e0" : "var(--teal)",
                        cursor: loading || !name.trim() || !phone.trim() ? "not-allowed" : "pointer",
                        boxShadow: !loading && name.trim() && phone.trim() ? "0 8px 24px rgba(13,122,122,0.3)" : "none",
                      }}
                    >
                      {loading ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                          Отправляем...
                        </>
                      ) : (
                        <>
                          <Icon name="Calendar" size={15} className="text-white" />
                          Забронировать место
                        </>
                      )}
                    </button>
                  </form>

                  {/* Trust row */}
                  <div className="mt-5 flex items-center gap-4 justify-center">
                    {[
                      { icon: "Lock", text: "Данные защищены" },
                      { icon: "Phone", text: "Без спама" },
                    ].map(t => (
                      <div key={t.text} className="flex items-center gap-1.5 text-[#9ca3af] text-xs">
                        <Icon name={t.icon} size={11} style={{ color: "#9ca3af" }} />
                        {t.text}
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <div className="text-center py-6">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ background: "var(--teal-pale)" }}
                  >
                    <Icon name="CheckCircle" size={32} style={{ color: "var(--teal)" }} />
                  </div>
                  <h3 className="font-bold text-[#1e2330] text-xl mb-2">Заявка принята!</h3>
                  <p className="text-[#6b7280] text-sm leading-relaxed">
                    Мы свяжемся с тобой в ближайшее время и расскажем о следующих шагах. До встречи на занятии!
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

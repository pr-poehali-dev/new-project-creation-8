import Icon from "@/components/ui/icon";

const PLAQUE = "https://cdn.poehali.dev/projects/9e6ab7cb-02b9-4bdf-903b-219f3b05fb8d/files/a2e3a144-1eff-490f-8d39-5f733eec7358.jpg";

export default function Hero() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="hero" className="relative min-h-screen hero-flag flex items-center overflow-hidden pt-24 pb-16">
      {/* decorative big year watermark */}
      <div className="bg-watermark hidden md:block">20</div>

      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* LEFT */}
        <div className="animate-fade-up">
          <p className="section-label mb-6">Приморское краевое отделение «ОПОРЫ РОССИИ»</p>
          <h1 className="heading-display text-white text-5xl md:text-6xl lg:text-7xl mb-7">
            Памятник<br />
            <span className="gradient-gold">предпринимателям</span><br />
            Приморья
          </h1>
          <p className="text-white/85 text-lg md:text-xl leading-relaxed mb-5 max-w-xl">
            Знак уважения к людям, которые создают рабочие места, развивают город и закладывают фундамент будущего региона.
          </p>
          <p className="text-white/55 text-base leading-relaxed mb-9 max-w-xl">
            На площади Адмирала Фокина заложен камень будущего памятника и капсулы времени — символа предпринимательской инициативы, созидания и ответственности за будущее Приморского края.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button onClick={() => scrollTo("support")} className="btn-gold px-8 py-4 rounded-md uppercase tracking-wide text-sm">
              Поддержать проект
            </button>
            <button onClick={() => scrollTo("monument")} className="btn-outline-gold px-8 py-4 rounded-md uppercase tracking-wide text-sm">
              Узнать о памятнике
            </button>
          </div>
        </div>

        {/* RIGHT — plaque */}
        <div className="relative animate-scale-in delay-200 flex justify-center">
          <div className="absolute inset-0 rounded-2xl blur-3xl opacity-30" style={{ background: "radial-gradient(circle,#d8a544,transparent 70%)" }} />
          <div className="relative animate-float">
            <img
              src={PLAQUE}
              alt="Памятный знак предпринимателям"
              className="rounded-2xl shadow-2xl border border-brand-gold/30 max-w-[420px] w-full"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent rounded-b-2xl p-5">
              <p className="text-brand-gold text-xs tracking-widest uppercase font-semibold">
                Площадь Адмирала Фокина · Владивосток
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* scroll hint */}
      <button
        onClick={() => scrollTo("values")}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/40 hover:text-brand-gold transition-colors"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase">Прокрутить</span>
        <Icon name="ChevronDown" size={20} className="animate-float" />
      </button>
    </section>
  );
}

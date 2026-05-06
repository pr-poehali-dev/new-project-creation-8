import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/9e6ab7cb-02b9-4bdf-903b-219f3b05fb8d/files/111d6f9a-5268-4007-9cbc-55bfc6c8ab4a.jpg";

const STATS = [
  { value: "50 000+", label: "студентов", icon: "Users" },
  { value: "120+", label: "курсов", icon: "BookOpen" },
  { value: "98%", label: "трудоустройство", icon: "Briefcase" },
  { value: "4.9★", label: "средний рейтинг", icon: "Star" },
];

interface HeroSectionProps {
  visible: boolean;
  scrollTo: (section: string) => void;
}

export default function HeroSection({ visible, scrollTo }: HeroSectionProps) {
  return (
    <section id="hero" className="relative z-10 min-h-screen flex flex-col items-center justify-center pt-20 pb-16 px-6 text-center">
      <div className={`transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full text-sm text-white/70 mb-8 animate-fade-in-up">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Более 50 000 студентов уже учатся с нами
        </div>

        <h1 className="font-montserrat font-black text-5xl md:text-7xl lg:text-8xl leading-none mb-6 animate-fade-in-up delay-100">
          <span className="text-white">Учись. Расти.</span>
          <br />
          <span className="gradient-text">Добивайся.</span>
        </h1>

        <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-in-up delay-200 leading-relaxed">
          Образовательная платформа нового поколения — живые курсы, вебинары и менторы, которые помогут тебе перейти на новый уровень
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-300">
          <button
            className="btn-gradient px-8 py-4 rounded-xl text-base font-semibold flex items-center justify-center gap-2 animate-pulse-glow"
            onClick={() => scrollTo("Курсы")}
          >
            Смотреть курсы
            <Icon name="ArrowRight" size={18} />
          </button>
          <button className="btn-outline-gradient px-8 py-4 rounded-xl text-base font-medium flex items-center justify-center gap-2">
            <Icon name="Play" size={18} />
            Как это работает
          </button>
        </div>
      </div>

      <div className="relative mt-16 max-w-4xl w-full animate-scale-in delay-400">
        <div className="absolute inset-0 bg-gradient-to-t from-[#08061a] via-transparent to-transparent z-10 rounded-2xl" />
        <img
          src={HERO_IMAGE}
          alt="Образовательная платформа"
          className="w-full rounded-2xl object-cover glow-violet"
          style={{ maxHeight: "460px", objectPosition: "center top" }}
        />
        <div className="absolute top-6 right-6 z-20 glass-card px-4 py-3 rounded-xl animate-float">
          <div className="text-xs text-white/50 mb-0.5">Завершили курс</div>
          <div className="font-bold text-white text-lg">🎓 2 340 чел</div>
        </div>
        <div className="absolute bottom-10 left-6 z-20 glass-card px-4 py-3 rounded-xl animate-float-delay">
          <div className="text-xs text-white/50 mb-0.5">Рейтинг платформы</div>
          <div className="font-bold text-white text-lg">⭐ 4.9 / 5.0</div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-3xl w-full animate-fade-in-up delay-500">
        {STATS.map((s) => (
          <div key={s.label} className="glass-card rounded-2xl p-4 text-center">
            <div className="font-montserrat font-black text-2xl md:text-3xl gradient-text">{s.value}</div>
            <div className="text-white/50 text-sm mt-1">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

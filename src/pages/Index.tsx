import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/9e6ab7cb-02b9-4bdf-903b-219f3b05fb8d/files/111d6f9a-5268-4007-9cbc-55bfc6c8ab4a.jpg";

const NAV_LINKS = ["Главная", "Курсы", "Блог", "О платформе", "Контакты"];

const COURSES = [
  {
    id: 1,
    badge: "Хит",
    badgeColor: "from-orange-500 to-pink-500",
    icon: "Code2",
    iconBg: "from-violet-600 to-cyan-500",
    title: "Веб-разработка с нуля",
    desc: "HTML, CSS, JavaScript, React — полный путь от новичка до джуна",
    level: "Начинающий",
    duration: "6 месяцев",
    lessons: "120 уроков",
    price: "4 900 ₽",
    students: "12 340",
    rating: "4.9",
  },
  {
    id: 2,
    badge: "Новинка",
    badgeColor: "from-violet-600 to-pink-500",
    icon: "BrainCircuit",
    iconBg: "from-pink-600 to-violet-600",
    title: "Искусственный интеллект",
    desc: "Машинное обучение, нейросети и работа с LLM на практике",
    level: "Средний",
    duration: "4 месяца",
    lessons: "85 уроков",
    price: "6 900 ₽",
    students: "8 120",
    rating: "4.8",
  },
  {
    id: 3,
    badge: "Популярный",
    badgeColor: "from-cyan-500 to-violet-600",
    icon: "TrendingUp",
    iconBg: "from-cyan-500 to-blue-600",
    title: "Digital-маркетинг",
    desc: "SEO, контекстная реклама, SMM и аналитика — всё в одном курсе",
    level: "Начинающий",
    duration: "3 месяца",
    lessons: "64 урока",
    price: "3 500 ₽",
    students: "21 800",
    rating: "4.7",
  },
  {
    id: 4,
    badge: "",
    badgeColor: "",
    icon: "Figma",
    iconBg: "from-orange-500 to-pink-500",
    title: "UI/UX дизайн",
    desc: "Figma, прототипирование, пользовательский опыт и портфолио",
    level: "Начинающий",
    duration: "5 месяцев",
    lessons: "96 уроков",
    price: "5 400 ₽",
    students: "9 640",
    rating: "4.9",
  },
  {
    id: 5,
    badge: "",
    badgeColor: "",
    icon: "Database",
    iconBg: "from-green-500 to-cyan-500",
    title: "Data Science",
    desc: "Python, pandas, визуализация данных и статистический анализ",
    level: "Средний",
    duration: "5 месяцев",
    lessons: "102 урока",
    price: "7 200 ₽",
    students: "6 380",
    rating: "4.8",
  },
  {
    id: 6,
    badge: "",
    badgeColor: "",
    icon: "Smartphone",
    iconBg: "from-violet-500 to-blue-500",
    title: "Мобильная разработка",
    desc: "React Native и создание кросс-платформенных приложений",
    level: "Средний",
    duration: "4 месяца",
    lessons: "78 уроков",
    price: "5 900 ₽",
    students: "7 210",
    rating: "4.7",
  },
];

const BLOG_POSTS = [
  {
    id: 1,
    tag: "Технологии",
    tagColor: "text-violet-400 bg-violet-400/10",
    title: "Как нейросети меняют подход к онлайн-обучению в 2024",
    desc: "Разбираем, как AI-персонализация помогает учиться быстрее и эффективнее",
    date: "15 апреля",
    readTime: "7 мин",
    emoji: "🤖",
  },
  {
    id: 2,
    tag: "Карьера",
    tagColor: "text-pink-400 bg-pink-400/10",
    title: "5 навыков, которые нужны работодателям прямо сейчас",
    desc: "Аналитика рынка труда: что учить, чтобы получить оффер мечты в IT",
    date: "10 апреля",
    readTime: "5 мин",
    emoji: "💼",
  },
  {
    id: 3,
    tag: "Советы",
    tagColor: "text-cyan-400 bg-cyan-400/10",
    title: "Как совмещать обучение с работой: 10 проверенных техник",
    desc: "Практические методы тайм-менеджмента от наших студентов",
    date: "5 апреля",
    readTime: "6 мин",
    emoji: "⚡",
  },
];

const STATS = [
  { value: "50 000+", label: "студентов", icon: "Users" },
  { value: "120+", label: "курсов", icon: "BookOpen" },
  { value: "98%", label: "трудоустройство", icon: "Briefcase" },
  { value: "4.9★", label: "средний рейтинг", icon: "Star" },
];

const TEAM = [
  { name: "Анна Соколова", role: "Основатель & CEO", emoji: "👩‍💼" },
  { name: "Дмитрий Иванов", role: "Главный методолог", emoji: "👨‍🏫" },
  { name: "Мария Петрова", role: "Lead Developer", emoji: "👩‍💻" },
  { name: "Алексей Кузнецов", role: "Директор по продукту", emoji: "👨‍🚀" },
];

export default function Index() {
  const [activeSection, setActiveSection] = useState("Главная");
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const scrollTo = (section: string) => {
    setActiveSection(section);
    setMenuOpen(false);
    const map: Record<string, string> = {
      "Главная": "hero",
      "Курсы": "courses",
      "Блог": "blog",
      "О платформе": "about",
      "Контакты": "contacts",
    };
    const el = document.getElementById(map[section]);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#08061a] font-golos overflow-x-hidden">

      {/* Background blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="blob-1 absolute w-[600px] h-[600px] -top-40 -left-40 opacity-60 animate-float" />
        <div className="blob-2 absolute w-[500px] h-[500px] top-1/3 -right-20 opacity-50 animate-float-delay" />
        <div className="blob-3 absolute w-[400px] h-[400px] bottom-20 left-1/3 opacity-40 animate-float" />
      </div>

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4"
        style={{ background: "rgba(8,6,26,0.85)", backdropFilter: "blur(24px)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg btn-gradient flex items-center justify-center">
            <Icon name="Zap" size={16} className="text-white" />
          </div>
          <span className="font-montserrat font-black text-xl text-white tracking-tight">Learn<span className="gradient-text">Flow</span></span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(link => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className={`nav-link text-sm font-medium transition-colors ${activeSection === link ? "text-violet-400 active" : "text-white/60 hover:text-white"}`}>
              {link}
            </button>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button className="btn-outline-gradient text-sm px-4 py-2 rounded-lg font-medium">Войти</button>
          <button className="btn-gradient text-sm px-5 py-2 rounded-lg font-semibold">Начать бесплатно</button>
        </div>

        <button className="md:hidden text-white/70 hover:text-white" onClick={() => setMenuOpen(!menuOpen)}>
          <Icon name={menuOpen ? "X" : "Menu"} size={22} />
        </button>
      </nav>

      {menuOpen && (
        <div className="fixed top-16 left-0 right-0 z-40 glass-card mx-4 mt-2 rounded-2xl p-6 animate-slide-down">
          {NAV_LINKS.map(link => (
            <button key={link} onClick={() => scrollTo(link)}
              className="block w-full text-left py-3 text-white/80 hover:text-white font-medium border-b border-white/5 last:border-0">
              {link}
            </button>
          ))}
          <div className="flex gap-3 mt-4">
            <button className="btn-outline-gradient flex-1 py-2.5 rounded-lg text-sm font-medium">Войти</button>
            <button className="btn-gradient flex-1 py-2.5 rounded-lg text-sm font-semibold">Начать</button>
          </div>
        </div>
      )}

      {/* HERO */}
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
            <button className="btn-gradient px-8 py-4 rounded-xl text-base font-semibold flex items-center justify-center gap-2 animate-pulse-glow"
              onClick={() => scrollTo("Курсы")}>
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

      {/* COURSES */}
      <section id="courses" className="relative z-10 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium bg-violet-600/20 text-violet-400 mb-4">
              <Icon name="BookOpen" size={14} />
              Все курсы
            </div>
            <h2 className="font-montserrat font-black text-4xl md:text-5xl text-white mb-4">
              Найди свой путь к <span className="gradient-text">успеху</span>
            </h2>
            <p className="text-white/50 text-lg max-w-xl mx-auto">
              Курсы от практикующих экспертов с гарантией трудоустройства
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COURSES.map((course, i) => (
              <div
                key={course.id}
                className="glass-card course-card gradient-border rounded-2xl overflow-hidden cursor-pointer"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className={`relative h-32 bg-gradient-to-br ${course.iconBg} flex items-center justify-center`}>
                  <Icon name={course.icon} size={48} className="text-white/90" />
                  {course.badge && (
                    <span className={`absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-full text-white bg-gradient-to-r ${course.badgeColor}`}>
                      {course.badge}
                    </span>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="font-montserrat font-bold text-lg text-white mb-2">{course.title}</h3>
                  <p className="text-white/50 text-sm mb-4 leading-relaxed">{course.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {[course.level, course.duration, course.lessons].map(tag => (
                      <span key={tag} className="text-xs px-2.5 py-1 rounded-lg bg-white/5 text-white/60">{tag}</span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-white/5">
                    <div>
                      <div className="text-xs text-white/40">{course.students} студентов</div>
                      <div className="text-xl font-montserrat font-black text-white">{course.price}</div>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-400 text-sm">★</span>
                      <span className="text-white font-semibold text-sm">{course.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="btn-gradient px-10 py-4 rounded-xl font-semibold text-base">
              Все 120 курсов →
            </button>
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section id="blog" className="relative z-10 py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium bg-pink-600/20 text-pink-400 mb-4">
              <Icon name="Rss" size={14} />
              Блог
            </div>
            <h2 className="font-montserrat font-black text-4xl md:text-5xl text-white mb-4">
              Полезные <span className="gradient-text-warm">статьи</span>
            </h2>
            <p className="text-white/50 text-lg">Экспертные материалы о карьере, технологиях и обучении</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BLOG_POSTS.map((post) => (
              <div key={post.id} className="glass-card gradient-border rounded-2xl p-6 cursor-pointer">
                <div className="text-4xl mb-4">{post.emoji}</div>
                <span className={`text-xs font-semibold px-3 py-1 rounded-full ${post.tagColor} mb-3 inline-block`}>
                  {post.tag}
                </span>
                <h3 className="font-montserrat font-bold text-white text-base mb-2 leading-snug">{post.title}</h3>
                <p className="text-white/50 text-sm mb-4 leading-relaxed">{post.desc}</p>
                <div className="flex items-center gap-3 text-xs text-white/30 pt-3 border-t border-white/5">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime} чтения</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <button className="btn-outline-gradient px-8 py-3.5 rounded-xl font-medium">
              Все статьи блога
            </button>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative z-10 py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium bg-cyan-600/20 text-cyan-400 mb-6">
                <Icon name="Info" size={14} />
                О платформе
              </div>
              <h2 className="font-montserrat font-black text-4xl md:text-5xl text-white mb-6 leading-tight">
                Мы делаем обучение <span className="gradient-text">доступным</span> каждому
              </h2>
              <p className="text-white/60 text-base leading-relaxed mb-6">
                LearnFlow — это место, где сложное становится простым. Мы создаём курсы с заботой о результате: каждый студент получает живую поддержку, ментора и уверенность в завтрашнем дне.
              </p>
              <p className="text-white/60 text-base leading-relaxed mb-8">
                Основана в 2021 году, уже помогла 50 000+ студентов сменить профессию, вырасти в карьере и воплотить идеи в жизнь.
              </p>
              <div className="flex gap-4">
                <button className="btn-gradient px-6 py-3 rounded-xl font-semibold text-sm">Наша история</button>
                <button className="btn-outline-gradient px-6 py-3 rounded-xl font-medium text-sm">Для бизнеса</button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {TEAM.map((member) => (
                <div key={member.name} className="glass-card gradient-border rounded-2xl p-5 text-center">
                  <div className="text-4xl mb-3">{member.emoji}</div>
                  <div className="font-semibold text-white text-sm">{member.name}</div>
                  <div className="text-white/40 text-xs mt-1">{member.role}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            {[
              { icon: "Rocket", color: "from-violet-600 to-pink-500", title: "Практика с первого дня", desc: "Реальные проекты в портфолио уже с первого модуля" },
              { icon: "Users", color: "from-pink-500 to-orange-500", title: "Живое сообщество", desc: "Закрытый чат, нетворкинг и взаимная поддержка студентов" },
              { icon: "Award", color: "from-cyan-500 to-violet-600", title: "Гарантия результата", desc: "Вернём деньги, если не найдёшь работу в течение 6 месяцев" },
            ].map((val) => (
              <div key={val.title} className="glass-card gradient-border rounded-2xl p-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${val.color} flex items-center justify-center mb-4`}>
                  <Icon name={val.icon} size={22} className="text-white" />
                </div>
                <h3 className="font-montserrat font-bold text-white mb-2">{val.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="relative z-10 py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium bg-violet-600/20 text-violet-400 mb-6">
            <Icon name="Mail" size={14} />
            Контакты
          </div>
          <h2 className="font-montserrat font-black text-4xl md:text-5xl text-white mb-4">
            Есть вопросы? <span className="gradient-text">Напиши нам</span>
          </h2>
          <p className="text-white/50 text-lg mb-12">Ответим в течение 2 часов в рабочее время</p>

          <div className="glass-card rounded-3xl p-8 text-left">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="text-white/50 text-sm mb-2 block">Ваше имя</label>
                <input
                  type="text"
                  placeholder="Иван Иванов"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-violet-500/60 transition-colors"
                />
              </div>
              <div>
                <label className="text-white/50 text-sm mb-2 block">Email</label>
                <input
                  type="email"
                  placeholder="ivan@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-violet-500/60 transition-colors"
                />
              </div>
            </div>
            <div className="mb-6">
              <label className="text-white/50 text-sm mb-2 block">Сообщение</label>
              <textarea
                rows={4}
                placeholder="Расскажите о вашем вопросе..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-violet-500/60 transition-colors resize-none"
              />
            </div>
            <button className="btn-gradient w-full py-4 rounded-xl font-semibold text-base flex items-center justify-center gap-2">
              Отправить сообщение
              <Icon name="Send" size={18} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            {[
              { icon: "Mail", label: "Email", value: "hello@learnflow.ru" },
              { icon: "MessageCircle", label: "Telegram", value: "@learnflow_support" },
              { icon: "Phone", label: "Телефон", value: "+7 (800) 555-01-01" },
            ].map((c) => (
              <div key={c.label} className="glass-card rounded-2xl p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl btn-gradient flex items-center justify-center shrink-0">
                  <Icon name={c.icon} size={18} className="text-white" />
                </div>
                <div>
                  <div className="text-white/40 text-xs">{c.label}</div>
                  <div className="text-white text-sm font-medium">{c.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-white/5 py-10 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg btn-gradient flex items-center justify-center">
              <Icon name="Zap" size={14} className="text-white" />
            </div>
            <span className="font-montserrat font-bold text-white">Learn<span className="gradient-text">Flow</span></span>
          </div>
          <div className="flex flex-wrap gap-6 text-sm text-white/40">
            {NAV_LINKS.map(link => (
              <button key={link} onClick={() => scrollTo(link)} className="hover:text-white/70 transition-colors">{link}</button>
            ))}
          </div>
          <div className="text-white/30 text-sm">© 2024 LearnFlow</div>
        </div>
      </footer>

    </div>
  );
}
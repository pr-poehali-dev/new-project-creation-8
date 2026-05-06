import Icon from "@/components/ui/icon";

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

export default function CoursesSection() {
  return (
    <>
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
    </>
  );
}

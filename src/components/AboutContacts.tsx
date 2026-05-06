import Icon from "@/components/ui/icon";
import { NAV_LINKS } from "@/components/Navbar";

const TEAM = [
  { name: "Анна Соколова", role: "Основатель & CEO", emoji: "👩‍💼" },
  { name: "Дмитрий Иванов", role: "Главный методолог", emoji: "👨‍🏫" },
  { name: "Мария Петрова", role: "Lead Developer", emoji: "👩‍💻" },
  { name: "Алексей Кузнецов", role: "Директор по продукту", emoji: "👨‍🚀" },
];

interface AboutContactsProps {
  scrollTo: (section: string) => void;
}

export default function AboutContacts({ scrollTo }: AboutContactsProps) {
  return (
    <>
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
            <span className="font-montserrat font-bold text-white">
              Learn<span className="gradient-text">Flow</span>
            </span>
          </div>
          <div className="flex flex-wrap gap-6 text-sm text-white/40">
            {NAV_LINKS.map(link => (
              <button key={link} onClick={() => scrollTo(link)} className="hover:text-white/70 transition-colors">
                {link}
              </button>
            ))}
          </div>
          <div className="text-white/30 text-sm">© 2024 LearnFlow</div>
        </div>
      </footer>
    </>
  );
}

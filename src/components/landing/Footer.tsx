import Icon from "@/components/ui/icon";

export default function Footer() {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="bg-[#061230] border-t border-white/10 py-10 sm:py-14 px-5 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 mb-10">
          <div>
            <div className="mb-4">
              <img
                src="https://cdn.poehali.dev/projects/9e6ab7cb-02b9-4bdf-903b-219f3b05fb8d/bucket/46bb4f32-bdde-4795-8b4f-15bac7daff2a.png"
                alt="ОПОРА РОССИИ — Приморское краевое отделение"
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-white/45 text-sm leading-relaxed max-w-xs">
              Памятник предпринимателям Приморья — знак уважения к людям, которые создают будущее региона.
            </p>
          </div>

          <div>
            <h4 className="text-brand-gold text-xs tracking-widest uppercase font-semibold mb-4">Разделы</h4>
            <div className="flex flex-col gap-2.5">
              {[
                { label: "О проекте", id: "about" },
                { label: "Закладка камня", id: "ceremony" },
                { label: "Капсула времени", id: "capsule" },
                { label: "Место", id: "place" },
                { label: "FAQ", id: "faq" },
              ].map((l) => (
                <button key={l.id} onClick={() => scrollTo(l.id)} className="text-white/55 hover:text-brand-gold text-sm text-left transition-colors">
                  {l.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-brand-gold text-xs tracking-widest uppercase font-semibold mb-4">Контакты</h4>
            <div className="flex items-center gap-3 text-white/55 text-sm mb-2.5">
              <Icon name="MapPin" size={16} className="text-brand-gold" />
              Площадь Адмирала Фокина, Владивосток
            </div>
            <div className="flex items-center gap-3 text-white/55 text-sm">
              <Icon name="Calendar" size={16} className="text-brand-gold" />
              19 июня 2026 года
            </div>
            <button onClick={() => scrollTo("support")} className="btn-gold mt-6 px-6 py-3 rounded-md text-sm uppercase tracking-wide">
              Поддержать проект
            </button>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/35 text-sm">© 2026 Приморское краевое отделение «ОПОРЫ РОССИИ»</p>
          <p className="text-white/35 text-sm">Все права защищены</p>
        </div>
      </div>
    </footer>
  );
}
export default function Testimonials() {
  const items = [
    {
      quote:
        "DW Event a transformé notre lancement de produit en une véritable expérience immersive. Équipe au top, exécution sans faille.",
      name: "Patricia M.",
      role: "Directrice Marketing, TechCorp",
      initial: "P",
    },
    {
      quote:
        "Une agence qui sait conjuguer créativité et professionnalisme. Notre festival a dépassé toutes nos attentes.",
      name: "Jean-Luc K.",
      role: "Producteur culturel",
      initial: "J",
    },
    {
      quote:
        "Du début à la fin, ils nous ont accompagnés avec passion. Notre mariage restera un souvenir magique grâce à eux.",
      name: "Sandra & David",
      role: "Mariés, 2025",
      initial: "S",
    },
  ];

  return (
    <section className="py-28 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-block text-xs font-semibold tracking-[0.3em] text-blue-400 mb-4">
            — ILS NOUS FONT CONFIANCE
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Ce que disent <span className="bg-gradient-to-r from-blue-300 to-indigo-300 bg-clip-text text-transparent">nos clients</span>.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((t) => (
            <div
              key={t.name}
              className="bg-white/[0.04] border border-blue-400/15 rounded-2xl p-7 hover:border-blue-400/40 transition-colors"
            >
              <div className="text-5xl text-blue-400/30 leading-none mb-3 font-serif">"</div>
              <p className="text-blue-100/80 leading-relaxed mb-6">
                {t.quote}
              </p>
              <div className="flex items-center gap-3 pt-5 border-t border-blue-400/10">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center font-bold text-white">
                  {t.initial}
                </div>
                <div>
                  <div className="font-semibold text-white text-sm">{t.name}</div>
                  <div className="text-xs text-blue-200/60">{t.role}</div>
                </div>
                <div className="ml-auto text-yellow-400 text-sm">★★★★★</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

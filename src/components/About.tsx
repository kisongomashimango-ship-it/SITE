export default function About() {
  const values = [
    {
      icon: "✨",
      title: "Créativité",
      text: "Des concepts uniques qui sortent des sentiers battus pour marquer les esprits.",
    },
    {
      icon: "🎯",
      title: "Précision",
      text: "Chaque détail orchestré avec rigueur, de la conception à la dernière minute.",
    },
    {
      icon: "🤝",
      title: "Proximité",
      text: "Une équipe à l'écoute, partenaire de confiance pour donner vie à vos idées.",
    },
    {
      icon: "🌍",
      title: "Culture",
      text: "Ancrés dans la richesse culturelle congolaise, ouverts sur le monde.",
    },
  ];

  return (
    <section id="apropos" className="py-28 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="inline-block text-xs font-semibold tracking-[0.3em] text-blue-400 mb-4">
              — À PROPOS DE DW EVENT
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              L'art de transformer des moments en{" "}
              <span className="bg-gradient-to-r from-blue-300 to-indigo-300 bg-clip-text text-transparent">
                souvenirs éternels.
              </span>
            </h2>
            <p className="text-blue-100/70 leading-relaxed mb-5">
              Fondée par une équipe de passionnés, <strong className="text-white">DW Event</strong> est
              une agence événementielle congolaise spécialisée dans la conception
              et la production d'événements culturels, corporate et privés
              d'envergure.
            </p>
            <p className="text-blue-100/70 leading-relaxed mb-8">
              De la première étincelle créative à la mise en scène finale, nous
              accompagnons nos clients avec un savoir-faire pointu, une équipe
              technique aguerrie et un réseau d'artistes et de prestataires
              triés sur le volet.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-blue-300 font-semibold border-b border-blue-400/40 pb-1 hover:text-white hover:border-white transition-colors"
            >
              Parlons de votre projet
              <span>→</span>
            </a>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {values.map((v) => (
              <div
                key={v.title}
                className="group bg-white/[0.03] hover:bg-white/[0.06] border border-blue-400/10 hover:border-blue-400/30 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-3xl mb-4">{v.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{v.title}</h3>
                <p className="text-sm text-blue-100/60 leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

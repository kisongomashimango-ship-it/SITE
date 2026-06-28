export default function Services() {
  const services = [
    {
      title: "Concerts & Festivals",
      desc: "Production complète de festivals et concerts, du booking artistique à la régie technique.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 18V5l12-2v13M9 9l12-2" />
          <circle cx="6" cy="18" r="3" />
          <circle cx="18" cy="16" r="3" />
        </svg>
      ),
    },
    {
      title: "Événements Corporate",
      desc: "Conférences, séminaires, lancements de produit et soirées d'entreprise haut de gamme.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="7" width="20" height="14" rx="2" />
          <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
        </svg>
      ),
    },
    {
      title: "Soirées Privées",
      desc: "Mariages, anniversaires et célébrations sur-mesure pour des moments uniques.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z" />
        </svg>
      ),
    },
    {
      title: "Communication & Branding",
      desc: "Identité visuelle, affiches, vidéos teaser et stratégie social media pour vos événements.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 11l18-8-8 18-2-8z" />
        </svg>
      ),
    },
    {
      title: "Régie Technique",
      desc: "Son, lumière, vidéo, scénographie : une équipe technique et du matériel de pointe.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 3" />
        </svg>
      ),
    },
    {
      title: "Billetterie & Accueil",
      desc: "Solution complète de billetterie en ligne, contrôle d'accès et accueil des invités.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M2 9a3 3 0 010 6v2a2 2 0 002 2h16a2 2 0 002-2v-2a3 3 0 010-6V7a2 2 0 00-2-2H4a2 2 0 00-2 2v2zM13 5v14" />
        </svg>
      ),
    },
  ];

  return (
    <section id="services" className="py-28 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-16">
          <div className="inline-block text-xs font-semibold tracking-[0.3em] text-blue-400 mb-4">
            — NOS SERVICES
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Une expertise <span className="bg-gradient-to-r from-blue-300 to-indigo-300 bg-clip-text text-transparent">360°</span> pour donner vie à vos événements.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="group relative bg-gradient-to-br from-white/[0.04] to-transparent border border-blue-400/15 hover:border-blue-400/40 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              <div className="absolute -right-8 -top-8 w-32 h-32 bg-blue-500/0 group-hover:bg-blue-500/10 rounded-full blur-2xl transition-all duration-500" />
              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-blue-500/15 border border-blue-400/30 flex items-center justify-center text-blue-300 mb-5 group-hover:bg-blue-500/25 transition-colors">
                  {s.icon}
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-mono text-blue-400/60">0{i + 1}</span>
                  <h3 className="text-lg font-bold text-white">{s.title}</h3>
                </div>
                <p className="text-sm text-blue-100/60 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

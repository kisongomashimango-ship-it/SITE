export default function Gallery() {
  const items = [
    { tag: "Festival", title: "Afro Vibes Night", color: "from-blue-600 to-indigo-700" },
    { tag: "Corporate", title: "Tech Summit Kinshasa", color: "from-indigo-600 to-blue-800" },
    { tag: "Privé", title: "Mariage Royal", color: "from-blue-700 to-cyan-700" },
    { tag: "Concert", title: "Live à la Cathédrale", color: "from-indigo-700 to-purple-800" },
    { tag: "Festival", title: "Couleurs du Congo", color: "from-blue-500 to-indigo-600" },
    { tag: "Lancement", title: "Brand Day 2025", color: "from-cyan-600 to-blue-800" },
  ];

  return (
    <section id="galerie" className="py-28 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-block text-xs font-semibold tracking-[0.3em] text-blue-400 mb-4">
              — NOS RÉALISATIONS
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Quelques moments <span className="bg-gradient-to-r from-blue-300 to-indigo-300 bg-clip-text text-transparent">marquants</span>.
            </h2>
          </div>
          <a
            href="#contact"
            className="text-blue-300 font-semibold border-b border-blue-400/40 pb-1 hover:text-white hover:border-white transition-colors self-start md:self-end"
          >
            Voir tous les projets →
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {items.map((it, i) => (
            <div
              key={it.title}
              className={`group relative overflow-hidden rounded-2xl aspect-square md:aspect-[4/5] cursor-pointer ${
                i === 0 ? "md:col-span-2 md:row-span-2 md:aspect-auto" : ""
              }`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${it.color}`} />
              <div className="absolute inset-0 opacity-30 mix-blend-overlay" style={{
                backgroundImage: "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.4), transparent 50%)",
              }} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1535]/90 via-transparent to-transparent" />

              {/* Pattern */}
              <div className="absolute inset-0 opacity-[0.08]" style={{
                backgroundImage: "repeating-linear-gradient(45deg, white 0, white 1px, transparent 0, transparent 50%)",
                backgroundSize: "10px 10px",
              }} />

              <div className="absolute top-4 left-4">
                <span className="bg-white/20 backdrop-blur border border-white/30 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
                  {it.tag}
                </span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-5 transform group-hover:-translate-y-1 transition-transform">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                  {it.title}
                </h3>
                <div className="flex items-center gap-2 text-blue-200/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Découvrir</span>
                  <span>→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

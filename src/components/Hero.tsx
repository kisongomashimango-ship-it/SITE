export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#061029] via-[#0a1535] to-[#0d1f4a]" />

      {/* Decorative glow */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-indigo-600/20 rounded-full blur-3xl" />

      {/* Pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center w-full">
        {/* Left: Text */}
        <div className="space-y-7">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-400/30 px-4 py-2 rounded-full text-xs font-semibold tracking-wider text-blue-200">
            <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
            AGENCE ÉVÉNEMENTIELLE — KINSHASA
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight">
            Nous créons des
            <span className="block bg-gradient-to-r from-blue-300 via-blue-400 to-indigo-300 bg-clip-text text-transparent">
              expériences
            </span>
            inoubliables.
          </h1>

          <p className="text-lg text-blue-100/70 max-w-xl leading-relaxed">
            DW Event imagine, produit et orchestre les événements culturels qui
            marquent une génération. Concerts, festivals, soirées privées et
            entreprises — chaque détail compte.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#festival"
              className="inline-flex items-center gap-2 bg-white text-[#0a1535] px-7 py-3.5 rounded-full font-bold hover:bg-blue-100 transition-all hover:scale-105 shadow-xl shadow-blue-900/40"
            >
              Découvrir Blue Festival
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 bg-white/5 backdrop-blur border border-white/20 text-white px-7 py-3.5 rounded-full font-semibold hover:bg-white/10 transition-all"
            >
              Nos services
            </a>
          </div>

          <div className="flex items-center gap-8 pt-6">
            <div>
              <div className="text-3xl font-extrabold text-white">120+</div>
              <div className="text-xs text-blue-200/60 uppercase tracking-wider">Événements</div>
            </div>
            <div className="h-12 w-px bg-blue-400/20" />
            <div>
              <div className="text-3xl font-extrabold text-white">50K+</div>
              <div className="text-xs text-blue-200/60 uppercase tracking-wider">Participants</div>
            </div>
            <div className="h-12 w-px bg-blue-400/20" />
            <div>
              <div className="text-3xl font-extrabold text-white">8 ans</div>
              <div className="text-xs text-blue-200/60 uppercase tracking-wider">D'expertise</div>
            </div>
          </div>
        </div>

        {/* Right: Image */}
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/30 to-indigo-500/20 rounded-3xl blur-2xl" />
          <div className="relative rounded-3xl overflow-hidden border border-blue-400/20 shadow-2xl shadow-blue-950/50 aspect-[4/5]">
            <img
              src="/images/blue-festival-mask.jpg"
              alt="Blue Festival - Masque africain"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1535] via-transparent to-transparent" />

            {/* Floating badge */}
            <div className="absolute top-6 right-6 bg-white/95 backdrop-blur text-[#0a1535] px-4 py-2 rounded-full text-xs font-bold shadow-xl">
              ⭐ ÉVÉNEMENT PHARE
            </div>

            {/* Bottom info */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="text-xs font-semibold tracking-[0.3em] text-blue-300 mb-2">
                DW EVENT PRÉSENTE
              </div>
              <div className="text-3xl font-extrabold text-white mb-1">
                Blue Festival
              </div>
              <div className="text-sm text-blue-100/80">
                21 août 2026 • Petit Collège Notre Dame
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-blue-200/40 text-xs flex flex-col items-center gap-2">
        <span className="tracking-widest">SCROLL</span>
        <div className="w-px h-8 bg-gradient-to-b from-blue-400/50 to-transparent" />
      </div>
    </section>
  );
}

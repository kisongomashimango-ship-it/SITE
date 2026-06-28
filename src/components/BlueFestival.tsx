export default function BlueFestival() {
  return (
    <section
      id="festival"
      className="relative py-28 px-6 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d1f4a] via-[#0a1535] to-[#061029]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block text-xs font-semibold tracking-[0.3em] text-blue-400 mb-4">
            — ÉVÉNEMENT PHARE
          </div>
          <h2 className="text-5xl md:text-6xl font-extrabold mb-4">
            Blue <span className="bg-gradient-to-r from-blue-300 to-indigo-300 bg-clip-text text-transparent italic">Festival</span>
          </h2>
          <p className="text-blue-100/70 max-w-2xl mx-auto text-lg">
            Une célébration immersive de la culture, de la musique et de
            l'art — sous les couleurs du bleu profond.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-stretch">
          {/* Poster image */}
          <div className="lg:col-span-2 relative group">
            <div className="absolute -inset-2 bg-gradient-to-tr from-blue-500/40 to-indigo-500/30 rounded-3xl blur-xl group-hover:blur-2xl transition-all" />
            <div className="relative rounded-3xl overflow-hidden border-2 border-blue-400/30 aspect-[3/4] shadow-2xl">
              <img
                src="/images/blue-festival-mask.jpg"
                alt="Blue Festival Poster"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1535] via-transparent to-transparent opacity-40" />
            </div>
          </div>

          {/* Info card */}
          <div className="lg:col-span-3 bg-white/[0.04] backdrop-blur border border-blue-400/20 rounded-3xl p-8 md:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="bg-blue-500 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                  21 AOÛT 2026
                </span>
                <span className="bg-white/10 text-blue-100 text-xs font-semibold px-3 py-1.5 rounded-full">
                  à partir de 12h
                </span>
              </div>

              <h3 className="text-3xl font-extrabold mb-3">
                Une journée inoubliable
              </h3>
              <p className="text-blue-100/70 leading-relaxed mb-8">
                Concerts live, performances d'artistes, food & drinks, espaces
                lounge et expériences immersives. Plongez dans l'univers
                bleu, vibrez au rythme de la culture.
              </p>

              <div className="space-y-5">
                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-11 h-11 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-blue-300">
                      <path d="M12 22s-8-7.5-8-13a8 8 0 1116 0c0 5.5-8 13-8 13z" />
                      <circle cx="12" cy="9" r="3" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-blue-300 font-semibold mb-1">
                      Lieu
                    </div>
                    <div className="font-bold text-white">PETIT COLLÈGE NOTRE DAME</div>
                    <div className="text-sm text-blue-100/60">
                      Référence : Cathédrale Notre Dame
                    </div>
                  </div>
                </div>

                {/* Date */}
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-11 h-11 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-blue-300">
                      <rect x="3" y="4" width="18" height="18" rx="2" />
                      <path d="M16 2v4M8 2v4M3 10h18" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-blue-300 font-semibold mb-1">
                      Date
                    </div>
                    <div className="font-bold text-white text-xl">21 AOÛT 2026</div>
                  </div>
                </div>

                {/* Tickets */}
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-11 h-11 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-blue-300">
                      <path d="M2 9a3 3 0 010 6v2a2 2 0 002 2h16a2 2 0 002-2v-2a3 3 0 010-6V7a2 2 0 00-2-2H4a2 2 0 00-2 2v2zM13 5v14" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="text-xs uppercase tracking-widest text-blue-300 font-semibold mb-2">
                      Billets
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-white/5 border border-blue-400/20 rounded-xl px-4 py-3">
                        <div className="text-xs text-blue-200/70 uppercase">Pré-vente</div>
                        <div className="text-xl font-extrabold text-white">15.000 FC</div>
                      </div>
                      <div className="bg-blue-500/15 border border-blue-400/40 rounded-xl px-4 py-3">
                        <div className="text-xs text-blue-200/70 uppercase">Le jour J</div>
                        <div className="text-xl font-extrabold text-white">20.000 FC</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-8 pt-6 border-t border-blue-400/15 flex flex-col sm:flex-row gap-3">
              <a
                href="#contact"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-white text-[#0a1535] px-6 py-3.5 rounded-full font-bold hover:bg-blue-100 transition-all shadow-lg"
              >
                🎟️ Acheter un billet
              </a>
              <a
                href="tel:+243999136841"
                className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white px-6 py-3.5 rounded-full font-semibold hover:bg-white/15 transition-all"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.37 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.33 1.85.57 2.81.7A2 2 0 0122 16.92z" />
                </svg>
                Infoline
              </a>
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-blue-100/70">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                0999 136 841
              </span>
              <span className="hidden sm:inline text-blue-400/40">|</span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                0819 260 301
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

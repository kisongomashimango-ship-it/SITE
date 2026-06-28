import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="py-28 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0d1f4a]/40 to-transparent" />

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
        {/* Left info */}
        <div>
          <div className="inline-block text-xs font-semibold tracking-[0.3em] text-blue-400 mb-4">
            — CONTACTEZ-NOUS
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Parlons de votre <span className="bg-gradient-to-r from-blue-300 to-indigo-300 bg-clip-text text-transparent">prochain événement</span>.
          </h2>
          <p className="text-blue-100/70 leading-relaxed mb-10">
            Que ce soit pour réserver vos billets Blue Festival, organiser un
            événement ou simplement échanger autour d'un projet — notre équipe
            est à votre écoute.
          </p>

          <div className="space-y-5">
            <a href="tel:+243999136841" className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-blue-500/15 border border-blue-400/30 flex items-center justify-center text-blue-300 group-hover:bg-blue-500/25 transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.37 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.33 1.85.57 2.81.7A2 2 0 0122 16.92z" />
                </svg>
              </div>
              <div>
                <div className="text-xs text-blue-300 uppercase tracking-wider font-semibold">Infoline</div>
                <div className="text-white font-bold">0999 136 841 • 0819 260 301</div>
              </div>
            </a>

            <a href="mailto:contact@dwevent.cd" className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-blue-500/15 border border-blue-400/30 flex items-center justify-center text-blue-300 group-hover:bg-blue-500/25 transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M22 7L12 13 2 7" />
                </svg>
              </div>
              <div>
                <div className="text-xs text-blue-300 uppercase tracking-wider font-semibold">Email</div>
                <div className="text-white font-bold">contact@dwevent.cd</div>
              </div>
            </a>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-500/15 border border-blue-400/30 flex items-center justify-center text-blue-300">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s-8-7.5-8-13a8 8 0 1116 0c0 5.5-8 13-8 13z" />
                  <circle cx="12" cy="9" r="3" />
                </svg>
              </div>
              <div>
                <div className="text-xs text-blue-300 uppercase tracking-wider font-semibold">Adresse</div>
                <div className="text-white font-bold">Kinshasa, République Démocratique du Congo</div>
              </div>
            </div>
          </div>

          <div className="flex gap-3 mt-10">
            {["Instagram", "Facebook", "TikTok", "YouTube"].map((s) => (
              <a
                key={s}
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 border border-blue-400/20 hover:bg-blue-500/20 hover:border-blue-400/50 transition-colors flex items-center justify-center text-blue-200 text-xs font-bold"
                aria-label={s}
              >
                {s[0]}
              </a>
            ))}
          </div>
        </div>

        {/* Right form */}
        <div className="bg-white/[0.04] backdrop-blur border border-blue-400/20 rounded-3xl p-8 md:p-10">
          {!sent ? (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="space-y-5"
            >
              <h3 className="text-2xl font-bold mb-2">Envoyez-nous un message</h3>
              <p className="text-sm text-blue-100/60 mb-6">
                Nous vous répondons sous 24h.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs uppercase tracking-wider text-blue-300 font-semibold">Nom complet</label>
                  <input
                    type="text"
                    required
                    className="mt-2 w-full bg-white/5 border border-blue-400/20 focus:border-blue-400/60 rounded-xl px-4 py-3 text-white placeholder:text-blue-200/30 outline-none transition-colors"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-wider text-blue-300 font-semibold">Téléphone</label>
                  <input
                    type="tel"
                    className="mt-2 w-full bg-white/5 border border-blue-400/20 focus:border-blue-400/60 rounded-xl px-4 py-3 text-white placeholder:text-blue-200/30 outline-none transition-colors"
                    placeholder="+243 ..."
                  />
                </div>
              </div>

              <div>
                <label className="text-xs uppercase tracking-wider text-blue-300 font-semibold">Email</label>
                <input
                  type="email"
                  required
                  className="mt-2 w-full bg-white/5 border border-blue-400/20 focus:border-blue-400/60 rounded-xl px-4 py-3 text-white placeholder:text-blue-200/30 outline-none transition-colors"
                  placeholder="vous@exemple.com"
                />
              </div>

              <div>
                <label className="text-xs uppercase tracking-wider text-blue-300 font-semibold">Type de demande</label>
                <select className="mt-2 w-full bg-white/5 border border-blue-400/20 focus:border-blue-400/60 rounded-xl px-4 py-3 text-white outline-none transition-colors">
                  <option className="bg-[#0a1535]">Réservation Blue Festival</option>
                  <option className="bg-[#0a1535]">Événement corporate</option>
                  <option className="bg-[#0a1535]">Événement privé</option>
                  <option className="bg-[#0a1535]">Autre</option>
                </select>
              </div>

              <div>
                <label className="text-xs uppercase tracking-wider text-blue-300 font-semibold">Votre message</label>
                <textarea
                  required
                  rows={4}
                  className="mt-2 w-full bg-white/5 border border-blue-400/20 focus:border-blue-400/60 rounded-xl px-4 py-3 text-white placeholder:text-blue-200/30 outline-none transition-colors resize-none"
                  placeholder="Parlez-nous de votre projet..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-white text-[#0a1535] py-3.5 rounded-full font-bold hover:bg-blue-100 transition-colors shadow-lg"
              >
                Envoyer le message
              </button>
            </form>
          ) : (
            <div className="py-20 text-center">
              <div className="w-16 h-16 mx-auto bg-blue-500/20 border border-blue-400/40 rounded-full flex items-center justify-center mb-5 text-3xl">
                ✓
              </div>
              <h3 className="text-2xl font-bold mb-2">Message envoyé !</h3>
              <p className="text-blue-100/60">Nous reviendrons vers vous très vite.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

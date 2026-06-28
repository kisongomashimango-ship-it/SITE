import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-blue-400/15 pt-16 pb-8 px-6 bg-[#061029]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <Logo />
            <p className="text-blue-100/60 text-sm leading-relaxed mt-5 max-w-md">
              DW Event — Agence événementielle basée à Kinshasa.
              Nous concevons et produisons des expériences mémorables,
              du festival culturel à l'événement corporate.
            </p>
          </div>

          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-blue-300 mb-4">Navigation</div>
            <ul className="space-y-2 text-sm text-blue-100/70">
              <li><a href="#apropos" className="hover:text-white">À propos</a></li>
              <li><a href="#festival" className="hover:text-white">Blue Festival</a></li>
              <li><a href="#services" className="hover:text-white">Services</a></li>
              <li><a href="#galerie" className="hover:text-white">Galerie</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-blue-300 mb-4">Contact</div>
            <ul className="space-y-2 text-sm text-blue-100/70">
              <li>0999 136 841</li>
              <li>0819 260 301</li>
              <li>contact@dwevent.cd</li>
              <li>Kinshasa, RDC</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-400/15 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-blue-100/50">
          <div>© {new Date().getFullYear()} DW Event. Tous droits réservés.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Mentions légales</a>
            <a href="#" className="hover:text-white">Confidentialité</a>
            <a href="#" className="hover:text-white">CGV</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

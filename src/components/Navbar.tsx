import { useState } from "react";
import Logo from "./Logo";

export default function Navbar({ scrolled }: { scrolled: boolean }) {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#accueil", label: "Accueil" },
    { href: "#apropos", label: "À propos" },
    { href: "#festival", label: "Blue Festival" },
    { href: "#services", label: "Services" },
    { href: "#galerie", label: "Galerie" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a1535]/90 backdrop-blur-md border-b border-blue-500/20 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#accueil">
          <Logo />
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-blue-100/80 hover:text-white transition-colors relative group"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        <a
          href="#festival"
          className="hidden lg:inline-flex items-center gap-2 bg-white text-[#0a1535] px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-blue-100 transition-colors shadow-lg shadow-blue-900/30"
        >
          🎟️ Réserver
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-white p-2"
          aria-label="Menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-[#0a1535]/95 backdrop-blur border-t border-blue-500/20 mt-3">
          <div className="px-6 py-4 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-blue-100 hover:text-white font-medium py-2"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#festival"
              onClick={() => setOpen(false)}
              className="bg-white text-[#0a1535] px-5 py-2.5 rounded-full font-semibold text-center"
            >
              🎟️ Réserver
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

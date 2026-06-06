import { useEffect, useState, useRef } from "react";
import { cn } from "./utils/cn";

// ---- DATA ----
const navLinks = [
  { label: "Accueil", href: "#hero" },
  { label: "À propos", href: "#about" },
  { label: "Compétences", href: "#skills" },
  { label: "Projets", href: "#projects" },
  { label: "Expérience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const skills = [
  { name: "React / Next.js", level: 95, color: "#6c5ce7" },
  { name: "TypeScript", level: 90, color: "#00cec9" },
  { name: "Node.js / Express", level: 88, color: "#fd79a8" },
  { name: "Python / Django", level: 82, color: "#fdcb6e" },
  { name: "PostgreSQL / MongoDB", level: 85, color: "#6c5ce7" },
  { name: "Docker / AWS", level: 78, color: "#00cec9" },
  { name: "GraphQL / REST", level: 90, color: "#fd79a8" },
  { name: "Tailwind CSS / SCSS", level: 95, color: "#fdcb6e" },
  { name: "Git / CI/CD", level: 85, color: "#6c5ce7" },
];

const projects = [
  {
    title: "Analytics Pro",
    subtitle: "Plateforme d'analytics en temps réel",
    description:
      "Dashboard complet avec visualisation de données en temps réel, rapports automatisés et tableaux de bord personnalisables. Architecture microservices avec React, Node.js, et Apache Kafka.",
    tags: ["React", "Node.js", "Kafka", "D3.js", "Docker"],
    image: "project-1.jpg",
    color: "#6c5ce7",
    links: { github: "#", demo: "#" },
  },
  {
    title: "ShopWave",
    subtitle: "Marketplace e-commerce nouvelle génération",
    description:
      "Marketplace multilingue avec paiement Stripe, gestion d'inventaire IA, système de recommandations et panier intelligent. Next.js, GraphQL, PostgreSQL.",
    tags: ["Next.js", "GraphQL", "Stripe", "PostgreSQL", "Redis"],
    image: "project-2.jpg",
    color: "#00cec9",
    links: { github: "#", demo: "#" },
  },
  {
    title: "SocialSphere",
    subtitle: "Application sociale décentralisée",
    description:
      "Plateforme sociale avec messagerie chiffrée, flux d'actualités algorithmique, stories éphémères et appels vidéo. Architecture en temps réel avec WebSockets.",
    tags: ["React Native", "Socket.io", "WebRTC", "MongoDB", "AWS"],
    image: "project-3.jpg",
    color: "#fd79a8",
    links: { github: "#", demo: "#" },
  },
];

const experience = [
  {
    role: "Lead Développeur Full Stack",
    company: "TechVision Labs",
    period: "2024 - Présent",
    description:
      "Architecture et développement d'applications cloud-native. Management d'une équipe de 5 développeurs. Migration microservices avec 99.9% d'uptime.",
    tech: ["React", "Node.js", "AWS", "Terraform", "PostgreSQL"],
  },
  {
    role: "Développeur Full Stack Senior",
    company: "DigitalFlow Inc.",
    period: "2022 - 2024",
    description:
      "Développement de solutions SaaS pour clients enterprise. Optimisation des performances (Core Web Vitals). Mise en place de CI/CD et monitoring.",
    tech: ["Next.js", "TypeScript", "GraphQL", "Docker", "Redis"],
  },
  {
    role: "Développeur Full Stack",
    company: "StartupHub",
    period: "2020 - 2022",
    description:
      "Création de MVP pour startups tech. Développement full-stack de plusieurs applications web et mobiles. Tests automatisés et déploiement continu.",
    tech: ["React", "Python", "Django", "PostgreSQL", "Heroku"],
  },
  {
    role: "Développeur Junior",
    company: "WebCraft Agency",
    period: "2018 - 2020",
    description:
      "Développement de sites web et applications sur mesure. Intégration API tierces. Maintenance et amélioration de projets existants.",
    tech: ["JavaScript", "PHP", "WordPress", "MySQL", "jQuery"],
  },
];

const testimonials = [
  {
    name: "Sophie Lambert",
    role: "CTO, TechVision Labs",
    content:
      "Un développeur d'exception. Sa vision technique et sa capacité à résoudre des problèmes complexes ont transformé notre infrastructure.",
    avatar: "SL",
  },
  {
    name: "Marc Dubois",
    role: "CEO, DigitalFlow Inc.",
    content:
      "Alexandre a livré notre plateforme avec une qualité remarquable. Son expertise full-stack et son professionnalisme sont inégalés.",
    avatar: "MD",
  },
  {
    name: "Julie Chen",
    role: "Product Manager, StartupHub",
    content:
      "Travailler avec Alexandre a été une expérience formidable. Il comprend parfaitement les enjeux business et techniques.",
    avatar: "JC",
  },
];

const PROFILE = {
  firstName: "Kisongo",
  lastName: "Mashimango Ben",
  displayName: "Kisongo Mashimango Ben",
  heroTitle: "Étudiant en L3 Math-Info",
  email: "benkisongo@gmail.com",

  location: "Kinshasa, RDC",
  available: "Disponible",
  phone: "0979832523",
};


// ---- COMPONENTS ----

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "glass shadow-lg shadow-black/20 py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          className="text-2xl font-bold tracking-tight text-white"
        >
          <span className="text-gradient">K.</span>Kisongo
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-gray-400 hover:text-white transition-colors duration-300 relative group"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-accent-1 to-accent-2 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href="#contact"
            className="text-sm font-medium px-5 py-2.5 rounded-full bg-gradient-to-r from-accent-1 to-accent-2 text-white hover:shadow-lg hover:shadow-accent-1/30 transition-all duration-300"
          >
            Me contacter
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span
              className={cn(
                "block h-0.5 bg-white transition-all duration-300",
                mobileOpen && "rotate-45 translate-y-2"
              )}
            />
            <span
              className={cn(
                "block h-0.5 bg-white transition-all duration-300",
                mobileOpen && "opacity-0"
              )}
            />
            <span
              className={cn(
                "block h-0.5 bg-white transition-all duration-300",
                mobileOpen && "-rotate-45 -translate-y-2"
              )}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden glass border-t border-white/5 transition-all duration-400 overflow-hidden",
          mobileOpen ? "max-h-96 py-4" : "max-h-0 py-0"
        )}
      >
        <div className="flex flex-col gap-2 px-6">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="text-sm text-gray-400 hover:text-white py-2 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="text-sm font-medium text-center mt-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-accent-1 to-accent-2 text-white"
          >
            Me contacter
          </a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  const roles = ["Full Stack Developer", "UI/UX Engineer", "Problem Solver", PROFILE.heroTitle];
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (pause) {
      timeout = setTimeout(() => {
        setPause(false);
        setIsDeleting(true);
      }, 2000);
      return () => clearTimeout(timeout);
    }

    if (!isDeleting) {
      if (displayText.length < currentRole.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        }, 100);
      } else {
        setPause(true);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 50);
      } else {
        setIsDeleting(false);
        setRoleIndex((i) => (i + 1) % roles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, pause, roleIndex]);

  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePos({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-dark-900">
        <img
          src="images/hero-bg.jpg"
          alt=""
          className="w-full h-full object-cover opacity-30"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-dark-900/60 via-dark-900/40 to-dark-900"
          style={{
            background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(108,92,231,0.15), transparent 60%)`,
          }}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-accent-1/40 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 6}s`,
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-light text-xs text-gray-300 mb-8 animate-fade-in-up">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse-glow" />
          Disponible pour nouveaux projets
        </div>

        <h1 className="animate-fade-in-up delay-100">
          <span className="block text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-4">
            {PROFILE.firstName}{" "}
            <span className="text-gradient">{PROFILE.lastName}</span>
          </span>
          <span className="block text-xl md:text-3xl text-gray-400 font-light">
            <span>{displayText}</span>
            <span className="inline-block w-0.5 h-8 md:h-10 bg-accent-1 ml-1 animate-blink" />
          </span>
        </h1>

        <p className="max-w-2xl mx-auto mt-6 text-base md:text-lg text-gray-500 leading-relaxed animate-fade-in-up delay-200">
          Je suis étudiant en L3 Math-Info et je conçois/développe des applications web
          modernes avec une approche orientée performance, rigueur et expérience utilisateur.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-10 animate-fade-in-up delay-300">
          <a
            href="#projects"
            className="px-8 py-3.5 rounded-full bg-gradient-to-r from-accent-1 to-accent-2 text-white font-medium hover:shadow-lg hover:shadow-accent-1/30 transition-all duration-300 hover:-translate-y-0.5"
          >
            Voir mes projets
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 rounded-full glass-light text-gray-300 font-medium hover:bg-white/5 transition-all duration-300 hover:-translate-y-0.5"
          >
            Me contacter
          </a>
        </div>

        {/* Social icons */}
        <div className="flex justify-center gap-6 mt-12 animate-fade-in-up delay-400">
          {[
            { icon: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z", name: "GitHub" },
            { icon: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z", name: "Twitter" },
            { icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z", name: "LinkedIn" },
          ].map((social, i) => (
            <a
              key={i}
              href="#"
              className="text-gray-500 hover:text-accent-1 transition-colors duration-300"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d={social.icon} />
              </svg>
            </a>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}

function About() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="relative py-24 bg-dark-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div
          className={cn(
            "text-center mb-16 transition-all duration-700",
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <span className="text-xs tracking-[0.3em] uppercase text-accent-1 font-medium">
            À propos
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-3">
            Qui suis-je ?
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent-1 to-accent-2 rounded-full mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Avatar + stats */}
          <div
            className={cn(
              "transition-all duration-700 delay-200",
              visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            )}
          >
            <div className="relative group">
              <div className="relative w-72 h-72 mx-auto rounded-2xl overflow-hidden neon-border">
                <img
                  src="images/avatar.jpg"
                  alt={PROFILE.displayName}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-2xl glass border border-white/5 flex flex-col items-center justify-center">
                <span className="text-3xl font-bold text-gradient">L3</span>
                <span className="text-xs text-gray-400">Math-Info</span>
              </div>
              <div className="absolute -top-4 -left-4 w-28 h-28 rounded-2xl glass border border-white/5 flex flex-col items-center justify-center">
                <span className="text-3xl font-bold text-gradient">∞</span>
                <span className="text-xs text-gray-400">Projets</span>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div
            className={cn(
              "transition-all duration-700 delay-300",
              visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            )}
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Étudiant en L3 Math-Info, passionné par{" "}
              <span className="text-gradient">l'innovation</span>
            </h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              J'aime résoudre des problèmes avec rigueur, apprendre vite et construire des
              solutions web propres, performantes et maintenables.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Nom", value: PROFILE.displayName },
                { label: "Email", value: PROFILE.email },
                { label: "Localisation", value: PROFILE.location },
                { label: "Disponible", value: PROFILE.available },
              ].map((item) => (
                <div key={item.label} className="glass-light rounded-xl p-3">
                  <span className="text-xs text-gray-500">{item.label}</span>
                  <p className="text-sm text-white mt-0.5 font-medium">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="relative py-24 bg-dark-800" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div
          className={cn(
            "text-center mb-16 transition-all duration-700",
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <span className="text-xs tracking-[0.3em] uppercase text-accent-2 font-medium">
            Compétences
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-3">
            Ma stack technique
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent-2 to-accent-3 rounded-full mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, i) => {
            const Icon = skillIcons[i] || DefaultIcon;
            return (
              <div
                key={skill.name}
                className={cn(
                  "glass rounded-2xl p-6 hover:neon-border transition-all duration-500 group",
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                )}
                style={{
                  transitionDelay: `${i * 80}ms`,
                }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center text-white text-sm font-bold"
                    style={{ background: skill.color + "33" }}
                  >
                    <Icon />
                  </div>
                  <h3 className="text-white font-medium text-sm">{skill.name}</h3>
                </div>
                <div className="relative h-2 bg-dark-600 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: visible ? `${skill.level}%` : "0%",
                      background: `linear-gradient(90deg, ${skill.color}, ${skill.color}88)`,
                      boxShadow: `0 0 10px ${skill.color}44`,
                    }}
                  />
                </div>
                <div className="flex justify-end mt-1">
                  <span className="text-xs text-gray-500">{skill.level}%</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const DefaultIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const skillIcons = [
  () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M14.23 12.004a2.236 2.236 0 01-2.235 2.236 2.236 2.236 0 01-2.236-2.236 2.236 2.236 0 012.235-2.236 2.236 2.236 0 012.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.01 2.124-1.037-1.18-2.886-2.124-4.08-2.124-1.27 0-2.9.74-2.9 2.72v16.53c0 2.126 1.743 2.74 3.334 2.74 1.488 0 3.566-1.024 4.26-2.132l2.245-1.792-1.488-1.858-2.188 1.742c-.988.786-2.14.938-2.628.708-.482-.23-.565-.978-.565-1.537v-4.616h5.423v-2.376h-5.423V4.378c1.21-.542 2.563-.856 3.627-.856 1.635 0 3.41.954 3.41 2.832v1.975h2.3V6.34c0-2.737-1.774-5.026-4.79-5.026z" />
    </svg>
  ),
  () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M3 3h18v18H3V3zm16.525 13.707c-.131-.821-.666-1.511-2.252-2.155-.552-.259-1.165-.438-1.349-.854-.068-.248-.078-.382-.034-.529.113-.484.687-.629 1.137-.495.293.09.563.315.732.676.775-.507.775-.507 1.316-.844-.203-.314-.304-.451-.439-.586-.473-.528-1.103-.798-2.126-.775l-.528.067c-.507.124-.991.395-1.283.754-.855.968-.608 2.655.427 3.354 1.023.867 2.579.912 3.337.646.734-.258 1.173-.733 1.375-1.195.199-.479.298-.991.233-1.495z" />
    </svg>
  ),
  () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M11.998 24c-.321 0-.641-.084-.922-.251l-2.936-1.737c-.437-.244-.223-.331-.079-.382.583-.202.701-.248 1.322-.601.065-.036.151-.022.218.016l2.256 1.338c.081.045.196.045.27 0l8.793-5.076c.081-.045.132-.13.132-.223V6.276c0-.094-.051-.178-.132-.223l-8.793-5.073c-.081-.045-.189-.045-.27 0L3.132 6.053c-.082.045-.132.13-.132.223v10.148c0 .093.051.178.132.223l2.409 1.391c1.307.654 2.108-.117 2.108-.891V7.629c0-.131.106-.239.237-.239h1.117c.13 0 .237.108.237.239v9.425c0 1.745-.951 2.745-2.607 2.745-.509 0-.911 0-2.032-.553l-2.312-1.337c-.573-.33-.922-.942-.922-1.604V6.276c0-.662.349-1.273.922-1.604l8.795-5.073c.557-.321 1.307-.321 1.864 0l8.793 5.073c.574.331.926.942.926 1.604v10.148c0 .662-.352 1.273-.926 1.604l-8.793 5.076c-.28.168-.6.252-.921.252z" />
    </svg>
  ),
];

function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="relative py-24 bg-dark-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div
          className={cn(
            "text-center mb-16 transition-all duration-700",
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <span className="text-xs tracking-[0.3em] uppercase text-accent-3 font-medium">
            Projets
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-3">
            Mes réalisations
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent-3 to-accent-1 rounded-full mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div
              key={i}
              className={cn(
                "group relative rounded-2xl overflow-hidden glass border border-white/5 transition-all duration-500",
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              )}
              style={{ transitionDelay: `${i * 150}ms` }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={`images/${project.image}`}
                  alt={project.title}
                  className={cn(
                    "w-full h-full object-cover transition-all duration-700",
                    hoveredIndex === i ? "scale-110" : "scale-100"
                  )}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/50 to-transparent" />

                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs rounded-full glass-light text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-6">
                <span className="text-xs font-medium" style={{ color: project.color }}>
                  {project.subtitle}
                </span>
                <h3 className="text-lg font-bold text-white mt-1 mb-3">{project.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-5 line-clamp-3">{project.description}</p>

                <div className="flex gap-3">
                  <a
                    href={project.links.github}
                    className="flex items-center gap-2 text-xs text-gray-400 hover:text-white transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    Code
                  </a>
                  <a
                    href={project.links.demo}
                    className="flex items-center gap-2 text-xs text-gray-400 hover:text-white transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Demo
                  </a>
                </div>
              </div>

              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 50% 50%, ${project.color}11, transparent 70%)`,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="relative py-24 bg-dark-800" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div
          className={cn(
            "text-center mb-16 transition-all duration-700",
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <span className="text-xs tracking-[0.3em] uppercase text-accent-1 font-medium">
            Expérience
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-3">
            Mon parcours
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent-1 to-accent-3 rounded-full mx-auto mt-4" />
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent-1 via-accent-3 to-accent-2 md:-translate-x-px" />

          {experience.map((exp, i) => (
            <div
              key={i}
              className={cn(
                "relative pl-12 md:pl-0 pb-16 last:pb-0 transition-all duration-700",
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              )}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div
                className={cn(
                  "md:w-1/2",
                  i % 2 === 0 ? "md:pr-12 md:ml-0" : "md:pl-12 md:ml-auto"
                )}
              >
                <div className="glass rounded-2xl p-6 border border-white/5 hover:neon-border transition-all duration-300">
                  <div
                    className={cn(
                      "absolute md:left-1/2 w-3 h-3 rounded-full -translate-x-1/2 mt-2",
                      "bg-accent-1 shadow-lg shadow-accent-1/50",
                      i === experience.length - 1 && "animate-pulse-glow"
                    )}
                    style={{ left: "1rem" }}
                  />

                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs px-3 py-1 rounded-full glass-light text-accent-1">
                      {exp.period}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                  <p className="text-sm text-accent-2 mb-3">{exp.company}</p>
                  <p className="text-sm text-gray-400 leading-relaxed mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span key={t} className="px-2.5 py-1 text-xs rounded-full bg-dark-600 text-gray-400">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative py-24 bg-dark-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div
          className={cn(
            "text-center mb-16 transition-all duration-700",
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <span className="text-xs tracking-[0.3em] uppercase text-accent-2 font-medium">
            Témoignages
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-3">
            Ce qu'ils disent
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent-2 to-accent-1 rounded-full mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={cn(
                "glass rounded-2xl p-8 border border-white/5 transition-all duration-700",
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              )}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <svg className="w-8 h-8 text-accent-1/30 mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-gray-400 leading-relaxed text-sm mb-6">{t.content}</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-1 to-accent-2 flex items-center justify-center text-white text-sm font-bold">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-white text-sm font-medium">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="relative py-24 bg-dark-800" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div
          className={cn(
            "text-center mb-16 transition-all duration-700",
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <span className="text-xs tracking-[0.3em] uppercase text-accent-3 font-medium">
            Contact
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-3">
            Travaillons ensemble
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accent-3 to-accent-2 rounded-full mx-auto mt-4" />
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Vous avez un projet en tête ? N'hésitez pas à me contacter pour
            discuter de vos besoins.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div
            className={cn(
              "space-y-8 transition-all duration-700",
              visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            )}
          >
            {[
              {
                icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
                label: "Email",
                value: PROFILE.email,
              },
              {
                icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
                label: "Localisation",
                value: PROFILE.location,
              },
              {
                icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                label: "Téléphone",
                value: PROFILE.phone,
              },
              {
                icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
                label: "Disponibilité",
                value: PROFILE.available,
              },

            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl glass-light flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-accent-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">{item.label}</p>
                  <p className="text-white font-medium mt-1">{item.value}</p>
                </div>
              </div>
            ))}

            <div className="flex gap-4 pt-4">
              {["GitHub", "LinkedIn", "Twitter"].map((name) => (
                <a
                  key={name}
                  href="#"
                  className="w-10 h-10 rounded-full glass-light flex items-center justify-center text-gray-400 hover:text-accent-1 hover:border-accent-1/30 transition-all duration-300"
                >
                  <span className="text-xs font-medium">{name[0]}</span>
                </a>
              ))}
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className={cn(
              "glass rounded-2xl p-8 border border-white/5 space-y-6 transition-all duration-700",
              visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            )}
          >
            <div>
              <label className="block text-sm text-gray-400 mb-2">Nom</label>
              <input
                type="text"
                required
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-dark-600/50 border border-white/5 text-white placeholder-gray-500 focus:outline-none focus:border-accent-1 transition-colors text-sm"
                placeholder="Votre nom"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">Email</label>
              <input
                type="email"
                required
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-dark-600/50 border border-white/5 text-white placeholder-gray-500 focus:outline-none focus:border-accent-1 transition-colors text-sm"
                placeholder="votre@email.com"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">Message</label>
              <textarea
                required
                rows={5}
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-dark-600/50 border border-white/5 text-white placeholder-gray-500 focus:outline-none focus:border-accent-1 transition-colors text-sm resize-none"
                placeholder="Votre message..."
              />
            </div>
            <button
              type="submit"
              disabled={submitted}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-accent-1 to-accent-2 text-white font-medium hover:shadow-lg hover:shadow-accent-1/30 transition-all duration-300 disabled:opacity-70"
            >
              {submitted ? "✓ Message envoyé !" : "Envoyer le message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative bg-dark-900 border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <a href="#hero" className="text-2xl font-bold tracking-tight text-white">
              <span className="text-gradient">K.</span>Kisongo
            </a>
            <p className="text-sm text-gray-500 mt-1">Étudiant L3 Math-Info · Kinshasa</p>
          </div>

          <div className="flex items-center gap-6">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-xs text-gray-500 hover:text-gray-300 transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>

          <p className="text-xs text-gray-600">&copy; {new Date().getFullYear()} {PROFILE.displayName}. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}

// ---- APP ----
export default function App() {
  return (
    <div className="bg-dark-900 text-white min-h-screen font-sans antialiased">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}


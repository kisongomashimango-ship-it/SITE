const App = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold tracking-tight text-blue-500">DevPortfolio</h1>
          <div className="flex gap-6 text-sm font-medium">
            <a href="#about" className="hover:text-blue-400 transition">À propos</a>
            <a href="#projects" className="hover:text-blue-400 transition">Projets</a>
            <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-32 pb-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-5xl font-extrabold mb-6">Développeur Fullstack <span className="text-blue-500">Passionné</span></h2>
          <p className="text-slate-400 text-lg mb-8 leading-relaxed">
            Spécialisé dans la création d'applications web robustes et modernes. Je transforme des idées complexes en solutions digitales élégantes et performantes. Basé au Congo, je travaille avec les dernières technologies.
          </p>
          <div className="flex gap-4">
            <a href="https://github.com" className="p-3 bg-slate-800 rounded-full hover:bg-slate-700 transition">🐙</a>
            <a href="https://linkedin.com" className="p-3 bg-slate-800 rounded-full hover:bg-slate-700 transition">💼</a>
            <a href="mailto:email@example.com" className="p-3 bg-slate-800 rounded-full hover:bg-slate-700 transition">📧</a>
          </div>
        </div>
        <div className="relative">
          {/* Note: Ensure the image is in the public/ folder as profile.jpg */}
          <img 
            src="/profile.jpg" 
            alt="Développeur au travail" 
            className="rounded-2xl shadow-2xl border border-slate-700 w-full object-cover"
          />
          <div className="absolute -bottom-6 -right-6 p-6 bg-slate-900 border border-slate-700 rounded-xl shadow-xl">
            <div className="text-3xl font-bold text-blue-500">3+</div>
            <div className="text-sm text-slate-400">Années d'expérience</div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-20 bg-slate-900/50">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold mb-12 text-center">Expertises Techniques</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "🖥️", title: "Frontend", desc: "React, TypeScript, TailwindCSS, Next.js" },
              { icon: "🗄️", title: "Backend", desc: "Node.js, Python, PostgreSQL, MongoDB" },
              { icon: "💻", title: "DevOps/Tools", desc: "Git, Docker, Vercel, AWS" }
            ].map((skill, i) => (
              <div key={i} className="p-8 bg-slate-950 border border-slate-800 rounded-2xl hover:border-blue-500/50 transition">
                <div className="text-3xl mb-4">{skill.icon}</div>
                <h4 className="text-xl font-semibold mb-2">{skill.title}</h4>
                <p className="text-slate-400 text-sm">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold mb-12">Projets Récents</h3>
        <div className="grid md:grid-cols-2 gap-8">
          {[1, 2].map((i) => (
            <div key={i} className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-600 transition">
              <div className="h-48 bg-slate-800"></div>
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-2">Application {i}</h4>
                <p className="text-slate-400 mb-4 text-sm">Description courte du projet. Technologies utilisées : React, Node.js.</p>
                <a href="#" className="flex items-center gap-2 text-blue-400 font-medium text-sm">Voir projet 🔗</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <footer id="contact" className="py-20 bg-slate-950 border-t border-slate-800 text-center px-6">
        <h3 className="text-3xl font-bold mb-6">Prêt à collaborer ?</h3>
        <p className="text-slate-400 mb-8 max-w-lg mx-auto">N'hésitez pas à me contacter pour toute opportunité ou question. Je suis disponible pour de nouveaux challenges.</p>
        <a href="mailto:email@example.com" className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition">Envoyer un email</a>
      </footer>
    </div>
  );
};

export default App;

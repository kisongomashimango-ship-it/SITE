export default function Stats() {
  const stats = [
    { value: "120+", label: "Événements produits" },
    { value: "50K+", label: "Participants accueillis" },
    { value: "80+", label: "Artistes programmés" },
    { value: "98%", label: "Clients satisfaits" },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 rounded-3xl px-8 py-14 md:px-14 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }} />
        <div className="absolute -right-20 -top-20 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl" />

        <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-5xl md:text-6xl font-extrabold text-white mb-2">
                {s.value}
              </div>
              <div className="text-sm text-blue-100/80 uppercase tracking-wider">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useEffect, useState } from "react";

function getTimeLeft() {
  const target = new Date("2026-08-21T12:00:00").getTime();
  const now = Date.now();
  const diff = Math.max(0, target - now);
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function CountdownBanner() {
  const [t, setT] = useState(getTimeLeft());

  useEffect(() => {
    const i = setInterval(() => setT(getTimeLeft()), 1000);
    return () => clearInterval(i);
  }, []);

  const items = [
    { label: "Jours", value: t.days },
    { label: "Heures", value: t.hours },
    { label: "Minutes", value: t.minutes },
    { label: "Secondes", value: t.seconds },
  ];

  return (
    <section className="relative -mt-8 z-10 px-6">
      <div className="max-w-5xl mx-auto bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 rounded-2xl px-6 py-6 shadow-2xl shadow-blue-900/50 border border-blue-400/30">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <div className="text-xs font-semibold tracking-widest text-blue-100/90">
              COMPTE À REBOURS
            </div>
            <div className="text-xl font-bold text-white">Blue Festival 2026</div>
          </div>
          <div className="flex gap-3 md:gap-5">
            {items.map((i) => (
              <div
                key={i.label}
                className="bg-white/15 backdrop-blur border border-white/20 rounded-xl px-4 py-2 min-w-[68px] text-center"
              >
                <div className="text-2xl md:text-3xl font-extrabold text-white tabular-nums">
                  {String(i.value).padStart(2, "0")}
                </div>
                <div className="text-[10px] uppercase tracking-wider text-blue-100/80">
                  {i.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

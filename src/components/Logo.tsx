export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative">
        <svg
          viewBox="0 0 60 40"
          className="h-9 w-14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Stylized DW monogram */}
          <path
            d="M4 6 L4 34 L16 34 C24 34 28 28 28 20 C28 12 24 6 16 6 Z"
            stroke="white"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          <path
            d="M30 6 L36 34 L42 16 L48 34 L54 6"
            stroke="white"
            strokeWidth="2.5"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <div className="flex flex-col leading-none">
        <span className="text-lg font-extrabold tracking-widest text-white">
          DW
        </span>
        <span className="text-[10px] font-semibold tracking-[0.3em] text-blue-300">
          EVENT
        </span>
      </div>
    </div>
  );
}

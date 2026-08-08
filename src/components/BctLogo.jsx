export const BctLogo = ({ className = "" }) => {
  return (
    <div className={`flex items-center gap-3.5 ${className}`}>
      {/* SVG Emblem: Wireframe Network Node Tetrahedron */}
      <svg 
        className="w-11 h-11 flex-shrink-0 text-gray-900 dark:text-white transition-colors duration-300" 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Connection Lines */}
        <g stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          {/* Outer Triangle */}
          <line x1="50" y1="12" x2="14" y2="82" />
          <line x1="14" y1="82" x2="86" y2="82" />
          <line x1="86" y1="82" x2="50" y2="12" />

          {/* Internal Wireframe Connections */}
          <line x1="50" y1="12" x2="52" y2="58" />
          <line x1="50" y1="12" x2="34" y2="50" />
          <line x1="50" y1="12" x2="68" y2="50" />

          <line x1="14" y1="82" x2="34" y2="50" />
          <line x1="14" y1="82" x2="50" y2="78" />

          <line x1="86" y1="82" x2="68" y2="50" />
          <line x1="86" y1="82" x2="50" y2="78" />

          <line x1="52" y1="58" x2="34" y2="50" />
          <line x1="52" y1="58" x2="68" y2="50" />
          <line x1="52" y1="58" x2="50" y2="78" />

          <line x1="34" y1="50" x2="50" y2="78" />
          <line x1="68" y1="50" x2="50" y2="78" />
        </g>

        {/* Node Vertices */}
        <g fill="currentColor">
          <circle cx="50" cy="12" r="4.5" />
          <circle cx="14" cy="82" r="4.5" />
          <circle cx="86" cy="82" r="4.5" />
          <circle cx="52" cy="58" r="4.5" />
          <circle cx="34" cy="50" r="4.5" />
          <circle cx="50" cy="78" r="4.5" />
          <circle cx="68" cy="50" r="4.5" />
        </g>
      </svg>

      {/* Brand Text */}
      <div className="flex flex-col justify-center leading-[0.85] select-none">
        <span className="font-extrabold text-[28px] tracking-tight text-gray-900 dark:text-white font-sans">
          BCT
        </span>
        <span className="text-[11px] font-black tracking-[0.24em] text-gray-900 dark:text-white mt-1 uppercase">
          NETWORKS
        </span>
      </div>
    </div>
  );
};

export default BctLogo;

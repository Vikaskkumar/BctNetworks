import { useState } from 'react';

export const HeroNetworkDiagram = () => {
  const [activeNode, setActiveNode] = useState(null);

  const nodes = [
    { id: 'cloud', label: 'Cloud' },
    { id: 'datacenter', label: 'Data Center' },
    { id: 'security', label: 'Security' },
    { id: 'offices', label: 'Branch Offices' },
    { id: 'wifi', label: 'Wi-Fi' },
    { id: 'users', label: 'Users' },
    { id: 'management', label: 'Management' },
  ];

  // Path definitions from Center Switch (around 500, 420) to all 7 sides
  const rayPaths = [
    { id: 'cloud', path: 'M 480 410 Q 380 270 335 150', speed: '2.0s' },
    { id: 'datacenter', path: 'M 520 400 Q 700 250 780 180', speed: '2.2s' },
    { id: 'security', path: 'M 540 440 Q 750 440 870 440', speed: '1.9s' },
    { id: 'offices', path: 'M 520 480 Q 700 590 790 660', speed: '2.4s' },
    { id: 'wifi', path: 'M 470 500 Q 440 610 420 710', speed: '2.1s' },
    { id: 'users', path: 'M 420 470 Q 260 550 150 630', speed: '2.3s' },
    { id: 'management', path: 'M 400 430 Q 230 420 90 390', speed: '2.0s' },
  ];

  return (
    <div className="relative w-full h-[500px] sm:h-[600px] lg:h-[650px] flex items-center justify-center select-none">
      {/* Keyframe & Theme Animations */}
      <style>{`
        @keyframes flowRays {
          from { stroke-dashoffset: 28; }
          to { stroke-dashoffset: 0; }
        }
        @keyframes floatBob1 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes floatBob2 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes floatBob3 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes floatBob4 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes floatBob5 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes floatBob6 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes floatBob7 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes wifiPulse {
          0%, 100% { r: 8px; opacity: 0.6; }
          50% { r: 16px; opacity: 0.2; }
        }
        @keyframes ledBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.2; }
        }

        .animated-ray {
          stroke-dasharray: 8 6;
          animation: flowRays 1.5s linear infinite;
        }

        .node-bob-1 { animation: floatBob1 4s ease-in-out infinite; }
        .node-bob-2 { animation: floatBob2 4.5s ease-in-out infinite 0.5s; }
        .node-bob-3 { animation: floatBob3 3.8s ease-in-out infinite 1s; }
        .node-bob-4 { animation: floatBob4 4.2s ease-in-out infinite 1.5s; }
        .node-bob-5 { animation: floatBob5 4s ease-in-out infinite 0.8s; }
        .node-bob-6 { animation: floatBob6 4.4s ease-in-out infinite 0.3s; }
        .node-bob-7 { animation: floatBob7 3.9s ease-in-out infinite 1.2s; }

        .led-blink { animation: ledBlink 1.2s ease-in-out infinite; }
        .wifi-ring { animation: wifiPulse 2s ease-in-out infinite; }

        /* --- Dark Mode SVG Overrides --- */
        .dark .bg-grid-group {
          stroke: #1e293b !important;
          opacity: 0.5;
        }

        .top-case-poly {
          fill: url(#topCaseGlowLight);
          stroke: #ffffff;
        }

        .dark .top-case-poly {
          fill: url(#topCaseGlowDark);
          stroke: #334155;
        }

        .dark .node-plate {
          fill: #0f172a !important;
          stroke: #1e293b !important;
        }

        .dark .node-plate-top {
          fill: #1e293b !important;
          stroke: #334155 !important;
        }

        .dark .node-badge-rect {
          fill: #0f172a !important;
          stroke: #334155 !important;
        }

        .dark .node-badge-rect-active {
          fill: #E51D25 !important;
          stroke: #E51D25 !important;
        }

        .dark .node-badge-text {
          fill: #e2e8f0 !important;
        }

        .dark .node-badge-text-active {
          fill: #ffffff !important;
        }

        .dark .bct-text {
          fill: #ffffff !important;
        }
      `}</style>

      <svg
        viewBox="0 0 1000 850"
        className="w-full h-full object-contain filter drop-shadow-sm"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="topCaseGlowLight" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="60%" stopColor="#f8fafc" />
            <stop offset="100%" stopColor="#e2e8f0" />
          </linearGradient>

          <linearGradient id="topCaseGlowDark" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="60%" stopColor="#0f172a" />
            <stop offset="100%" stopColor="#020617" />
          </linearGradient>

          <filter id="softGlow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          <filter id="nodeShadow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="12" stdDeviation="12" floodColor="#0f172a" floodOpacity="0.14" />
          </filter>
        </defs>

        {/* ISOMETRIC BACKGROUND GRID */}
        <g className="bg-grid-group" stroke="#e2e8f0" strokeWidth="0.75" opacity="0.6" strokeDasharray="4 4">
          <line x1="50" y1="200" x2="950" y2="720" />
          <line x1="50" y1="350" x2="950" y2="870" />
          <line x1="50" y1="500" x2="950" y2="1020" />
          <line x1="950" y1="200" x2="50" y2="720" />
          <line x1="950" y1="350" x2="50" y2="870" />
          <line x1="950" y1="500" x2="50" y2="1020" />
        </g>

        {/* RED CONNECTING NETWORK BEAMS */}
        <g stroke="#E51D25" strokeWidth="2.5" strokeLinecap="round" fill="none">
          {rayPaths.map((r) => (
            <path
              key={r.id}
              d={r.path}
              className="animated-ray"
              opacity={activeNode === r.id ? 1 : 0.85}
              strokeWidth={activeNode === r.id ? 4 : 2.5}
              filter={activeNode === r.id ? 'url(#softGlow)' : undefined}
            />
          ))}
        </g>

        {/* ============================================================ */}
        {/* OUTWARD MOVING PULSE DOTS FROM CENTER SWITCH TO ALL SIDES   */}
        {/* ============================================================ */}
        {rayPaths.map((r) => (
          <g key={`pulses-${r.id}`}>
            {/* Primary Pulse Dot */}
            <g filter="url(#softGlow)">
              <circle r="5" fill="#FF4D54">
                <animateMotion
                  path={r.path}
                  dur={r.speed}
                  repeatCount="indefinite"
                />
              </circle>
              <circle r="3" fill="#ffffff">
                <animateMotion
                  path={r.path}
                  dur={r.speed}
                  repeatCount="indefinite"
                />
              </circle>
            </g>

            {/* Secondary Staggered Pulse Dot (Offset by half duration) */}
            <g filter="url(#softGlow)">
              <circle r="4" fill="#E51D25" opacity="0.8">
                <animateMotion
                  path={r.path}
                  dur={r.speed}
                  begin={`${parseFloat(r.speed) / 2}s`}
                  repeatCount="indefinite"
                />
              </circle>
              <circle r="2" fill="#ffffff">
                <animateMotion
                  path={r.path}
                  dur={r.speed}
                  begin={`${parseFloat(r.speed) / 2}s`}
                  repeatCount="indefinite"
                />
              </circle>
            </g>
          </g>
        ))}

        {/* ============================================================ */}
        {/* CENTRAL BCT ISOMETRIC SWITCH STACK                           */}
        {/* ============================================================ */}
        <g transform="translate(320, 270)" filter="url(#nodeShadow)">
          {/* Ground Reflection & Ambient Glow */}
          <polygon points="180,290 380,180 180,70 -20,180" fill="#0f172a" opacity="0.08" />
          <ellipse cx="180" cy="200" rx="210" ry="90" fill="#E51D25" opacity="0.1" filter="url(#softGlow)" />

          {/* LOWER SWITCH LAYER */}
          <g>
            <polygon points="180,190 340,110 180,30 20,110" fill="#cbd5e1" className="node-plate" />
            <polygon points="20,110 180,190 180,215 20,135" fill="#1e293b" />
            <polygon points="180,190 340,110 340,135 180,215" fill="#334155" />

            <g fill="#0f172a" stroke="#475569" strokeWidth="0.5">
              {Array.from({ length: 16 }).map((_, i) => (
                <g key={`lport-${i}`} transform={`translate(${30 + i * 9}, ${117 + i * 4.5})`}>
                  <rect x="0" y="0" width="6" height="5" rx="1" fill="#000000" />
                  <rect x="0" y="7" width="6" height="5" rx="1" fill="#000000" />
                  <circle cx="3" cy="-2" r="0.9" fill={i % 3 === 0 ? '#E51D25' : '#22c55e'} className={i % 2 === 0 ? 'led-blink' : ''} />
                  <circle cx="3" cy="14" r="0.9" fill={i % 4 === 0 ? '#E51D25' : '#22c55e'} className={i % 3 === 0 ? 'led-blink' : ''} />
                </g>
              ))}
            </g>

            <g stroke="#E51D25" strokeWidth="2.5" fill="none">
              <path d="M 60 140 Q 40 160 20 180" />
              <path d="M 95 158 Q 80 185 60 210" />
              <path d="M 140 180 Q 130 210 110 240" />
            </g>
          </g>

          {/* UPPER SWITCH LAYER */}
          <g transform="translate(0, -35)">
            <polygon points="180,190 340,110 180,30 20,110" className="top-case-poly" strokeWidth="1.5" />
            <polygon points="20,110 180,190 180,215 20,135" fill="#0f172a" />
            <polygon points="180,190 340,110 340,135 180,215" fill="#1e293b" />

            <g>
              {Array.from({ length: 16 }).map((_, i) => (
                <g key={`uport-${i}`} transform={`translate(${30 + i * 9}, ${117 + i * 4.5})`}>
                  <rect x="0" y="0" width="6" height="5" rx="1" fill="#000000" />
                  <rect x="0" y="7" width="6" height="5" rx="1" fill="#000000" />
                  <circle cx="3" cy="-2" r="0.9" fill={i % 2 === 0 ? '#22c55e' : '#E51D25'} className={i % 2 === 1 ? 'led-blink' : ''} />
                </g>
              ))}
            </g>

            {/* TOP PLATE BRANDING */}
            <g transform="translate(180, 110) rotate(-26) scale(1.1)">
              <polygon points="0,-25 20,-14 0,-3" fill="#E51D25" />
              <polygon points="0,-25 0,-3 -20,-14" fill="#FF4D54" />
              <polygon points="-20,-14 0,-3 0,18 -20,7" fill="#B31219" />
              <polygon points="20,-14 0,-3 0,18 20,7" fill="#1E1E1E" />
              <text x="-22" y="32" fontSize="22" fontWeight="900" fill="#0f172a" className="bct-text" tracking="tight">BCT</text>
              <text x="-22" y="44" fontSize="8" fontWeight="800" fill="#64748b" letterSpacing="3">NETWORKS</text>
            </g>
          </g>
        </g>

        {/* ============================================================ */}
        {/* NODE 1: CLOUD                                               */}
        {/* ============================================================ */}
        <g transform="translate(290, 80)" filter="url(#nodeShadow)">
          {/* Static Visual wrapper with scale transitions */}
          <g 
            className={`transition-transform duration-300 origin-center ${
              activeNode === 'cloud' ? 'scale-[1.08]' : 'scale-100'
            }`}
            style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
          >
            {/* Bobbing element */}
            <g className="node-bob-1">
              <ellipse cx="50" cy="70" rx="45" ry="20" fill="#e2e8f0" opacity="0.8" className="node-plate" />
              <ellipse cx="50" cy="65" rx="45" ry="20" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" className="node-plate-top" />
              
              <g transform="translate(10, 10)">
                <path 
                  d="M30,45 C15,45 10,35 15,25 C18,15 30,12 40,16 C48,8 65,8 72,16 C80,16 88,24 85,34 C92,40 85,50 75,48 L30,48 Z" 
                  className="top-case-poly" 
                  stroke={activeNode === 'cloud' ? '#E51D25' : '#cbd5e1'} 
                  strokeWidth="2" 
                />
                <path d="M 40 32 L 48 38 L 62 24" stroke="#E51D25" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </g>

              <g transform="translate(50, 100)">
                <rect 
                  className={`node-badge-rect transition-colors duration-200 ${
                    activeNode === 'cloud' ? 'node-badge-rect-active' : ''
                  }`} 
                  x="-35" y="-12" width="70" height="24" rx="12" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" 
                />
                <text 
                  className={`node-badge-text font-extrabold text-[12px] transition-colors duration-200 ${
                    activeNode === 'cloud' ? 'node-badge-text-active' : ''
                  }`} 
                  x="0" y="4" textAnchor="middle" fill="#1e293b"
                >
                  Cloud
                </text>
              </g>
            </g>
          </g>

          {/* Static Invisible Hover hit-target area */}
          <circle 
            cx="50" 
            cy="70" 
            r="65" 
            fill="transparent" 
            className="cursor-pointer"
            onMouseEnter={() => setActiveNode('cloud')}
            onMouseLeave={() => setActiveNode(null)}
          />
        </g>

        {/* ============================================================ */}
        {/* NODE 2: DATA CENTER                                         */}
        {/* ============================================================ */}
        <g transform="translate(710, 60)" filter="url(#nodeShadow)">
          <g 
            className={`transition-transform duration-300 origin-center ${
              activeNode === 'datacenter' ? 'scale-[1.08]' : 'scale-100'
            }`}
            style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
          >
            <g className="node-bob-2">
              <polygon points="70,140 140,105 70,70 0,105" fill="#e2e8f0" className="node-plate" />
              <polygon points="0,105 70,140 70,148 0,113" fill="#cbd5e1" className="node-plate-top" />
              <polygon points="70,140 140,105 140,113 70,148" fill="#94a3b8" />

              {[0, 32, 64].map((offset, idx) => (
                <g key={`rack-${idx}`} transform={`translate(${20 + offset}, ${15 - offset * 0.5})`}>
                  <polygon points="20,70 45,55 45,5 20,20" fill="#1e293b" />
                  <polygon points="20,20 45,5 25,-5 0,10" fill="#475569" />
                  <polygon points="0,10 20,20 20,70 0,60" fill="#0f172a" opacity="0.9" />

                  <line x1="4" y1="16" x2="16" y2="23" stroke="#38bdf8" strokeWidth="1.5" />
                  <line x1="4" y1="28" x2="16" y2="35" stroke="#E51D25" strokeWidth="1.5" />
                  <line x1="4" y1="40" x2="16" y2="47" stroke="#22c55e" strokeWidth="1.5" />
                  <line x1="4" y1="52" x2="16" y2="59" stroke="#E51D25" strokeWidth="1.5" />
                  
                  <circle cx="17" cy="20" r="1.2" fill="#E51D25" className="led-blink" />
                  <circle cx="17" cy="32" r="1.2" fill="#22c55e" />
                  <circle cx="17" cy="44" r="1.2" fill="#38bdf8" className="led-blink" />
                </g>
              ))}

              <g transform="translate(70, -10)">
                <rect 
                  className={`node-badge-rect transition-colors duration-200 ${
                    activeNode === 'datacenter' ? 'node-badge-rect-active' : ''
                  }`} 
                  x="-48" y="-12" width="96" height="24" rx="12" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" 
                />
                <text 
                  className={`node-badge-text font-extrabold text-[12px] transition-colors duration-200 ${
                    activeNode === 'datacenter' ? 'node-badge-text-active' : ''
                  }`} 
                  x="0" y="4" textAnchor="middle" fill="#1e293b"
                >
                  Data Center
                </text>
              </g>
            </g>
          </g>

          <circle 
            cx="70" 
            cy="80" 
            r="75" 
            fill="transparent" 
            className="cursor-pointer"
            onMouseEnter={() => setActiveNode('datacenter')}
            onMouseLeave={() => setActiveNode(null)}
          />
        </g>

        {/* ============================================================ */}
        {/* NODE 3: SECURITY                                            */}
        {/* ============================================================ */}
        <g transform="translate(820, 360)" filter="url(#nodeShadow)">
          <g 
            className={`transition-transform duration-300 origin-center ${
              activeNode === 'security' ? 'scale-[1.08]' : 'scale-100'
            }`}
            style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
          >
            <g className="node-bob-3">
              <ellipse cx="50" cy="90" rx="45" ry="20" fill="#94a3b8" className="node-plate" />
              <ellipse cx="50" cy="82" rx="45" ry="20" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" className="node-plate-top" />
              
              <ellipse cx="50" cy="65" rx="35" ry="15" fill="#cbd5e1" />
              <ellipse cx="50" cy="58" rx="35" ry="15" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />

              <g transform="translate(26, 0)">
                <path 
                  d="M24,5 L42,12 V28 C42,40 24,48 24,48 C24,48 6,40 6,28 V12 L24,5 Z" 
                  fill="#ffffff" 
                  stroke="#E51D25" 
                  strokeWidth="2.5" 
                />
                <path 
                  d="M18,25 L22,29 L30,20" 
                  stroke="#E51D25" 
                  strokeWidth="2.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  fill="none" 
                />
              </g>

              <g transform="translate(50, -12)">
                <rect 
                  className={`node-badge-rect transition-colors duration-200 ${
                    activeNode === 'security' ? 'node-badge-rect-active' : ''
                  }`} 
                  x="-40" y="-12" width="80" height="24" rx="12" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" 
                />
                <text 
                  className={`node-badge-text font-extrabold text-[12px] transition-colors duration-200 ${
                    activeNode === 'security' ? 'node-badge-text-active' : ''
                  }`} 
                  x="0" y="4" textAnchor="middle" fill="#1e293b"
                >
                  Security
                </text>
              </g>
            </g>
          </g>

          <circle 
            cx="50" 
            cy="55" 
            r="65" 
            fill="transparent" 
            className="cursor-pointer"
            onMouseEnter={() => setActiveNode('security')}
            onMouseLeave={() => setActiveNode(null)}
          />
        </g>

        {/* ============================================================ */}
        {/* NODE 4: BRANCH OFFICES                                      */}
        {/* ============================================================ */}
        <g transform="translate(720, 580)" filter="url(#nodeShadow)">
          <g 
            className={`transition-transform duration-300 origin-center ${
              activeNode === 'offices' ? 'scale-[1.08]' : 'scale-100'
            }`}
            style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
          >
            <g className="node-bob-4">
              <polygon points="70,140 140,105 70,70 0,105" fill="#e2e8f0" className="node-plate" />
              <polygon points="0,105 70,140 70,146 0,111" fill="#cbd5e1" className="node-plate-top" />
              <polygon points="70,140 140,105 140,111 70,146" fill="#94a3b8" />

              <g transform="translate(20, 20)">
                <polygon points="35,65 70,45 70,-20 35,0" fill="#475569" />
                <polygon points="0,45 35,65 35,0 0,-20" fill="#334155" />
                <polygon points="0,-20 35,-40 70,-20 35,0" fill="#64748b" />
                
                {Array.from({ length: 4 }).map((_, row) => (
                  <g key={`w1-${row}`} transform={`translate(0, ${row * 14})`}>
                    <polygon points="8,10 16,14 16,5 8,1" fill="#ffffff" opacity="0.85" />
                    <polygon points="20,17 28,21 28,12 20,8" fill="#ffffff" opacity="0.85" />
                    <polygon points="42,17 50,13 50,4 42,8" fill="#ffffff" opacity="0.85" />
                    <polygon points="54,10 62,6 62,-3 54,1" fill="#ffffff" opacity="0.85" />
                  </g>
                ))}
              </g>

              <g transform="translate(70, 45)">
                <polygon points="25,50 50,35 50, -5 25,10" fill="#334155" />
                <polygon points="0,35 25,50 25,10 0,-5" fill="#1e293b" />
                <polygon points="0,-5 25,-20 50,-5 25,10" fill="#475569" />
                
                {Array.from({ length: 3 }).map((_, row) => (
                  <g key={`w2-${row}`} transform={`translate(0, ${row * 12})`}>
                    <polygon points="5,10 12,14 12,6 5,2" fill="#38bdf8" opacity="0.9" />
                    <polygon points="15,16 22,20 22,12 15,8" fill="#38bdf8" opacity="0.9" />
                    <polygon points="30,16 37,12 37,4 30,8" fill="#38bdf8" opacity="0.9" />
                  </g>
                ))}
              </g>

              <g transform="translate(70, -15)">
                <rect 
                  className={`node-badge-rect transition-colors duration-200 ${
                    activeNode === 'offices' ? 'node-badge-rect-active' : ''
                  }`} 
                  x="-52" y="-12" width="104" height="24" rx="12" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" 
                />
                <text 
                  className={`node-badge-text font-extrabold text-[12px] transition-colors duration-200 ${
                    activeNode === 'offices' ? 'node-badge-text-active' : ''
                  }`} 
                  x="0" y="4" textAnchor="middle" fill="#1e293b"
                >
                  Branch Offices
                </text>
              </g>
            </g>
          </g>

          <circle 
            cx="70" 
            cy="70" 
            r="80" 
            fill="transparent" 
            className="cursor-pointer"
            onMouseEnter={() => setActiveNode('offices')}
            onMouseLeave={() => setActiveNode(null)}
          />
        </g>

        {/* ============================================================ */}
        {/* NODE 5: WI-FI                                               */}
        {/* ============================================================ */}
        <g transform="translate(370, 650)" filter="url(#nodeShadow)">
          <g 
            className={`transition-transform duration-300 origin-center ${
              activeNode === 'wifi' ? 'scale-[1.08]' : 'scale-100'
            }`}
            style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
          >
            <g className="node-bob-5">
              <ellipse cx="50" cy="65" rx="55" ry="25" fill="#e2e8f0" className="node-plate" />
              <ellipse cx="50" cy="58" rx="55" ry="25" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" className="node-plate-top" />

              <g transform="translate(0, -5)">
                <ellipse cx="50" cy="45" rx="45" ry="20" className="top-case-poly" strokeWidth="1.5" />
                <ellipse cx="50" cy="40" rx="22" ry="10" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" className="node-plate-top" />
                
                <ellipse cx="50" cy="40" rx="12" ry="6" stroke="#E51D25" strokeWidth="1.5" fill="none" className="wifi-ring" />
                <ellipse cx="50" cy="40" rx="8" ry="4" fill="#E51D25" filter="url(#softGlow)" />
                <circle cx="50" cy="40" r="2" fill="#ffffff" />
              </g>

              <g transform="translate(50, 95)">
                <rect 
                  className={`node-badge-rect transition-colors duration-200 ${
                    activeNode === 'wifi' ? 'node-badge-rect-active' : ''
                  }`} 
                  x="-32" y="-12" width="64" height="24" rx="12" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" 
                />
                <text 
                  className={`node-badge-text font-extrabold text-[12px] transition-colors duration-200 ${
                    activeNode === 'wifi' ? 'node-badge-text-active' : ''
                  }`} 
                  x="0" y="4" textAnchor="middle" fill="#1e293b"
                >
                  Wi-Fi
                </text>
              </g>
            </g>
          </g>

          <circle 
            cx="50" 
            cy="55" 
            r="65" 
            fill="transparent" 
            className="cursor-pointer"
            onMouseEnter={() => setActiveNode('wifi')}
            onMouseLeave={() => setActiveNode(null)}
          />
        </g>

        {/* ============================================================ */}
        {/* NODE 6: USERS                                               */}
        {/* ============================================================ */}
        <g transform="translate(90, 550)" filter="url(#nodeShadow)">
          <g 
            className={`transition-transform duration-300 origin-center ${
              activeNode === 'users' ? 'scale-[1.08]' : 'scale-100'
            }`}
            style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
          >
            <g className="node-bob-6">
              <polygon points="60,110 120,80 60,50 0,80" fill="#e2e8f0" opacity="0.6" className="node-plate" />

              <g transform="translate(15, 20)">
                <polygon points="0,65 50,40 100,65 50,90" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="1" className="node-plate-top" />
                <polygon points="0,65 50,90 50,95 0,70" fill="#94a3b8" />
                <polygon points="50,90 100,65 100,70 50,95" fill="#64748b" />
                <polygon points="15,62 48,45 80,62 48,78" fill="#1e293b" />

                <polygon points="12,40 62,15 62,-35 12,-10" fill="#0f172a" stroke="#475569" strokeWidth="1.5" />
                <polygon points="15,36 59,14 59,-30 15,-8" fill="#ffffff" />
                
                <line x1="20" y1="0" x2="45" y2="-12" stroke="#E51D25" strokeWidth="2" strokeLinecap="round" />
                <line x1="20" y1="10" x2="52" y2="-5" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" />
                <line x1="20" y1="20" x2="38" y2="10" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" />
              </g>

              <g transform="translate(65, 125)">
                <rect 
                  className={`node-badge-rect transition-colors duration-200 ${
                    activeNode === 'users' ? 'node-badge-rect-active' : ''
                  }`} 
                  x="-32" y="-12" width="64" height="24" rx="12" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" 
                />
                <text 
                  className={`node-badge-text font-extrabold text-[12px] transition-colors duration-200 ${
                    activeNode === 'users' ? 'node-badge-text-active' : ''
                  }`} 
                  x="0" y="4" textAnchor="middle" fill="#1e293b"
                >
                  Users
                </text>
              </g>
            </g>
          </g>

          <circle 
            cx="65" 
            cy="75" 
            r="70" 
            fill="transparent" 
            className="cursor-pointer"
            onMouseEnter={() => setActiveNode('users')}
            onMouseLeave={() => setActiveNode(null)}
          />
        </g>

        {/* ============================================================ */}
        {/* NODE 7: MANAGEMENT                                          */}
        {/* ============================================================ */}
        <g transform="translate(40, 310)" filter="url(#nodeShadow)">
          <g 
            className={`transition-transform duration-300 origin-center ${
              activeNode === 'management' ? 'scale-[1.08]' : 'scale-100'
            }`}
            style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
          >
            <g className="node-bob-7">
              <ellipse cx="50" cy="115" rx="30" ry="12" fill="#cbd5e1" className="node-plate" />
              <path d="M 50 115 L 50 85" stroke="#94a3b8" strokeWidth="4" />

              <g transform="translate(0, 10)">
                <rect x="0" y="0" width="100" height="70" rx="6" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" className="node-plate-top" />
                <rect x="5" y="5" width="90" height="60" rx="3" fill="#0f172a" />

                <path d="M 12 45 L 30 25 L 50 35 L 85 15" stroke="#E51D25" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                <circle cx="85" cy="15" r="3" fill="#22c55e" className="led-blink" />
                
                <rect x="12" y="52" width="20" height="6" rx="2" fill="#38bdf8" opacity="0.8" />
                <rect x="36" y="52" width="20" height="6" rx="2" fill="#E51D25" opacity="0.8" />
                <rect x="60" y="52" width="25" height="6" rx="2" fill="#22c55e" opacity="0.8" />
              </g>

              <g transform="translate(50, -12)">
                <rect 
                  className={`node-badge-rect transition-colors duration-200 ${
                    activeNode === 'management' ? 'node-badge-rect-active' : ''
                  }`} 
                  x="-48" y="-12" width="96" height="24" rx="12" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" 
                />
                <text 
                  className={`node-badge-text font-extrabold text-[12px] transition-colors duration-200 ${
                    activeNode === 'management' ? 'node-badge-text-active' : ''
                  }`} 
                  x="0" y="4" textAnchor="middle" fill="#1e293b"
                >
                  Management
                </text>
              </g>
            </g>
          </g>

          <circle 
            cx="50" 
            cy="65" 
            r="65" 
            fill="transparent" 
            className="cursor-pointer"
            onMouseEnter={() => setActiveNode('management')}
            onMouseLeave={() => setActiveNode(null)}
          />
        </g>
      </svg>

      {/* Dynamic Hover Context Tooltip */}
      {activeNode && (
        <div className="absolute top-4 right-4 bg-slate-900/90 text-white text-xs font-bold px-3.5 py-2 rounded-xl shadow-2xl backdrop-blur-md transition-all border border-slate-700 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#E51D25] animate-ping" />
          <span>Active Node: {nodes.find(n => n.id === activeNode)?.label}</span>
        </div>
      )}
    </div>
  );
};

export default HeroNetworkDiagram;

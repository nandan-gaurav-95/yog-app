export default function PumpDiagram() {
  return (
    <svg viewBox="0 0 340 300" width="340" height="300" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"   stopColor="#35312b" />
          <stop offset="100%" stopColor="#181613" />
        </linearGradient>
        <linearGradient id="headGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor="#c8a96e" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#c8a96e" stopOpacity="0.05" />
        </linearGradient>
        <marker id="flowArrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill="#c8a96e" />
        </marker>
        <marker id="flowArrowBlue" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill="#60a5fa" />
        </marker>
      </defs>

      {/* ── Base plate ── */}
      <rect x="40" y="230" width="260" height="14" rx="3" fill="#211f1d" stroke="#35312b" strokeWidth="1.5" />
      <rect x="60"  y="240" width="12" height="20" rx="1" fill="#181614" />
      <rect x="268" y="240" width="12" height="20" rx="1" fill="#181614" />

      {/* ── Motor housing ── */}
      <rect x="45" y="130" width="110" height="102" rx="6" fill="url(#bodyGrad)" stroke="#484236" strokeWidth="1.5" />
      <rect x="45" y="130" width="110" height="18"  rx="6" fill="#383228" />
      {/* Motor fins */}
      {[0,1,2,3,4].map(i => (
        <rect key={i} x={50 + i * 20} y="150" width="10" height="70" rx="1" fill="#211f1d" stroke="#35312b" strokeWidth="0.5" opacity="0.6" />
      ))}
      {/* Motor shaft circle */}
      <circle cx="100" cy="190" r="28" fill="#181613" stroke="#484236" strokeWidth="1.5" />
      <circle cx="100" cy="190" r="18" fill="#0d0c0b" stroke="#c8a96e" strokeWidth="1" opacity="0.6" />
      <circle cx="100" cy="190" r="7"  fill="#c8a96e" opacity="0.5" />

      {/* ── Pump head ── */}
      <rect x="165" y="115" width="110" height="118" rx="5" fill="url(#bodyGrad)" stroke="#484236" strokeWidth="1.5" />
      <rect x="175" y="130" width="90"  height="72"  rx="3" fill="url(#headGrad)" stroke="#c8a96e" strokeWidth="0.8" opacity="0.5" />
      {/* Bolts */}
      {[[170,120],[265,120],[170,225],[265,225]].map(([x,y],i) => (
        <circle key={i} cx={x} cy={y} r="4" fill="#211f1d" stroke="#35312b" strokeWidth="1" />
      ))}
      {/* Diaphragm label */}
      <text x="220" y="170" fontFamily="DM Sans, sans-serif" fontSize="9" fill="#4a4540" textAnchor="middle" letterSpacing="1">DIAPHRAGM</text>
      <line x1="195" y1="162" x2="245" y2="162" stroke="#c8a96e" strokeWidth="0.5" strokeDasharray="3,3" opacity="0.4" />

      {/* ── Connecting rod ── */}
      <rect x="152" y="182" width="17" height="10" rx="3" fill="#c8a96e" opacity="0.7" />

      {/* ── Inlet pipe (top) ── */}
      <rect x="220" y="60" width="14" height="58" rx="2" fill="#211f1d" stroke="#35312b" strokeWidth="1" />
      <rect x="210" y="56" width="34" height="10" rx="2" fill="#35312b" stroke="#484236" strokeWidth="1" />
      <line x1="227" y1="40" x2="227" y2="58" stroke="#60a5fa" strokeWidth="2" markerEnd="url(#flowArrowBlue)" />
      <text x="227" y="32" fontFamily="DM Sans, sans-serif" fontSize="9" fill="#60a5fa" textAnchor="middle">INLET</text>

      {/* ── Outlet pipe (right) ── */}
      <rect x="275" y="158" width="52" height="14" rx="2" fill="#211f1d" stroke="#35312b" strokeWidth="1" />
      <rect x="323" y="148" width="10" height="34" rx="2" fill="#35312b" stroke="#484236" strokeWidth="1" />
      <line x1="340" y1="165" x2="328" y2="165" stroke="#c8a96e" strokeWidth="2" strokeDasharray="4,2" />
      <text x="348" y="160" fontFamily="DM Sans, sans-serif" fontSize="9" fill="#c8a96e" textAnchor="start">OUT</text>

      {/* ── Pressure gauge (top right of head) ── */}
      <circle cx="255" cy="108" r="12" fill="#181613" stroke="#c8a96e" strokeWidth="1" opacity="0.7" />
      <circle cx="255" cy="108" r="7"  fill="#0d0c0b" />
      <line x1="255" y1="108" x2="260" y2="103" stroke="#c8a96e" strokeWidth="1.5" opacity="0.8" />
      <text x="255" y="124" fontFamily="DM Sans, sans-serif" fontSize="7" fill="#5a5650" textAnchor="middle">GAUGE</text>

      {/* ── Label ── */}
      <text x="170" y="268" fontFamily="Cormorant Garamond, serif" fontSize="11" fill="#3a3830" textAnchor="middle" letterSpacing="3">
        METERING PUMP
      </text>
    </svg>
  );
}

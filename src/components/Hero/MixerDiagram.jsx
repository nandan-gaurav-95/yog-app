export default function MixerDiagram() {
  return (
    <svg viewBox="0 0 320 280" width="320" height="280" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="pipeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"   stopColor="#2a3040" />
          <stop offset="50%"  stopColor="#1a1f2e" />
          <stop offset="100%" stopColor="#0f131f" />
        </linearGradient>
        <marker id="arrowGold" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill="#c8a96e" />
        </marker>
        <marker id="arrowBlue" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill="#60a5fa" />
        </marker>
      </defs>

      {/* Pipe housing */}
      <rect x="40" y="100" width="240" height="80" rx="4" fill="url(#pipeGrad)" stroke="#3a4055" strokeWidth="1.5" />
      <rect x="40" y="100" width="240" height="14" rx="4" fill="#2e3548" />
      <rect x="40" y="166" width="240" height="14" rx="4" fill="#1a1e2e" />

      {/* Mixing elements */}
      {[80, 105, 130, 155, 180, 205, 230].map((x, i) => (
        <g key={i} transform={`translate(${x}, 140) rotate(${i % 2 === 0 ? 45 : -45})`}>
          <rect x="-4" y="-22" width="8" height="44" rx="2" fill="#c8a96e" opacity="0.75" />
        </g>
      ))}

      {/* Inlet arrows */}
      <line x1="10" y1="140" x2="40" y2="140" stroke="#60a5fa" strokeWidth="2.5" markerEnd="url(#arrowBlue)" />
      <line x1="10" y1="125" x2="40" y2="125" stroke="#60a5fa" strokeWidth="1.5" strokeDasharray="4,3" />

      {/* Outlet arrow */}
      <line x1="280" y1="140" x2="310" y2="140" stroke="#c8a96e" strokeWidth="2.5" markerEnd="url(#arrowGold)" />

      {/* Labels */}
      <text x="20"  y="118" fontFamily="DM Sans, sans-serif" fontSize="9" fill="#60a5fa"  textAnchor="middle">IN</text>
      <text x="295" y="118" fontFamily="DM Sans, sans-serif" fontSize="9" fill="#c8a96e"  textAnchor="middle">OUT</text>
      <text x="160" y="230" fontFamily="Cormorant Garamond, serif" fontSize="13" fill="#5a5650" textAnchor="middle" letterSpacing="3">MODULAR ELEMENTS</text>
      <text x="35"  y="95"  fontFamily="DM Sans, sans-serif" fontSize="9" fill="#3a4055">HOUSING</text>

      {/* Pointer lines */}
      <line x1="120" y1="222" x2="120" y2="185" stroke="#2a2f40" strokeWidth="1" />
      <line x1="200" y1="222" x2="200" y2="185" stroke="#2a2f40" strokeWidth="1" />
      <rect x="38" y="97" width="244" height="4" rx="2" fill="#c8a96e" opacity="0.15" />
    </svg>
  );
}

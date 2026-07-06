const STEPS = [
  { step: '01', title: 'Flow Division',       desc: 'Incoming fluid stream splits as it encounters the first modular element, creating parallel flow paths.' },
  { step: '02', title: 'Flow Reversal',        desc: 'Each successive element reverses and redirects the divided streams, creating a geometric progression pattern.' },
  { step: '03', title: 'Radial Mixing',        desc: 'Micro-scale turbulence within elements forces cross-sectional distribution of all fluid components.' },
  { step: '04', title: 'Complete Homogeneity', desc: 'Exit streams achieve complete uniformity under laminar, transitional, and turbulent flow conditions.' },
];

function FlowIllustration() {
  return (
    <svg viewBox="0 0 360 220" width="100%" xmlns="http://www.w3.org/2000/svg" style={{ maxWidth: 420 }}>
      <defs>
        <marker id="arr" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
          <path d="M0,0 L0,6 L6,3 z" fill="#c8a96e88" />
        </marker>
      </defs>

      {/* Outer rings */}
      {[0, 1, 2, 3].map(i => (
        <circle key={i} cx={30 + i * 80} cy={60} r={28} fill="none" stroke="#3a352e" strokeWidth="1.5" />
      ))}

      {/* Stage 1 — raw input */}
      <circle cx={30}  cy={60} r={24} fill="#211f1d" />
      <circle cx={30}  cy={60} r={14} fill="#2563eb" opacity="0.7" />
      <circle cx={30}  cy={60} r={6}  fill="#60a5fa" />

      {/* Stage 2 — division */}
      <circle cx={110} cy={60} r={24} fill="#211f1d" />
      <path d="M86,50 L120,50 M86,60 L120,60 M86,70 L120,70" stroke="#60a5fa" strokeWidth="3" opacity="0.6" />

      {/* Stage 3 — radial mix */}
      <circle cx={190} cy={60} r={24} fill="#211f1d" />
      {[0, 1, 2, 3, 4, 5].map(a => (
        <line
          key={a}
          x1={190 + 20 * Math.cos(a * 60 * Math.PI / 180)}
          y1={60  + 20 * Math.sin(a * 60 * Math.PI / 180)}
          x2={190 + 8  * Math.cos(a * 60 * Math.PI / 180)}
          y2={60  + 8  * Math.sin(a * 60 * Math.PI / 180)}
          stroke="#c8a96e" strokeWidth="2" opacity="0.7"
        />
      ))}
      <circle cx={190} cy={60} r={6} fill="#c8a96e" opacity="0.7" />

      {/* Stage 4 — uniform */}
      <circle cx={270} cy={60} r={24} fill="#1e2d1e" />
      {[0, 1, 2, 3, 4, 5, 6, 7, 8].map(i => (
        <circle
          key={i}
          cx={270 + (i % 3 - 1) * 9}
          cy={60  + (Math.floor(i / 3) - 1) * 9}
          r={3} fill="#4ade80" opacity="0.6"
        />
      ))}

      {/* Labels */}
      {['Input', 'Division', 'Radial Mix', 'Uniform'].map((label, i) => (
        <text key={label} x={30 + i * 80} y={96} fontFamily="DM Sans, sans-serif" fontSize="9" fill="#5a5650" textAnchor="middle">
          {label}
        </text>
      ))}

      {/* Arrows between stages */}
      {[0, 1, 2].map(i => (
        <line key={i} x1={58 + i * 80} y1={60} x2={82 + i * 80} y2={60}
          stroke="#c8a96e" strokeWidth="1" strokeDasharray="3,2" markerEnd="url(#arr)" />
      ))}

      <text x={180} y={130} fontFamily="Cormorant Garamond, serif" fontSize="11" fill="#4a4540" textAnchor="middle" letterSpacing="2">
        CROSS-SECTION VIEW
      </text>
    </svg>
  );
}

export default function HowItWorks() {
  return (
    <section className="section">
      <div className="container">
        <div className="gold-line" />
        <span className="tag">Working Principle</span>
        <h2 className="display-font" style={{ fontSize: 42, fontWeight: 400, marginBottom: 48 }}>How It Works</h2>

        <div className="grid-2" style={{ gap: 40 }}>
          {/* Steps */}
          <div>
            {STEPS.map(({ step, title, desc }) => (
              <div key={step} style={{ display: 'flex', gap: 20, marginBottom: 32 }}>
                <div className="display-font" style={{ fontSize: 36, color: '#c8a96e44', fontWeight: 700, minWidth: 48, lineHeight: 1 }}>
                  {step}
                </div>
                <div>
                  <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, fontWeight: 500, color: '#c8a96e', marginBottom: 6, letterSpacing: '0.04em' }}>
                    {title}
                  </h3>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: '#8a8070', lineHeight: 1.7 }}>
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Illustration */}
          <div>
            <FlowIllustration />
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: '#5a5650', textAlign: 'center', marginTop: 12 }}>
              Cross-sectional fluid distribution through modular elements
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

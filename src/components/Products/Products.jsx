import { useState } from 'react';
import { PRODUCTS } from '../../data/constants';

export default function Products() {
  const [activeId, setActiveId] = useState(PRODUCTS[0].id);
  const active = PRODUCTS.find(p => p.id === activeId);

  return (
    <section id="products" className="section section-alt">
      <div className="container">
        <div className="gold-line" />
        <span className="tag">Our Product Range</span>
        <h2 className="display-font" style={{ fontSize: 42, fontWeight: 400, marginBottom: 8 }}>
          Metering Pump Solutions
        </h2>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: '#7a7268', marginBottom: 40, maxWidth: 560, lineHeight: 1.8 }}>
          We offer various models of plunger and diaphragm type dosing pumps and chemical dosing systems selected as per compatibility of the liquid.
        </p>

        {/* ── Tab Selector ── */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 40 }}>
          {PRODUCTS.map(p => (
            <button
              key={p.id}
              onClick={() => setActiveId(p.id)}
              style={{
                background:    activeId === p.id ? p.color : 'transparent',
                color:         activeId === p.id ? '#0b0f1a' : '#8a8070',
                border:        `1px solid ${activeId === p.id ? p.color : '#2a2f40'}`,
                padding:       '8px 18px',
                fontFamily:    "'DM Sans', sans-serif",
                fontSize:      13,
                fontWeight:    activeId === p.id ? 500 : 400,
                cursor:        'pointer',
                transition:    'all 0.2s',
                letterSpacing: '0.03em',
              }}
            >
              {p.title}
            </button>
          ))}
        </div>

        {/* ── Active Product Detail ── */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40 }}>

          {/* Left — Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <div style={{ width: 4, height: 32, background: active.color, borderRadius: 2 }} />
              <div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: active.color, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  {active.tag}
                </div>
                <h3 className="display-font" style={{ fontSize: 28, fontWeight: 400, color: '#e8e4d9' }}>
                  {active.title}
                </h3>
              </div>
            </div>

            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: '#8a8070', lineHeight: 1.8, marginBottom: 24 }}>
              {active.desc}
            </p>

            {/* Key Features */}
            <div style={{ marginBottom: 24 }}>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: active.color, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 12 }}>
                Key Design Features
              </p>
              {active.features.map((f, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, marginBottom: 8, alignItems: 'flex-start' }}>
                  <span style={{ color: active.color, fontSize: 14, marginTop: 2, flexShrink: 0 }}>◆</span>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: '#b8b0a0', lineHeight: 1.6 }}>{f}</span>
                </div>
              ))}
            </div>

            {/* Materials */}
            <div style={{ background: '#0f131f', border: '1px solid #1e2332', padding: '14px 18px', marginBottom: 12 }}>
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: '#5a5650', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Liquid Contact Materials (Wetted Parts):
              </span>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: '#8a8070', marginTop: 4, lineHeight: 1.6 }}>
                {active.materials}
              </p>
            </div>

            {/* Application */}
            <div style={{ background: '#0f131f', border: `1px solid ${active.color}33`, padding: '14px 18px' }}>
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: active.color, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Application:
              </span>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: '#8a8070', marginTop: 4, lineHeight: 1.6 }}>
                {active.application}
              </p>
            </div>
          </div>

          {/* Right — Models Table */}
          <div>
            {active.models.length > 0 ? (
              <div>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: active.color, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 16 }}>
                  Standard Models
                </p>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: "'DM Sans', sans-serif" }}>
                  <thead>
                    <tr style={{ background: '#0f131f' }}>
                      {['Sr. No.', 'Pump Model', 'Capacity Max (L.P.H.)', 'Pressure Max (kg/sq.cm)'].map(h => (
                        <th key={h} style={{ padding: '12px 14px', fontSize: 11, color: '#5a5650', letterSpacing: '0.06em', textTransform: 'uppercase', borderBottom: `2px solid ${active.color}44`, textAlign: 'left', fontWeight: 500 }}>
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {active.models.map(({ model, capacity, pressure }, i) => (
                      <tr key={model} style={{ background: i % 2 === 0 ? '#111520' : '#0f131f', transition: 'background 0.15s' }}>
                        <td style={{ padding: '12px 14px', fontSize: 13, color: '#5a5650', borderBottom: '1px solid #1e2332' }}>{i + 1}</td>
                        <td style={{ padding: '12px 14px', fontSize: 14, color: active.color, fontWeight: 500, borderBottom: '1px solid #1e2332' }}>{model}</td>
                        <td style={{ padding: '12px 14px', fontSize: 13, color: '#b8b0a0', borderBottom: '1px solid #1e2332' }}>{capacity}</td>
                        <td style={{ padding: '12px 14px', fontSize: 13, color: '#b8b0a0', borderBottom: '1px solid #1e2332' }}>{pressure}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                {/* Decorative pump illustration */}
                <PumpIllustration color={active.color} />
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: active.color, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  Configuration Options
                </p>
                <div style={{ background: '#0f131f', border: `1px solid ${active.color}33`, padding: 28, textAlign: 'center' }}>
                  <div style={{ fontSize: 48, marginBottom: 12 }}>⚙️</div>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: '#7a7268', lineHeight: 1.8 }}>
                    Custom configurations available as per customer requirement. Contact our engineers for sizing and selection.
                  </p>
                  <button style={{
                    marginTop: 20,
                    background: active.color,
                    color: '#0b0f1a',
                    border: 'none',
                    padding: '10px 24px',
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 13,
                    fontWeight: 500,
                    cursor: 'pointer',
                    letterSpacing: '0.06em',
                  }}>
                    Request Quote
                  </button>
                </div>
                <PumpIllustration color={active.color} />
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}

// SVG pump illustration
function PumpIllustration({ color }) {
  return (
    <svg viewBox="0 0 340 160" width="100%" style={{ marginTop: 28, opacity: 0.85 }} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={`pump-${color}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1a1f2e" />
          <stop offset="100%" stopColor="#0f131f" />
        </linearGradient>
      </defs>

      {/* Base plate */}
      <rect x="40" y="110" width="260" height="12" rx="2" fill="#1a1f2e" stroke="#2a2f40" strokeWidth="1" />

      {/* Motor body */}
      <rect x="50" y="60" width="80" height="52" rx="4" fill={`url(#pump-${color})`} stroke="#2a2f40" strokeWidth="1.5" />
      <circle cx="90" cy="86" r="18" fill="#0f131f" stroke={color} strokeWidth="1.5" opacity="0.7" />
      <circle cx="90" cy="86" r="8"  fill={color} opacity="0.5" />

      {/* Pump head */}
      <rect x="140" y="50" width="100" height="62" rx="3" fill={`url(#pump-${color})`} stroke="#2a2f40" strokeWidth="1.5" />
      <rect x="155" y="65" width="70"  height="32" rx="2" fill="#0a0d16" stroke={color} strokeWidth="1" opacity="0.5" />

      {/* Connecting rod */}
      <rect x="128" y="82" width="16" height="8" rx="2" fill={color} opacity="0.6" />

      {/* Inlet pipe */}
      <rect x="240" y="68" width="60" height="12" rx="2" fill="#1a1f2e" stroke="#2a2f40" strokeWidth="1" />
      <rect x="295" y="64" width="8"  height="20" rx="1" fill={color} opacity="0.5" />

      {/* Outlet pipe */}
      <rect x="240" y="96" width="60" height="12" rx="2" fill="#1a1f2e" stroke="#2a2f40" strokeWidth="1" />
      <rect x="295" y="92" width="8"  height="20" rx="1" fill={color} opacity="0.5" />

      {/* Flow arrows */}
      <path d="M308,74 L320,74 L316,70 M320,74 L316,78" stroke={color} strokeWidth="1.5" fill="none" opacity="0.8" />
      <path d="M308,102 L320,102 L316,98 M320,102 L316,106" stroke={color} strokeWidth="1.5" fill="none" opacity="0.8" />

      {/* Label */}
      <text x="170" y="148" fontFamily="DM Sans, sans-serif" fontSize="10" fill="#3a3830" textAnchor="middle" letterSpacing="2">
        DOSEWELL METERING PUMP
      </text>
    </svg>
  );
}

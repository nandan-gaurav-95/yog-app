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
                color:         activeId === p.id ? '#0f0e0c' : '#8a8070',
                border:        `1px solid ${activeId === p.id ? p.color : '#3a352e'}`,
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
            <div style={{ background: '#181614', border: '1px solid #2e2a24', padding: '14px 18px', marginBottom: 12 }}>
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: '#5a5650', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Liquid Contact Materials (Wetted Parts):
              </span>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: '#8a8070', marginTop: 4, lineHeight: 1.6 }}>
                {active.materials}
              </p>
            </div>

            {/* Application */}
            <div style={{ background: '#181614', border: `1px solid ${active.color}33`, padding: '14px 18px' }}>
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: active.color, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Application:
              </span>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: '#8a8070', marginTop: 4, lineHeight: 1.6 }}>
                {active.application}
              </p>
            </div>
          </div>

          {/* Right — Real Image + Models Table */}
          <div>
            {/* Real pump photo */}
            <div style={{
              background: '#181614',
              border: `1px solid ${active.color}44`,
              marginBottom: 24,
              overflow: 'hidden',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              minHeight: 220,
              padding: 12,
            }}>
              <img
                src={active.image}
                alt={active.title}
                style={{
                  maxWidth: '100%',
                  maxHeight: 240,
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 4px 20px rgba(0,0,0,0.5))',
                  transition: 'transform 0.3s',
                }}
                onMouseOver={e => e.currentTarget.style.transform = 'scale(1.04)'}
                onMouseOut={e  => e.currentTarget.style.transform = 'scale(1)'}
              />
            </div>

            {/* Models Table */}
            {active.models.length > 0 ? (
              <div>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: active.color, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 12 }}>
                  Standard Models
                </p>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: "'DM Sans', sans-serif" }}>
                  <thead>
                    <tr style={{ background: '#181614' }}>
                      {['Sr.', 'Model', 'Capacity (LPH)', 'Pressure (kg/cm²)'].map(h => (
                        <th key={h} style={{ padding: '10px 12px', fontSize: 11, color: '#5a5650', letterSpacing: '0.04em', textTransform: 'uppercase', borderBottom: `2px solid ${active.color}44`, textAlign: 'left', fontWeight: 500 }}>
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {active.models.map(({ model, capacity, pressure }, i) => (
                      <tr key={model} style={{ background: i % 2 === 0 ? '#1d1b18' : '#181614' }}>
                        <td style={{ padding: '10px 12px', fontSize: 12, color: '#5a5650', borderBottom: '1px solid #2e2a24' }}>{i + 1}</td>
                        <td style={{ padding: '10px 12px', fontSize: 13, color: active.color, fontWeight: 500, borderBottom: '1px solid #2e2a24' }}>{model}</td>
                        <td style={{ padding: '10px 12px', fontSize: 13, color: '#b8b0a0', borderBottom: '1px solid #2e2a24' }}>{capacity}</td>
                        <td style={{ padding: '10px 12px', fontSize: 13, color: '#b8b0a0', borderBottom: '1px solid #2e2a24' }}>{pressure}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div style={{ background: '#181614', border: `1px solid ${active.color}33`, padding: 24, textAlign: 'center' }}>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: '#7a7268', lineHeight: 1.8, marginBottom: 16 }}>
                  Custom configurations available as per customer requirement.
                </p>
                <a href="#contact" style={{
                  display: 'inline-block',
                  background: active.color, color: '#0f0e0c',
                  padding: '10px 24px', textDecoration: 'none',
                  fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 500,
                }}>
                  Request Quote
                </a>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}

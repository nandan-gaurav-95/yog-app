import { FLOW_PATTERNS } from '../../data/constants';

export default function FlowPatterns() {
  return (
    <section className="section">
      <div className="container">
        <div className="gold-line" />
        <span className="tag">Configuration</span>
        <h2 className="display-font" style={{ fontSize: 42, fontWeight: 400, marginBottom: 16 }}>Configuration & Flow Patterns</h2>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: '#7a7268', maxWidth: 600, lineHeight: 1.8, marginBottom: 48 }}>
          Static Mixers can be installed horizontally, vertically, or inclined. Element geometry and count are application-specific.
        </p>

        <div className="grid-3" style={{ marginBottom: 48 }}>
          {FLOW_PATTERNS.map(({ label, desc, color }) => (
            <div key={label} className="card" style={{ borderTop: `2px solid ${color}` }}>
              <div style={{ width: 10, height: 10, borderRadius: '50%', background: color, marginBottom: 16 }} />
              <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, fontWeight: 500, color: '#e8e4d9', marginBottom: 8 }}>
                {label}
              </h3>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: '#7a7268', lineHeight: 1.6 }}>{desc}</p>
            </div>
          ))}
        </div>

        <div style={{ background: '#111520', border: '1px solid #1e2332', padding: '24px 32px' }}>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: '#8a8070', lineHeight: 1.8 }}>
            <span style={{ color: '#c8a96e' }}>Note:</span> Mixer length and number of elements is determined by Mixrite engineers based on your specific application, fluid properties, and required flow regime.
          </p>
        </div>
      </div>
    </section>
  );
}

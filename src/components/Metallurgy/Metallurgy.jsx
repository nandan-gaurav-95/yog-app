import { MATERIALS, END_CONNECTIONS } from '../../data/constants';

export default function Metallurgy() {
  return (
    <section className="section">
      <div className="container">
        <div className="grid-2" style={{ gap: 60, alignItems: 'start' }}>

          {/* End Connections */}
          <div>
            <div className="gold-line" />
            <span className="tag">End Connections</span>
            <h2 className="display-font" style={{ fontSize: 36, fontWeight: 400, marginBottom: 24 }}>Connection Types</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {END_CONNECTIONS.map(e => (
                <div key={e} style={{ background: '#1d1b18', border: '1px solid #c8a96e44', padding: '10px 20px', fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: '#c8a96e', letterSpacing: '0.04em' }}>
                  {e}
                </div>
              ))}
            </div>
          </div>

          {/* Metallurgy */}
          <div>
            <div className="gold-line" />
            <span className="tag">Metallurgy</span>
            <h2 className="display-font" style={{ fontSize: 36, fontWeight: 400, marginBottom: 24 }}>Materials of Construction</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
              {MATERIALS.map(m => (
                <span key={m} className="pill">{m}</span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

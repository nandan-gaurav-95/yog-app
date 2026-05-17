import { ACCESSORIES, SKID_COMPONENTS } from '../../data/constants';

export default function AccessoriesAndSkid() {
  return (
    <section id="accessories" className="section section-alt">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'start' }}>

          {/* Accessories */}
          <div>
            <div className="gold-line" />
            <span className="tag">Add-ons</span>
            <h2 className="display-font" style={{ fontSize: 36, fontWeight: 400, marginBottom: 24 }}>
              Accessories for Pumps & Dosing Systems
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {ACCESSORIES.map((item, i) => (
                <div key={item} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 14,
                  background: '#0f131f',
                  border: '1px solid #1e2332',
                  padding: '14px 18px',
                  transition: 'border-color 0.2s',
                }}>
                  <span style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 18,
                    color: '#c8a96e44',
                    minWidth: 24,
                    fontWeight: 700,
                  }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: '#b8b0a0' }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Skid Mounted System */}
          <div id="skid">
            <div className="gold-line" />
            <span className="tag">Turnkey Solution</span>
            <h2 className="display-font" style={{ fontSize: 36, fontWeight: 400, marginBottom: 16 }}>
              Complete Skid Mounted Chemical Dosing System
            </h2>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: '#7a7268', lineHeight: 1.8, marginBottom: 24 }}>
              We design & manufacture dosing systems as per international standards & customer requirements. All components are checked as per the quality plan by qualified engineers before manufacturing. These skid mounted dosing packages are used for chlorine dosing, boiler chemical dosing, oil heating & pumping units and other such duties.
            </p>

            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: '#c8a96e', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 14 }}>
              System Components:
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {SKID_COMPONENTS.map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <span style={{ color: '#c8a96e', fontSize: 14, marginTop: 2, flexShrink: 0 }}>◆</span>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: '#b8b0a0', lineHeight: 1.6 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

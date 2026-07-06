import { ACCESSORIES, SKID_COMPONENTS } from '../../data/constants';

export default function AccessoriesAndSkid() {
  return (
    <section id="accessories" className="section section-alt">
      <div className="container">

        {/* Accessories */}
        <div style={{ marginBottom: 64 }}>
          <div className="gold-line" />
          <span className="tag">Add-ons</span>
          <h2 className="display-font" style={{ fontSize: 36, fontWeight: 400, marginBottom: 24 }}>
            Accessories for Pumps & Dosing Systems
          </h2>

          {/* Real accessories image */}
          <div style={{ background: '#181614', border: '1px solid #2e2a24', padding: 20, marginBottom: 24 }}>
            <img
              src="/assets/pumps/accessories.jpeg"
              alt="Pump Accessories"
              style={{ width: '100%', objectFit: 'contain', maxHeight: 160 }}
            />
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            {ACCESSORIES.map((item, i) => (
              <div key={item} style={{
                display: 'flex', alignItems: 'center', gap: 10,
                background: '#181614', border: '1px solid #2e2a24',
                padding: '12px 18px',
              }}>
                <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 16, color: '#c8a96e44', fontWeight: 700 }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: '#b8b0a0' }}>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Skid System */}
        <div id="skid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'start' }}>

          {/* Real skid image */}
          <div>
            <div className="gold-line" />
            <span className="tag">Turnkey Solution</span>
            <h2 className="display-font" style={{ fontSize: 32, fontWeight: 400, marginBottom: 20 }}>
              Complete Skid Mounted Chemical Dosing System
            </h2>
            <div style={{ background: '#181614', border: '1px solid #c8a96e22', overflow: 'hidden' }}>
              <img
                src="/assets/pumps/skid_system.jpeg"
                alt="Skid Mounted Chemical Dosing System"
                style={{ width: '100%', objectFit: 'cover', maxHeight: 280, display: 'block' }}
              />
            </div>
          </div>

          {/* Description + components */}
          <div style={{ paddingTop: 60 }}>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: '#7a7268', lineHeight: 1.8, marginBottom: 24 }}>
              We design & manufacture dosing systems as per international standards & customer requirements. Each component is checked by qualified engineers. Used for chlorine dosing, boiler chemical dosing, oil heating & pumping units.
            </p>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: '#c8a96e', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 14 }}>
              System Incorporates:
            </p>
            {SKID_COMPONENTS.map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', marginBottom: 8 }}>
                <span style={{ color: '#c8a96e', fontSize: 14, marginTop: 2, flexShrink: 0 }}>◆</span>
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: '#b8b0a0', lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

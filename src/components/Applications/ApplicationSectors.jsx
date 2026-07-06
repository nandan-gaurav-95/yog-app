import { APPLICATION_SECTORS } from '../../data/constants';

export default function ApplicationSectors() {
  return (
    <section id="applications" className="section">
      <div className="container">
        <div className="gold-line" />
        <span className="tag">Application Sectors</span>
        <h2 className="display-font" style={{ fontSize: 42, fontWeight: 400, marginBottom: 12 }}>
          Industries We Serve
        </h2>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: '#7a7268', marginBottom: 48, maxWidth: 560, lineHeight: 1.8 }}>
          Chemdose Metering Pumps are widely adopted across process industries for precise chemical dosing requirements.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {APPLICATION_SECTORS.map(({ industry, color, items }) => (
            <div key={industry} style={{
              background: '#1d1b18',
              borderLeft: `3px solid ${color}`,
              padding: '20px 28px',
              transition: 'background 0.2s',
            }}>
              <h3 style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 13,
                fontWeight: 500,
                color: color,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: 12,
              }}>
                {industry}
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {items.map(item => (
                  <span key={item} style={{
                    background: '#181614',
                    border: `1px solid ${color}22`,
                    color: '#b8b0a0',
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 12,
                    padding: '4px 12px',
                  }}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

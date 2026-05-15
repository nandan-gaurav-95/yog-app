const ITEMS = [
  { num: 'I',   title: 'End Connection',          desc: 'Flanged, Screwed, or IDF Heads to match existing pipeline specifications and pressure ratings.' },
  { num: 'II',  title: 'Internal Mixing Elements', desc: 'Modular helical or corrugated elements — geometry and count determined by process requirements and flow regime.' },
  { num: 'III', title: 'Mixer Housing',             desc: 'Pipe housing with optional thermal control jacket and inlet/outlet connections for heat-sensitive applications.' },
];

export default function MixerComponents() {
  return (
    <section className="section section-alt">
      <div className="container">
        <div className="gold-line" />
        <span className="tag">Construction</span>
        <h2 className="display-font" style={{ fontSize: 42, fontWeight: 400, marginBottom: 40 }}>Three Critical Components</h2>

        <div className="grid-3">
          {ITEMS.map(({ num, title, desc }) => (
            <div key={num} className="card" style={{ position: 'relative', paddingTop: 40 }}>
              <div className="display-font" style={{ position: 'absolute', top: 16, right: 20, fontSize: 48, color: '#c8a96e18', fontWeight: 700 }}>
                {num}
              </div>
              <div style={{ width: 36, height: 36, border: '1px solid #c8a96e55', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                <span className="display-font" style={{ fontSize: 16, color: '#c8a96e' }}>{num}</span>
              </div>
              <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 16, fontWeight: 500, marginBottom: 10, color: '#e8e4d9' }}>{title}</h3>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: '#7a7268', lineHeight: 1.7 }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

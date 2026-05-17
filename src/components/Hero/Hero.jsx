import PumpDiagram from './PumpDiagram';

const STATS = [
  { value: "10,000",  unit: "LPH",      label: "Max Flow Rate"     },
  { value: "400",     unit: "kg/cm²",   label: "Max Pressure"      },
  { value: "±1%",     unit: "",         label: "Metering Accuracy"  },
  { value: "5+",      unit: "Types",    label: "Pump Configurations"},
];

export default function Hero() {
  return (
    <section style={{
      background: 'linear-gradient(135deg, #080b14 0%, #0d1425 50%, #080b14 100%)',
      padding: '100px 0 80px',
      borderBottom: '1px solid #1e2332',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Grid bg */}
      <div style={{
        position: 'absolute', top: 0, right: 0, width: '50%', height: '100%', opacity: 0.04,
        backgroundImage: 'repeating-linear-gradient(0deg,#c8a96e 0px,#c8a96e 1px,transparent 1px,transparent 40px),repeating-linear-gradient(90deg,#c8a96e 0px,#c8a96e 1px,transparent 1px,transparent 40px)',
      }} />

      <div className="container">
        <div className="hero-flex" style={{ display: 'flex', alignItems: 'center', gap: 60, marginBottom: 64 }}>

          {/* Left */}
          <div style={{ flex: 1 }}>
            <span className="tag">Everything in Dosing</span>
            <h1 className="display-font" style={{ fontSize: 58, fontWeight: 300, lineHeight: 1.1, color: '#e8e4d9', marginBottom: 12 }}>
              Dosewell<br />
              <span style={{ color: '#c8a96e', fontWeight: 600 }}>Metering</span><br />
              Pump
            </h1>
            <p style={{ color: '#8a8070', fontSize: 15, lineHeight: 1.9, maxWidth: 420, marginBottom: 32, fontFamily: "'DM Sans', sans-serif" }}>
              Market leaders in chemical dosing / metering pumps and dosing systems. Plunger & diaphragm type pumps selected as per compatibility of the liquid.
            </p>
            <div style={{ display: 'flex', gap: 14 }}>
              <button className="btn-primary">View Products</button>
              <button className="btn-outline">Get a Quote</button>
            </div>
          </div>

          {/* Right */}
          <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
            <PumpDiagram />
          </div>
        </div>

        {/* Stats bar */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          borderTop: '1px solid #1e2332',
          paddingTop: 32,
        }}>
          {STATS.map(({ value, unit, label }, i) => (
            <div key={label} style={{
              textAlign: 'center',
              borderRight: i < 3 ? '1px solid #1e2332' : 'none',
              padding: '0 16px',
            }}>
              <div className="display-font" style={{ fontSize: 36, fontWeight: 600, color: '#c8a96e', lineHeight: 1 }}>
                {value}
                <span style={{ fontSize: 16, fontWeight: 300, marginLeft: 4 }}>{unit}</span>
              </div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: '#5a5650', letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: 6 }}>
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

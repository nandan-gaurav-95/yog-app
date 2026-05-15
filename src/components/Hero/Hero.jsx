import MixerDiagram from './MixerDiagram';

export default function Hero() {
  return (
    <section style={{
      background: 'linear-gradient(135deg, #080b14 0%, #0d1425 50%, #080b14 100%)',
      padding: '100px 0 80px',
      borderBottom: '1px solid #1e2332',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* grid bg pattern */}
      <div style={{
        position: 'absolute', top: 0, right: 0, width: '50%', height: '100%',
        opacity: 0.04,
        backgroundImage: 'repeating-linear-gradient(0deg,#c8a96e 0px,#c8a96e 1px,transparent 1px,transparent 40px),repeating-linear-gradient(90deg,#c8a96e 0px,#c8a96e 1px,transparent 1px,transparent 40px)',
      }} />

      <div className="container">
        <div className="hero-flex" style={{ display: 'flex', alignItems: 'center', gap: 60 }}>
          {/* Left — text */}
          <div style={{ flex: 1 }}>
            <span className="tag">Pipeline Motionless Mixer</span>
            <h1 className="display-font" style={{ fontSize: 62, fontWeight: 300, lineHeight: 1.1, color: '#e8e4d9', marginBottom: 12 }}>
              Static<br />
              <span style={{ color: '#c8a96e', fontWeight: 600 }}>Inline</span><br />
              Mixer
            </h1>
            <p style={{ color: '#8a8070', fontSize: 16, lineHeight: 1.8, maxWidth: 440, marginBottom: 32, fontFamily: "'DM Sans', sans-serif" }}>
              Engineered for complete fluid homogeneity — no moving parts, no maintenance, continuous process excellence.
            </p>
            <div style={{ display: 'flex', gap: 14 }}>
              <button className="btn-primary">Request a Quote</button>
              <button className="btn-outline">Download Datasheet</button>
            </div>
          </div>

          {/* Right — SVG diagram */}
          <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
            <MixerDiagram />
          </div>
        </div>
      </div>
    </section>
  );
}

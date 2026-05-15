import { FEATURES } from '../../data/constants';

export default function Features() {
  const left  = FEATURES.slice(0, 5);
  const right = FEATURES.slice(5);

  return (
    <section className="section section-alt">
      <div className="container">
        <div className="gold-line" />
        <span className="tag">Salient Features</span>
        <h2 className="display-font" style={{ fontSize: 42, fontWeight: 400, marginBottom: 40 }}>Why Static Inline Mixers?</h2>

        <div className="grid-2" style={{ gap: 0 }}>
          <div style={{ borderRight: '1px solid #1e2332', paddingRight: 40 }}>
            {left.map(({ icon, title }) => <FeatureRow key={title} icon={icon} title={title} />)}
          </div>
          <div style={{ paddingLeft: 40 }}>
            {right.map(({ icon, title }) => <FeatureRow key={title} icon={icon} title={title} />)}
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureRow({ icon, title }) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14, padding: '18px 0', borderBottom: '1px solid #1e2332' }}>
      <span style={{ fontSize: 20, minWidth: 28 }}>{icon}</span>
      <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: '#b8b0a0', lineHeight: 1.5 }}>{title}</span>
    </div>
  );
}

import { APPLICATIONS } from '../../data/constants';

const BG = ['#1a1f2e', '#161a28', '#131724'];

export default function Applications() {
  return (
    <section className="section section-alt">
      <div className="container">
        <div className="gold-line" />
        <span className="tag">Applications</span>
        <h2 className="display-font" style={{ fontSize: 42, fontWeight: 400, marginBottom: 12 }}>Typical Applications</h2>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: '#7a7268', marginBottom: 40 }}>
          Static mixers are increasingly adopted across process industries globally.
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
          {APPLICATIONS.map((app, i) => (
            <div key={app} style={{
              background: BG[i % 3],
              border: '1px solid #2a2f40',
              padding: '12px 20px',
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 14,
              color: '#b8b0a0',
              display: 'flex',
              alignItems: 'center',
              gap: 10,
            }}>
              <span style={{ color: '#c8a96e', fontSize: 18 }}>◈</span>
              {app}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

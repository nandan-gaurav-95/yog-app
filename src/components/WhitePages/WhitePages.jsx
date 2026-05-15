import { WHITEPAGES } from '../../data/constants';

export default function WhitePages() {
  return (
    <section className="section">
      <div className="container">
        <div className="gold-line" />
        <span className="tag">Industry WhitePages</span>
        <h2 className="display-font" style={{ fontSize: 42, fontWeight: 400, marginBottom: 40 }}>Application WhitePages</h2>

        <div className="grid-3">
          {WHITEPAGES.map(({ title, desc }) => (
            <div key={title} className="card" style={{ cursor: 'pointer' }}>
              <h3 className="display-font" style={{ fontSize: 22, fontWeight: 400, color: '#e8e4d9', marginBottom: 8 }}>{title}</h3>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: '#7a7268', lineHeight: 1.6, marginBottom: 16 }}>{desc}</p>
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: '#c8a96e', letterSpacing: '0.08em' }}>READ MORE →</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

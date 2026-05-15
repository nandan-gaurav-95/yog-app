export default function Contact() {
  return (
    <section id="contact" style={{ background: '#0d1120', borderTop: '1px solid #1e2332', padding: '80px 0' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <div className="gold-line" style={{ margin: '0 auto 20px' }} />

        <h2 className="display-font" style={{ fontSize: 48, fontWeight: 300, marginBottom: 16 }}>
          Have a Mixing <span style={{ color: '#c8a96e' }}>Problem?</span>
        </h2>

        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: '#7a7268', maxWidth: 460, margin: '0 auto 36px', lineHeight: 1.8 }}>
          Contact us to review your specific mixing requirements. Our engineers will recommend the optimal solution.
        </p>

        <div style={{ display: 'flex', gap: 14, justifyContent: 'center' }}>
          <button className="btn-primary">Contact Us</button>
          <button className="btn-outline">Download Datasheet</button>
        </div>
      </div>
    </section>
  );
}

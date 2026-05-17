import ContactForm from './ContactForm';

export default function Contact() {
  return (
    <section id="contact" style={{ background: '#0d1120', borderTop: '1px solid #1e2332', padding: '80px 0' }}>
      <div className="container">

        <div style={{ marginBottom: 48 }}>
          <div className="gold-line" />
          <span className="tag">Get In Touch</span>
          <h2 className="display-font" style={{ fontSize: 48, fontWeight: 300, marginBottom: 12 }}>
            Have a Mixing <span style={{ color: '#c8a96e' }}>Problem?</span>
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: '#7a7268', maxWidth: 500, lineHeight: 1.8 }}>
            Fill in the form and our engineers will review your specific mixing requirements and get back to you within 24 hours.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 60, alignItems: 'start' }}>
          <ContactForm />

          <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
            {[
              { icon: '📍', label: 'Address',        value: 'Dosewell Metering Pump Pvt. Ltd.\nMumbai, Maharashtra, India' },
              { icon: '📞', label: 'Phone',           value: '+91 9960094873' },
              { icon: '✉️', label: 'Email',            value: 'gn281195@gmail.com' },
              { icon: '🕐', label: 'Business Hours',  value: 'Mon – Sat: 9:00 AM – 6:00 PM' },
            ].map(({ icon, label, value }) => (
              <div key={label} style={{ display: 'flex', gap: 16 }}>
                <span style={{ fontSize: 20, marginTop: 2 }}>{icon}</span>
                <div>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#c8a96e', marginBottom: 4 }}>
                    {label}
                  </p>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: '#b8b0a0', lineHeight: 1.6, whiteSpace: 'pre-line' }}>
                    {value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

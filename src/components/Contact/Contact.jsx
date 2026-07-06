import ContactForm from './ContactForm';

const PHONE_PRIMARY   = '8600001780';
const PHONE_SECONDARY = '7887364035';
const EMAIL           = 'sales.chemdose@gmail.com';
const ADDRESS         = 'Shop No. 20, Sai Industrial Estate, Behind NMC School, M.I.D.C., Ambad, Nashik-422010';
const MAPS_URL        = 'https://www.google.com/maps/search/?api=1&query=Sai+Industrial+Estate+Behind+NMC+School+MIDC+Ambad+Nashik+422010';
const WHATSAPP_URL    = `https://wa.me/91${PHONE_PRIMARY}?text=Hello%2C%20I%20am%20interested%20in%20your%20Metering%20Pumps.%20Please%20share%20details.`;

export default function Contact() {
  return (
    <section id="contact" style={{ background: '#141311', borderTop: '1px solid #2e2a24', padding: '80px 0' }}>
      <div className="container">

        {/* Header */}
        <div style={{ marginBottom: 48 }}>
          <div className="gold-line" />
          <span className="tag">Get In Touch</span>
          <h2 className="display-font" style={{ fontSize: 48, fontWeight: 300, marginBottom: 12 }}>
            Have a Dosing <span style={{ color: '#c8a96e' }}>Requirement?</span>
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, color: '#7a7268', maxWidth: 500, lineHeight: 1.8 }}>
            Fill in the form and our engineers will review your specific dosing requirements and get back to you within 24 hours.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 60, alignItems: 'start' }}>

          {/* Left — Form */}
          <ContactForm />

          {/* Right — Contact Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>

            {/* Address with Maps link */}
            <ContactCard
              icon="📍"
              label="Address"
              href={MAPS_URL}
              linkText="View on Google Maps →"
            >
              {ADDRESS}
            </ContactCard>

            {/* Phone 1 */}
            <ContactCard
              icon="📞"
              label="Phone"
              href={`tel:+91${PHONE_PRIMARY}`}
              linkText={`+91 ${PHONE_PRIMARY}`}
            >
              {`+91 ${PHONE_SECONDARY}`}
            </ContactCard>

            {/* Email */}
            <ContactCard
              icon="✉️"
              label="Email"
              href={`mailto:${EMAIL}`}
              linkText={EMAIL}
            />

            {/* Business Hours */}
            <ContactCard icon="🕐" label="Business Hours">
              Mon – Sat: 9:00 AM – 6:00 PM
            </ContactCard>

            {/* Quick Action Buttons */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 8 }}>

              {/* Call button */}
              <a
                href={`tel:+91${PHONE_PRIMARY}`}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
                  background: '#c8a96e', color: '#0f0e0c',
                  padding: '13px 20px', textDecoration: 'none',
                  fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 500,
                  letterSpacing: '0.06em', transition: 'background 0.2s',
                }}
                onMouseOver={e => e.currentTarget.style.background = '#d4b87a'}
                onMouseOut={e  => e.currentTarget.style.background = '#c8a96e'}
              >
                📞 Call Us Now
              </a>

              {/* WhatsApp button */}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
                  background: '#25D366', color: '#fff',
                  padding: '13px 20px', textDecoration: 'none',
                  fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 500,
                  letterSpacing: '0.06em', transition: 'background 0.2s',
                }}
                onMouseOver={e => e.currentTarget.style.background = '#1ebe5c'}
                onMouseOut={e  => e.currentTarget.style.background = '#25D366'}
              >
                💬 WhatsApp Us
              </a>

              {/* Location button */}
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
                  background: 'transparent', color: '#c8a96e',
                  border: '1px solid #c8a96e', padding: '13px 20px',
                  textDecoration: 'none',
                  fontFamily: "'DM Sans', sans-serif", fontSize: 14,
                  letterSpacing: '0.06em', transition: 'all 0.2s',
                }}
                onMouseOver={e => { e.currentTarget.style.background = '#c8a96e'; e.currentTarget.style.color = '#0f0e0c'; }}
                onMouseOut={e  => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#c8a96e'; }}
              >
                📍 Get Directions
              </a>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactCard({ icon, label, href, linkText, children }) {
  return (
    <div style={{ display: 'flex', gap: 14, padding: '16px 18px', background: '#1d1b18', border: '1px solid #2e2a24' }}>
      <span style={{ fontSize: 20, marginTop: 2 }}>{icon}</span>
      <div>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#c8a96e', marginBottom: 4 }}>
          {label}
        </p>
        {href && linkText && (
          <a href={href} target={href.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer"
            style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: '#e8e4d9', display: 'block', textDecoration: 'none', marginBottom: children ? 4 : 0 }}>
            {linkText}
          </a>
        )}
        {children && (
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: '#7a7268', lineHeight: 1.6 }}>
            {children}
          </p>
        )}
      </div>
    </div>
  );
}

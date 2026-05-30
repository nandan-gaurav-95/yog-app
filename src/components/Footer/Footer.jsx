const PHONE_PRIMARY   = '8600001780';
const PHONE_SECONDARY = '7887364035';
const EMAIL           = 'sales.chemdose@gmail.com';
const MAPS_URL        = 'https://www.google.com/maps/search/?api=1&query=Sai+Industrial+Estate+Behind+NMC+School+MIDC+Ambad+Nashik+422010';
const WHATSAPP_URL    = `https://wa.me/918600001780?text=Hello%2C%20I%20am%20interested%20in%20your%20Metering%20Pumps.`;

export default function Footer() {
  return (
    <footer style={{ background: '#080b14', borderTop: '1px solid #1e2332' }}>

      {/* Main footer content */}
      <div className="container" style={{ padding: '48px 40px 32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: 48 }}>

          {/* Brand column */}
          <div>
            <div className="display-font" style={{ fontSize: 22, color: '#c8a96e', letterSpacing: '0.08em' }}>DOSEWELL</div>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, color: '#4a4540', letterSpacing: '0.2em', textTransform: 'uppercase', marginTop: 2, marginBottom: 16 }}>
              Metering Pump
            </div>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: '#5a5650', lineHeight: 1.8, maxWidth: 280 }}>
              Market leaders in chemical dosing / metering pumps and dosing systems. Everything in Dosing.
            </p>
          </div>

          {/* Contact column */}
          <div>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: '#c8a96e', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 16 }}>
              Contact
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <a href={`tel:+91${PHONE_PRIMARY}`} style={linkStyle}>📞 +91 {PHONE_PRIMARY}</a>
              <a href={`tel:+91${PHONE_SECONDARY}`} style={linkStyle}>📞 +91 {PHONE_SECONDARY}</a>
              <a href={`mailto:${EMAIL}`} style={linkStyle}>✉️ {EMAIL}</a>
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" style={linkStyle}>
                📍 Shop No. 20, Sai Industrial Estate,<br />Behind NMC School, MIDC Ambad,<br />Nashik - 422010
              </a>
            </div>
          </div>

          {/* Quick Links column */}
          <div>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: '#c8a96e', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 16 }}>
              Quick Links
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                { label: 'Products',     href: '#products'     },
                { label: 'Applications', href: '#applications' },
                { label: 'Accessories',  href: '#accessories'  },
                { label: 'Contact Us',   href: '#contact'      },
              ].map(({ label, href }) => (
                <a key={label} href={href} style={linkStyle}>{label}</a>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid #1e2332', padding: '16px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
        <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: '#3a3830' }}>
          © {new Date().getFullYear()} Dosewell Metering Pump. All Rights Reserved.
        </span>
        <div style={{ display: 'flex', gap: 16 }}>
          <a href={`tel:+91${PHONE_PRIMARY}`} style={{ ...iconBtn, background: '#c8a96e', color: '#0b0f1a' }}>📞 Call</a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" style={{ ...iconBtn, background: '#25D366', color: '#fff' }}>💬 WhatsApp</a>
          <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" style={{ ...iconBtn, background: '#1a1f2e', color: '#c8a96e', border: '1px solid #c8a96e33' }}>📍 Maps</a>
        </div>
      </div>

    </footer>
  );
}

const linkStyle = {
  fontFamily: "'DM Sans', sans-serif",
  fontSize: 13,
  color: '#5a5650',
  textDecoration: 'none',
  lineHeight: 1.6,
  transition: 'color 0.2s',
};

const iconBtn = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 6,
  padding: '6px 14px',
  fontFamily: "'DM Sans', sans-serif",
  fontSize: 12,
  fontWeight: 500,
  textDecoration: 'none',
  letterSpacing: '0.04em',
};

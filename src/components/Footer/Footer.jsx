export default function Footer() {
  return (
    <footer style={{ background: '#080b14', borderTop: '1px solid #1e2332', padding: '28px 0' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
        
        {/* Brand */}
        <div>
          <div className="display-font" style={{ fontSize: 18, color: '#c8a96e', letterSpacing: '0.08em' }}>DOSEWELL</div>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, color: '#4a4540', letterSpacing: '0.18em', textTransform: 'uppercase', marginTop: 2 }}>
            Metering Pump
          </div>
        </div>

        {/* Copyright */}
        <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: '#4a4540' }}>
          © {new Date().getFullYear()} Dosewell Metering Pump Pvt. Ltd. All Rights Reserved.
        </span>

      </div>
    </footer>
  );
}

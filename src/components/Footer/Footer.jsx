export default function Footer() {
  return (
    <footer style={{ background: '#080b14', borderTop: '1px solid #1e2332', padding: '28px 0' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span className="display-font" style={{ fontSize: 18, color: '#c8a96e' }}>MIXRITE</span>
        <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: '#4a4540' }}>
          © 2021 Mixrite.com. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

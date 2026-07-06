export default function ChemdoseLogo({ height = 48, darkBg = false }) {
  const bg        = darkBg ? '#0f0e0c' : '#ffffff';
  const subtitleC = darkBg ? '#cccccc' : '#3a3030';

  return (
    <svg
      height={height}
      viewBox="0 0 400 110"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Chemdose Metering Pumps"
      style={{ display: 'block' }}
    >
      <defs>
        <linearGradient id="cdg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor="#e87010" />
          <stop offset="100%" stopColor="#8b4400" />
        </linearGradient>
        <linearGradient id="cdtxt" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   stopColor="#e87010" />
          <stop offset="100%" stopColor="#8b4400" />
        </linearGradient>
      </defs>

      {/* ── White/dark background rect so logo is always readable ── */}
      <rect width="400" height="110" fill={bg} rx="0" />

      {/* ═══════════════════════════════════════ */}
      {/*  CD MONOGRAM ICON                      */}
      {/*  Circle = 44px radius, center (55,55)  */}
      {/* ═══════════════════════════════════════ */}

      {/* Outer circle boundary guide (invisible) cx=55 cy=55 r=44 */}

      {/* ── C arc: almost full circle, gap at top-right
            Starts ~340deg, goes CCW to ~20deg (gap at top)
            Stays within r=44 circle                           ── */}
      <path
        d="M 86,21 A 44,44 0 1,0 86,89"
        fill="none"
        stroke="url(#cdg)"
        strokeWidth="10"
        strokeLinecap="round"
      />

      {/* ── D vertical bar (center of circle) ── */}
      <rect x="58" y="30" width="9" height="50" rx="1" fill="url(#cdg)" />

      {/* ── D curved right side ── */}
      <path
        d="M 67,30 Q 96,30 96,55 Q 96,80 67,80"
        fill="none"
        stroke="url(#cdg)"
        strokeWidth="9"
        strokeLinecap="butt"
      />

      {/* ── White gap between C arc and D bar so they look separate ── */}
      <rect x="54" y="38" width="7" height="34" rx="0" fill={bg} />

      {/* ═══════════════════════════════════════ */}
      {/*  WORDMARK                              */}
      {/* ═══════════════════════════════════════ */}

      {/* CHEMDOSE — orange gradient bold */}
      <text
        x="118" y="58"
        fontFamily="'Arial Black', 'Franklin Gothic Heavy', Impact, sans-serif"
        fontSize="36"
        fontWeight="900"
        fill="url(#cdtxt)"
        letterSpacing="0"
      >
        CHEMDOSE
      </text>

      {/* METERING PUMPS — dark gray, smaller */}
      <text
        x="119" y="82"
        fontFamily="'Arial', 'Helvetica Neue', sans-serif"
        fontSize="18"
        fontWeight="700"
        fill={subtitleC}
        letterSpacing="1.5"
      >
        METERING PUMPS
      </text>

    </svg>
  );
}

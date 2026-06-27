export default function DosewellLogo({ height = 48 }) {
  return (
    <svg
      height={height}
      viewBox="0 0 380 160"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Dosewell Metering Pump"
      style={{ display: 'block' }}
    >
      {/* ── Hexagon outer ring ── */}
      <polygon
        points="48,20 72,6 96,20 96,48 72,62 48,48"
        fill="none"
        stroke="#c8a96e"
        strokeWidth="2.5"
      />

      {/* ── Hexagon inner glow ── */}
      <polygon
        points="52,22 72,11 92,22 92,46 72,57 52,46"
        fill="#c8a96e"
        opacity="0.12"
      />

      {/* ── D letterform arc ── */}
      <path
        d="M86,26 A20,20 0 1,0 86,54"
        fill="none"
        stroke="#c8a96e"
        strokeWidth="4.5"
        strokeLinecap="round"
      />

      {/* ── Dosing drop ── */}
      <ellipse cx="86" cy="54" rx="4" ry="5.5" fill="#c8a96e" />

      {/* ── Flow dots ── */}
      <circle cx="92" cy="63" r="2.5" fill="#c8a96e" opacity="0.7" />
      <circle cx="96" cy="72" r="1.8" fill="#c8a96e" opacity="0.4" />
      <circle cx="99" cy="80" r="1.2" fill="#c8a96e" opacity="0.2" />

      {/* ── DOSE white + WELL gold ── */}
      <text
        x="112"
        y="52"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="40"
        fontWeight="700"
        letterSpacing="1"
      >
        <tspan fill="#e8e4d9">DOSE</tspan>
        <tspan fill="#c8a96e">WELL</tspan>
      </text>

      {/* ── Gold rule ── */}
      <line
        x1="112" y1="60"
        x2="375" y2="60"
        stroke="#c8a96e"
        strokeWidth="0.7"
        opacity="0.5"
      />

      {/* ── Subtitle ── */}
      <text
        x="112"
        y="78"
        fontFamily="Arial, sans-serif"
        fontSize="10"
        fontWeight="400"
        fill="#7a7268"
        letterSpacing="4"
      >
        METERING PUMP
      </text>

      {/* ── Tagline ── */}
      <text
        x="112"
        y="98"
        fontFamily="Georgia, serif"
        fontSize="11"
        fontStyle="italic"
        fill="#c8a96e"
        opacity="0.8"
        letterSpacing="0.5"
      >
        Your Dosing Solution….
      </text>
    </svg>
  );
}

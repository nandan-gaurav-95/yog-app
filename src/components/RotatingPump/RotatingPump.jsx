import styles from './RotatingPump.module.css';

export default function RotatingPump() {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>

        {/* ── Rotating pump image ── */}
        <div className={styles.globeWrap}>

          {/* Outer glow ring */}
          <div className={styles.glowRing} />

          {/* Rotating circle with pump image inside */}
          <div className={styles.rotatingCircle}>
            <img
              src="/assets/pumps/hero_pump.jpeg"
              alt="Chemdose Metering Pump"
              className={styles.pumpImg}
            />
            {/* Dark overlay so image blends with circle */}
            <div className={styles.overlay} />
          </div>

          {/* Orbit ring 1 */}
          <div className={styles.orbitRing1} />
          {/* Orbit ring 2 */}
          <div className={styles.orbitRing2} />

          {/* Orbiting dot */}
          <div className={styles.orbitDotWrap1}>
            <div className={styles.orbitDot} />
          </div>
          <div className={styles.orbitDotWrap2}>
            <div className={styles.orbitDot2} />
          </div>

          {/* ── Steady text overlay (does NOT rotate) ── */}
          <div className={styles.textOverlay}>
            <p className={styles.subText}>Precision Dosing</p>
            <h2 className={styles.mainText}>Chemdose<br />Metering Pump</h2>
            <p className={styles.tagText}>Your Dosing Solution….</p>
          </div>

        </div>

        {/* ── Right side stats ── */}
        <div className={styles.statsWrap}>
          <p className={styles.statsLabel}>Why Choose Chemdose</p>

          {[
            { num: '10,000', unit: 'LPH',    label: 'Maximum Flow Rate'     },
            { num: '400',    unit: 'kg/cm²',  label: 'Maximum Pressure'      },
            { num: '±1%',    unit: '',        label: 'Metering Accuracy'     },
            { num: '5+',     unit: 'Types',   label: 'Pump Configurations'   },
            { num: '24/7',   unit: '',        label: 'After-Sales Support'   },
          ].map(({ num, unit, label }) => (
            <div key={label} className={styles.statItem}>
              <div className={styles.statNum}>
                {num}<span className={styles.statUnit}>{unit}</span>
              </div>
              <div className={styles.statLabel}>{label}</div>
            </div>
          ))}

          <a href="#contact" className={styles.ctaBtn}>
            Get a Quote →
          </a>
        </div>

      </div>
    </section>
  );
}

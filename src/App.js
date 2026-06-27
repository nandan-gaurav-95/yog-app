import './styles/global.css';
import Navbar            from './components/Navbar/Navbar';
import Hero              from './components/Hero/Hero';
import InlineMixerPage   from './InlineMixerPage';
import BubbleCursor      from './components/Animations/BubbleCursor';
import AnimatedBackground from './components/Animations/AnimatedBackground';

export default function App() {
  return (
    <>
      {/* ── Animated background — fixed, behind everything ── */}
      <AnimatedBackground />

      {/* ── Water bubble cursor trail ── */}
      <BubbleCursor />

      {/* ── Main content — z-index above canvas ── */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Navbar />
        <Hero />
        <InlineMixerPage />
      </div>
    </>
  );
}

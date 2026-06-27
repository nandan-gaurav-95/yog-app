import { useEffect, useRef } from 'react';

export default function BubbleCursor() {
  const bubble1Ref = useRef(null);
  const bubble2Ref = useRef(null);
  const mouse      = useRef({ x: 0, y: 0 });
  const pos1       = useRef({ x: 0, y: 0 });
  const pos2       = useRef({ x: 0, y: 0 });
  const rafRef     = useRef(null);

  useEffect(() => {
    const onMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };
    window.addEventListener('mousemove', onMove);

    const animate = () => {
      // Bubble 1 — follows mouse with slight lag
      pos1.current.x += (mouse.current.x - pos1.current.x) * 0.12;
      pos1.current.y += (mouse.current.y - pos1.current.y) * 0.12;

      // Bubble 2 — follows bubble1 with more lag
      pos2.current.x += (pos1.current.x - pos2.current.x) * 0.08;
      pos2.current.y += (pos1.current.y - pos2.current.y) * 0.08;

      if (bubble1Ref.current) {
        bubble1Ref.current.style.transform =
          `translate(${pos1.current.x - 10}px, ${pos1.current.y - 10}px)`;
      }
      if (bubble2Ref.current) {
        bubble2Ref.current.style.transform =
          `translate(${pos2.current.x - 7}px, ${pos2.current.y - 7}px)`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const baseStyle = {
    position:      'fixed',
    top:           0,
    left:          0,
    borderRadius:  '50%',
    pointerEvents: 'none',
    zIndex:        9999,
    willChange:    'transform',
  };

  return (
    <>
      {/* Bubble 1 — larger, closer to cursor */}
      <div
        ref={bubble1Ref}
        style={{
          ...baseStyle,
          width:      20,
          height:     20,
          background: 'radial-gradient(circle at 35% 35%, rgba(232,135,16,0.55), rgba(139,68,0,0.15))',
          border:     '1.5px solid rgba(232,135,16,0.6)',
          boxShadow:  '0 0 8px rgba(232,135,16,0.3), inset 0 0 6px rgba(255,255,255,0.15)',
          backdropFilter: 'blur(2px)',
        }}
      />

      {/* Bubble 2 — smaller, more lag */}
      <div
        ref={bubble2Ref}
        style={{
          ...baseStyle,
          width:      14,
          height:     14,
          background: 'radial-gradient(circle at 35% 35%, rgba(200,169,110,0.4), rgba(139,68,0,0.1))',
          border:     '1px solid rgba(200,169,110,0.5)',
          boxShadow:  '0 0 5px rgba(200,169,110,0.25), inset 0 0 4px rgba(255,255,255,0.1)',
          backdropFilter: 'blur(1px)',
        }}
      />
    </>
  );
}

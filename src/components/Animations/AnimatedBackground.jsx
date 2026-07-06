import { useEffect, useRef } from 'react';

export default function AnimatedBackground() {
  const canvasRef = useRef(null);
  const rafRef    = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx    = canvas.getContext('2d');
    let W = canvas.width  = window.innerWidth;
    let H = canvas.height = window.innerHeight;

    // ─────────────────────────────────────────
    //  PIPE NETWORK — connected nodes + flows
    // ─────────────────────────────────────────
    const NODE_COUNT = 28;
    const nodes = [];
    // const connections = [];

    // Create nodes
    for (let i = 0; i < NODE_COUNT; i++) {
      nodes.push({
        x:     Math.random() * W,
        y:     Math.random() * H,
        vx:    (Math.random() - 0.5) * 0.25,
        vy:    (Math.random() - 0.5) * 0.25,
        r:     Math.random() * 2 + 1,
        pulse: Math.random() * Math.PI * 2, // phase offset
      });
    }

    // ─────────────────────────────────────────
    //  FLOW DOTS — travel along pipe connections
    // ─────────────────────────────────────────
    const flowDots = [];
    for (let i = 0; i < 18; i++) {
      flowDots.push({
        nodeA:    Math.floor(Math.random() * NODE_COUNT),
        nodeB:    Math.floor(Math.random() * NODE_COUNT),
        progress: Math.random(),
        speed:    Math.random() * 0.004 + 0.002,
        size:     Math.random() * 2 + 1,
        gold:     Math.random() > 0.4,
      });
    }

    // ─────────────────────────────────────────
    //  RISING BUBBLES
    // ─────────────────────────────────────────
    const bubbles = [];
    for (let i = 0; i < 30; i++) {
      bubbles.push({
        x:     Math.random() * W,
        y:     Math.random() * H,
        r:     Math.random() * 2.5 + 0.5,
        speed: Math.random() * 0.4 + 0.1,
        alpha: Math.random() * 0.2 + 0.05,
        drift: (Math.random() - 0.5) * 0.3,
        phase: Math.random() * Math.PI * 2,
      });
    }

    let tick = 0;

    function draw() {
      tick += 0.008;
      ctx.clearRect(0, 0, W, H);

      // ── 1. Update + draw nodes ──
      nodes.forEach(n => {
        n.x += n.vx;
        n.y += n.vy;
        n.pulse += 0.02;
        if (n.x < 0 || n.x > W) n.vx *= -1;
        if (n.y < 0 || n.y > H) n.vy *= -1;
      });

      // ── 2. Draw pipe connections (lines between nearby nodes) ──
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j];
          const dx = b.x - a.x, dy = b.y - a.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const MAX_DIST = W < 768 ? 130 : 180;

          if (dist < MAX_DIST) {
            const alpha = (1 - dist / MAX_DIST) * 0.18;
            const grad = ctx.createLinearGradient(a.x, a.y, b.x, b.y);
            grad.addColorStop(0, `rgba(200,169,110,${alpha})`);
            grad.addColorStop(0.5, `rgba(232,135,16,${alpha * 1.4})`);
            grad.addColorStop(1, `rgba(200,169,110,${alpha})`);
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = grad;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }
      }

      // ── 3. Draw flow dots traveling along pipes ──
      flowDots.forEach(fd => {
        fd.progress += fd.speed;
        if (fd.progress > 1) {
          fd.progress = 0;
          fd.nodeA = fd.nodeB;
          fd.nodeB = Math.floor(Math.random() * NODE_COUNT);
        }

        const a = nodes[fd.nodeA], b = nodes[fd.nodeB];
        const dx = b.x - a.x, dy = b.y - a.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        // Only show dot if nodes are close enough to have a visible line
        if (dist < (W < 768 ? 130 : 180)) {
          const x = a.x + dx * fd.progress;
          const y = a.y + dy * fd.progress;

          const glow = ctx.createRadialGradient(x, y, 0, x, y, fd.size * 3);
          if (fd.gold) {
            glow.addColorStop(0, `rgba(232,135,16,0.9)`);
            glow.addColorStop(1, `rgba(232,135,16,0)`);
          } else {
            glow.addColorStop(0, `rgba(200,169,110,0.7)`);
            glow.addColorStop(1, `rgba(200,169,110,0)`);
          }

          ctx.beginPath();
          ctx.arc(x, y, fd.size * 3, 0, Math.PI * 2);
          ctx.fillStyle = glow;
          ctx.fill();

          ctx.beginPath();
          ctx.arc(x, y, fd.size, 0, Math.PI * 2);
          ctx.fillStyle = fd.gold
            ? `rgba(232,135,16,0.95)`
            : `rgba(200,169,110,0.8)`;
          ctx.fill();
        }
      });

      // ── 4. Draw pulsing node dots ──
      nodes.forEach(n => {
        const pulse = (Math.sin(n.pulse) + 1) / 2; // 0–1
        const r = n.r + pulse * 1.5;
        const alpha = 0.15 + pulse * 0.3;

        // Outer glow ring
        const glow = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, r * 4);
        glow.addColorStop(0, `rgba(200,169,110,${alpha * 0.5})`);
        glow.addColorStop(1, `rgba(200,169,110,0)`);
        ctx.beginPath();
        ctx.arc(n.x, n.y, r * 4, 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.fill();

        // Core dot
        ctx.beginPath();
        ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200,169,110,${alpha + 0.2})`;
        ctx.fill();
      });

      // ── 5. Rising bubbles ──
      bubbles.forEach(b => {
        b.y -= b.speed;
        b.x += Math.sin(tick * 1.5 + b.phase) * b.drift;
        if (b.y < -10) {
          b.y = H + 10;
          b.x = Math.random() * W;
        }

        // Bubble — hollow circle with shine
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(200,169,110,${b.alpha * 1.5})`;
        ctx.lineWidth = 0.6;
        ctx.stroke();

        // Tiny shine dot inside
        ctx.beginPath();
        ctx.arc(b.x - b.r * 0.3, b.y - b.r * 0.3, b.r * 0.25, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,220,150,${b.alpha * 0.8})`;
        ctx.fill();
      });

      // ── 6. Subtle vignette overlay (edges darker) ──
      const vignette = ctx.createRadialGradient(
        W / 2, H / 2, H * 0.3,
        W / 2, H / 2, H * 0.85
      );
      vignette.addColorStop(0, 'rgba(15,14,12,0)');
      vignette.addColorStop(1, 'rgba(15,14,12,0.45)');
      ctx.fillStyle = vignette;
      ctx.fillRect(0, 0, W, H);

      rafRef.current = requestAnimationFrame(draw);
    }

    draw();

    const onResize = () => {
      W = canvas.width  = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position:      'fixed',
        top:           0,
        left:          0,
        width:         '100%',
        height:        '100%',
        pointerEvents: 'none',
        zIndex:        0,
      }}
    />
  );
}

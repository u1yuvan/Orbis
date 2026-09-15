import React, { useEffect, useRef } from 'react';

/**
 * HeroCanvas — Canvas animation layer sits over the hero background image.
 * Animates:
 *   1. Building left-edge vertical light beam (white-cyan glow + pulse)
 *   2. ORBIS logo glow pulse on building face
 *   3. Orbital rings around building base (rotating + traveling dots)
 *   4. Floating asteroid drift + rotate
 *   5. Twinkling star field
 *   6. Ground reflection cyan glow pool
 */
export default function HeroCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let raf;
    let t = 0;

    // ── Resize handler ────────────────────────────────────────────────────
    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // ── Star field ────────────────────────────────────────────────────────
    const stars = Array.from({ length: 260 }, () => ({
      x:  Math.random(),
      y:  Math.random() * 0.85,
      r:  Math.random() * 1.4 + 0.25,
      a:  Math.random() * 0.65 + 0.15,
      sp: Math.random() * 0.018 + 0.004,
      ph: Math.random() * Math.PI * 2,
    }));

    // ── Floating Asteroids ────────────────────────────────────────────────
    // Positions roughly match what's in the image
    const asteroids = [
      { xf: 0.17, yf: 0.20, sz: 18, vx:  0.00008, vy: -0.00005, ang: 0.4,  rs: 0.008 },
      { xf: 0.10, yf: 0.42, sz: 24, vx:  0.00012, vy:  0.00004, ang: 1.1,  rs:-0.006 },
      { xf: 0.25, yf: 0.58, sz: 14, vx: -0.00009, vy: -0.00003, ang: 2.2,  rs: 0.010 },
      { xf: 0.80, yf: 0.18, sz: 15, vx: -0.00007, vy:  0.00006, ang: 0.8,  rs:-0.009 },
      { xf: 0.88, yf: 0.38, sz: 20, vx:  0.00006, vy: -0.00008, ang: 1.6,  rs: 0.007 },
      { xf: 0.76, yf: 0.55, sz: 11, vx: -0.00010, vy:  0.00005, ang: 3.1,  rs:-0.011 },
      { xf: 0.38, yf: 0.12, sz: 12, vx:  0.00005, vy:  0.00007, ang: 0.2,  rs: 0.013 },
    ].map(a => ({ ...a, fa: Math.random() * 8 + 4, fs: Math.random() * 0.01 + 0.005, fo: Math.random() * Math.PI * 2 }));

    // ── Main Draw Loop ────────────────────────────────────────────────────
    const draw = () => {
      t += 0.014;
      const W = canvas.width;
      const H = canvas.height;
      ctx.clearRect(0, 0, W, H);

      // ── 1. Twinkling Stars ──────────────────────────────────────────────
      stars.forEach(s => {
        const alpha = s.a * (0.5 + 0.5 * Math.sin(t * s.sp * 60 + s.ph));
        ctx.beginPath();
        ctx.arc(s.x * W, s.y * H, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(220,240,255,${alpha})`;
        ctx.fill();
      });

      // ── Building geometry (tune to match image layout) ──────────────────
      // Building occupies roughly x: 35%–68%, y: 2%–74% of the viewport
      const bL  = W * 0.355;   // building left edge
      const bR  = W * 0.67;    // building right edge
      const bCX = (bL + bR) / 2;
      const bTop    = H * 0.02;
      const bBottom = H * 0.72;

      // Beam is on the LEFT EDGE of the building (matches image perfectly)
      const beamX = bL + (bR - bL) * 0.04;  // slightly inside left edge

      // ── 2. Building Left-Edge Beam ──────────────────────────────────────
      const bPulse1 = 0.20 + 0.12 * Math.sin(t * 0.9);
      const bPulse2 = 0.40 + 0.22 * Math.sin(t * 1.3 + 0.6);
      const bPulse3 = 0.80 + 0.20 * Math.sin(t * 2.2 + 1.2);

      // Wide outer bloom
      const bloomG = ctx.createLinearGradient(beamX, bTop, beamX, bBottom);
      bloomG.addColorStop(0,   `rgba(160,220,255,${bPulse1})`);
      bloomG.addColorStop(0.1, `rgba(56,189,248,${bPulse1 * 0.8})`);
      bloomG.addColorStop(0.5, `rgba(0,220,255,${bPulse1 * 0.5})`);
      bloomG.addColorStop(1,   `rgba(0,200,255,0)`);
      ctx.save();
      ctx.fillStyle = bloomG;
      ctx.fillRect(beamX - 55, bTop, 110, bBottom - bTop);
      ctx.restore();

      // Medium glow band
      const midG = ctx.createLinearGradient(beamX, bTop, beamX, bBottom);
      midG.addColorStop(0,   `rgba(210,240,255,${bPulse2})`);
      midG.addColorStop(0.15,`rgba(100,210,255,${bPulse2 * 0.9})`);
      midG.addColorStop(0.5, `rgba(56,189,248,${bPulse2 * 0.55})`);
      midG.addColorStop(1,   `rgba(0,200,255,0)`);
      ctx.save();
      ctx.fillStyle = midG;
      ctx.fillRect(beamX - 20, bTop, 40, bBottom - bTop);
      ctx.restore();

      // Tight core beam
      const coreG = ctx.createLinearGradient(beamX, bTop, beamX, bBottom);
      coreG.addColorStop(0,    `rgba(255,255,255,${bPulse3})`);
      coreG.addColorStop(0.06, `rgba(220,245,255,${bPulse3 * 0.95})`);
      coreG.addColorStop(0.3,  `rgba(56,189,248,${bPulse3 * 0.7})`);
      coreG.addColorStop(0.65, `rgba(0,200,255,${bPulse3 * 0.3})`);
      coreG.addColorStop(1,    `rgba(0,200,255,0)`);
      ctx.save();
      ctx.fillStyle = coreG;
      ctx.fillRect(beamX - 4, bTop, 8, bBottom - bTop);
      ctx.restore();

      // Top lens flare (origin of beam)
      const flareR  = 30 + 8 * Math.sin(t * 2.8);
      const flareG2 = ctx.createRadialGradient(beamX, bTop + 2, 0, beamX, bTop + 2, flareR);
      flareG2.addColorStop(0,   'rgba(255,255,255,0.98)');
      flareG2.addColorStop(0.25,'rgba(160,230,255,0.75)');
      flareG2.addColorStop(0.6, 'rgba(56,189,248,0.30)');
      flareG2.addColorStop(1,   'rgba(0,200,255,0)');
      ctx.beginPath();
      ctx.arc(beamX, bTop + 2, flareR, 0, Math.PI * 2);
      ctx.fillStyle = flareG2;
      ctx.fill();

      // ── 3. Logo Glow Pulse on building face ─────────────────────────────
      // Logo sits roughly at 55% x, 38% y of the building face
      const logoX = bL + (bR - bL) * 0.62;
      const logoY = bTop + (bBottom - bTop) * 0.36;
      const logoPulse = 0.35 + 0.25 * Math.sin(t * 1.1 + 0.4);

      const logoGrad = ctx.createRadialGradient(logoX, logoY, 0, logoX, logoY, 85);
      logoGrad.addColorStop(0,   `rgba(0,240,255,${logoPulse * 0.8})`);
      logoGrad.addColorStop(0.35,`rgba(56,189,248,${logoPulse * 0.5})`);
      logoGrad.addColorStop(0.7, `rgba(14,165,233,${logoPulse * 0.2})`);
      logoGrad.addColorStop(1,   'rgba(0,200,255,0)');
      ctx.beginPath();
      ctx.arc(logoX, logoY, 85, 0, Math.PI * 2);
      ctx.fillStyle = logoGrad;
      ctx.fill();

      // ── 4. Orbital Rings (base of building) ─────────────────────────────
      const ringCX = bL + (bR - bL) * 0.55;
      const ringCY = bBottom * 0.975;

      const rings = [
        { rx: W * 0.19, ry: H * 0.048, speed:  0.28, alpha: 0.80, lw: 2.8, dotR: 6 },
        { rx: W * 0.21, ry: H * 0.055, speed: -0.18, alpha: 0.55, lw: 1.8, dotR: 4 },
        { rx: W * 0.14, ry: H * 0.033, speed:  0.42, alpha: 0.40, lw: 1.4, dotR: 3 },
      ];

      rings.forEach(ring => {
        const rAlpha = ring.alpha * (0.7 + 0.3 * Math.sin(t * 0.75));

        ctx.save();
        ctx.translate(ringCX, ringCY);
        ctx.scale(1, ring.ry / ring.rx);

        // Ellipse stroke
        ctx.beginPath();
        ctx.ellipse(0, 0, ring.rx, ring.rx, 0, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(0,240,255,${rAlpha})`;
        ctx.lineWidth   = ring.lw;
        ctx.shadowColor = '#00f0ff';
        ctx.shadowBlur  = 18;
        ctx.stroke();
        ctx.restore();

        // Traveling bright dot on ring
        const dotAngle = t * ring.speed * 2;
        const dotX = ringCX + ring.rx * Math.cos(dotAngle);
        const dotY = ringCY + ring.ry * 0.9 * Math.sin(dotAngle);

        const dotG = ctx.createRadialGradient(dotX, dotY, 0, dotX, dotY, ring.dotR * 2);
        dotG.addColorStop(0,  `rgba(255,255,255,${rAlpha * 1.3})`);
        dotG.addColorStop(0.4,`rgba(0,240,255,${rAlpha})`);
        dotG.addColorStop(1,  'rgba(0,200,255,0)');
        ctx.beginPath();
        ctx.arc(dotX, dotY, ring.dotR * 2, 0, Math.PI * 2);
        ctx.fillStyle = dotG;
        ctx.fill();
      });

      // ── 5. Ground Cyan Reflection Pool ──────────────────────────────────
      const gndX  = ringCX;
      const gndY  = H * 0.87;
      const gndW  = W * 0.24;
      const gndH2 = H * 0.05;
      const gndA  = 0.28 + 0.14 * Math.sin(t * 0.65);

      const gndG = ctx.createRadialGradient(gndX, gndY, 0, gndX, gndY, gndW);
      gndG.addColorStop(0,   `rgba(0,240,255,${gndA})`);
      gndG.addColorStop(0.45,`rgba(56,189,248,${gndA * 0.45})`);
      gndG.addColorStop(1,   'rgba(0,200,255,0)');
      ctx.save();
      ctx.scale(1, gndH2 / gndW);
      ctx.beginPath();
      ctx.arc(gndX, gndY * (gndW / gndH2), gndW, 0, Math.PI * 2);
      ctx.fillStyle = gndG;
      ctx.fill();
      ctx.restore();

      // ── 6. Floating Asteroids ────────────────────────────────────────────
      asteroids.forEach(a => {
        a.xf  += a.vx;
        a.yf  += a.vy;
        a.ang += a.rs;
        if (a.xf < -0.08) a.xf = 1.08;
        if (a.xf > 1.08)  a.xf = -0.08;
        if (a.yf < -0.08) a.yf = 0.85;
        if (a.yf > 0.85)  a.yf = -0.08;

        const ax = a.xf * W;
        const ay = a.yf * H + Math.sin(t * a.fs * 60 + a.fo) * a.fa;

        ctx.save();
        ctx.translate(ax, ay);
        ctx.rotate(a.ang);

        // Draw rough polygon rock
        const sides = 7;
        ctx.beginPath();
        for (let i = 0; i < sides; i++) {
          const angle  = (i / sides) * Math.PI * 2;
          const jitter = 0.65 + 0.35 * ((Math.sin(i * 2.3 + a.ang) + 1) / 2);
          const rx = a.sz * jitter * Math.cos(angle);
          const ry = a.sz * 0.7 * jitter * Math.sin(angle);
          i === 0 ? ctx.moveTo(rx, ry) : ctx.lineTo(rx, ry);
        }
        ctx.closePath();
        ctx.fillStyle   = 'rgba(12,20,34,0.90)';
        ctx.strokeStyle = 'rgba(56,189,248,0.38)';
        ctx.lineWidth   = 0.9;
        ctx.shadowColor = '#00f0ff';
        ctx.shadowBlur  = 5;
        ctx.fill();
        ctx.stroke();
        ctx.restore();
      });

      raf = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width:  '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 3,
      }}
    />
  );
}

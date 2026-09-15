import React from 'react';

/**
 * Canonical ORBIS logo — same SVG used in Navbar, Footer, LoadingScreen etc.
 * Props:
 *   size   – number, pixel size of the SVG (default 36)
 *   glow   – bool, add drop-shadow glow (default true)
 *   color  – primary ring color (default #00f0ff)
 */
export default function OrbisLogo({ size = 36, glow = true, color = '#00f0ff' }) {
  const style = glow
    ? { filter: `drop-shadow(0 0 6px ${color}) drop-shadow(0 0 14px ${color}60)` }
    : {};

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      aria-label="ORBIS Logo"
    >
      {/* Outer thin circle ring */}
      <circle cx="50" cy="50" r="44" stroke="rgba(255,255,255,0.18)" strokeWidth="2" />

      {/* Orbital ellipse — main ring */}
      <ellipse
        cx="50" cy="50"
        rx="47" ry="19"
        stroke={color}
        strokeWidth="4"
        transform="rotate(-28 50 50)"
      />

      {/* Inner solid planet sphere */}
      <circle cx="50" cy="50" r="17" fill="white" />
      <circle cx="50" cy="50" r="9"  fill="#030c1a" />

      {/* Bright orbiting satellite dot */}
      <circle cx="80" cy="31" r="5.5" fill={color} />
    </svg>
  );
}

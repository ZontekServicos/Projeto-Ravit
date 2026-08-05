/**
 * Static stand-in for the 3D maquette: shown while the Three.js chunk is
 * loading (Suspense), when WebGL is unavailable, and if the canvas throws
 * at runtime. Same silhouette as the 3D piece so the swap is seamless.
 */
export function BlueprintFallback() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 grid place-items-center"
    >
      <div className="pointer-events-none absolute inset-0 opacity-60 [background-image:linear-gradient(#c8beb433_1px,transparent_1px),linear-gradient(90deg,#c8beb433_1px,transparent_1px)] [background-size:44px_44px]" />
      <svg
        viewBox="0 0 220 220"
        className="relative h-2/3 w-2/3 max-w-[280px]"
        fill="none"
      >
        <g stroke="#C8BEB4" strokeWidth="0.75" opacity="0.7">
          <rect x="60" y="150" width="100" height="18" />
          <rect x="68" y="120" width="84" height="18" />
          <rect x="76" y="90" width="68" height="18" />
          <rect x="84" y="60" width="52" height="18" />
        </g>
        <g stroke="#7D5E42" strokeWidth="1.1">
          <line x1="60" y1="168" x2="60" y2="60" />
          <line x1="160" y1="168" x2="136" y2="60" />
        </g>
        <g fill="#B89060">
          <circle cx="60" cy="150" r="2" />
          <circle cx="160" cy="150" r="2" />
          <circle cx="84" cy="60" r="2" />
          <circle cx="136" cy="60" r="2" />
        </g>
      </svg>
    </div>
  )
}

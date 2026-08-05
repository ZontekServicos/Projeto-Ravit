export function Arrow({ className = "" }: { className?: string }) {
  return (
    <span aria-hidden="true" className={`text-lg leading-none ${className}`}>
      ↗
    </span>
  )
}

/**
 * Inline monogram mark: serif "R" over a drafting circle + crosshair guides,
 * echoing the brand lockup without shipping a padded raster logo. Scales
 * crisply at any size and inherits color via currentColor.
 */
export function RMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      role="img"
      aria-label="Curso Revit"
    >
      <circle
        cx="24"
        cy="22"
        r="15"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.75"
        opacity="0.45"
      />
      <line
        x1="24"
        y1="2"
        x2="24"
        y2="42"
        stroke="currentColor"
        strokeWidth="0.5"
        opacity="0.35"
      />
      <line
        x1="6"
        y1="22"
        x2="42"
        y2="22"
        stroke="currentColor"
        strokeWidth="0.5"
        opacity="0.35"
      />
      <text
        x="24"
        y="31"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', Georgia, serif"
        fontSize="27"
        fill="currentColor"
      >
        R
      </text>
    </svg>
  )
}

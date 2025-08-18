interface AIKLogoProps {
  className?: string
  size?: number
}

export function AIKLogo({ className = "", size = 32 }: AIKLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M16 4L24 28H20L18.5 24H13.5L12 28H8L16 4Z" fill="currentColor" stroke="currentColor" strokeWidth="2" />
      {/* Black triangle at the top of A */}
      <path d="M16 4L13.5 12H18.5L16 4Z" fill="black" />
      <rect x="14" y="18" width="4" height="3" fill="currentColor" />
    </svg>
  )
}

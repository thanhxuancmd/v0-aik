export function AIKLogo({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="32" height="32" rx="6" fill="currentColor" />
      <path d="M16 8L22 20H10L16 8Z" fill="white" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
      <text x="16" y="26" fontSize="10" fontWeight="bold" textAnchor="middle" fill="white">
        A
      </text>
    </svg>
  )
}

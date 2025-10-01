export function AIKLogo({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="8" fill="currentColor" className="text-primary" />
      <path d="M20 10L28 26H12L20 10Z" fill="white" className="text-primary-foreground" />
      <text x="20" y="30" textAnchor="middle" fill="white" className="text-primary-foreground font-bold" fontSize="14">
        A
      </text>
    </svg>
  )
}

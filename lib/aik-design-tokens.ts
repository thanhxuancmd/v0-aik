// AIK Design System Tokens
export const aikDesignTokens = {
  colors: {
    background: "bg-black",
    text: {
      primary: "text-white",
      secondary: "text-white/70",
      muted: "text-white/50",
    },
    surface: {
      glass: "bg-white/5 backdrop-blur-sm",
      border: "border-white/10",
      hover: "bg-white/10",
    },
    gradients: {
      primary: "from-purple-600 to-pink-600",
      secondary: "from-blue-600 to-cyan-600",
      success: "from-green-600 to-emerald-600",
      error: "from-red-600 to-pink-600",
    },
  },

  typography: {
    hero: "text-6xl md:text-8xl font-bold",
    section: "text-3xl md:text-5xl font-bold",
    card: "text-xl md:text-2xl font-bold",
    subtitle: "text-lg md:text-xl",
    body: {
      large: "text-lg md:text-xl",
      base: "text-base md:text-lg",
      small: "text-sm",
    },
  },

  components: {
    card: "rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:scale-[1.02] transition-all duration-300",
    button: {
      primary:
        "rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 text-white font-semibold hover:scale-105 transition-all duration-300",
      secondary:
        "rounded-xl border border-white/20 bg-white/5 backdrop-blur-sm px-6 py-3 text-white hover:bg-white/10 transition-all duration-300",
    },
    input:
      "rounded-xl border border-white/20 bg-white/5 backdrop-blur-sm px-4 py-3 text-white placeholder-white/50 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20",
  },

  layout: {
    container: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
    section: "py-16 md:py-24",
    grid: {
      two: "grid grid-cols-1 md:grid-cols-2",
      three: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
      four: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
    },
  },

  animations: {
    transition: "transition-all duration-300",
    hover: "hover:scale-[1.02]",
    glow: "hover:shadow-2xl hover:shadow-purple-500/25",
  },
} as const

// Helper functions
export const cn = (...classes: string[]) => classes.filter(Boolean).join(" ")

export const aikCard = (additionalClasses = "") => cn(aikDesignTokens.components.card, additionalClasses)

export const aikButton = (variant: "primary" | "secondary" = "primary", additionalClasses = "") =>
  cn(aikDesignTokens.components.button[variant], additionalClasses)

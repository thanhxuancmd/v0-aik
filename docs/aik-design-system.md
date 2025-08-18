# AIK Design System

## Tổng quan
AIK (AI Agent Store) Design System là ngôn ngữ thiết kế hiện đại với dark theme, glassmorphism effects và gradient accents, được thiết kế để tạo ra trải nghiệm người dùng nhất quán và chuyên nghiệp.

## Color Palette

### Primary Colors
- **Background**: `bg-black` - Nền chính đen tuyền
- **Text**: `text-white` - Text chính màu trắng
- **Muted Text**: `text-white/70` - Text phụ với opacity 70%

### Accent Colors
- **Purple**: `from-purple-600 to-pink-600` - Gradient chính
- **Blue**: `from-blue-600 to-cyan-600` - Gradient phụ
- **Green**: `from-green-600 to-emerald-600` - Success states
- **Red**: `from-red-600 to-pink-600` - Error states

### Surface Colors
- **Glass Surface**: `bg-white/5 backdrop-blur-sm` - Glassmorphism effect
- **Border**: `border-white/10` - Viền mỏng
- **Hover Surface**: `bg-white/10` - Hover states

## Typography

### Headings
- **Hero**: `text-6xl md:text-8xl font-bold` - Tiêu đề chính
- **Section**: `text-3xl md:text-5xl font-bold` - Tiêu đề section
- **Card**: `text-xl md:text-2xl font-bold` - Tiêu đề card
- **Subtitle**: `text-lg md:text-xl` - Phụ đề

### Body Text
- **Large**: `text-lg md:text-xl` - Text lớn
- **Base**: `text-base md:text-lg` - Text cơ bản
- **Small**: `text-sm` - Text nhỏ

## Components

### Cards
\`\`\`tsx
className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:scale-[1.02] transition-all duration-300"
\`\`\`

### Buttons
\`\`\`tsx
// Primary Button
className="rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 text-white font-semibold hover:scale-105 transition-all duration-300"

// Secondary Button  
className="rounded-xl border border-white/20 bg-white/5 backdrop-blur-sm px-6 py-3 text-white hover:bg-white/10 transition-all duration-300"
\`\`\`

### Input Fields
\`\`\`tsx
className="rounded-xl border border-white/20 bg-white/5 backdrop-blur-sm px-4 py-3 text-white placeholder-white/50 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
\`\`\`

## Layout Principles

### Spacing
- **Container**: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- **Section Padding**: `py-16 md:py-24`
- **Card Padding**: `p-6 md:p-8`
- **Grid Gap**: `gap-6 md:gap-8`

### Grid Systems
- **2 Columns**: `grid grid-cols-1 md:grid-cols-2`
- **3 Columns**: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- **4 Columns**: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`

## Animations

### Hover Effects
- **Scale**: `hover:scale-[1.02]` - Subtle scale up
- **Glow**: `hover:shadow-2xl hover:shadow-purple-500/25` - Glow effect
- **Gradient Shift**: Gradient position changes on hover

### Transitions
- **Standard**: `transition-all duration-300` - Smooth transitions
- **Fast**: `transition-all duration-200` - Quick interactions
- **Slow**: `transition-all duration-500` - Dramatic effects

## Patterns

### Glassmorphism
Sử dụng `bg-white/5 backdrop-blur-sm border border-white/10` để tạo hiệu ứng kính mờ

### Gradient Overlays
Thêm gradient overlays trên hover để tạo depth và visual interest

### Grid Backgrounds
Sử dụng CSS grid patterns làm background texture

## Usage Guidelines

1. **Consistency**: Luôn sử dụng color palette và spacing system đã định nghĩa
2. **Hierarchy**: Sử dụng typography scale để tạo visual hierarchy rõ ràng  
3. **Accessibility**: Đảm bảo contrast ratio đạt WCAG AA standards
4. **Performance**: Sử dụng backdrop-blur một cách tiết kiệm
5. **Responsive**: Luôn thiết kế mobile-first với breakpoints rõ ràng

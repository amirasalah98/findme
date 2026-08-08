// ─── Color tokens ─────────────────────────────────────────────────────────────
export const C = {
  navy:      "#12304A",
  teal:      "#168C8C",
  surface:   "#F8FAFC",
  white:     "#FFFFFF",
  border:    "#E5E7EB",
  text:      "#1F2937",
  muted:     "#6B7280",
  error:     "#DC2626",
  tealLight: "#E6F5F5",
  tealDim:   "#0F6A6A",
  navyLight: "#1E4A70",
  amber:     "#D97706",
}

// ─── Helpers ──────────────────────────────────────────────────────────────────
export const img = (id: string, w = 300, h = 300) =>
  `https://images.unsplash.com/${id}?w=${w}&h=${h}&fit=crop&auto=format`

export const PAGE_MAX = 1200
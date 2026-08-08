import type { ReactNode, CSSProperties } from "react"
import { C } from "../../constants/theme"

export function Card({ children, style }: { children: ReactNode; style?: CSSProperties }) {
  return <div style={{ background: C.white, borderRadius: 16, border: `1px solid ${C.border}`, boxShadow: "0 1px 8px rgba(18,48,74,0.06)", padding: "28px 24px", display: "flex", flexDirection: "column", gap: 18, ...style }}>{children}</div>
}
import type { ReactNode } from "react"
import { C } from "../../constants/theme"

export function Label({ children }: { children: ReactNode }) {
  return <span style={{ fontFamily: "Inter", fontSize: 13, fontWeight: 500, color: C.text, display: "block", marginBottom: 6 }}>{children}</span>
}
import type { ReactNode } from "react"
import { C } from "../../constants/theme"

export function TealLink({ children, onClick }: { children: ReactNode; onClick?: () => void }) {
  return <button onClick={onClick} style={{ background: "none", border: "none", cursor: "pointer", color: C.teal, fontFamily: "Inter", fontWeight: 600, fontSize: 14, padding: 0 }}>{children}</button>
}
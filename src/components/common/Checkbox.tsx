import { useState } from "react"
import type { ReactNode } from "react"
import { C } from "../../constants/theme"

export function Checkbox({ children }: { children: ReactNode }) {
  const [checked, setChecked] = useState(false)
  return (
    <label style={{ display: "flex", alignItems: "flex-start", gap: 10, cursor: "pointer" }}>
      <div onClick={() => setChecked(v => !v)} style={{ width: 20, height: 20, flexShrink: 0, marginTop: 1, borderRadius: 5, border: `1.5px solid ${checked ? C.teal : C.border}`, background: checked ? C.teal : C.white, display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.15s" }}>
        {checked && <svg width="11" height="9" viewBox="0 0 11 9" fill="none"><path d="M1 4.5L4 7.5L10 1.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>}
      </div>
      <span style={{ fontFamily: "Inter", fontSize: 13, color: C.text, lineHeight: 1.5 }}>{children}</span>
    </label>
  )
}
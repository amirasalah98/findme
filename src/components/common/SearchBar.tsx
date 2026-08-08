import { useState } from "react"
import type { CSSProperties } from "react"
import { C } from "../../constants/theme"
import { Icon } from "../../constants/icons"

export function SearchBar({ placeholder, style }: { placeholder: string; style?: CSSProperties }) {
  const [focused, setFocused] = useState(false)
  return (
    <div style={{ position: "relative", ...style }}>
      <div style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", color: C.muted, pointerEvents: "none", display: "flex" }}>{Icon.search}</div>
      <input type="text" placeholder={placeholder} onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
        style={{ width: "100%", height: 46, borderRadius: 10, border: `1.5px solid ${focused ? C.teal : C.border}`, background: C.white, padding: "0 16px 0 44px", fontFamily: "Inter", fontSize: 14, color: C.text, outline: "none", boxShadow: focused ? `0 0 0 3px ${C.tealLight}` : "none", transition: "border-color 0.15s, box-shadow 0.15s" }}
      />
    </div>
  )
}
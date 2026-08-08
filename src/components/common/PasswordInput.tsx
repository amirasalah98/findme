import { useState } from "react"
import { C } from "../../constants/theme"
import { Icon } from "../../constants/icons"

export function PasswordInput({ placeholder, name, onChange }: { placeholder?: string; name?: string; onChange?: (v: string) => void }) {
  const [show, setShow] = useState(false)
  const [focused, setFocused] = useState(false)
  return (
    <div style={{ position: "relative" }}>
      <input type={show ? "text" : "password"} name={name} placeholder={placeholder ?? ""} onChange={e => onChange?.(e.target.value)} onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
        style={{ width: "100%", height: 52, borderRadius: 10, border: `1.5px solid ${focused ? C.teal : C.border}`, background: C.white, padding: "0 48px 0 16px", fontFamily: "Inter, sans-serif", fontSize: 15, color: C.text, outline: "none", boxShadow: focused ? `0 0 0 3px ${C.tealLight}` : "none", transition: "border-color 0.15s, box-shadow 0.15s" }}
      />
      <button type="button" onClick={() => setShow(v => !v)} style={{ position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", padding: 4, color: C.muted, display: "flex", alignItems: "center" }}>
        {show ? Icon.eyeOff : Icon.eye}
      </button>
    </div>
  )
}
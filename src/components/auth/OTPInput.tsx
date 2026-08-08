import { useState, useRef } from "react"
import type { KeyboardEvent } from "react"
import { C } from "../../constants/theme"

export function OTPInput() {
  const [values, setValues] = useState<string[]>(Array(6).fill(""))
  const refs = useRef<(HTMLInputElement | null)[]>([])
  const handleChange = (i: number, val: string) => {
    if (!/^\d?$/.test(val)) return
    const next = [...values]; next[i] = val; setValues(next)
    if (val && i < 5) refs.current[i + 1]?.focus()
  }
  const handleKeyDown = (i: number, e: KeyboardEvent) => {
    if (e.key === "Backspace" && !values[i] && i > 0) refs.current[i - 1]?.focus()
  }
  return (
    <div style={{ display: "flex", gap: 8, justifyContent: "center" }}>
      {values.map((v, i) => (
        <input key={i} ref={el => { refs.current[i] = el }} type="text" inputMode="numeric" maxLength={1} value={v} onChange={e => handleChange(i, e.target.value)} onKeyDown={e => handleKeyDown(i, e)}
          style={{ width: 46, height: 54, borderRadius: 10, border: `1.5px solid ${v ? C.teal : C.border}`, background: C.white, textAlign: "center", fontFamily: "Inter", fontSize: 22, fontWeight: 700, color: C.navy, outline: "none", transition: "border-color 0.15s, box-shadow 0.15s" }}
          onFocus={e => { e.target.style.borderColor = C.teal; e.target.style.boxShadow = `0 0 0 3px ${C.tealLight}` }}
          onBlur={e => { e.target.style.borderColor = v ? C.teal : C.border; e.target.style.boxShadow = "none" }}
        />
      ))}
    </div>
  )
}
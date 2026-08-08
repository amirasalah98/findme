import { useState } from "react"
import type { InputHTMLAttributes } from "react"
import { C } from "../../constants/theme"

export function Input({ error, style, ...props }: InputHTMLAttributes<HTMLInputElement> & { error?: boolean }) {
  const [focused, setFocused] = useState(false)
  return (
    <input {...props}
      onFocus={e => { setFocused(true); props.onFocus?.(e) }}
      onBlur={e => { setFocused(false); props.onBlur?.(e) }}
      style={{ width: "100%", height: 52, borderRadius: 10, border: `1.5px solid ${error ? C.error : focused ? C.teal : C.border}`, background: C.white, padding: "0 16px", fontFamily: "Inter, sans-serif", fontSize: 15, color: C.text, outline: "none", boxShadow: focused ? `0 0 0 3px ${error ? "#FEE2E2" : C.tealLight}` : "none", transition: "border-color 0.15s, box-shadow 0.15s", ...style }}
    />
  )
}
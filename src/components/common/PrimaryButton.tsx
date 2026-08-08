import { useState } from "react"
import type { ReactNode, CSSProperties } from "react"
import { C } from "../../constants/theme"

export function PrimaryButton({ children, onClick, disabled, style }: { children: ReactNode; onClick?: () => void; disabled?: boolean; style?: CSSProperties }) {
  const [pressed, setPressed] = useState(false)
  return (
    <button onClick={onClick} disabled={disabled} onMouseDown={() => setPressed(true)} onMouseUp={() => setPressed(false)} onMouseLeave={() => setPressed(false)}
      style={{ width: "100%", height: 52, borderRadius: 10, background: disabled ? "#A1D4D4" : pressed ? C.tealDim : C.teal, border: "none", color: "white", fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: 16, cursor: disabled ? "not-allowed" : "pointer", transform: pressed ? "translateY(1px)" : "none", transition: "background 0.15s, transform 0.1s", letterSpacing: "0.01em", ...style }}
    >
      {children}
    </button>
  )
}
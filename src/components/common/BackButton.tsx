import { C } from "../../constants/theme"
import { Icon } from "../../constants/icons"

export function BackButton({ onClick }: { onClick: () => void }) {
  return (
    <button onClick={onClick} style={{ display: "flex", alignItems: "center", gap: 6, background: "none", border: "none", cursor: "pointer", color: C.text, fontFamily: "Inter", fontWeight: 500, fontSize: 14, padding: "8px 0", marginBottom: 8 }}>
      {Icon.arrowLeft} Back
    </button>
  )
}
import { C } from "../../constants/theme"
import type { BadgeType } from "../../types"

export function StatusBadge({ type }: { type: BadgeType }) {
  const config: Record<BadgeType, { label: string; bg: string; color: string }> = {
    missing:           { label: "Missing",              bg: "#FEF2F2", color: C.error },
    // critical:          { label: "Missing – Critical",   bg: "#FEF2F2", color: C.error },
    found:             { label: "Found",                bg: "#FFFBEB", color: "#D97706" },
    // unidentified:      { label: "Found – Unidentified", bg: "#FFFBEB", color: C.amber },
    // identified:        { label: "Found – Identified",   bg: "#ECFDF5", color: "#059669" },
    // "family-notified": { label: "Family Notified",      bg: "#EFF6FF", color: "#2563EB" },
  }
  const { label, bg, color } = config[type]
  return <span style={{ display: "inline-block", padding: "3px 8px", borderRadius: 6, background: bg, fontFamily: "Inter", fontWeight: 600, fontSize: 11, color, whiteSpace: "nowrap" }}>{label}</span>
}
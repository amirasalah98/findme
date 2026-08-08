import { useState } from "react"
import { C } from "../../constants/theme"
import { Icon } from "../../constants/icons"
import { StatusBadge } from "../common/StatusBadge"
import type { PersonData } from "../../types"

export function PersonCard({ person }: { person: PersonData }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{ background: C.white, borderRadius: 14, border: `1px solid ${hovered ? C.teal + "55" : C.border}`, boxShadow: hovered ? "0 4px 16px rgba(18,48,74,0.10)" : "0 1px 6px rgba(18,48,74,0.06)", padding: 16, display: "flex", gap: 14, cursor: "pointer", transition: "box-shadow 0.15s, border-color 0.15s" }}>
      <div style={{ width: 80, height: 80, borderRadius: 10, overflow: "hidden", flexShrink: 0, background: C.border }}>
        <img src={'https://res.cloudinary.com/do0eee789/image/upload/v1786201129/placeholder-image-person-jpg_sfw0vc.webp'} alt={person.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </div>
      <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: 5 }}>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 8 }}>
          <span style={{ fontFamily: "Inter", fontWeight: 700, fontSize: 15, color: C.navy, lineHeight: 1.2 }}>{person.name}</span>
          <StatusBadge type={person.badge} />
        </div>
        <span style={{ fontFamily: "Inter", fontSize: 13, color: C.muted }}>{person.age} · {person.gender}</span>
        <div style={{ display: "flex", alignItems: "center", gap: 4, color: C.muted }}>{Icon.pin}<span style={{ fontFamily: "Inter", fontSize: 12, color: C.muted }}>{person.location}</span></div>
        <span style={{ fontFamily: "Inter", fontSize: 12, color: C.muted }}><strong style={{ color: C.text }}></strong> {person.dateValue}</span>
      </div>
    </div>
  )
}
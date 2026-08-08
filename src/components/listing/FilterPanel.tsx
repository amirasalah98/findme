import { C } from "../../constants/theme"
import { Icon } from "../../constants/icons"

function FilterPanelContent({ filters, onClose }: { filters: string[]; onClose: () => void }) {
  return (
    <>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "8px 20px 16px" }}>
        <span style={{ fontFamily: "Inter", fontWeight: 700, fontSize: 17, color: C.navy }}>Filter & Sort</span>
        <button onClick={onClose} style={{ background: "none", border: "none", cursor: "pointer", color: C.muted, fontFamily: "Inter", fontSize: 14 }}>Reset</button>
      </div>
      {filters.map(f => (
        <div key={f} style={{ padding: "14px 20px", borderTop: `1px solid ${C.border}`, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontFamily: "Inter", fontSize: 14, color: C.text, fontWeight: 500 }}>{f}</span>
          {Icon.chevronRight}
        </div>
      ))}
      <div style={{ padding: "20px 20px" }}>
        <button onClick={onClose} style={{ width: "100%", height: 48, borderRadius: 10, background: C.teal, border: "none", color: "white", fontFamily: "Inter", fontWeight: 600, fontSize: 15, cursor: "pointer" }}>Apply Filters</button>
      </div>
    </>
  )
}

export function FilterPanel({ open, onClose, filters, isMobile }: { open: boolean; onClose: () => void; filters: string[]; isMobile: boolean }) {
  if (isMobile) {
    return (
      <>
        {open && <div onClick={onClose} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.35)", zIndex: 40 }} />}
        <div style={{ position: "fixed", bottom: 0, left: 0, right: 0, background: C.white, borderRadius: "20px 20px 0 0", zIndex: 50, boxShadow: "0 -4px 24px rgba(18,48,74,0.12)", transform: open ? "translateY(0)" : "translateY(100%)", transition: "transform 0.25s cubic-bezier(0.4,0,0.2,1)", padding: "0 0 32px" }}>
          <div style={{ display: "flex", justifyContent: "center", padding: "12px 0 8px" }}><div style={{ width: 36, height: 4, borderRadius: 2, background: C.border }} /></div>
          <FilterPanelContent filters={filters} onClose={onClose} />
        </div>
      </>
    )
  }
  return (
    <>
      {open && <div onClick={onClose} style={{ position: "fixed", inset: 0, zIndex: 40 }} />}
      <div style={{ position: "absolute", top: "calc(100% + 8px)", right: 0, width: 280, background: C.white, borderRadius: 14, border: `1px solid ${C.border}`, boxShadow: "0 8px 32px rgba(18,48,74,0.12)", zIndex: 50, overflow: "hidden", opacity: open ? 1 : 0, pointerEvents: open ? "auto" : "none", transform: open ? "translateY(0)" : "translateY(-8px)", transition: "opacity 0.15s, transform 0.15s" }}>
        <FilterPanelContent filters={filters} onClose={onClose} />
      </div>
    </>
  )
}
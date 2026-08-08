import { C } from "../../constants/theme"

export function EmptyState({ onClear }: { onClear: () => void }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "72px 24px", gap: 16, textAlign: "center" }}>
      <div style={{ width: 72, height: 72, borderRadius: "50%", background: C.tealLight, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke={C.teal} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
      </div>
      <div>
        <p style={{ fontFamily: "Inter", fontWeight: 600, fontSize: 17, color: C.navy, margin: "0 0 6px" }}>No results found</p>
        <p style={{ fontFamily: "Inter", fontSize: 14, color: C.muted, margin: 0 }}>Try changing your search or filters.</p>
      </div>
      <button onClick={onClear} style={{ padding: "10px 24px", borderRadius: 8, border: `1.5px solid ${C.teal}`, background: "none", cursor: "pointer", fontFamily: "Inter", fontWeight: 600, fontSize: 14, color: C.teal }}>Clear Filters</button>
    </div>
  )
}
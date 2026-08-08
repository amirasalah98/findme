import { C } from "../../constants/theme"
import { Icon } from "../../constants/icons"
import { FindMeLogo } from "../common/FindMeLogo"
import type { Screen, NavProps } from "../../types"

export function Drawer({ open, onClose, nav }: { open: boolean; onClose: () => void } & NavProps) {
//   const navItems = [
//     { label: "Missing People", screen: "missing" as Screen, icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="7" r="4"/><path d="M3 21v-2a7 7 0 0 1 7-7h4a7 7 0 0 1 7 7v2"/></svg> },
//     { label: "Found People",   screen: "found"   as Screen, icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg> },
//   ]
  const acctItems = ["Profile", "Notifications", "Settings"]
  return (
    <>
      {open && <div onClick={onClose} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.4)", zIndex: 100 }} />}
      <div style={{ position: "fixed", top: 0, right: 0, bottom: 0, width: 280, background: C.white, zIndex: 110, boxShadow: "-4px 0 24px rgba(18,48,74,0.14)", transform: open ? "translateX(0)" : "translateX(100%)", transition: "transform 0.25s cubic-bezier(0.4,0,0.2,1)", display: "flex", flexDirection: "column", overflowY: "auto" }}>
        <div style={{ padding: "20px 20px 16px", borderBottom: `1px solid ${C.border}` }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
            <FindMeLogo size="xs" />
            <button onClick={onClose} style={{ background: "none", border: "none", cursor: "pointer", color: C.muted, padding: 4, display: "flex" }}>{Icon.x}</button>
          </div>
          <div style={{ background: C.tealLight, borderRadius: 10, padding: "12px 14px", display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 36, height: 36, borderRadius: "50%", background: C.teal, display: "flex", alignItems: "center", justifyContent: "center", color: "white" }}>{Icon.user}</div>
            <div>
              <p style={{ fontFamily: "Inter", fontWeight: 600, fontSize: 14, color: C.navy, margin: 0 }}>Omar Salah</p>
              <p style={{ fontFamily: "Inter", fontSize: 12, color: C.muted, margin: 0 }}>omarrr.salahhh2003@gmail.com</p>
            </div>
          </div>
        </div>
        <div style={{ padding: "8px 12px", flex: 1 }}>
          {/* <p style={{ fontFamily: "Inter", fontSize: 11, fontWeight: 600, color: C.muted, textTransform: "uppercase", letterSpacing: "0.06em", padding: "8px 8px 4px" }}>Navigate</p> */}
          {/* {navItems.map(item => (
            <button key={item.label} onClick={() => { nav(item.screen); onClose() }}
              style={{ display: "flex", alignItems: "center", gap: 12, width: "100%", padding: "11px 10px", borderRadius: 8, background: "none", border: "none", cursor: "pointer", color: C.text, fontFamily: "Inter", fontWeight: 500, fontSize: 14, textAlign: "left" }}
              onMouseEnter={e => (e.currentTarget.style.background = C.surface)}
              onMouseLeave={e => (e.currentTarget.style.background = "none")}>
              <span style={{ color: C.teal }}>{item.icon}</span>{item.label}
            </button>
          ))} */}
          <div style={{ height: 1, background: C.border, margin: "8px 0" }} />
          <p style={{ fontFamily: "Inter", fontSize: 11, fontWeight: 600, color: C.muted, textTransform: "uppercase", letterSpacing: "0.06em", padding: "8px 8px 4px" }}>Account</p>
          {acctItems.map(label => (
            <button key={label} style={{ display: "flex", alignItems: "center", gap: 12, width: "100%", padding: "10px 10px", borderRadius: 8, background: "none", border: "none", cursor: "pointer", color: C.text, fontFamily: "Inter", fontWeight: 400, fontSize: 14, textAlign: "left" }}
              onMouseEnter={e => (e.currentTarget.style.background = C.surface)}
              onMouseLeave={e => (e.currentTarget.style.background = "none")}>
              <span style={{ color: C.muted, width: 16, display: "inline-block" }}>·</span>{label}
            </button>
          ))}
          <div style={{ height: 1, background: C.border, margin: "8px 0" }} />
          <button onClick={() => { nav("login"); onClose() }} style={{ display: "flex", alignItems: "center", gap: 12, width: "100%", padding: "11px 10px", borderRadius: 8, background: "none", border: "none", cursor: "pointer", color: C.error, fontFamily: "Inter", fontWeight: 500, fontSize: 14 }}>
            {Icon.logout} Logout
          </button>
        </div>
      </div>
    </>
  )
}

import { useState } from "react"
import { useIsMobile } from "../../hooks/useIsMobile"
import { C } from "../../constants/theme"
import { Icon } from "../../constants/icons"
import { PageWrap } from "../common/PageWrap"
import { FindMeLogo } from "../common/FindMeLogo"
import { Drawer } from "./Drawer"
import type { NavProps } from "../../types"
 
export function AppHeader({ nav, activeTab }: { activeTab: "home" | "missing" | "found" } & NavProps) {
  const isMobile = useIsMobile()
  const [drawerOpen, setDrawerOpen] = useState(false)
  const tabs = [{ key: "home" as const, label: "Home" }, { key: "missing" as const, label: "Missing People" }, { key: "found" as const, label: "Found People" }]
 
  return (
    <>
      <header style={{ background: C.white, borderBottom: `1px solid ${C.border}`, position: "sticky", top: 0, zIndex: 30 }}>
        <PageWrap>
          {/* Top row */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: isMobile ? "12px 20px" : "0 40px", height: isMobile ? "auto" : 64 }}>
            <button onClick={() => nav("home")} style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}>
              <FindMeLogo size="xs" />
            </button>
 
            {/* Desktop inline nav */}
            {!isMobile && (
              <nav style={{ display: "flex", alignItems: "stretch", height: 64 }}>
                {tabs.map(tab => {
                  const active = activeTab === tab.key
                  return (
                    <button key={tab.key} onClick={() => nav(tab.key)}
                      style={{ padding: "0 20px", height: "100%", background: "none", border: "none", borderBottom: `2.5px solid ${active ? C.teal : "transparent"}`, cursor: "pointer", fontFamily: "Inter", fontWeight: active ? 600 : 400, fontSize: 14, color: active ? C.teal : C.muted, whiteSpace: "nowrap", transition: "all 0.15s" }}>
                      {tab.label}
                    </button>
                  )
                })}
              </nav>
            )}
 
            {/* Right side */}
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              {!isMobile && (
                <div style={{ position: "relative" }}>
                  <div style={{ position: "absolute", left: 10, top: "50%", transform: "translateY(-50%)", color: C.muted, pointerEvents: "none", display: "flex" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
                  </div>
                  <input placeholder="Search..." style={{ width: 180, height: 36, borderRadius: 8, border: `1.5px solid ${C.border}`, background: C.surface, padding: "0 12px 0 30px", fontFamily: "Inter", fontSize: 13, color: C.text, outline: "none" }} />
                </div>
              )}
              {isMobile && (
                <button style={{ background: "none", border: "none", cursor: "pointer", color: C.muted, padding: 8, display: "flex" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
                </button>
              )}
              <button onClick={() => setDrawerOpen(true)} style={{ display: "flex", alignItems: "center", gap: 6, background: "none", border: isMobile ? "none" : `1.5px solid ${C.border}`, borderRadius: 8, padding: isMobile ? 8 : "6px 12px", cursor: "pointer", color: C.navy, fontFamily: "Inter", fontSize: 14, fontWeight: 500 }}>
                <span style={{ color: C.navy, display: "flex" }}>{Icon.user}</span>
                {!isMobile && ""}
              </button>
            </div>
          </div>
 
          {/* Mobile tab row */}
          {isMobile && (
            <div style={{ display: "flex", borderTop: `1px solid ${C.border}` }}>
              {tabs.map(tab => {
                const active = activeTab === tab.key
                return (
                  <button key={tab.key} onClick={() => nav(tab.key)}
                    style={{ flex: 1, padding: "10px 6px", background: "none", border: "none", borderBottom: `2.5px solid ${active ? C.teal : "transparent"}`, cursor: "pointer", fontFamily: "Inter", fontWeight: active ? 600 : 400, fontSize: 12, color: active ? C.teal : C.muted, whiteSpace: "nowrap", transition: "all 0.15s" }}>
                    {tab.label}
                  </button>
                )
              })}
            </div>
          )}
        </PageWrap>
      </header>
      <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)} nav={nav} />
    </>
  )
}
 
import type { ReactNode } from "react"
import { useIsMobile } from "../../hooks/useIsMobile"
import { C } from "../../constants/theme"
import { FindMeLogo } from "../common/FindMeLogo"
import type { NavProps } from "../../types"

export function AuthShell({ children, nav }: { children: ReactNode } & NavProps) {
  const isMobile = useIsMobile()
  if (isMobile) {
    return (
      <div style={{ minHeight: "100vh", background: C.surface }}>
        <div style={{ padding: "0 0 48px" }}>{children}</div>
      </div>
    )
  }
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Top bar */}
      <div style={{ background: C.white, borderBottom: `1px solid ${C.border}`, height: 60, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 48px" }}>
        <FindMeLogo size="xs" />
        <div style={{ display: "flex", gap: 10 }}>
          <button onClick={() => nav("login")} style={{ background: "none", border: `1.5px solid ${C.border}`, borderRadius: 8, padding: "8px 18px", cursor: "pointer", fontFamily: "Inter", fontSize: 14, fontWeight: 500, color: C.text }}>Log in</button>
          <button onClick={() => nav("register")} style={{ background: C.teal, border: "none", borderRadius: 8, padding: "8px 18px", cursor: "pointer", fontFamily: "Inter", fontSize: 14, fontWeight: 600, color: "white" }}>Sign up</button>
        </div>
      </div>
      {/* Body */}
      <div style={{ flex: 1, display: "flex" }}>
        {/* Branding panel */}
        <div style={{ width: 400, flexShrink: 0, background: `linear-gradient(160deg, ${C.navy} 0%, ${C.navyLight} 55%, ${C.teal} 100%)`, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "48px 48px", gap: 32 }}>
          <FindMeLogo />
          <div style={{ textAlign: "center" }}>
            <h2 style={{ fontFamily: "Inter", fontWeight: 700, fontSize: 24, color: "white", margin: "0 0 12px", lineHeight: 1.25, letterSpacing: "-0.4px" }}>Helping people find their way home.</h2>
            <p style={{ fontFamily: "Inter", fontSize: 14, color: "rgba(255,255,255,0.70)", margin: 0, lineHeight: 1.65 }}>A trusted platform connecting families with missing loved ones across Egypt.</p>
          </div>
          {/* <div style={{ display: "flex", flexDirection: "column", gap: 12, width: "100%" }}>
            {[["2,841", "Cases reported"], ["1,394", "Families reunited"], ["340", "Active reports this week"]].map(([n, l]) => (
              <div key={l} style={{ background: "rgba(255,255,255,0.1)", borderRadius: 10, padding: "14px 18px", display: "flex", alignItems: "center", gap: 14 }}>
                <span style={{ fontFamily: "Inter", fontWeight: 700, fontSize: 20, color: "white", minWidth: 50 }}>{n}</span>
                <span style={{ fontFamily: "Inter", fontSize: 13, color: "rgba(255,255,255,0.65)" }}>{l}</span>
              </div>
            ))}
          </div> */}
        </div>
        {/* Form panel */}
        <div style={{ flex: 1, background: C.surface, overflowY: "auto", display: "flex", alignItems: "flex-start", justifyContent: "center", padding: "52px 48px" }}>
          <div style={{ width: "100%", maxWidth: 460 }}>{children}</div>
        </div>
      </div>
    </div>
  )
}
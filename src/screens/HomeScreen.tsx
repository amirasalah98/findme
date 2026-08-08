import { useIsMobile } from "../hooks/useIsMobile"
import { C } from "../constants/theme"
import { Icon } from "../constants/icons"
import { PageWrap } from "../components/common/PageWrap"
import { AppHeader } from "../components/layout/AppHeader"
import type { NavProps } from "../types"

export function HomeScreen({ nav }: NavProps) {
  const isMobile = useIsMobile()
  return (
    <div style={{ minHeight: "100vh", background: C.surface, display: "flex", flexDirection: "column" }}>
      <AppHeader nav={nav} activeTab="home" />

      {/* Hero */}
      <div style={{ background: `linear-gradient(160deg, ${C.navy} 0%, ${C.navyLight} 60%, ${C.teal} 100%)` }}>
        <PageWrap>
          <div style={{ padding: isMobile ? "36px 20px 32px" : "64px 40px 56px", display: "flex", flexDirection: isMobile ? "column" : "row", gap: isMobile ? 20 : 56, alignItems: isMobile ? "stretch" : "center" }}>
            <div style={{ flex: 1 }}>
              <h1 style={{ fontFamily: "Inter", fontWeight: 700, fontSize: isMobile ? 26 : 48, color: "white", margin: "0 0 14px", lineHeight: 1.12, letterSpacing: "-0.5px" }}>
                Helping people find<br />their way home.
              </h1>
              <p style={{ fontFamily: "Inter", fontSize: isMobile ? 14 : 18, color: "rgba(255,255,255,0.78)", margin: "0 0 24px", lineHeight: 1.65 }}>
                Find Me helps families search for missing people and allows communities to share information that may help reconnect people with their loved ones.
              </p>
              <div style={{ position: "relative", maxWidth: isMobile ? "100%" : 500 }}>
                <div style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", color: C.muted, display: "flex" }}>{Icon.search}</div>
                <input type="text" placeholder="Search for a person..." style={{ width: "100%", height: isMobile ? 48 : 54, borderRadius: 12, border: "none", background: C.white, padding: "0 16px 0 44px", fontFamily: "Inter", fontSize: 15, color: C.text, outline: "none", boxShadow: "0 4px 20px rgba(0,0,0,0.18)" }} />
              </div>
            </div>
            {/* {!isMobile && (
              <div style={{ display: "flex", flexDirection: "column", gap: 12, minWidth: 220 }}>
                {[["2,841", "Cases reported"], ["1,394", "Families reunited"], ["340", "Active this week"]].map(([n, l]) => (
                  <div key={l} style={{ background: "rgba(255,255,255,0.1)", borderRadius: 12, padding: "18px 22px", backdropFilter: "blur(4px)" }}>
                    <p style={{ fontFamily: "Inter", fontWeight: 700, fontSize: 30, color: "white", margin: "0 0 2px", letterSpacing: "-0.5px" }}>{n}</p>
                    <p style={{ fontFamily: "Inter", fontSize: 13, color: "rgba(255,255,255,0.62)", margin: 0 }}>{l}</p>
                  </div>
                ))}
              </div>
            )} */}
          </div>
        </PageWrap>
      </div>

      {/* Mobile stats strip */}
      {isMobile && (
        <div style={{ display: "flex", background: C.white, borderBottom: `1px solid ${C.border}` }}>
          {[["2,841", "Cases"], ["1,394", "Reunited"], ["340", "Active"]].map(([num, label], i) => (
            <div key={i} style={{ flex: 1, padding: "14px 8px", textAlign: "center", borderRight: i < 2 ? `1px solid ${C.border}` : "none" }}>
              <p style={{ fontFamily: "Inter", fontWeight: 700, fontSize: 17, color: C.teal, margin: 0 }}>{num}</p>
              <p style={{ fontFamily: "Inter", fontSize: 11, color: C.muted, margin: 0 }}>{label}</p>
            </div>
          ))}
        </div>
      )}

      {/* Content */}
      <div style={{ flex: 1 }}>
        <PageWrap>
          <div style={{ padding: isMobile ? 0 : "0 40px" }}>

            {/* What is Find Me */}
            <div style={{ padding: isMobile ? "28px 20px" : "52px 0 44px", borderBottom: `1px solid ${C.border}` }}>
              <h2 style={{ fontFamily: "Inter", fontWeight: 700, fontSize: isMobile ? 18 : 26, color: C.navy, margin: "0 0 12px" }}>What is Find Me?</h2>
              <p style={{ fontFamily: "Inter", fontSize: isMobile ? 14 : 16, color: C.muted, margin: 0, lineHeight: 1.7, maxWidth: 700 }}>
                Find Me brings together reports of missing and found people in one place, making it easier for families and communities to search, share information, and help reconnect people.
              </p>
            </div>

            {/* Section cards */}
            <div style={{ padding: isMobile ? "20px 20px" : "44px 0", display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 18 }}>
              <div style={{ background: C.white, borderRadius: 16, border: `1px solid ${C.border}`, boxShadow: "0 1px 6px rgba(18,48,74,0.06)", overflow: "hidden" }}>
                <div style={{ background: "linear-gradient(120deg, #FEF2F2 0%, #FFF7F7 100%)", padding: "20px 22px 16px", borderBottom: "1px solid #FEE2E2" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                    <div style={{ width: 38, height: 38, borderRadius: 10, background: "#FEE2E2", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke={C.error} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="7" r="4"/><path d="M3 21v-2a7 7 0 0 1 7-7h4a7 7 0 0 1 7 7v2"/></svg>
                    </div>
                    <h3 style={{ fontFamily: "Inter", fontWeight: 700, fontSize: 17, color: C.navy, margin: 0 }}>Missing People</h3>
                  </div>
                  <p style={{ fontFamily: "Inter", fontSize: 14, color: C.muted, margin: 0, lineHeight: 1.6 }}>Browse reports of people who have been reported missing and help spread information that may lead to finding them.</p>
                </div>
                <div style={{ padding: "14px 22px" }}>
                  <button onClick={() => nav("missing")} style={{ display: "flex", alignItems: "center", gap: 6, background: "none", border: "none", cursor: "pointer", color: C.error, fontFamily: "Inter", fontWeight: 600, fontSize: 14, padding: 0 }}>
                    View Missing People {Icon.arrowRight}
                  </button>
                </div>
              </div>
              <div style={{ background: C.white, borderRadius: 16, border: `1px solid ${C.border}`, boxShadow: "0 1px 6px rgba(18,48,74,0.06)", overflow: "hidden" }}>
                <div style={{ background: "linear-gradient(120deg, rgb(255, 247, 237) 0%, rgb(255, 251, 245) 100%)", padding: "20px 22px 16px", borderBottom: "1px solid rgb(255, 251, 235)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                    <div style={{ width: 38, height: 38, borderRadius: 10, background: "rgb(243, 233, 207)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="rgb(217, 119, 6)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                    </div>
                    <h3 style={{ fontFamily: "Inter", fontWeight: 700, fontSize: 17, color: C.navy, margin: 0 }}>Found People</h3>
                  </div>
                  <p style={{ fontFamily: "Inter", fontSize: 14, color: C.muted, margin: 0, lineHeight: 1.6 }}>Browse reports of people who have been found and may need help being identified or reunited with their families.</p>
                </div>
                <div style={{ padding: "14px 22px" }}>
                  <button onClick={() => nav("found")} style={{ display: "flex", alignItems: "center", gap: 6, background: "none", border: "none", cursor: "pointer", color: "rgb(217, 119, 6)", fontFamily: "Inter", fontWeight: 600, fontSize: 14, padding: 0 }}>
                    View Found People {Icon.arrowRight}
                  </button>
                </div>
              </div>
            </div>

            {/* How it works */}
            <div style={{ padding: isMobile ? "0 20px 36px" : "0 0 56px", borderTop: `1px solid ${C.border}` }}>
              <h2 style={{ fontFamily: "Inter", fontWeight: 700, fontSize: isMobile ? 18 : 26, color: C.navy, margin: isMobile ? "24px 0 20px" : "52px 0 36px" }}>How Find Me Works</h2>
              <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: isMobile ? 20 : 32 }}>
                {[
                  { n: 1, title: "Search", desc: "Search through missing and found-person reports to find someone or look for a match.", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg> },
                  { n: 2, title: "Share", desc: "Submit information about a missing or found person to help the community.", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg> },
                  { n: 3, title: "Reconnect", desc: "Help families find and reconnect with their loved ones across Egypt.", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg> },
                ].map(step => (
                  <div key={step.n} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                    <div style={{ width: 44, height: 44, borderRadius: "50%", background: C.teal, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{step.icon}</div>
                    <div>
                      <p style={{ fontFamily: "Inter", fontWeight: 700, fontSize: isMobile ? 15 : 16, color: C.navy, margin: "0 0 4px" }}>{step.n}. {step.title}</p>
                      <p style={{ fontFamily: "Inter", fontSize: isMobile ? 13 : 14, color: C.muted, margin: 0, lineHeight: 1.55 }}>{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </PageWrap>

        {/* Safety callout */}
        <div style={{ borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}`, background: C.tealLight }}>
          <PageWrap>
            <div style={{ padding: isMobile ? "20px 20px" : "28px 40px", display: "flex", flexDirection: isMobile ? "column" : "row", alignItems: isMobile ? "flex-start" : "center", justifyContent: "space-between", gap: 16 }}>
              <div>
                <p style={{ fontFamily: "Inter", fontWeight: 600, fontSize: 15, color: C.teal, margin: "0 0 5px" }}>Help responsibly</p>
                <p style={{ fontFamily: "Inter", fontSize: 14, color: C.muted, margin: 0, lineHeight: 1.6, maxWidth: 580 }}>Please make sure the information you share is accurate and respect people's privacy when submitting or sharing reports.</p>
              </div>
              <button style={{ background: "none", border: `1.5px solid ${C.teal}`, borderRadius: 8, cursor: "pointer", color: C.teal, fontFamily: "Inter", fontWeight: 600, fontSize: 14, padding: "10px 18px", whiteSpace: "nowrap" }}>
                Safety & Privacy →
              </button>
            </div>
          </PageWrap>
        </div>

        {/* Footer */}
        <footer style={{ background: C.navy }}>
          <PageWrap>
            <div style={{ padding: isMobile ? "32px 20px" : "52px 40px" }}>
              <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", justifyContent: "space-between", gap: isMobile ? 28 : 48, marginBottom: 36 }}>
                <div style={{ maxWidth: 320 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                    <div style={{ width: 28, height: 28, borderRadius: 8, background: "rgba(255,255,255,0.12)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <svg width="14" height="14" viewBox="0 0 26 26" fill="none"><circle cx="11" cy="7" r="4" fill="white" fillOpacity="0.95"/><path d="M4 21c0-3.866 3.134-7 7-7s7 3.134 7 7" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>
                    </div>
                    <span style={{ fontFamily: "Inter", fontWeight: 700, fontSize: 16, color: "white" }}>Find Me</span>
                  </div>
                  <p style={{ fontFamily: "Inter", fontSize: 13, color: "rgba(255,255,255,0.55)", margin: 0, lineHeight: 1.65 }}>Helping communities find missing people and reconnect families.</p>
                </div>
                <div style={{ display: "flex", gap: isMobile ? 32 : 56 }}>
                  <div>
                    <p style={{ fontFamily: "Inter", fontWeight: 600, fontSize: 12, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.06em", margin: "0 0 12px" }}>Platform</p>
                    {["About Us", "Missing People", "Found People", "Contact Us"].map(l => (
                      <button key={l} style={{ display: "block", background: "none", border: "none", cursor: "pointer", color: "rgba(255,255,255,0.62)", fontFamily: "Inter", fontSize: 13, padding: "3px 0", marginBottom: 4 }}>{l}</button>
                    ))}
                  </div>
                  <div>
                    <p style={{ fontFamily: "Inter", fontWeight: 600, fontSize: 12, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.06em", margin: "0 0 12px" }}>Legal</p>
                    {["Privacy Policy", "Terms of Service", "Help & Support"].map(l => (
                      <button key={l} style={{ display: "block", background: "none", border: "none", cursor: "pointer", color: "rgba(255,255,255,0.62)", fontFamily: "Inter", fontSize: 13, padding: "3px 0", marginBottom: 4 }}>{l}</button>
                    ))}
                  </div>
                </div>
              </div>
              <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 20 }}>
                <p style={{ fontFamily: "Inter", fontSize: 12, color: "rgba(255,255,255,0.32)", margin: 0 }}>© 2026 Find Me. All rights reserved.</p>
              </div>
            </div>
          </PageWrap>
        </footer>
      </div>
    </div>
  )
}
import { C } from "../../constants/theme"

export function ProgressSteps({ current }: { current: 1 | 2 | 3 }) {
  const steps = [{ n: 1, label: "Email" }, { n: 2, label: "Verify" }, { n: 3, label: "New Password" }]
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 28 }}>
      {steps.map((s, i) => {
        const active = s.n === current, done = s.n < current
        return (
          <div key={s.n} style={{ display: "flex", alignItems: "center" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
              <div style={{ width: 28, height: 28, borderRadius: "50%", background: (active || done) ? C.teal : C.border, display: "flex", alignItems: "center", justifyContent: "center", transition: "background 0.2s" }}>
                {done ? <svg width="13" height="10" viewBox="0 0 13 10" fill="none"><path d="M1.5 5L5 8.5L11.5 1.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      : <span style={{ fontFamily: "Inter", fontWeight: 600, fontSize: 12, color: "white" }}>{s.n}</span>}
              </div>
              <span style={{ fontFamily: "Inter", fontSize: 10, fontWeight: active ? 600 : 400, color: active ? C.teal : C.muted, whiteSpace: "nowrap" }}>{s.label}</span>
            </div>
            {i < steps.length - 1 && <div style={{ width: 40, height: 2, marginBottom: 16, background: done ? C.teal : C.border, borderRadius: 1, transition: "background 0.2s" }} />}
          </div>
        )
      })}
    </div>
  )
}
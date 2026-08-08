import { C } from "../../constants/theme"

export function PasswordStrengthMeter({ password }: { password: string }) {
  const checks = [
    { label: "At least 8 characters", ok: password.length >= 8 },
    { label: "At least one uppercase letter", ok: /[A-Z]/.test(password) },
    { label: "At least one number", ok: /[0-9]/.test(password) },
    { label: "At least one special character", ok: /[^A-Za-z0-9]/.test(password) },
  ]
  const score = checks.filter(c => c.ok).length
  const level = score <= 1 ? "Weak" : score <= 3 ? "Medium" : "Strong"
  const barColor = level === "Weak" ? C.error : level === "Medium" ? C.amber : C.teal
  return (
    <div style={{ marginTop: 10, display: "flex", flexDirection: "column", gap: 8 }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ fontFamily: "Inter", fontSize: 12, color: C.muted }}>Password strength</span>
        <span style={{ fontFamily: "Inter", fontSize: 12, fontWeight: 600, color: barColor }}>{level}</span>
      </div>
      <div style={{ height: 4, borderRadius: 2, background: C.border, overflow: "hidden" }}>
        <div style={{ height: "100%", width: `${(score / 4) * 100}%`, background: barColor, borderRadius: 2, transition: "width 0.3s, background 0.3s" }} />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 5, paddingTop: 4 }}>
        {checks.map(c => (
          <div key={c.label} style={{ display: "flex", alignItems: "center", gap: 7 }}>
            <div style={{ width: 14, height: 14, borderRadius: "50%", background: c.ok ? C.teal : C.border, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "background 0.15s" }}>
              {c.ok && <svg width="8" height="6" viewBox="0 0 8 6" fill="none"><path d="M1 3L3 5L7 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>}
            </div>
            <span style={{ fontFamily: "Inter", fontSize: 12, color: c.ok ? C.text : C.muted }}>{c.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
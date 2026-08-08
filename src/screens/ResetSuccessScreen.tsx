import { useIsMobile } from "../hooks/useIsMobile"
import { C } from "../constants/theme"
import { AuthShell } from "../components/auth/AuthShell"
import { PrimaryButton } from "../components/common/PrimaryButton"
import type { NavProps } from "../types"

export function ResetSuccessScreen({ nav }: NavProps) {
  const isMobile = useIsMobile()
  return (
    <AuthShell nav={nav}>
      <div style={{ padding: isMobile ? "80px 24px 0" : "40px 0 0", display: "flex", flexDirection: "column", alignItems: "center", gap: 28, textAlign: "center" }}>
        <div style={{ width: 80, height: 80, borderRadius: "50%", background: C.tealLight, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <circle cx="20" cy="20" r="18" stroke={C.teal} strokeWidth="2"/>
            <path d="M12 20L17.5 25.5L28 14.5" stroke={C.teal} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div>
          <h1 style={{ fontFamily: "Inter", fontWeight: 700, fontSize: isMobile ? 24 : 28, color: C.navy, margin: "0 0 10px", letterSpacing: "-0.3px" }}>Password reset successfully</h1>
          <p style={{ fontFamily: "Inter", fontSize: 15, color: C.muted, margin: 0, lineHeight: 1.6 }}>You can now log in with your new password.</p>
        </div>
        <PrimaryButton onClick={() => nav("login")} style={{ maxWidth: 320 }}>Go to Login</PrimaryButton>
      </div>
    </AuthShell>
  )
}
import { useIsMobile } from "../hooks/useIsMobile"
import { C } from "../constants/theme"
import { AuthShell } from "../components/auth/AuthShell"
import { ProgressSteps } from "../components/auth/ProgressSteps"
import { OTPInput } from "../components/auth/OTPInput"
import { Card } from "../components/common/Card"
import { TealLink } from "../components/common/TealLink"
import { PrimaryButton } from "../components/common/PrimaryButton"
import { BackButton } from "../components/common/BackButton"
import type { NavProps } from "../types"

export function ForgotOTPScreen({ nav }: NavProps) {
  const isMobile = useIsMobile()
  return (
    <AuthShell nav={nav}>
      <div style={{ padding: isMobile ? "24px 24px 0" : 0, display: "flex", flexDirection: "column", gap: 24 }}>
        <BackButton onClick={() => nav("forgot-email")} />
        <ProgressSteps current={2} />
        <div>
          <h1 style={{ fontFamily: "Inter", fontWeight: 700, fontSize: isMobile ? 22 : 26, color: C.navy, margin: "0 0 8px", letterSpacing: "-0.3px" }}>Verify your email</h1>
          <p style={{ fontFamily: "Inter", fontSize: 14, color: C.muted, margin: "0 0 4px", lineHeight: 1.6 }}>We've sent a 6-digit verification code to your email address.</p>
          <p style={{ fontFamily: "Inter", fontSize: 13, fontWeight: 600, color: C.navy, margin: 0 }}>o***@gmail.com</p>
        </div>
        <Card>
          <OTPInput />
          <div style={{ textAlign: "center", paddingTop: 4 }}>
            <p style={{ fontFamily: "Inter", fontSize: 13, color: C.muted, margin: "0 0 6px" }}>Didn't receive the code?</p>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
              <TealLink>Resend code</TealLink>
              <span style={{ fontFamily: "Inter", fontSize: 12, color: C.muted }}>Resend available in 00:45</span>
            </div>
          </div>
          <PrimaryButton onClick={() => nav("forgot-password")}>Verify Code</PrimaryButton>
        </Card>
        <p style={{ textAlign: "center", fontFamily: "Inter", fontSize: 14, color: C.muted }}>
          <TealLink onClick={() => nav("forgot-email")}>← Back</TealLink>
        </p>
      </div>
    </AuthShell>
  )
}
import { useIsMobile } from "../hooks/useIsMobile"
import { C } from "../constants/theme"
import { AuthShell } from "../components/auth/AuthShell"
import { FindMeLogo } from "../components/common/FindMeLogo"
import { ProgressSteps } from "../components/auth/ProgressSteps"
import { Card } from "../components/common/Card"
import { Field } from "../components/common/Field"
import { Input } from "../components/common/Input"
import { TealLink } from "../components/common/TealLink"
import { PrimaryButton } from "../components/common/PrimaryButton"
import { BackButton } from "../components/common/BackButton"
import type { NavProps } from "../types"

export function ForgotEmailScreen({ nav }: NavProps) {
  const isMobile = useIsMobile()
  return (
    <AuthShell nav={nav}>
      <div style={{ padding: isMobile ? "24px 24px 0" : 0, display: "flex", flexDirection: "column", gap: 24 }}>
        <BackButton onClick={() => nav("login")} />
        {isMobile && <div style={{ display: "flex", justifyContent: "center" }}><FindMeLogo size="sm" /></div>}
        <ProgressSteps current={1} />
        <div>
          <h1 style={{ fontFamily: "Inter", fontWeight: 700, fontSize: isMobile ? 22 : 26, color: C.navy, margin: "0 0 8px", letterSpacing: "-0.3px" }}>Forgot your password?</h1>
          <p style={{ fontFamily: "Inter", fontSize: 14, color: C.muted, margin: 0, lineHeight: 1.6 }}>Enter the email address associated with your account and we'll send you a verification code.</p>
        </div>
        <Card>
          <Field label="Email Address"><Input type="email" placeholder="amira@example.com" /></Field>
          <PrimaryButton onClick={() => nav("forgot-otp")}>Send Verification Code</PrimaryButton>
        </Card>
        <p style={{ textAlign: "center", fontFamily: "Inter", fontSize: 14, color: C.muted }}>
          <TealLink onClick={() => nav("login")}>← Back to Login</TealLink>
        </p>
      </div>
    </AuthShell>
  )
}
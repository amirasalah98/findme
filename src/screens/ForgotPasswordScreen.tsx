import { useState } from "react"
import { useIsMobile } from "../hooks/useIsMobile"
import { C } from "../constants/theme"
import { AuthShell } from "../components/auth/AuthShell"
import { ProgressSteps } from "../components/auth/ProgressSteps"
import { PasswordStrengthMeter } from "../components/auth/PasswordStrengthMeter"
import { Card } from "../components/common/Card"
import { Field } from "../components/common/Field"
import { Label } from "../components/common/Label"
import { PasswordInput } from "../components/common/PasswordInput"
import { PrimaryButton } from "../components/common/PrimaryButton"
import { BackButton } from "../components/common/BackButton"
import type { NavProps } from "../types"


export function ForgotPasswordScreen({ nav }: NavProps) {
  const isMobile = useIsMobile()
  const [password, setPassword] = useState("")
  return (
    <AuthShell nav={nav}>
      <div style={{ padding: isMobile ? "24px 24px 0" : 0, display: "flex", flexDirection: "column", gap: 24 }}>
        <BackButton onClick={() => nav("forgot-otp")} />
        <ProgressSteps current={3} />
        <div>
          <h1 style={{ fontFamily: "Inter", fontWeight: 700, fontSize: isMobile ? 22 : 26, color: C.navy, margin: "0 0 8px", letterSpacing: "-0.3px" }}>Create a new password</h1>
          <p style={{ fontFamily: "Inter", fontSize: 14, color: C.muted, margin: 0, lineHeight: 1.6 }}>Choose a strong password for your account.</p>
        </div>
        <Card>
          <div>
            <Label>New Password</Label>
            <PasswordInput placeholder="Create a strong password" onChange={setPassword} />
            <PasswordStrengthMeter password={password} />
          </div>
          <Field label="Confirm New Password"><PasswordInput placeholder="Repeat your new password" name="confirm" /></Field>
          <PrimaryButton onClick={() => nav("reset-success")}>Reset Password</PrimaryButton>
        </Card>
      </div>
    </AuthShell>
  )
}
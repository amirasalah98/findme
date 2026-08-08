import { useIsMobile } from "../hooks/useIsMobile"
import { C } from "../constants/theme"
import { AuthShell } from "../components/auth/AuthShell"
import { FindMeLogo } from "../components/common/FindMeLogo"
import { Card } from "../components/common/Card"
import { Field } from "../components/common/Field"
import { Input } from "../components/common/Input"
import { PasswordInput } from "../components/common/PasswordInput"
import { Checkbox } from "../components/common/Checkbox"
import { TealLink } from "../components/common/TealLink"
import { PrimaryButton } from "../components/common/PrimaryButton"
import type { NavProps } from "../types"

export function LoginScreen({ nav }: NavProps) {
  const isMobile = useIsMobile()
  return (
    <AuthShell nav={nav}>
      <div style={{ padding: isMobile ? "52px 24px 0" : 0, display: "flex", flexDirection: "column", gap: 28 }}>
        {isMobile && <div style={{ display: "flex", justifyContent: "center" }}><FindMeLogo /></div>}
        <div>
          <h1 style={{ fontFamily: "Inter", fontWeight: 700, fontSize: isMobile ? 26 : 30, color: C.navy, margin: "0 0 6px", letterSpacing: "-0.4px" }}>Welcome back</h1>
          <p style={{ fontFamily: "Inter", fontSize: 14, color: C.muted, margin: 0 }}>Log in to your account to continue.</p>
        </div>
        <Card>
          <Field label="Email Address"><Input type="email" placeholder="amira@example.com" /></Field>
          <Field label="Password"><PasswordInput placeholder="Enter your password" name="password" /></Field>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: -6 }}>
            <Checkbox>Remember me</Checkbox>
            <TealLink onClick={() => nav("forgot-email")}>Forgot password?</TealLink>
          </div>
          <PrimaryButton onClick={() => nav("home")}>Log In</PrimaryButton>
        </Card>
        <p style={{ textAlign: "center", fontFamily: "Inter", fontSize: 14, color: C.muted, margin: 0 }}>
          Don't have an account? <TealLink onClick={() => nav("register")}>Create one</TealLink>
        </p>
      </div>
    </AuthShell>
  )
}
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

export function RegisterScreen({ nav }: NavProps) {
  const isMobile = useIsMobile()
  return (
    <AuthShell nav={nav}>
      <div style={{ padding: isMobile ? "40px 24px 0" : 0, display: "flex", flexDirection: "column", gap: 24 }}>
        {isMobile && <div style={{ display: "flex", justifyContent: "center" }}><FindMeLogo /></div>}
        <div>
          <h1 style={{ fontFamily: "Inter", fontWeight: 700, fontSize: isMobile ? 24 : 28, color: C.navy, margin: "0 0 6px", letterSpacing: "-0.3px" }}>Create an account</h1>
          <p style={{ fontFamily: "Inter", fontSize: 14, color: C.muted, margin: 0, lineHeight: 1.6 }}>Join the community and help us reconnect missing people with their families.</p>
        </div>
        <Card>
          <Field label="Full Name"><Input type="text" placeholder="Omar Salah" /></Field>
          <Field label="Email Address"><Input type="email" placeholder="amira@example.com" /></Field>
          <Field label="Phone Number"><Input type="tel" placeholder="+20 10 1234 5678" /></Field>
          <Field label="Password"><PasswordInput placeholder="Create a strong password" name="password" /></Field>
          <Field label="Confirm Password"><PasswordInput placeholder="Repeat your password" name="confirm" /></Field>
          <Checkbox>I agree to the <TealLink>Terms of Service</TealLink> and <TealLink>Privacy Policy</TealLink></Checkbox>
          <PrimaryButton onClick={() => nav("login")}>Create Account</PrimaryButton>
        </Card>
        <p style={{ textAlign: "center", fontFamily: "Inter", fontSize: 14, color: C.muted, margin: 0 }}>
          Already have an account? <TealLink onClick={() => nav("login")}>Log in</TealLink>
        </p>
      </div>
    </AuthShell>
  )
}
import { useState } from "react"
import type { Screen } from "./types"
import { RegisterScreen } from "./screens/RegisterScreen"
import { LoginScreen } from "./screens/LoginScreen"
import { ForgotEmailScreen } from "./screens/ForgotEmailScreen"
import { ForgotOTPScreen } from "./screens/ForgotOTPScreen"
import { ForgotPasswordScreen } from "./screens/ForgotPasswordScreen"
import { ResetSuccessScreen } from "./screens/ResetSuccessScreen"
import { HomeScreen } from "./screens/HomeScreen"
import { MissingPeopleScreen } from "./screens/MissingPeopleScreen"
import { FoundPeopleScreen } from "./screens/FoundPeopleScreen"

export default function App() {
  const [screen, setScreen] = useState<Screen>("home")
  const nav = (s: Screen) => { setScreen(s); window.scrollTo({ top: 0, behavior: "smooth" }) }

  switch (screen) {
    case "register":        return <RegisterScreen nav={nav} />
    case "login":           return <LoginScreen nav={nav} />
    case "forgot-email":    return <ForgotEmailScreen nav={nav} />
    case "forgot-otp":      return <ForgotOTPScreen nav={nav} />
    case "forgot-password": return <ForgotPasswordScreen nav={nav} />
    case "reset-success":   return <ResetSuccessScreen nav={nav} />
    case "home":            return <HomeScreen nav={nav} />
    case "missing":         return <MissingPeopleScreen nav={nav} />
    case "found":            return <FoundPeopleScreen nav={nav} />
  }
}
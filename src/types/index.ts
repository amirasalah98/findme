export type Screen =
  | "register" | "login" | "forgot-email" | "forgot-otp" | "forgot-password" | "reset-success"
  | "home" | "missing" | "found"

export type BadgeType = "missing" | "found" 

export interface PersonData {
  photo: string
  name: string
  age: string
  gender: string
  location: string
  dateLabel: string
  dateValue: string
  badge: BadgeType
}

export interface NavProps {
  nav: (s: Screen) => void
}
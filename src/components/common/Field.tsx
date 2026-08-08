import type { ReactNode } from "react"
import { Label } from "./Label"

export function Field({ label, children }: { label: string; children: ReactNode }) {
  return <div style={{ display: "flex", flexDirection: "column" }}><Label>{label}</Label>{children}</div>
}
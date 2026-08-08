import type { ReactNode, CSSProperties } from "react"
import { PAGE_MAX } from "../../constants/theme"

export function PageWrap({ children, style }: { children: ReactNode; style?: CSSProperties }) {
  return (
    <div style={{ maxWidth: PAGE_MAX, margin: "0 auto", width: "100%", ...style }}>
      {children}
    </div>
  )
}
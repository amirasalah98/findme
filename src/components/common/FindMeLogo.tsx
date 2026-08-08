import { C } from "../../constants/theme"

export function FindMeLogo({ size = "md" }: { size?: "xs" | "sm" | "md" }) {
  const iconSize = size === "xs" ? 28 : size === "sm" ? 36 : 44
  const textSize = size === "xs" ? 16 : size === "sm" ? 18 : 24
  return (
    <div style={{ display: "flex", alignItems: "center", gap: size === "xs" ? 8 : 10 }}>
      <div style={{
        width: iconSize, height: iconSize,
        background: `linear-gradient(135deg, ${C.navy} 0%, ${C.teal} 100%)`,
        borderRadius: size === "xs" ? 8 : 12,
        display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
      }}>
        <svg width={iconSize * 0.55} height={iconSize * 0.55} viewBox="0 0 26 26" fill="none">
          <circle cx="11" cy="7" r="4" fill="white" fillOpacity="0.95" />
          <path d="M4 21c0-3.866 3.134-7 7-7s7 3.134 7 7" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <circle cx="20" cy="8" r="3.5" stroke="white" strokeWidth="1.5" fill="none" />
          <path d="M22.5 10.5L25 13" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>
      <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: textSize, color: C.navy, letterSpacing: "-0.4px", lineHeight: 1 }}>
        Find Me
      </span>
    </div>
  )
}
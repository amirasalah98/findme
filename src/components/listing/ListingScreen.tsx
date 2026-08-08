import { useState } from "react"
import { useIsMobile } from "../../hooks/useIsMobile"
import { C } from "../../constants/theme"
import { Icon } from "../../constants/icons"
import { PageWrap } from "../common/PageWrap"
import { SearchBar } from "../common/SearchBar"
import { AppHeader } from "../layout/AppHeader"
import { FilterPanel } from "./FilterPanel"
import { EmptyState } from "./EmptyState"
import { PersonCard } from "./PersonCard"
import type { PersonData, NavProps } from "../../types"

export function ListingScreen({ nav, activeTab, title, subtitle, reportLabel, reportBg, data, filterLabels }: {
  activeTab: "missing" | "found";
  title: string; subtitle: string; reportLabel: string; reportBg: string;
  data: PersonData[]; filterLabels: string[];
} & NavProps) {
  const isMobile = useIsMobile()
  const [filterOpen, setFilterOpen] = useState(false)
  const [showEmpty, setShowEmpty] = useState(false)

  return (
    <div style={{ minHeight: "100vh", background: C.surface, display: "flex", flexDirection: "column" }}>
      <AppHeader nav={nav} activeTab={activeTab} />
      <PageWrap style={{ flex: 1 }}>
        <div style={{ padding: isMobile ? "24px 20px 60px" : "40px 40px 72px" }}>

          {/* Page heading row */}
          <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", alignItems: isMobile ? "flex-start" : "center", justifyContent: "space-between", gap: 16, marginBottom: 28 }}>
            <div>
              <h1 style={{ fontFamily: "Inter", fontWeight: 700, fontSize: isMobile ? 22 : 32, color: C.navy, margin: "0 0 4px", letterSpacing: "-0.3px" }}>{title}</h1>
              <p style={{ fontFamily: "Inter", fontSize: isMobile ? 13 : 15, color: C.muted, margin: 0, maxWidth: 520 }}>{subtitle}</p>
            </div>
            <button style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, height: 48, padding: "0 22px", borderRadius: 10, background: reportBg, border: "none", cursor: "pointer", fontFamily: "Inter", fontWeight: 600, fontSize: 14, color: "white", whiteSpace: "nowrap", flexShrink: 0 }}>
              {Icon.plus} {reportLabel}
            </button>
          </div>

          {/* Search + filter */}
          <div style={{ display: "flex", gap: 10, marginBottom: 20, position: "relative" }}>
            <SearchBar placeholder="Search by name, location, or keyword..." style={{ flex: 1 }} />
            <div style={{ position: "relative" }}>
              <button onClick={() => setFilterOpen(v => !v)}
                style={{ display: "flex", alignItems: "center", gap: 8, height: 46, padding: "0 16px", borderRadius: 10, border: `1.5px solid ${filterOpen ? C.teal : C.border}`, background: filterOpen ? C.tealLight : C.white, cursor: "pointer", fontFamily: "Inter", fontWeight: 500, fontSize: 14, color: filterOpen ? C.teal : C.text, flexShrink: 0, transition: "all 0.15s" }}>
                {Icon.filter}
                {!isMobile && "Filter & Sort"}
              </button>
              <FilterPanel open={filterOpen} onClose={() => setFilterOpen(false)} filters={filterLabels} isMobile={isMobile} />
            </div>
          </div>

          {/* Results count */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 18 }}>
            <span style={{ fontFamily: "Inter", fontSize: 13, color: C.muted, fontWeight: 500 }}>
              {showEmpty ? "0 results" : `${data.length} reports found`}
            </span>
            <button onClick={() => setShowEmpty(v => !v)} style={{ background: "none", border: `1px solid ${C.border}`, borderRadius: 6, padding: "4px 10px", cursor: "pointer", fontFamily: "Inter", fontSize: 12, color: C.muted }}>
              {showEmpty ? "Show results" : "Demo: empty state"}
            </button>
          </div>

          {/* Card grid */}
          {showEmpty
            ? <EmptyState onClear={() => setShowEmpty(false)} />
            : <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)", gap: 14 }}>
                {data.map(p => <PersonCard key={`${p.name}-${p.location}`} person={p} />)}
              </div>}
        </div>
      </PageWrap>
    </div>
  )
}
import { C } from "../constants/theme"
import { FOUND_DATA } from "../constants/mockData"
import { ListingScreen } from "../components/listing/ListingScreen"
import type { NavProps } from "../types"
import { PageWrap } from "../components/common/PageWrap"

export function FoundPeopleScreen({ nav }: NavProps) {
  const isMobile = window.innerWidth < 768

  return (
    <>
      <ListingScreen
        nav={nav}
        activeTab="found"
        title="Found People"
        subtitle="Browse reports of people who have been found and may need to be identified or reunited with their families."
        reportLabel="Report Found Person"
        reportBg={C.teal}
        data={FOUND_DATA}
        filterLabels={[
          "Location",
          "Approximate Age",
          "Gender",
          "Date Found",
          "Identification Status",
          "Sort by",
        ]}
      />

      <footer style={{ background: C.navy }}>
        <PageWrap>
          <div
            style={{
              padding: isMobile ? "32px 20px" : "52px 40px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                justifyContent: "space-between",
                gap: isMobile ? 28 : 48,
                marginBottom: 36,
              }}
            >
              <div style={{ maxWidth: 320 }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    marginBottom: 10,
                  }}
                >
                  <div
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: 8,
                      background: "rgba(255,255,255,0.12)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 26 26"
                      fill="none"
                    >
                      <circle
                        cx="11"
                        cy="7"
                        r="4"
                        fill="white"
                        fillOpacity="0.95"
                      />
                      <path
                        d="M4 21c0-3.866 3.134-7 7-7s7 3.134 7 7"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>

                  <span
                    style={{
                      fontFamily: "Inter",
                      fontWeight: 700,
                      fontSize: 16,
                      color: "white",
                    }}
                  >
                    Find Me
                  </span>
                </div>

                <p
                  style={{
                    fontFamily: "Inter",
                    fontSize: 13,
                    color: "rgba(255,255,255,0.55)",
                    margin: 0,
                    lineHeight: 1.65,
                  }}
                >
                  Helping communities find missing people and reconnect
                  families.
                </p>
              </div>

              <div
                style={{
                  display: "flex",
                  gap: isMobile ? 32 : 56,
                }}
              >
                <div>
                  <p
                    style={{
                      fontFamily: "Inter",
                      fontWeight: 600,
                      fontSize: 12,
                      color: "rgba(255,255,255,0.4)",
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      margin: "0 0 12px",
                    }}
                  >
                    Platform
                  </p>

                  {[
                    "About Us",
                    "Missing People",
                    "Found People",
                    "Contact Us",
                  ].map((l) => (
                    <button
                      key={l}
                      style={{
                        display: "block",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        color: "rgba(255,255,255,0.62)",
                        fontFamily: "Inter",
                        fontSize: 13,
                        padding: "3px 0",
                        marginBottom: 4,
                      }}
                    >
                      {l}
                    </button>
                  ))}
                </div>

                <div>
                  <p
                    style={{
                      fontFamily: "Inter",
                      fontWeight: 600,
                      fontSize: 12,
                      color: "rgba(255,255,255,0.4)",
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      margin: "0 0 12px",
                    }}
                  >
                    Legal
                  </p>

                  {[
                    "Privacy Policy",
                    "Terms of Service",
                    "Help & Support",
                  ].map((l) => (
                    <button
                      key={l}
                      style={{
                        display: "block",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        color: "rgba(255,255,255,0.62)",
                        fontFamily: "Inter",
                        fontSize: 13,
                        padding: "3px 0",
                        marginBottom: 4,
                      }}
                    >
                      {l}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div
              style={{
                borderTop: "1px solid rgba(255,255,255,0.1)",
                paddingTop: 20,
              }}
            >
              <p
                style={{
                  fontFamily: "Inter",
                  fontSize: 12,
                  color: "rgba(255,255,255,0.32)",
                  margin: 0,
                }}
              >
                © 2026 Find Me. All rights reserved.
              </p>
            </div>
          </div>
        </PageWrap>
      </footer>
    </>
  )
}
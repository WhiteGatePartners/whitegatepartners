import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "White Gate Partners — Executive Search Singapore";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#8e8e8e",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          padding: "0 80px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 20,
          }}
        >
          <span
            style={{
              color: "white",
              fontSize: 54,
              fontWeight: 300,
              letterSpacing: "0.28em",
              lineHeight: 1.1,
              textAlign: "center",
            }}
          >
            WHITE GATE PARTNERS
          </span>
          <div
            style={{
              width: 160,
              height: 1,
              background: "rgba(255,255,255,0.5)",
            }}
          />
          <span
            style={{
              color: "rgba(255,255,255,0.72)",
              fontSize: 18,
              letterSpacing: "0.22em",
              fontWeight: 300,
              marginTop: 4,
            }}
          >
            EXECUTIVE SEARCH · SPECIALIST RECRUITMENT · TALENT SOLUTIONS
          </span>
          <span
            style={{
              color: "rgba(255,255,255,0.46)",
              fontSize: 14,
              letterSpacing: "0.18em",
              marginTop: 6,
            }}
          >
            SINGAPORE · SOUTHEAST ASIA
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}

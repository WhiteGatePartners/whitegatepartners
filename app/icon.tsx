import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#8e8e8e",
        }}
      >
        <span
          style={{
            color: "white",
            fontSize: 10,
            fontWeight: 400,
            letterSpacing: "0.12em",
            fontFamily: "sans-serif",
            lineHeight: 1,
          }}
        >
          WGP
        </span>
        <div
          style={{
            width: 20,
            height: 1,
            background: "rgba(255,255,255,0.6)",
            marginTop: 3,
          }}
        />
      </div>
    ),
    { ...size }
  );
}

import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "radial-gradient(circle at 30% 20%, rgba(82,211,255,0.95), transparent 35%), linear-gradient(135deg, rgba(15,18,28,1), rgba(23,28,44,1))",
          color: "white",
          fontSize: 72,
          fontWeight: 700,
          letterSpacing: "-0.08em",
          borderRadius: 36,
        }}
      >
        DK
      </div>
    ),
    size,
  );
}


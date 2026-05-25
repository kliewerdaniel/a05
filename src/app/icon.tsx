import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
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
            "linear-gradient(135deg, rgba(124,140,255,1) 0%, rgba(82,211,255,1) 100%)",
          color: "white",
          fontSize: 18,
          fontWeight: 700,
          letterSpacing: "-0.06em",
          borderRadius: 8,
        }}
      >
        DK
      </div>
    ),
    size,
  );
}


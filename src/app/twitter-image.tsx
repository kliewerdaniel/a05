import { ImageResponse } from "next/og";
import { SITE } from "@/lib/constants";

export const size = { width: 1200, height: 600 };
export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          padding: 56,
          background:
            "linear-gradient(135deg, #0b1020 0%, #111726 45%, #0d1424 100%)",
          color: "#f5f7ff",
          fontFamily: "Inter, system-ui, sans-serif",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div style={{ fontSize: 26, letterSpacing: "0.1em", color: "rgba(245,247,255,0.72)" }}>
          {SITE.name}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: 930 }}>
          <div style={{ fontSize: 76, lineHeight: 1.02, letterSpacing: "-0.06em", fontWeight: 700 }}>
            Generative AI generalist with operational depth.
          </div>
          <div style={{ fontSize: 30, lineHeight: 1.35, color: "rgba(245,247,255,0.8)" }}>
            AI operations, RLHF, local systems, and full-stack delivery for serious product work.
          </div>
        </div>
      </div>
    ),
    size,
  );
}

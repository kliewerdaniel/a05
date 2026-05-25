import { ImageResponse } from "next/og";
import { SITE } from "@/lib/constants";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 64,
          background:
            "radial-gradient(circle at 20% 20%, rgba(124,140,255,0.35), transparent 30%), radial-gradient(circle at 80% 10%, rgba(82,211,255,0.22), transparent 24%), linear-gradient(135deg, #0b1020 0%, #111726 55%, #0d1424 100%)",
          color: "#f5f7ff",
          fontFamily: "Inter, system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 68,
              height: 68,
              borderRadius: 20,
              background: "linear-gradient(135deg, #7c8cff, #52d3ff)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 30,
              fontWeight: 700,
              color: "#08101f",
            }}
          >
            DK
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 22, color: "rgba(245,247,255,0.72)", letterSpacing: "0.08em" }}>
              {SITE.name}
            </div>
            <div style={{ fontSize: 30, fontWeight: 600 }}>{SITE.location}</div>
          </div>
        </div>

        <div style={{ maxWidth: 860, display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 76, lineHeight: 1, letterSpacing: "-0.06em", fontWeight: 700 }}>
            Generative AI Generalist.
          </div>
          <div style={{ fontSize: 34, lineHeight: 1.35, color: "rgba(245,247,255,0.8)" }}>
            AI operations, RLHF, local systems, and full-stack delivery shaped by a decade of
            annotation, evaluation, and product work.
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div style={{ display: "flex", gap: 18, fontSize: 22, color: "rgba(245,247,255,0.72)" }}>
            <span>AI operations</span>
            <span>•</span>
            <span>RLHF</span>
            <span>•</span>
            <span>Local systems</span>
          </div>
          <div style={{ fontSize: 22, color: "rgba(245,247,255,0.72)" }}>{SITE.url.replace("https://", "")}</div>
        </div>
      </div>
    ),
    size,
  );
}

import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, resource } = body;

    if (!email || !resource) {
      return NextResponse.json({ error: "Email and resource are required" }, { status: 400 });
    }

    // Log for now — will integrate with email delivery in Phase 4
    console.log("Download request:", { email, resource });

    // Return a success response; in production, this would trigger an email with the download link
    return NextResponse.json({
      success: true,
      message: "Check your email for the download link.",
    });
  } catch (error) {
    console.error("Download error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

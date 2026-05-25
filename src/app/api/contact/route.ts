import { NextResponse } from "next/server";
import { createSmtpTransporter, getContactRecipient } from "@/lib/smtp";

export const runtime = "nodejs";

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, company, projectType, budget, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const transporter = createSmtpTransporter();
    const recipient = getContactRecipient();
    const subject = `New contact request from ${name}`;

    const safeCompany = company ? escapeHtml(String(company)) : "—";
    const safeProjectType = projectType ? escapeHtml(String(projectType)) : "—";
    const safeBudget = budget ? escapeHtml(String(budget)) : "—";
    const safeMessage = escapeHtml(String(message)).replaceAll("\n", "<br />");

    await transporter.sendMail({
      from: process.env.SMTP_FROM ?? process.env.SMTP_USER ?? recipient,
      to: recipient,
      replyTo: email,
      subject,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Company: ${company || "—"}`,
        `Project Type: ${projectType || "—"}`,
        `Budget: ${budget || "—"}`,
        "",
        message,
      ].join("\n"),
      html: `
        <div style="font-family: Inter, Arial, sans-serif; line-height: 1.6; color: #0f172a;">
          <h2 style="margin: 0 0 16px;">New contact request</h2>
          <p><strong>Name:</strong> ${escapeHtml(String(name))}</p>
          <p><strong>Email:</strong> ${escapeHtml(String(email))}</p>
          <p><strong>Company:</strong> ${safeCompany}</p>
          <p><strong>Project type:</strong> ${safeProjectType}</p>
          <p><strong>Budget:</strong> ${safeBudget}</p>
          <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 24px 0;" />
          <p style="white-space: normal;"><strong>Message:</strong></p>
          <div style="padding: 16px; background: #f8fafc; border-radius: 12px;">${safeMessage}</div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Unable to send message right now" },
      { status: 500 },
    );
  }
}

import { NextRequest, NextResponse } from "next/server";
import { getResendClient, CONTACT_EMAIL } from "@/lib/resend";

interface ContactBody {
  name: string;
  email: string;
  projectType: string;
  budget: string;
  message: string;
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: NextRequest) {
  try {
    const body: ContactBody = await req.json();
    const { name, email, projectType, budget, message } = body;

    // Validation
    if (!name || name.trim().length < 2) {
      return NextResponse.json({ error: "Please provide a valid name." }, { status: 400 });
    }
    if (!email || !isValidEmail(email)) {
      return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
    }
    if (!projectType) {
      return NextResponse.json({ error: "Please select a project type." }, { status: 400 });
    }
    if (!message || message.trim().length < 20) {
      return NextResponse.json(
        { error: "Please write at least 20 characters in your message." },
        { status: 400 }
      );
    }

    // Check API key exists
    if (!process.env.RESEND_API_KEY) {
      console.warn("[Contact API] RESEND_API_KEY is not set — email not sent.");
      // Return success so the form doesn't show an error in dev
      return NextResponse.json({ ok: true, dev: true });
    }

    const resend = getResendClient();
    await resend.emails.send({
      from: "Malik Agencies Contact <onboarding@resend.dev>",
      to: CONTACT_EMAIL,
      replyTo: email,
      subject: `New Project Inquiry: ${projectType} from ${name}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0a; color: #f5f5f5; padding: 32px; border-radius: 12px; border: 1px solid #2a2a2a;">
          <div style="margin-bottom: 24px;">
            <h1 style="font-size: 24px; font-weight: 700; color: #f5f5f5; margin: 0 0 4px 0;">New Project Inquiry</h1>
            <p style="color: #10b981; font-size: 13px; margin: 0; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em;">via malikagencies.com</p>
          </div>
          
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
            ${[
              ["Name", name],
              ["Email", email],
              ["Project Type", projectType],
              ["Budget", budget || "Not specified"],
            ]
              .map(
                ([label, value]) => `
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #2a2a2a; color: #a1a1a1; font-size: 13px; width: 130px; vertical-align: top;">${label}</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #2a2a2a; color: #f5f5f5; font-size: 14px;">${value}</td>
              </tr>
            `
              )
              .join("")}
          </table>
          
          <div style="background: #141414; border: 1px solid #2a2a2a; border-radius: 8px; padding: 16px; margin-bottom: 24px;">
            <p style="color: #a1a1a1; font-size: 12px; margin: 0 0 8px 0; text-transform: uppercase; letter-spacing: 0.1em; font-weight: 600;">Message</p>
            <p style="color: #f5f5f5; font-size: 14px; line-height: 1.7; margin: 0; white-space: pre-wrap;">${message}</p>
          </div>
          
          <a href="mailto:${email}" style="display: inline-block; background: #10b981; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 14px;">
            Reply to ${name}
          </a>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[Contact API] Error:", err);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}

import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, service, message } = body;

    // Basic validation
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: "Name, email, and phone are required." },
        { status: 400 }
      );
    }

    // Email to the business owner
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "CP Home & Paint <noreply@cphomeandpaint.com>",
      to: process.env.CONTACT_EMAIL || "cphomeandpaint@gmail.com",
      replyTo: email,
      subject: `New Quote Request: ${service || "General Inquiry"} — ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #0B1220; padding: 24px 32px;">
            <h1 style="color: #ffffff; font-size: 20px; margin: 0;">
              CP Home &amp; Paint — New Quote Request
            </h1>
          </div>
          <div style="padding: 32px; background: #F6F7F9; border: 1px solid #E7EAEE;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #E7EAEE; font-weight: bold; color: #1E293B; width: 140px;">Name</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #E7EAEE; color: #0B1220;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #E7EAEE; font-weight: bold; color: #1E293B;">Email</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #E7EAEE; color: #0B1220;">
                  <a href="mailto:${email}" style="color: #2B3A67;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #E7EAEE; font-weight: bold; color: #1E293B;">Phone</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #E7EAEE; color: #0B1220;">
                  <a href="tel:${phone}" style="color: #2B3A67;">${phone}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #E7EAEE; font-weight: bold; color: #1E293B;">Service</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #E7EAEE; color: #0B1220;">${service || "Not specified"}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; font-weight: bold; color: #1E293B; vertical-align: top;">Message</td>
                <td style="padding: 12px 0; color: #0B1220; white-space: pre-wrap;">${message || "No additional details provided."}</td>
              </tr>
            </table>
          </div>
          <div style="padding: 16px 32px; background: #0B1220; text-align: center;">
            <p style="color: #E7EAEE; font-size: 12px; margin: 0;">
              Sent from cphomeandpaint.com contact form
            </p>
          </div>
        </div>
      `,
    });

    // Confirmation email to the customer
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "CP Home & Paint <noreply@cphomeandpaint.com>",
      to: email,
      subject: "We received your quote request — CP Home & Paint",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #0B1220; padding: 24px 32px;">
            <h1 style="color: #ffffff; font-size: 20px; margin: 0;">
              Thank You, ${name}!
            </h1>
          </div>
          <div style="padding: 32px; background: #F6F7F9; border: 1px solid #E7EAEE;">
            <p style="color: #0B1220; font-size: 16px; line-height: 1.6; margin-top: 0;">
              We received your quote request and will get back to you within
              <strong>24 hours</strong>. If your project is urgent, feel free to
              call us directly.
            </p>
            <div style="margin: 24px 0;">
              <p style="color: #1E293B; font-size: 14px; margin: 4px 0;">
                <strong>Phone:</strong> (336) 941-1955
              </p>
              <p style="color: #1E293B; font-size: 14px; margin: 4px 0;">
                <strong>Email:</strong> cphomeandpaint@gmail.com
              </p>
            </div>
            <p style="color: #1E293B; font-size: 14px; line-height: 1.6;">
              We are a small, family-owned company and we guarantee we'll give
              your home the highest level of care.
            </p>
            <p style="color: #1E293B; font-size: 14px; margin-top: 24px;">
              — The CP Home &amp; Paint Team
            </p>
          </div>
          <div style="padding: 16px 32px; background: #0B1220; text-align: center;">
            <p style="color: #E7EAEE; font-size: 12px; margin: 0;">
              CP Home Improvements &amp; Paint LLC &bull; Washington DC, Virginia &amp; Maryland
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json(
      { success: true, message: "Your quote request has been sent successfully." },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error("Resend Error:", error);

    const errorMessage =
      error instanceof Error ? error.message : "Failed to send email";

    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}

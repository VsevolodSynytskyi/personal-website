import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  const { message } = await request.json();

  const url = new URL(request.url);
  const baseUrl = `${url.protocol}//${url.host}`;

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const response = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "vsevolod.synytskyi@gmail.com",
      subject: "Hello World",
      html: "<p>Congrats on sending your <strong>first email</strong>!</p>",
    });

    if (response.ok) {
      return NextResponse.json({ message: "Email sent successfully" });
    } else {
      return NextResponse.json(
        { message: "Failed to send email" },
        { status: 500 }
      );
    }
  } catch (error) {
    return NextResponse.json({ message: "An error occurred" }, { status: 500 });
  }
}

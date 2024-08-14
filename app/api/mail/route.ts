import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { message } = await request.json();

  const url = new URL(request.url);
  const baseUrl = `${url.protocol}//${url.host}`;

  try {
    const response = await fetch("https://api.resend.io/v1/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `no-reply@${url.host}`,
        to: process.env.NEXT_PUBLIC_PERSONAL_EMAIL,
        subject: `New message from ${baseUrl}`,
        html: `      
          <p>${message}</p>        
        `,
      }),
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

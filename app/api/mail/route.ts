import { Resend } from "resend";

export async function POST(request: Request) {
  const { message } = await request.json();

  const url = new URL(request.url);
  const baseUrl = `${url.protocol}//${url.host}`;

  const resend = new Resend(process.env.RESEND_API_KEY);
  const response = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "vsevolod.synytskyi@gmail.com",
    subject: "Hello World",
    html: `${message}`,
  });
}

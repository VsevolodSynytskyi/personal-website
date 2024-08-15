import { Resend } from "resend";

export async function POST(request: Request, response: Response) {
  const { message } = await request.json();

  const url = new URL(request.url).host;

  const resend = new Resend(process.env.RESEND_API_KEY);
  const fromEmail = process.env.NO_REPLY_EMAIL;

  if (!fromEmail) {
    return Response.json({ message: "Sending email is not specified" });
  }

  const { data, error } = await resend.emails.send({
    from: `${url} <${fromEmail}>`,
    to: "vsevolod.synytskyi@gmail.com",
    subject: `New Message`,
    html: `<p>${message}</p>`,
  });

  if (error) {
    return Response.json(error);
  }

  return Response.json({ message: "Email sent successfully" });
}

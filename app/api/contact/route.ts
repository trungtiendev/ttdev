import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const formData = await req.formData();

  const name = formData.get("name");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const message = formData.get("message");

  const text = `
New Contact Lead 🚀

Name: ${name}
Email: ${email}
Phone: ${phone}

Message:
${message}
`;

  await fetch(`https://api.telegram.org/bot${process.env.TELEGRAM_TOKEN}/sendMessage`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chat_id: process.env.TELEGRAM_CHAT_ID,
      text,
    }),
  });

  return NextResponse.json({ success: true });
}

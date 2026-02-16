import { NextResponse } from "next/server";

export async function POST(req: Request) {

  const { input } = await req.json();

  // fake response
  const text = `AI Result for: ${input}`;

  return NextResponse.json({
    text
  });
}

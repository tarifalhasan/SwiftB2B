import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const response = await fetch(
    "https://llm.swiftant.com//mongo_atlas_memory_dynamic_streamed_ask",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req.body),
    }
  );
  const data = await response.json();

  if (data) {
    return new NextResponse(data);
  }

  return new NextResponse();
}

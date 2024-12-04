import { NextRequest, NextResponse } from "next/server";
import { API_CONFIG } from "@/lib/api-config";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    
    const response = await fetch(`${API_CONFIG.BASE_URL}/presentation/generate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-key": API_CONFIG.API_KEY,
      },
      body: JSON.stringify({
        plain_text: body.plain_text,
        theme: "default",
        length: 5,
      }),
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to generate presentation" },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
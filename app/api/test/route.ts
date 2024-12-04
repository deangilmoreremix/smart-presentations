"use server";

import { NextRequest, NextResponse } from "next/server";
import { API_CONFIG } from "@/lib/api-config";

export async function GET(req: NextRequest) {
  try {
    const response = await fetch(`${API_CONFIG.BASE_URL}/health`, {
      headers: {
        "X-API-key": API_CONFIG.API_KEY,
      },
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: "API health check failed" },
        { status: response.status }
      );
    }

    return NextResponse.json({ status: "ok" });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to connect to API" },
      { status: 500 }
    );
  }
}
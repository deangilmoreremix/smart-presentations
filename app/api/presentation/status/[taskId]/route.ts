"use server";

import { NextRequest, NextResponse } from 'next/server';
import { API_CONFIG } from '@/lib/api-config';

export async function GET(
  req: NextRequest,
  { params }: { params: { taskId: string } }
) {
  try {
    const { taskId } = params;

    const response = await fetch(
      `${API_CONFIG.BASE_URL}/task_status/${taskId}`,
      {
        method: 'GET',
        headers: {
          'X-API-key': API_CONFIG.API_KEY,
        },
      }
    );

    if (!response.ok) {
      return NextResponse.json(
        { error: 'Failed to get task status' },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
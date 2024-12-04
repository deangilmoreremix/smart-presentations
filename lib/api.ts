import { API_CONFIG } from './api-config';

export interface GeneratePresentationParams {
  plain_text: string;
  theme?: string;
  length?: number;
}

export interface TaskStatus {
  task_id: string;
  task_status: 'FAILURE' | 'PENDING' | 'RECEIVED' | 'RETRY' | 'REVOKED' | 'STARTED' | 'SUCCESS';
  task_result?: any;
  task_info: {
    progress: number;
  };
}

export const themes = [
  'daniel', 'default', 'eddy', 'felix', 'gradient', 'iris', 'lavender',
  'monolith', 'adam', 'aurora', 'bruno', 'clyde', 'nebula', 'nexus'
] as const;

export type Theme = typeof themes[number];

export class APIError extends Error {
  constructor(public status: number, message: string) {
    super(message);
    this.name = 'APIError';
  }
}

export async function generatePresentation(params: GeneratePresentationParams): Promise<string> {
  try {
    const response = await fetch(`${API_CONFIG.BASE_URL}/presentation/generate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-API-key': API_CONFIG.API_KEY,
      },
      body: JSON.stringify({
        plain_text: params.plain_text,
        theme: params.theme || 'default',
        length: params.length || 5,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new APIError(
        response.status,
        error.detail?.[0]?.msg || 'Failed to generate presentation'
      );
    }

    const data = await response.json();
    return data.task_id;
  } catch (error) {
    if (error instanceof APIError) {
      throw error;
    }
    throw new APIError(500, 'Failed to connect to the server');
  }
}

export async function getTaskStatus(taskId: string): Promise<TaskStatus> {
  try {
    const response = await fetch(`${API_CONFIG.BASE_URL}/task_status/${taskId}`, {
      method: 'GET',
      headers: {
        'X-API-key': API_CONFIG.API_KEY,
      },
    });

    if (!response.ok) {
      throw new APIError(response.status, 'Failed to get task status');
    }

    const data = await response.json();
    return {
      task_id: data.task_id,
      task_status: data.task_status,
      task_result: data.task_result,
      task_info: {
        progress: data.task_info?.progress || 0,
      },
    };
  } catch (error) {
    if (error instanceof APIError) {
      throw error;
    }
    throw new APIError(500, 'Failed to connect to the server');
  }
}
import { APIError, GeneratePresentationParams, TaskStatus } from './types';

export async function generatePresentation(params: GeneratePresentationParams): Promise<string> {
  try {
    const response = await fetch('/api/presentation', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
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
        error.error || 'Failed to generate presentation'
      );
    }

    const data = await response.json();
    return data.task_id;
  } catch (error) {
    if (error instanceof APIError) throw error;
    throw new APIError(500, 'Failed to connect to the server');
  }
}

export async function getTaskStatus(taskId: string): Promise<TaskStatus> {
  try {
    const response = await fetch(`/api/presentation/status/${taskId}`);

    if (!response.ok) {
      const error = await response.json();
      throw new APIError(response.status, error.error || 'Failed to get task status');
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
    if (error instanceof APIError) throw error;
    throw new APIError(500, 'Failed to connect to the server');
  }
}
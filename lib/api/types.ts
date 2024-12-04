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
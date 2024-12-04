export interface PresentationType {
  title: string;
  description: string;
  icon: React.ReactNode;
  preview: string;
  type: string;
}

export type Theme = 
  | 'default' 
  | 'modern' 
  | 'minimal' 
  | 'corporate' 
  | 'creative' 
  | 'professional';

export interface GeneratePresentationParams {
  plain_text: string;
  theme?: Theme;
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
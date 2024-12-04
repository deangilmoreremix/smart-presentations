import { ReactNode } from 'react';

export interface PresentationType {
  title: string;
  description: string;
  icon: ReactNode;
  preview: string;
  type: string;
}
"use client";

import { useState, useCallback } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { generatePresentation } from '@/lib/presentation';
import { Theme } from '@/types';

interface UsePresentationOptions {
  onSuccess?: (result: any) => void;
  onError?: (error: Error) => void;
}

export function usePresentation(options: UsePresentationOptions = {}) {
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const { toast } = useToast();

  const generate = useCallback(async (
    text: string,
    theme: Theme = 'default',
    length: number = 5
  ) => {
    if (!text.trim()) {
      throw new Error('Text is required');
    }

    setIsLoading(true);
    setProgress(0);

    try {
      // Simulate progress updates
      const interval = setInterval(() => {
        setProgress(prev => {
          const next = prev + 10;
          if (next >= 100) {
            clearInterval(interval);
            return 100;
          }
          return next;
        });
      }, 500);

      const result = await generatePresentation(text, theme, length);

      clearInterval(interval);
      setProgress(100);
      setIsLoading(false);

      toast({
        title: "Success!",
        description: "Your presentation has been generated successfully.",
      });

      options.onSuccess?.(result);
    } catch (error) {
      setIsLoading(false);
      const message = error instanceof Error ? error.message : 'Failed to generate presentation';
      
      toast({
        title: "Error",
        description: message,
        variant: "destructive",
      });
      
      options.onError?.(error instanceof Error ? error : new Error(message));
    }
  }, [toast, options]);

  return {
    generate,
    isLoading,
    progress,
    cancel: () => {
      setIsLoading(false);
      setProgress(0);
    }
  };
}
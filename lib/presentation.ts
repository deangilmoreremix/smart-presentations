import { Theme } from "@/types";

export interface GeneratePresentationResult {
  id: string;
  slides: Array<{
    title: string;
    content: string;
    layout: string;
  }>;
}

export async function generatePresentation(
  text: string,
  theme: Theme = "default",
  length: number = 5
): Promise<GeneratePresentationResult> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 3000));

  // Return mock presentation data
  return {
    id: Math.random().toString(36).substring(7),
    slides: Array.from({ length }, (_, i) => ({
      title: i === 0 ? "Title Slide" : `Slide ${i + 1}`,
      content: "Sample content for this slide",
      layout: i === 0 ? "title" : "content"
    }))
  };
}
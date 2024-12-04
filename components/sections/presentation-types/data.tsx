"use client";

import { 
  FileText, Youtube, FileImage, Link2, File, FileType2, BarChart2, Hash,
  ListChecks, LayoutList, Activity, Columns3, Timeline, Target, Scale
} from "lucide-react";
import type { PresentationType } from "@/types";

export const contentTypes: PresentationType[] = [
  {
    title: "Text to Presentation",
    description: "Have an outline of presentation prepared? Just paste the text and your presentation is ready in seconds.",
    icon: <FileText className="h-6 w-6" />,
    preview: "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&q=80&w=2000",
    type: "text"
  },
  {
    title: "Topic to Presentation",
    description: "Have a topic in mind? Just enter the topic and number of slides you want.",
    icon: <Hash className="h-6 w-6" />,
    preview: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=2000",
    type: "topic"
  },
  // ... rest of the content types
];

export const slideTypes: PresentationType[] = [
  {
    title: "Pros/Cons Slide",
    description: "Create balanced comparison slides instantly.",
    icon: <Scale className="h-6 w-6" />,
    preview: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000",
    type: "pros-cons"
  },
  // ... rest of the slide types
];
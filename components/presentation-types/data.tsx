"use client";

import { 
  FileText, Youtube, FileImage, Link2, File, FileType2, BarChart2, Hash,
  ListChecks, LayoutList, Activity, Columns3, Timeline, Target, Scale
} from "lucide-react";
import type { PresentationType } from "./types";

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
  {
    title: "YouTube to PPT",
    description: "Have a YouTube video? Convert it into a ready-to-use PPT.",
    icon: <Youtube className="h-6 w-6" />,
    preview: "https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?auto=format&fit=crop&q=80&w=2000",
    type: "youtube"
  },
  {
    title: "URL to PPT",
    description: "Have a URL? Watch your AI-powered presentation come to life.",
    icon: <Link2 className="h-6 w-6" />,
    preview: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&q=80&w=2000",
    type: "url"
  },
  {
    title: "PDF to PPT",
    description: "Turn your PDF into a professional PowerPoint with AI.",
    icon: <File className="h-6 w-6" />,
    preview: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=2000",
    type: "pdf"
  },
  {
    title: "DOCX to PPT",
    description: "Transform your Word document into a stunning presentation.",
    icon: <FileType2 className="h-6 w-6" />,
    preview: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2000",
    type: "docx"
  },
  {
    title: "Image to PPT",
    description: "Transform your images into a complete, polished PPT.",
    icon: <FileImage className="h-6 w-6" />,
    preview: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2000",
    type: "image"
  },
  {
    title: "Metrics Dashboard",
    description: "Create data-driven presentations with beautiful charts.",
    icon: <BarChart2 className="h-6 w-6" />,
    preview: "https://images.unsplash.com/photo-1553484771-371a605b060b?auto=format&fit=crop&q=80&w=2000",
    type: "metrics"
  }
];

export const slideTypes: PresentationType[] = [
  {
    title: "Pros/Cons Slide",
    description: "Create balanced comparison slides instantly.",
    icon: <Scale className="h-6 w-6" />,
    preview: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000",
    type: "pros-cons"
  },
  {
    title: "Bullet Points + Image",
    description: "Generate visual slides with key points.",
    icon: <ListChecks className="h-6 w-6" />,
    preview: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=2000",
    type: "bullet-points"
  },
  {
    title: "Lists Slide",
    description: "Create organized, clear list presentations.",
    icon: <LayoutList className="h-6 w-6" />,
    preview: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=2000",
    type: "lists"
  },
  {
    title: "Metrics Slide",
    description: "Showcase data and KPIs effectively.",
    icon: <Activity className="h-6 w-6" />,
    preview: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000",
    type: "metrics"
  },
  {
    title: "Three Column Slide",
    description: "Create balanced three-column layouts.",
    icon: <Columns3 className="h-6 w-6" />,
    preview: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=2000",
    type: "three-column"
  },
  {
    title: "Timeline Slide",
    description: "Visualize processes and histories.",
    icon: <Timeline className="h-6 w-6" />,
    preview: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&q=80&w=2000",
    type: "timeline"
  },
  {
    title: "SWOT Analysis",
    description: "Create comprehensive SWOT analysis slides.",
    icon: <Target className="h-6 w-6" />,
    preview: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=2000",
    type: "swot"
  }
];
"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { 
  ArrowRight, FileText, Youtube, FileImage, Link2, File, FileType2, BarChart2, Hash,
  ListChecks, LayoutList, Activity, Columns3, Timeline, Target, Scale
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const contentTypes = [
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

const slideTypes = [
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

export function PresentationTypes() {
  return (
    <section className="bg-black py-24 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Multiple Ways to Create
          </h2>
          <p className="text-xl text-gray-400">
            Choose your preferred method to generate presentations
          </p>
        </motion.div>

        {/* Content Source Types */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-white mb-8">Content Sources</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contentTypes.map((type, index) => (
              <TypeCard key={type.title} type={type} index={index} />
            ))}
          </div>
        </div>

        {/* Slide Types */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8">Slide Types</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {slideTypes.map((type, index) => (
              <TypeCard key={type.title} type={type} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface TypeCardProps {
  type: {
    title: string;
    description: string;
    icon: JSX.Element;
    preview: string;
    type: string;
  };
  index: number;
}

function TypeCard({ type, index }: TypeCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/generate?type=${type.type}`}>
        <Card className="group relative overflow-hidden bg-white/5 border-white/10 hover:border-purple-500/50 transition-all duration-300">
          <div className="relative aspect-[4/3]">
            <Image
              src={type.preview}
              alt={type.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
              <div className="text-purple-400 mb-3">{type.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {type.title}
              </h3>
              <p className="text-gray-300 text-sm">
                {type.description}
              </p>
              <Button 
                variant="ghost" 
                className="mt-4 w-full justify-between text-purple-400 hover:text-purple-300 hover:bg-purple-500/10"
              >
                Try Now
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        </Card>
      </Link>
    </motion.div>
  );
}
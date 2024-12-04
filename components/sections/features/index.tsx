"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { 
  Wand2, 
  Layout, 
  Palette, 
  Download, 
  Zap,
  Image as ImageIcon,
  FileText,
  Share2
} from "lucide-react";

const features = [
  {
    icon: <Wand2 className="h-6 w-6" />,
    title: "AI Generation",
    description: "Transform any content into professional slides with our advanced AI"
  },
  {
    icon: <Layout className="h-6 w-6" />,
    title: "Smart Layouts",
    description: "Beautiful slide layouts that automatically adapt to your content"
  },
  {
    icon: <Palette className="h-6 w-6" />,
    title: "Custom Styling",
    description: "Customize colors, fonts, and themes to match your brand"
  },
  {
    icon: <Download className="h-6 w-6" />,
    title: "Easy Export",
    description: "Export to PowerPoint or PDF format with one click"
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Instant Results",
    description: "Generate complete presentations in seconds, not hours"
  },
  {
    icon: <ImageIcon className="h-6 w-6" />,
    title: "Image Library",
    description: "Access millions of professional stock images and icons"
  },
  {
    icon: <FileText className="h-6 w-6" />,
    title: "Content Suggestions",
    description: "Get AI-powered content suggestions for each slide"
  },
  {
    icon: <Share2 className="h-6 w-6" />,
    title: "Easy Sharing",
    description: "Share and collaborate with your team in real-time"
  }
];

export function FeaturesSection() {
  return (
    <section className="bg-black py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Everything You Need
          </h2>
          <p className="text-xl text-gray-400">
            Powerful features to create stunning presentations
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

function FeatureCard({ icon, title, description, delay }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <Card className="p-6 bg-white/5 border-white/10 hover:bg-white/10 transition-colors">
        <div className="text-purple-500 mb-4">{icon}</div>
        <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </Card>
    </motion.div>
  );
}
"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Sparkles, PenTool, Download } from "lucide-react";

const steps = [
  {
    icon: <Sparkles className="h-6 w-6" />,
    title: "Enter Your Topic",
    description: "Simply input your presentation topic or paste your content"
  },
  {
    icon: <PenTool className="h-6 w-6" />,
    title: "AI Generates Slides",
    description: "Our AI creates professional slides with perfect layouts"
  },
  {
    icon: <Download className="h-6 w-6" />,
    title: "Export & Present",
    description: "Download your presentation in PowerPoint or PDF format"
  }
];

export function HowItWorksSection() {
  return (
    <section className="relative bg-black py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-4">How It Works</h2>
          <p className="text-gray-400 text-lg">Create stunning presentations in three simple steps</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-purple-500/20 hidden md:block" />

          {steps.map((step, index) => (
            <StepCard
              key={step.title}
              number={index + 1}
              icon={step.icon}
              title={step.title}
              description={step.description}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface StepCardProps {
  number: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

function StepCard({ number, icon, title, description, delay }: StepCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <Card className="relative p-6 bg-white/5 border-white/10 hover:bg-white/10 transition-colors">
        <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center text-white font-bold">
          {number}
        </div>
        <div className="text-purple-500 mb-4">{icon}</div>
        <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </Card>
    </motion.div>
  );
}
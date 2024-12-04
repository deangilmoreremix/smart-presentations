"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const templates = [
  {
    title: "Business Pitch",
    category: "Business",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=2000",
    preview: "/previews/business-pitch.png"
  },
  {
    title: "Marketing Plan",
    category: "Marketing",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000",
    preview: "/previews/marketing-plan.png"
  },
  {
    title: "Education",
    category: "Education",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=2000",
    preview: "/previews/education.png"
  },
  {
    title: "Sales Deck",
    category: "Sales",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=2000",
    preview: "/previews/sales-deck.png"
  }
];

export function TemplatesSection() {
  return (
    <section className="bg-black py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Professional Templates</h2>
          <p className="text-gray-400 text-lg">Choose from our collection of stunning templates</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {templates.map((template, index) => (
            <motion.div
              key={template.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group relative overflow-hidden bg-white/5 border-white/10 hover:border-purple-500/50 transition-all duration-300">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={template.image}
                    alt={template.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <span className="text-xs text-purple-400 mb-2">{template.category}</span>
                    <h3 className="text-lg font-semibold text-white mb-4">{template.title}</h3>
                    <Button 
                      variant="ghost" 
                      className="w-full justify-between text-purple-400 hover:text-purple-300 hover:bg-purple-500/10"
                    >
                      Use Template
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
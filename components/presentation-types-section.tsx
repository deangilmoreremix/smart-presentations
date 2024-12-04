"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { contentTypes, slideTypes } from "./presentation-types/data";
import type { PresentationType } from "./presentation-types/types";

interface TypeCardProps {
  type: PresentationType;
  index: number;
}

function TypeCard({ type, index }: TypeCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
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

export function PresentationTypesSection() {
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

        <div className="mb-20">
          <h3 className="text-2xl font-bold text-white mb-8">Content Sources</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contentTypes.map((type, index) => (
              <TypeCard key={type.title} type={type} index={index} />
            ))}
          </div>
        </div>

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
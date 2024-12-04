"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { PresentationType } from "@/types";

interface PresentationCardProps {
  type: PresentationType;
  index: number;
}

export function PresentationCard({ type, index }: PresentationCardProps) {
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
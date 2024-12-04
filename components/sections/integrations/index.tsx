"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const integrations = [
  { 
    name: "Microsoft PowerPoint",
    description: "Export directly to PowerPoint format with perfect compatibility",
    logo: "/images/logos/powerpoint-logo.png",
    link: "#powerpoint-integration",
    width: 150,
    height: 50 
  },
  { 
    name: "Google Slides",
    description: "Seamlessly integrate with Google Workspace for team collaboration",
    logo: "/images/logos/google-slides-logo.png",
    link: "#google-slides-integration",
    width: 140,
    height: 45
  },
  { 
    name: "Apple Keynote",
    description: "Create stunning presentations for Apple Keynote",
    logo: "/images/logos/keynote-logo.png",
    link: "#keynote-integration",
    width: 130,
    height: 45
  },
  { 
    name: "Canva",
    description: "Import and customize in Canva for additional design options",
    logo: "/images/logos/canva-logo.png",
    link: "#canva-integration",
    width: 120,
    height: 40
  }
];

export function IntegrationsSection() {
  return (
    <section className="bg-black py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Works With Your Favorite Tools
          </h2>
          <p className="text-gray-400 text-lg">
            Export and edit your presentations in any format
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {integrations.map((integration, index) => (
            <motion.div
              key={integration.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 bg-white/5 border-white/10 hover:bg-white/10 transition-all group">
                <div className="h-16 flex items-center justify-center mb-6">
                  <Image
                    src={integration.logo}
                    alt={integration.name}
                    width={integration.width}
                    height={integration.height}
                    className="opacity-75 group-hover:opacity-100 transition-opacity"
                  />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {integration.name}
                </h3>
                <p className="text-gray-400 mb-4">
                  {integration.description}
                </p>
                <Button 
                  variant="ghost" 
                  className="w-full justify-between text-purple-400 hover:text-purple-300 hover:bg-purple-500/10"
                  asChild
                >
                  <a href={integration.link}>
                    Learn More
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </a>
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400">
            More integrations coming soon. Have a specific tool in mind?{" "}
            <a href="#contact" className="text-purple-400 hover:text-purple-300">
              Let us know
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
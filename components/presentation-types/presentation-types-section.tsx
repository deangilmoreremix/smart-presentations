"use client";

import { motion } from "framer-motion";
import { TypeCard } from "./type-card";
import { contentTypes, slideTypes } from "./data";

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
              <TypeCard key={type.type} type={type} index={index} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-white mb-8">Slide Types</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {slideTypes.map((type, index) => (
              <TypeCard key={type.type} type={type} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
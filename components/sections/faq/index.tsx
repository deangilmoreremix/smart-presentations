"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "How does SlideAI work?",
    answer: "SlideAI uses advanced AI to analyze your content and automatically generate professional presentations. Simply input your topic or content, and our AI will create engaging slides with appropriate layouts, content structure, and design elements."
  },
  {
    question: "Can I customize the generated presentations?",
    answer: "Yes! After AI generates your presentation, you can fully customize every aspect including colors, fonts, layouts, and content. Our editor provides intuitive tools for making your presentations perfect."
  },
  {
    question: "What file formats can I export to?",
    answer: "You can export your presentations to PowerPoint (PPTX) and PDF formats. All formatting and styling will be preserved in the exported files."
  },
  {
    question: "Is my content secure?",
    answer: "Yes, we take security seriously. Your content is encrypted and never stored longer than necessary for generation. We don't use your content for training our AI models."
  },
  {
    question: "Do you offer team accounts?",
    answer: "Yes, we offer team accounts with our Enterprise plan. This includes features like shared templates, collaborative editing, and team analytics."
  }
];

export function FAQSection() {
  return (
    <section className="bg-black py-20 px-4">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-400 text-lg">Everything you need to know about SlideAI</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-white/10">
                <AccordionTrigger className="text-white hover:text-white/90">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
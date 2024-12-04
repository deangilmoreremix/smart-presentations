"use client";

import { useSearchParams } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PresentationGenerator } from "@/components/presentation-generator";
import { SlideGenerator } from "@/components/slide-generator";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { contentTypes, slideTypes } from "@/lib/presentation-types";

export default function GeneratePage() {
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState("content-source");
  const [selectedType, setSelectedType] = useState("");

  useEffect(() => {
    const type = searchParams.get("type");
    if (type) {
      const isSlideType = slideTypes.some(t => t.type === type);
      setActiveTab(isSlideType ? "slide-types" : "content-source");
      setSelectedType(type);
    }
  }, [searchParams]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Link href="/">
          <Button variant="ghost" className="text-gray-400 hover:text-white">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
        </Link>
      </div>

      <Tabs defaultValue={activeTab} value={activeTab} className="space-y-8">
        <TabsList className="bg-white/5">
          <TabsTrigger value="content-source">Content Source</TabsTrigger>
          <TabsTrigger value="slide-types">Slide Types</TabsTrigger>
        </TabsList>

        <TabsContent value="content-source" className="space-y-8">
          {contentTypes.map((type) => (
            <PresentationGenerator
              key={type.type}
              type={type.type as any}
              title={type.title}
              description={type.description}
              placeholder={`Enter your ${type.type} content here...`}
              isTextArea={type.type === "text"}
              isFileUpload={["pdf", "docx", "image"].includes(type.type)}
              acceptedFiles={type.type === "pdf" ? ".pdf" : type.type === "docx" ? ".docx,.doc" : "image/*"}
              initiallyExpanded={type.type === selectedType}
            />
          ))}
        </TabsContent>

        <TabsContent value="slide-types" className="space-y-8">
          {slideTypes.map((type) => (
            <SlideGenerator
              key={type.type}
              type={type.type as any}
              title={type.title}
              description={type.description}
              initiallyExpanded={type.type === selectedType}
            />
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}
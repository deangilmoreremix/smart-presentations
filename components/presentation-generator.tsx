"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { ArrowRight, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePresentation } from "@/hooks/use-presentation";
import { useToast } from "@/components/ui/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";

const themes = [
  "default",
  "modern",
  "minimal",
  "corporate",
  "creative",
  "professional"
] as const;

interface GeneratorProps {
  type: 'text' | 'topic' | 'youtube' | 'url' | 'pitch' | 'pdf' | 'docx' | 'image';
  title: string;
  description: string;
  placeholder: string;
  isTextArea?: boolean;
  isFileUpload?: boolean;
  acceptedFiles?: string;
}

export function PresentationGenerator({ 
  type, 
  title, 
  description, 
  placeholder,
  isTextArea,
  isFileUpload,
  acceptedFiles
}: GeneratorProps) {
  const [input, setInput] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [theme, setTheme] = useState<string>("default");
  const { toast } = useToast();
  const { generate, isLoading, progress } = usePresentation({
    onSuccess: () => {
      setInput("");
      setFile(null);
    }
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() && !file) return;

    try {
      await generate(input, theme);
    } catch (error) {
      // Error is handled by usePresentation
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      toast({
        title: "File selected",
        description: `${selectedFile.name} has been selected.`
      });
    }
  };

  return (
    <Card className="p-6 bg-white/5 border-white/10">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <p className="text-gray-400">{description}</p>
        </div>

        {isFileUpload ? (
          <div className="space-y-2">
            <Input
              type="file"
              onChange={handleFileSelect}
              accept={acceptedFiles}
              className="bg-white/5 border-white/10 text-white"
            />
            {file && (
              <p className="text-sm text-gray-400">
                Selected file: {file.name}
              </p>
            )}
          </div>
        ) : isTextArea ? (
          <Textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={placeholder}
            className="min-h-[150px] bg-white/5 border-white/10 text-white placeholder:text-gray-500"
          />
        ) : (
          <Input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={placeholder}
            className="bg-white/5 border-white/10 text-white placeholder:text-gray-500"
          />
        )}

        <Select value={theme} onValueChange={setTheme}>
          <SelectTrigger className="bg-white/5 border-white/10 text-white">
            <SelectValue placeholder="Select theme" />
          </SelectTrigger>
          <SelectContent>
            {themes.map((theme) => (
              <SelectItem key={theme} value={theme}>
                {theme.charAt(0).toUpperCase() + theme.slice(1)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {isLoading && (
          <div className="space-y-2">
            <Progress value={progress} className="h-2" />
            <p className="text-sm text-gray-400 text-center">{progress}% complete</p>
          </div>
        )}

        <Button 
          type="submit"
          className={cn(
            "w-full bg-gradient-to-r from-purple-600 to-blue-600",
            "hover:from-purple-700 hover:to-blue-700",
            "text-white font-medium"
          )}
          disabled={isLoading || (isFileUpload && !file) || (!isFileUpload && !input)}
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Generating...
            </>
          ) : (
            <>
              Generate Presentation
              <ArrowRight className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>
      </form>
    </Card>
  );
}
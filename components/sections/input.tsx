"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Upload, Lightbulb, ArrowRight, Loader2 } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Progress } from "@/components/ui/progress";
import { API_CONFIG } from "@/config/api";

export function InputSection() {
  const [text, setText] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const { toast } = useToast();
  const maxCharacters = API_CONFIG.MAX_TEXT_LENGTH;

  const handleSubmit = async () => {
    if (!text.trim() && !file) {
      toast({
        title: "Error",
        description: "Please enter text or upload a file",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    // Simulate progress
    const interval = setInterval(() => {
      setProgress(prev => Math.min(prev + 10, 100));
    }, 500);

    try {
      await new Promise(resolve => setTimeout(resolve, 3000));
      toast({
        title: "Success",
        description: "Your presentation has been generated!",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to generate presentation",
        variant: "destructive",
      });
    } finally {
      clearInterval(interval);
      setIsLoading(false);
      setProgress(0);
      setText("");
      setFile(null);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  return (
    <section className="relative bg-black py-24">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,#3e3e3e,#000000)]" />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <div className="relative">
              <p className="text-left text-sm text-gray-500 mb-2">
                Character count: {text.length}/{maxCharacters}
              </p>
              <Textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter Topic, Youtube URL, PDF, or Text to get a PPT in seconds. Use the bulb for suggestions."
                className="min-h-[200px] bg-white/5 border-dashed border-2 border-white/20 rounded-xl text-white placeholder:text-gray-500"
                maxLength={maxCharacters}
                disabled={isLoading}
              />
            </div>

            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <Button 
                  variant="outline" 
                  className="bg-white/5 border-white/20 text-white hover:bg-white/10"
                  onClick={() => document.getElementById('file-upload')?.click()}
                  disabled={isLoading}
                >
                  <Upload className="w-4 h-4 mr-2" />
                  Upload File
                </Button>
                <input
                  id="file-upload"
                  type="file"
                  className="hidden"
                  onChange={handleFileSelect}
                  accept=".pdf,.docx,.png,.mp4,.pptx,.mp3"
                />
                <p className="text-sm text-gray-500">
                  {file ? file.name : "upload pdf, docx, png, mp4, pptx, mp3"}
                </p>
              </div>

              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  className="bg-white/5 border-white/20 text-white hover:bg-white/10"
                  disabled={isLoading}
                >
                  <Lightbulb className="w-4 h-4" />
                </Button>
                <Button 
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8"
                  onClick={handleSubmit}
                  disabled={isLoading || (!text.trim() && !file)}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      Generate Instant PPT
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </div>
            </div>

            {isLoading && (
              <div className="mt-4">
                <Progress value={progress} className="h-2" />
                <p className="text-sm text-gray-400 mt-2">{progress}% complete</p>
              </div>
            )}

            <p className="text-sm text-gray-500 text-right">less than 2 min</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
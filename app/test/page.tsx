"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { usePresentation } from "@/hooks/use-presentation";
import { Progress } from "@/components/ui/progress";

export default function TestPage() {
  const [input, setInput] = useState("");
  const { toast } = useToast();
  const { generate, isLoading, progress } = usePresentation({
    onSuccess: (result) => {
      toast({
        title: "Success",
        description: "Presentation generated successfully!",
      });
      setInput("");
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    try {
      await generate(input);
    } catch (error) {
      // Error handled by usePresentation
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="p-6 max-w-xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">API Test</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter text for presentation..."
              disabled={isLoading}
            />
          </div>
          <Button 
            type="submit" 
            disabled={isLoading || !input.trim()}
            className="w-full"
          >
            {isLoading ? "Generating..." : "Generate Presentation"}
          </Button>
          {isLoading && (
            <div className="space-y-2">
              <Progress value={progress} />
              <p className="text-sm text-center">{progress}% complete</p>
            </div>
          )}
        </form>
      </Card>
    </div>
  );
}
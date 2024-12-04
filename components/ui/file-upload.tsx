"use client";

import { useDropzone } from "react-dropzone";
import { cn } from "@/lib/utils";
import { Upload } from "lucide-react";

interface FileUploadProps {
  acceptedFiles?: string;
  maxSize?: number;
  onFileSelect: (file: File) => void;
}

export function FileUpload({ acceptedFiles, maxSize = 5, onFileSelect }: FileUploadProps) {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: acceptedFiles ? { [acceptedFiles]: [] } : undefined,
    maxSize: maxSize * 1024 * 1024,
    multiple: false,
    onDrop: (acceptedFiles) => {
      if (acceptedFiles?.[0]) {
        onFileSelect(acceptedFiles[0]);
      }
    },
  });

  return (
    <div
      {...getRootProps()}
      className={cn(
        "border-2 border-dashed rounded-lg p-6 cursor-pointer transition-colors",
        "bg-white/5 border-white/20 hover:border-white/30",
        isDragActive && "border-purple-500/50 bg-purple-500/5"
      )}
    >
      <input {...getInputProps()} />
      <div className="flex flex-col items-center justify-center text-center">
        <Upload className="h-8 w-8 text-white/50 mb-4" />
        <p className="text-white mb-2">
          {isDragActive ? "Drop the file here" : "Drag & drop a file here, or click to select"}
        </p>
        <p className="text-sm text-gray-400">
          Maximum file size: {maxSize}MB
        </p>
      </div>
    </div>
  );
}
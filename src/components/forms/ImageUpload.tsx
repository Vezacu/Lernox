"use client";

import React, { useState } from "react";
import Image from "next/image";

interface ImageUploadProps {
  onFileSelect: (file: File | null) => void; // Pass file instead of URL
  defaultImage?: string;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onFileSelect, defaultImage }) => {
  const [preview, setPreview] = useState<string | null>(defaultImage || null);

  const handleImageSelection = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setPreview(URL.createObjectURL(file)); // Show preview
    onFileSelect(file); // Pass file to parent
  };

  return (
    <div className="flex flex-col gap-4">
      {preview && (
        <Image
          src={preview}
          alt="Preview"
          className="w-[100px] h-[100px] max-h-64 object-cover rounded-md"
          width={100}
          height={100}
        />

      )}
      <input
        type="file"
        accept="image/*"
        onChange={handleImageSelection}
        className="cursor-pointer block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-400 file:text-white hover:file:bg-blue-500"
      />
    </div>
  );
};

export default ImageUpload;

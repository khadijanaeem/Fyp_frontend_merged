import React from "react";
import { Upload } from "lucide-react";

interface FileUploadProps {
  fileName: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function FileUpload({ fileName, onChange }: FileUploadProps) {
  return (
    <div>
      <p className="text-gray-700 font-bold mb-2">Resume Upload</p>
      <div className="flex flex-col items-center justify-center w-full border-2 border-dashed border-gray-300 rounded-xl py-8 hover:border-indigo-400 transition relative">
        <Upload className="w-8 h-8 text-indigo-500 mb-2" />
        <span className="text-gray-600 text-sm text-center">
          {fileName ? (
            <span className="text-green-600 font-medium">{fileName}</span>
          ) : (
            <>
              Click to upload your resume <br />
              <span className="text-gray-400">(PDF, DOC, or DOCX max 10MB)</span>
            </>
          )}
        </span>
        <input
          type="file"
          name="resume"
          id="resume"
          accept=".pdf,.doc,.docx"
          onChange={onChange}
          required
          className="absolute inset-0 opacity-0 cursor-pointer"
        />
      </div>
    </div>
  );
}

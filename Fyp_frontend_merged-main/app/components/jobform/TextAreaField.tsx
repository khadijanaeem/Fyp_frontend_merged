import React from "react";
import { LucideIcon } from "lucide-react";

interface TextAreaFieldProps {
  name: string;
  label: string;
  placeholder: string;
  icon: LucideIcon;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function TextAreaField({
  name,
  label,
  placeholder,
  icon: Icon,
  onChange,
}: TextAreaFieldProps) {
  return (
    <div>
      <label className="flex items-center text-gray-700 font-bold mb-1">
        <Icon className="w-4 h-4 mr-2 text-gray-500" /> {label}
      </label>
      <textarea
        name={name}
        placeholder={placeholder}
        rows={3}
        onChange={onChange}
        className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
      />
    </div>
  );
}

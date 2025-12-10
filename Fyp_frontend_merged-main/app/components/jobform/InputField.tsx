import React from "react";
import { LucideIcon } from "lucide-react";

interface InputFieldProps {
  name: string;
  type: string;
  label: string;
  placeholder: string;
  icon: LucideIcon;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputField({
  name,
  type,
  label,
  placeholder,
  icon: Icon,
  onChange,
}: InputFieldProps) {
  return (
    <div>
      <label className="flex items-center text-gray-700 font-bold mb-1">
        <Icon className="w-4 h-4 mr-2 text-gray-500" /> {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        required
        className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
      />
    </div>
  );
}

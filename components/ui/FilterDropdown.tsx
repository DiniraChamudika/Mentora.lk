"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FilterDropdownProps {
  title: string;
  options: string[];
}

export default function FilterDropdown({
  title,
  options,
}: FilterDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="relative w-64">
      {/* Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-green-500 text-white py-3 px-4 rounded-full flex items-center justify-between shadow-md hover:bg-green-600 transition"
      >
        {selected || title}
        <ChevronDown
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute mt-2 w-full bg-white rounded-2xl shadow-lg overflow-hidden z-50">
          {options.map((option, index) => (
            <div
              key={index}
              onClick={() => {
                setSelected(option);
                setIsOpen(false);
              }}
className="px-4 py-3 text-gray-800 hover:bg-green-50 hover:text-green-700 cursor-pointer transition"            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
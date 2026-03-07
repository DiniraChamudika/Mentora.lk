"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";



export default function FilterDropdown({
  title,
  options,
  onSelect,
}: FilterDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = (option: string) => {
    setSelected(option);
    setIsOpen(false);
    if (onSelect) onSelect(option); // notify parent of selection
  };

  return (
    <div className="relative w-full md:w-64">
      {/* Dropdown Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 px-5 rounded-2xl flex items-center justify-between shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
      >
        {selected || title}
        <ChevronDown
          className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {/* Dropdown Options */}
      {isOpen && (
        <div className="absolute mt-3 w-full bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50 animate-fadeIn">
          {options.map((option, index) => (
            <div
              key={index}
              onClick={() => handleSelect(option)}
              className={`px-5 py-3 cursor-pointer transition-all duration-200 ${
                selected === option
                  ? "bg-green-100 text-green-700 font-medium"
                  : "text-gray-700 hover:bg-green-100 hover:text-green-700 hover:pl-6"
              }`}
            >
              {option}
            </div>
          ))}
        </div>
      )}

      {/* Animation Style */}
      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-in-out;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-5px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

// ✅ New: Export FilterContainer to wrap multiple dropdowns
export function FilterContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col md:flex-row gap-4 p-6 bg-gradient-to-r from-green-100 to-emerald-50 rounded-3xl shadow-xl border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
      {children}
    </div>
  );
}
"use client";

import FilterDropdown from "@/components/ui/FilterDropdown";

export default function FilterSection() {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm w-full md:w-64 h-fit">

      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">
          Filters
        </h3>
        <button className="text-sm text-green-600 hover:underline">
          Reset All
        </button>
      </div>

      <div className="flex flex-col gap-6">

        {/* Subject */}
        <FilterDropdown
          title="Select Subject"
          options={[
            "Mathematics",
            "Science",
            "English",
            "ICT",
            "Commerce",
          ]}
        />

        {/* Price Range */}
        <FilterDropdown
          title="Select Price Range"
          options={[
            "Below Rs. 1000",
            "Rs. 1000 - 2000",
            "Rs. 2000 - 3000",
            "Above Rs. 3000",
          ]}
        />

        {/* District */}
        <FilterDropdown
          title="Select District"
          options={[
            "Colombo",
            "Gampaha",
            "Kandy",
            "Galle",
            "Kurunegala",
          ]}
        />

      </div>
    </div>
  );
}
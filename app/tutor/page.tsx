"use client";

import { useState } from "react";
import CourseCard from "@/components/course/CourseCard";
import { tutors } from "@/data/tutors";

const ITEMS_PER_PAGE = 6;

export default function TutorPage() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(tutors.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const selectedTutors = tutors.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <div className="min-h-screen bg-zinc-50 p-10">
      <h1 className="text-3xl font-bold mb-8">All Tutors</h1>

      {/* Tutors Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {selectedTutors.map((tutor) => (
          <CourseCard
            key={tutor.id}
            title={tutor.title}
            teacher={tutor.teacher}
            rating={Number(tutor.rating)}
            image={tutor.image}
            qualification={tutor.qualification}
            location={tutor.location}
          />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-10 gap-3">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`px-4 py-2 rounded-full border ${
              currentPage === index + 1
                ? "bg-green-600 text-white"
                : "bg-white text-gray-700 hover:bg-green-100"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
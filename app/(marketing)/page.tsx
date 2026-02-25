"use client";
import { useState } from "react";
import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import CoursesSection from "@/components/sections/CoursesSection";
import FilterSection from "@/components/sections/FilterSection";
import TestimonialSection from "@/components/sections/TestimonialSection";

export default function Home() {
  const [search, setSearch] = useState("");
  return (
    <>
      <HeroSection search={search} setSearch={setSearch} />
      <FeaturesSection />

      {/* MIDDLE SECTION (Filter + Courses) */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-4 gap-8">

            {/* LEFT SIDE - FILTER */}
            <div className="lg:col-span-1">
              <FilterSection />
            </div>

            {/* RIGHT SIDE - COURSES */}
            <div className="lg:col-span-3">

              <CoursesSection search={search} />
            </div>

          </div>
        </div>
      </section>

      <TestimonialSection />
    </>
  );
}
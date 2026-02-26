import CoursesSection from "@/components/sections/CoursesSection";
import FilterSection from "@/components/sections/FilterSection";

export default function CoursesPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="h-20"></div> 

      {/* PAGE HEADER */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <h1 className="text-4xl font-bold text-gray-900">
            All Courses
          </h1>
          <p className="text-gray-600 mt-2">
            Browse and find the perfect course for you.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">
        <FilterSection />
        <CoursesSection search="" />
      </section>

    </div>
  );
}
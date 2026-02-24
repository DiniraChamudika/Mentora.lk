"use client";

import CourseCard from "@/components/course/CourseCard";
import Link from "next/link";

interface CoursesProps {
  search: string;
}

export default function CoursesSection({ search }: CoursesProps) {
  const courses = [
    {
      title: "Advanced Level : Physics",
      teacher: "Thilak Perera",
      rating: "4.8",
      image: "/images/Physics.jpg",
      qualification: "BSc (Hons) in Engineering – University of Colombo",
      location: "Colombo",
    },
    {
      title: "Advanced Level : Biology",
      teacher: "Nadeesha Silva",
      rating: "4.6",
      image: "/images/biology.jpg",
      qualification: "BSc (Hons) in Science – University of Kelaniya",
      location: "Kandy",
    },
    {
      title: "Advanced Level : Mathematics",
      teacher: "Kasun Fernando",
      rating: "4.9",
      image: "/images/maths.jpg",
      qualification: "BSc (Hons) in Engineering – University of Peradeniya",
      location: "Gampaha",
    },
    {
      title: "Advanced Level : ICT",
      teacher: "Eshan Dias",
      rating: "4.8",
      image: "/images/ictol.jpg",
      qualification:
        "BSc (Hons) in Information Technology – University of Moratuwa",
      location: "Colombo",
    },
    {
      title: "Ordinary Level : Science",
      teacher: "Isuru Lakdinu",
      rating: "4.8",
      image: "/images/Science.jpg",
      qualification: "BSc (Hons) in Science – University of Peradeniya",
      location: "Kandy",
    },
    {
      title: "Advanced Level : Chemistry",
      teacher: "Sithum Perera",
      rating: "4.8",
      image: "/images/chemistry.jpg",
      qualification: "BSc (Hons) in Chemistry – University of Colombo",
      location: "Colombo",
    },
    {
      title: "Advanced Level : Business Studies",
      teacher: "Dinura Halwitige",
      rating: "4.8",
      image: "/images/Business Studies.jpg",
      qualification:
        "BSc (Hons) in Business Studies – University of Moratuwa",
      location: "Kandy",
    },
    {
      title: "Advanced Level : Web Development",
      teacher: "Chirath Esandu",
      rating: "4.8",
      image: "/images/webdev.jpg",
      qualification:
        "BSc (Hons) in Computer Science – University of Moratuwa",
      location: "Colombo",
    },
  ];

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="md:col-span-3">

      {/* Courses Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCourses.map((course, index) => (
          <CourseCard
            key={index}
            title={course.title}
            teacher={course.teacher}
            rating={course.rating}
            image={course.image}
            qualification={course.qualification}
            location={course.location}
          />
        ))}
      </div>

      {/* View All Button */}
      <div className="flex justify-center mt-12">
        <Link href="/tutors">
          <button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:opacity-90 text-white font-semibold px-10 py-3 rounded-full shadow-lg transition">
            View All Tutors →
          </button>
        </Link>
      </div>

    </div>
  );
}
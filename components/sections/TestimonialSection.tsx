"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default function TestimonialSection() {
  const testimonials = [
    {
      comment:
        "This teacher is highly effective; I achieved an A in A/L ICT within just six months of guidance.",
      student: "Sonal Perera",
      tutor: "Jehan Fernando",
      tutorDesc:
        "An A/L ICT tutor currently completing a BSc in IT at University of Moratuwa.",
      image: "/images/person1.jpg", 
    },
    {
      comment:
        "Very supportive and explains concepts clearly. Highly recommended!",
      student: "Nethmi Silva",
      tutor: "Thilak Perera",
      tutorDesc:
        "Physics teacher with 10+ years of experience.",
      image: "/images/person2.jpg", 
    },
  ];

  return (
    <section className="py-20 bg-gray-100">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop={true}
        className="max-w-6xl mx-auto"
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="grid md:grid-cols-2 bg-white shadow-xl rounded-xl overflow-hidden">
              
              {/* Left Side */}
              <div className="p-10 flex flex-col justify-center">
                <p className="text-lg text-gray-600 mb-6">
                  {item.comment}
                </p>

                <div className="text-yellow-500 mb-3">
                  ⭐ ⭐ ⭐ ⭐ ⭐
                </div>

                <p className="font-semibold text-gray-800">
                  {item.student}
                </p>
              </div>

              {/* Right Side */}
              <div className="bg-gray-900 text-white p-10 flex flex-col justify-center">
                <div className="flex items-center gap-6">
                  <Image
                    src={item.image}
                    alt={item.tutor}
                    width={120}
                    height={120}
                    className="rounded-full object-cover w-28 h-28"
                  />

                  <div>
                    <h3 className="text-xl font-bold">
                      {item.tutor}
                    </h3>
                    <p className="text-gray-300 text-sm mt-2">
                      {item.tutorDesc}
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
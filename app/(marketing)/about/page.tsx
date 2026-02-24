export default function AboutPage() {
    return (
      <div className="bg-gray-50 min-h-screen">
  
      {/* HERO SECTION WITH IMAGE */}
<section className="relative h-[500px] flex items-center justify-center text-center text-white">

{/* Background Image */}
<img
  src="/images/Aboutus.jpg"
  alt="About Hero"
  className="absolute inset-0 w-full h-full object-cover"
/>

{/* Dark Overlay */}
<div className="absolute inset-0 bg-black/60"></div>

{/* Text Content */}
<div className="relative z-10 px-6">
  <h1 className="text-5xl font-bold mb-6">
    Empowering Education in <span className="text-green-400">Sri Lanka</span>
  </h1>

  <p className="max-w-3xl mx-auto text-lg text-gray-200">
    Mentora is more than a marketplace. It's a movement to bridge the gap
    between passion and knowledge, connecting students with the finest
    educators across the island.
  </p>

  <div className="flex justify-center gap-10 mt-8 font-medium">
    <div>10,000+ Students</div>
    <div>500+ Expert Tutors</div>
  </div>
</div>

</section>
  
        {/* MISSION / VISION */}
        <section className="bg-gray-100 py-16">
         <div className="max-w-7xl mx-auto px-10">
         <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-xl shadow-md text-gray-800">
        <h3 className="text-xl font-semibold mb-4 text-gray-900">Our Mission</h3>
            <p className="text-gray-600">
              To democratize access to high-quality education by connecting learners
              with specialized tutors regardless of geography.
            </p>
          </div>
  
          <div className="bg-white p-8 rounded-xl shadow-md text-gray-800">
          <h3 className="text-xl font-semibold mb-4 text-gray-900">Our Vision</h3>
            <p className="text-gray-600">
              To become the leading digital education hub in South Asia,
              fostering continuous learning and professional excellence.
            </p>
          </div>
  
          <div className="bg-white p-8 rounded-xl shadow-md text-gray-800">
          <h3 className="text-xl font-semibold mb-4 text-gray-900">Our Story</h3>
            <p className="text-gray-600">
              Founded by educators and tech enthusiasts, Mentora started with
              a simple goal: making quality tutoring accessible for everyone.
            </p>
          </div>
          </div>
        </div>
        </section>

        {/* FUTURE E-LEARNING SECTION */}
<section className="max-w-7xl mx-auto px-6 py-20">
  <div className="grid md:grid-cols-2 gap-12 items-center">

    {/* LEFT - IMAGE */}
    <div className="relative">
      <img
        src="/images/person3.jpg"
        alt="Teacher"
        className="rounded-2xl shadow-lg w-full object-cover"
      />

      {/* Success Badge */}
      <div className="absolute -bottom-6 left-10 bg-green-500 text-white px-6 py-4 rounded-xl shadow-lg">
        <p className="text-2xl font-bold">98%</p>
        <p className="text-sm">Success Rate</p>
      </div>
    </div>

    {/* RIGHT - TEXT */}
    <div>
    <h2 className="text-4xl font-bold mb-6 text-gray-900">
  We are building the future of
  <span className="text-green-500"> E-Learning</span> in Sri Lanka.
</h2>

      <p className="text-gray-600 mb-6">
        In a rapidly changing world, traditional classrooms are no longer enough.
        We provide a space where curiosity meets expertise. Our platform supports
        everything from Grade 5 Scholarship exams to advanced Professional Certifications.
      </p>

      <ul className="space-y-3 text-gray-700">
        <li>✔ Verified professional tutors only</li>
        <li>✔ Flexible learning schedules</li>
        <li>✔ Affordable pricing for all levels</li>
      </ul>
    </div>

  </div>
</section>
  
      </div>
    );
  }
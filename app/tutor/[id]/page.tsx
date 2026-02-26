import Image from "next/image";
import { Pencil } from "lucide-react";

interface PageProps {
  params: {
    id: string;
  };
}

export default function TutorProfile({ params }: PageProps) {
  return (

    
    <div className="max-w-6xl mx-auto px-6 py-12 bg-gray-50">
      {/* Course Header */}
            <div className="h-20"></div> 

      <div className="mb-8 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
          Advanced Level : ICT
        </h1>
        <p className="text-gray-500 mt-3 text-lg md:text-xl">
          Learn ICT that is guaranteed to impress with its fundamentals teaching.
        </p>
      </div>

      

      {/* Tutor Info */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mt-10 bg-white p-6 rounded-2xl shadow-md border border-gray-100">
        <Image
          src="/images/person1.jpg"
          alt="Tutor"
          width={90}
          height={90}
          className="rounded-full object-cover border-2 border-teal-500"
        />
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-semibold text-gray-900">
            Nimesh Dissanayake
          </h3>
          <p className="text-gray-500 mt-1">
            BSc(Hons) Computer Science (UCSC) <br />
            Worked as a Software Engineer
          </p>
        </div>
      </div>

      {/* About Me */}
      <div className="mt-10 bg-white p-6 rounded-2xl shadow-md border border-gray-100">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">About Me</h2>
        <p className="text-gray-600 leading-relaxed text-lg">
          An enthusiastic ICT teacher turned software engineer, blending
          the art of teaching with the science of coding. With years of
          classroom experience explaining complex concepts in simple terms,
          he now applies the same clarity and precision to building scalable
          software solutions.
        </p>
        <p className="mt-4 text-gray-600 text-lg">
          <span className="font-medium">Languages :</span>{" "}
          <span className="text-teal-600">Sinhala, English</span>
        </p>
      </div>

      {/* Free Time Slots */}
      <div className="mt-10 bg-white p-6 rounded-2xl shadow-md border border-gray-100">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          Free Time Slots
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-7 gap-6 text-gray-600">
          {["MON", "TUE", "WED", "THUR", "FRI", "SAT", "SUN"].map((day) => (
            <div key={day} className="bg-gray-50 p-3 rounded-lg hover:bg-teal-50 transition-colors duration-200">
              <h4 className="font-semibold mb-2 text-gray-700">{day}</h4>
              <p className="text-sm">02:30</p>
              <p className="text-sm">15:30</p>
              <p className="text-sm">17:00</p>
            </div>
          ))}
        </div>
      </div>

      {/* Price & Edit */}
      <div className="mt-12 flex flex-col md:flex-row justify-between items-center bg-white p-6 rounded-2xl shadow-md border border-gray-100">
        <h3 className="text-3xl font-bold text-gray-800 mb-4 md:mb-0">
          Rs: 2000 / 2 Hrs
        </h3>
        <button className="flex items-center gap-2 text-teal-600 hover:text-teal-800 font-medium transition-colors duration-200">
          <Pencil size={18} />
          Edit Profile
        </button>
      </div>
    </div>
  );
}
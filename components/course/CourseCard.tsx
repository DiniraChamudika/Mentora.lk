import Image from "next/image";
import { GraduationCap, MapPin, Star } from "lucide-react";

interface CourseCardProps {
  title: string;
  teacher: string;
  rating: string;
  image: string;
  qualification: string;
  location: string;
}

export default function CourseCard({
  title,
  teacher,
  rating,
  image,
  qualification,
  location,

}: CourseCardProps) {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition">
      <Image
  src={image}
  alt={title}
  width={250}
  height={250}
  className="rounded-t-xl h-48 w-full object-cover"
/>

      <div className="p-4">
<h4 className="font-semibold mb-2 text-gray-900">
  {title}
</h4>        <p className="text-sm text-gray-500 mb-2">
          by {teacher}
        </p>
        <p className="text-yellow-500 text-sm">
          ⭐ {rating}
        </p>
      </div>
      {/* Qualification */}
<div className="flex items-start gap-2 text-gray-500 text-xs mb-2">          <GraduationCap size={16} className="mt-1 text-green-600" />
          <p className="leading-tight">{qualification}</p>
        </div>

        {/* Location */}
<div className="flex items-start gap-2 text-gray-500 text-xs mb-2">          <MapPin size={16} className="text-green-600" />
          <p>{location}</p>
        </div>
    </div>
  );
}
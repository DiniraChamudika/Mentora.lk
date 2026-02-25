"use client";
import { useRouter } from "next/navigation";

export default function RegisterPage() {

  const router = useRouter();

  const handleSignup = () => {
    // You can add validation here later
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-[#eef4f6]">

      {/* Top Bar */}
      <div className="px-10 py-4">
        <h2 className="text-teal-700 font-semibold text-lg">
          • Mentora.lk
        </h2>
      </div>

      <div className="flex justify-center items-start px-10 pb-16">

        {/* LEFT FORM CARD */}
        <div className="bg-white w-full max-w-3xl rounded-2xl shadow-md p-10">

          <h3 className="text-gray-800 font-semibold text-sm mb-8">
            About
          </h3>

          <div className="space-y-6">

            {/* Full Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Full Name
              </label>
              <input
                type="text"
                placeholder="e.g. Aruna Perera"
                className="w-full border border-gray-300 rounded-md px-4 py-2 
                bg-white text-gray-900 placeholder:text-gray-700
                focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition"
              />
            </div>

            {/* Date of Birth */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Date of Birth
              </label>
              <input
                type="date"
                className="w-full border border-gray-300 rounded-md px-4 py-2 
                bg-white text-gray-900
                focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition"
              />
            </div>

            {/* Gender */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Gender
              </label>
              <select
                className="w-full border border-gray-300 rounded-md px-4 py-2 
                bg-white text-gray-900
                focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition"
              >
                <option>Select gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>

            {/* City */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                City
              </label>
              <input
                type="text"
                placeholder="Enter your city"
                className="w-full border border-gray-300 rounded-md px-4 py-2 
                bg-white text-gray-900 placeholder:text-gray-700
                focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition"
              />
            </div>

            {/* Address */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Address
              </label>
              <input
                type="text"
                placeholder="Enter your full residential address"
                className="w-full border border-gray-300 rounded-md px-4 py-2 
                bg-white text-gray-900 placeholder:text-gray-700
                focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="email@example.com"
                className="w-full border border-gray-300 rounded-md px-4 py-2 
                bg-white text-gray-900 placeholder:text-gray-700
                focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter a strong password"
                className="w-full border border-gray-300 rounded-md px-4 py-2 
                bg-white text-gray-900 placeholder:text-gray-700
                focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition"
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Enter password again
              </label>
              <input
                type="password"
                placeholder="Enter again"
                className="w-full border border-gray-300 rounded-md px-4 py-2 
                bg-white text-gray-900 placeholder:text-gray-700
                focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition"
              />
            </div>

            {/* Button */}
            <div className="flex justify-end pt-4">
              <button
                onClick={handleSignup}
                className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-2 rounded-lg font-semibold transition"
              >
                Sign up
              </button>
            </div>

          </div>
        </div>

        {/* RIGHT INFO CARD */}
        <div className="hidden lg:block ml-10 bg-teal-100 p-8 rounded-2xl w-80 h-fit shadow-sm">
          <h4 className="font-semibold text-teal-900 mb-3">
            “Tell us about yourself”
          </h4>
          <p className="text-sm text-teal-800">
            Provide your basic personal information so students can identify
            you easily and communicate with confidence through your profile.
          </p>
        </div>

      </div>
    </div>
  );
}
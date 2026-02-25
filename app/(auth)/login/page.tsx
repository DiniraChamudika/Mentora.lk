"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {

  const router = useRouter();

  const handleLogin = () => {
    // Later you can add validation or API call here
    router.push("/");
  };

  return (
    <div className="min-h-screen flex">

      {/* LEFT SIDE */}
      <div className="w-full md:w-1/2 bg-[#edf6f7] flex flex-col justify-center px-16 py-12">

        <h2 className="text-lg font-semibold text-teal-500 mb-10">
          • Mentora.lk
        </h2>

        <h1 className="text-4xl font-bold text-gray-900 mb-3">
          Welcome back!
        </h1>

        <p className="text-gray-700 mb-10">
          Enter your credentials to access your account
        </p>

        {/* Email */}
        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-900 mb-2">
            Email address
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 
            bg-white text-gray-900 
            placeholder:text-gray-700 
            focus:outline-none focus:ring-2 focus:ring-teal-500 
            focus:border-teal-500 transition"
          />
        </div>

        {/* Password */}
        <div className="mb-3">
          <div className="flex justify-between mb-2">
            <label className="text-sm font-semibold text-gray-900">
              Password
            </label>
            <Link
              href="/forgot-password"
              className="text-sm text-teal-600 hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          <input
            type="password"
            placeholder="Enter your password"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 
            bg-white text-gray-900 
            placeholder:text-gray-700 
            focus:outline-none focus:ring-2 focus:ring-teal-500 
            focus:border-teal-500 transition"
          />
        </div>

        <div className="flex items-center mb-8 mt-4">
          <input type="checkbox" className="mr-2 accent-teal-600" />
          <span className="text-sm text-gray-700">
            Remember for 30 days
          </span>
        </div>

        {/* Login Button */}
        <button
          onClick={handleLogin}
          className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-xl font-semibold shadow-md transition duration-300"
        >
          Login
        </button>

        <div className="text-center my-6 text-gray-500 text-sm">
          Or
        </div>

        {/* Social Buttons */}
        <div className="flex gap-4 mb-6">
          <button className="flex-1 bg-blue-200 text-blue-800 border border-blue-200 py-3 rounded-xl hover:bg-blue-700 hover:text-white transition duration-300">
            Sign in with Google
          </button>

          <button className="flex-1 bg-blue-200 text-blue-800 border border-blue-200 py-3 rounded-xl hover:bg-blue-700 hover:text-white transition duration-300">
            Sign in with Apple
          </button>
        </div>

        <p className="text-lg text-gray-800 text-center">
          Don't have an account?{" "}
          <Link
            href="/register"
            className="text-teal-600 hover:underline font-semibold"
          >
            Sign Up
          </Link>
        </p>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="hidden md:block w-1/2 relative">
        <Image
          src="/images/login.jpg"
          alt="Classroom"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

    </div>
  );
}
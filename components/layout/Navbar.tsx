"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Courses", path: "/courses" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="flex items-center justify-between px-8 py-4 max-w-7xl mx-auto">
        
        {/* Logo */}
        <h2 className="text-2xl font-bold">
          <span className="text-green-500">Mentora</span>
          <span className="text-black">.lk</span>
        </h2>

        {/* Navigation */}
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className={`transition duration-300 hover:text-green-500 ${
                pathname === link.path
                  ? "text-green-500"
                  : "text-gray-700"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right Side Buttons */}
        <div className="flex items-center gap-4">
          
          {/* Become a Tutor Button */}
          <Link
            href="/tutor"
            className="text-sm font-medium text-green-600 hover:text-green-700 transition"
          >
            Become a Tutor
          </Link>

          {/* Sign In / Join Button */}
          <Link
            href="/login"
            className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-full text-sm font-medium transition duration-300 shadow-md"
          >
            Sign In / Join
          </Link>

        </div>
      </div>
    </header>
  );
}
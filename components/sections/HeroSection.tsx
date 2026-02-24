interface HeroProps {
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
  }
  
import Image from "next/image";

export default function HeroSection({ search, setSearch }: HeroProps) {
  return (
    <section className="relative h-[600px] flex items-center justify-center">
      <Image
        src="/images/hero.jpg"
        alt="Hero"
        fill
        className="object-cover"
        priority
      />

      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative text-center text-white max-w-3xl">
        <h1 className="text-5xl font-bold mb-4">
          Find Your Best Tutor
        </h1>
        <p className="mb-8 text-lg">
          Beginning journey with us....
        </p>
        <div className="flex justify-center">
    <input
      type="text"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder="Search courses..."
      className="w-80 px-4 py-3 rounded-l-lg bg-white text-black placeholder-gray-500 focus:outline-none"
    />
    <button className="bg-green-500 px-6 py-3 rounded-r-lg">
      Search
    </button>
  </div>
      </div>
    </section>
  );
}
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="bg-black text-white relative">
      <div className="container mx-auto flex flex-col md:flex-row items-center py-12 md:py-24">
        {/* Left Section */}
        <div className="md:w-1/2 text-left px-6">
          <p className="text-yellow-400 font-serif italic mb-2">It’s Quick & Amusing!</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            <span className="text-yellow-400">The</span> Art of speed <br /> food Quality
          </h1>
          <p className="text-gray-400 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue.
          </p>
          <a
            href="/menu"
            className="inline-block bg-orange-400 text-white font-semibold py-3 px-6 rounded-full hover:bg-yellow-500 transition"
          >
            See Menu
          </a>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 relative flex justify-center items-center mt-8 md:mt-0">
          <div className="relative">
            {/* Main Food Image */}
            <Image
              src="/hero1.png" // Replace with your food image path
              alt="Food Dish"
              width={878}
              height={670}
              className="rounded-full"
            />
        
          </div>
        </div>
      </div>
    </section>
  );
}

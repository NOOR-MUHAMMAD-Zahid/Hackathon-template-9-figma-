import React from "react";
import Image from "next/image";
import { FaCheck } from "react-icons/fa6";
import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";

// import aboutus1 from "../../../public/aboutus1.jpeg"
// import aboutus2 from "../../../public/aboutus2.jpeg"
// import aboutus3 from "../../../public/aboutus3.jpeg"

function AboutUs() {
  return (
    <div>
        <div>
            <Navbar/>
        </div>
    <section className="bg-black px-3 md:px-[135px] flex flex-col justify-evenly md:flex-row md:items-center py-[50px]">
      {/* Heading */}
      <div className="text-white w-full md:w-[50%]">
        <h1 className="md:text-[32px] text-[24px] font-normal text-[#FF9F0D] font-greatVibes">
          About Us
        </h1>

        <h1 className="text-[20px] md:text-[50px] font-bold whitespace-nowrap md:whitespace-normal">
          <span className="text-[#FF9F0D]">We</span> Create the Best Foody
          Product
        </h1>

        <p className="text-[10px] md:text-[16px] font-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
          pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit
          augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis
          sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in
          consequat.
        </p>

        <ul>
          <li className="text-[10px] md:text-[16px] font-normal mt-10 flex">
            <span className="mr-[10px]">
              <FaCheck />
            </span>{" "}
            Lacus nisi, et ac dapibus sit eu velit in consequat.
          </li>
          <li className="text-[10px] md:text-[16px] font-normal mt-10 flex">
            <span className="mr-[10px]">
              <FaCheck />
            </span>{" "}
            Quisque diam pellentesque bibendum non dui volutpat fringilla
          </li>
          <li className="text-[10px] md:text-[16px] font-normal mt-10 flex">
            <span className="mr-[10px]">
              <FaCheck />
            </span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </li>
        </ul>

        <div className="flex flex-col md:flex-row items-center md:items-start">
          <button className="bg-[#FF9F0D] text-white w-[100px] h-[30px] md:w-[190px] md:h-[60px] rounded-[40px] mt-[32px] hover:bg-yellow-800">
            See More
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="mt-[50px] md:mt-0 ">
        <Image src={"/about1.jpg"} alt="About Us Image 1"  width={400} height={50} className="" />
        <div className="flex flex-col md:flex-row mt-[16px] md:mt-[0]">
          <Image src={"/about2.jpg"} alt="About Us Image 2"  width={250} height={20} className="mr-[16px] pt-[40px]" />
          <Image src={"/about3.jpg"} alt=" About Us Image 3" width={150} height={20} className="pt-[40px]" />
        </div>
      </div>
    </section>
    <div>
    <section className="p-6 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-8">
      {/* Left Side: Image Section */}
      <div className="flex flex-col lg:gap-4">
        {/* Top Image */}
        <div className="relative mb-4 lg:mb-0">
          <Image
            src="/about1.jpg"
            alt="Tacos with lime and toppings"
            width={400}
            height={300}
            className="rounded-lg"
          />
        </div>

        {/* Bottom Images */}
        <div className="flex flex-col md:flex-row gap-4">
          {/* Image 2 */}
          <Image
            src="/about2.jpg"
            alt="Crispy food being dipped into sauce"
            width={250}
            height={150}
            className="rounded-lg"
          />
          {/* Image 3 */}
          <Image
            src="/about3.jpg"
            alt="Healthy salad bowl"
            width={250}
            height={150}
            className="rounded-lg"
          />
        </div>
      </div>

      {/* Right Side: Text Section */}
      <div className="flex-1 text-center lg:text-left">
        <h4 className="text-sm text-orange-500 font-semibold mb-2">About us</h4>
        <h2 className="text-3xl lg:text-4xl font-bold mb-4 leading-snug">
          Food is an important part <br /> Of a balanced Diet
        </h2>
        <p className="text-gray-600 mb-6 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque
          bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium
          donec id elementum. Ultrices mattis vitae mus risus.
        </p>

        {/* Buttons */}
        <div className="flex items-center justify-center lg:justify-start gap-4">
          <button className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600">
            Show more
          </button>
          <button className="flex items-center text-gray-700 hover:text-orange-500 font-medium">
            <span className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 mr-2">
              ▶
            </span>
            Watch video
          </button>
        </div>
      </div>
    </section>
    </div>






    <div>
    <section className="py-12">
      {/* Top Section */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Why Choose us</h2>
        <p className="text-gray-600 max-w-md mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque
          bibendum non dui volutpat fringilla bibendum.
        </p>
      </div>

      {/* Image Section */}
      <div className="grid grid-cols-3 gap-2 mb-12 justify-center items-center">
  <div className="col-span-3 flex justify-center items-center">
    <Image
      src="/fo2.png"
      alt="Delicious Plate 1"
      width={1920}
      height={500}
      className="w-full max-w-3xl h-auto object-cover rounded-lg"
    />
  </div>
</div>


      {/* Bottom Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {/* Best Chef Card */}
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 mb-4">
            <Image src="/st2.png" alt="Chef Icon" width={48} height={48} />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Best Chef</h3>
          <p className="text-gray-600 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque
            bibendum non dui volutpat.
          </p>
        </div>

        {/* 120 Item Food Card */}
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 mb-4">
            <Image src="/co2.png" alt="Food Icon" width={48} height={48} />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">120 Item food</h3>
          <p className="text-gray-600 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque
            bibendum non dui volutpat.
          </p>
        </div>

        {/* Clean Environment Card */}
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 mb-4">
            <Image src="/pe2.png" alt="Clean Icon" width={48} height={48} />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Clean Environment</h3>
          <p className="text-gray-600 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque
            bibendum non dui volutpat.
          </p>
        </div>
      </div>
    </section>
    </div>






    <div>
        <Footer />
    </div>
    </div>
  );
}

export default AboutUs;
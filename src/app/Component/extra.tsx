import Image from "next/image"; 
import { IoPlayOutline } from "react-icons/io5";
const Home = () => {
  return (
    <>
      {/* Left  */}
      <section className="flex flex-row-2 ml-5 bg-black px-[135px]"></section>  {/* right */}
        <div className="bg-black">
          <div className="mt-[50]">
            <div>
            <h3 className="text-[#FF9F0D] text-2xl ml-8  mb-[35]">Why Choose us</h3>
            <h1 className="text-white text-6xl font-bold mb-7 ">
              <span className="text-[#FF9F0D] ml-8">Ex</span>tra ordinary taste
              <br /> And Experienced{" "}
            </h1>
            <p className="text-gray-200 mb-14 ml-8 text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam
              <br /> pellentesque bibendum non dui volutpat fringilla bibendum.
              Urna, elit <br /> augue urna, vitae feugiat pretium donec id
              elementum. Ultrices mattis <br /> sed vitae mus risus. Lacus nisi,
              et ac dapibus sit eu velit in <br /> consequat.
            </p>

            <div className="flex justify-center md:justify-start ml-8 space-x-4">
             <a href="/foodCatogary">
             <button className="inline-flex text-white bg-orange-400 border-0 py-2 px-3 focus:outline-none rounded text-lg">
                Show More
              </button></a>
              <button className="ml-4 inline-flex text-white border-0 py-2 px-3 focus:outline-none rounded text-lg">
                <IoPlayOutline className="mr-2 text-white" /> {/* Icon on the left */}
                Watch video
              </button>
            </div>

            </div>

            

             
             <div className="grid grid-cols-2  ml-28 mt-6">
          <Image 
            src={"/about2.jpg"} 
            alt="About Us Image 2" 
            width={100}
            height={100}
            className="rounded-lg object-cover w-[450px] h-[150px] sm:h-[200px] md:h-[250px]" 
          />
          <Image 
            src={"/about3.jpg"} 
            alt="About Us Image 3" 
            width={100}
            height={100}
            className="rounded-lg object-cover w-[450px] h-[150px] sm:h-[200px] md:h-[250px]" 
          /> </div>
          <div  className="flex justify-center py-3">
            <Image
              src={"/food1.jpg"}
              alt="experience"
              width={374}
              height={93}
              className="flex justify-center rounded-lg"
            /></div>
          </div>
        </div>
      
    </>
  );
};

export default Home;
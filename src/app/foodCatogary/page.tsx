import React from 'react'
import Image from 'next/image'
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';

const FoodCategory = () => {
  // Items array containing food details
  const items = [
    { id: 1, img: "/a.jpg", label: "Save 50% on Fast Food" },
    { id: 2, img: "/b.jpg", label: "Delicious Burgers" },
    { id: 3, img: "/c.jpg", label: "Healthy Salads" },
    { id: 4, img: "/d.jpg", label: "Desserts" },
  ];

  return (
    <section className="bg-black text-white py-16 px-6">
        <div>
            <Navbar />
        </div>
      <div className="container mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          <span className="text-orange-500">Choose</span> Food Item
        </h2>

        {/* Grid of food items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div key={item.id} className="relative">
              {/* Image of the food item */}
              <Image
                src={item.img}
                alt={item.label}
                width={500}
                height={500}
                className="w-full h-56 object-cover rounded-lg"
              />

              {/* Overlay label */}
              <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 px-4 py-2 rounded-md">
                <span className="text-orange-500 font-semibold">{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </section>
  )
}

export default FoodCategory
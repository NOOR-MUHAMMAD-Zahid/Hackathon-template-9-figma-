"use client";

import { useState } from "react";
import Image from "next/image";

const blogImages = [
  { id: 1, image: "/bl1.png", title: "10 Reasons To Do A Digital Detox Challenge" },
  { id: 2, image: "/bl3.png", title: "Exploring Digital Wellness Strategies" },
  { id: 3, image: "/bl4.png", title: "The Impact of Technology on Mental Health" },
  { id: 4, image: "/bl2.png", title: "Balancing Screen Time and Real Life" },
];

const sideImages = [
  { id: 1, image: "/f1.png", title: "Recent Post 1", date: "June 22, 2020" },
  { id: 2, image: "/f2.png", title: "Recent Post 2", date: "June 22, 2020" },
  { id: 3, image: "/f3.png", title: "Recent Post 3", date: "June 22, 2020" },
];

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Blog Section */}
        <div className="w-full lg:w-2/3 space-y-8">
          {blogImages.map((item) => (
            <div key={item.id} className="bg-white rounded shadow-md">
              <Image
                src={item.image}
                alt={item.title}
                width={800}
                height={450}
                className="w-full h-auto object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-bold mb-2">{item.title}</h2>
                <p className="text-sm text-gray-600">
                  A brief summary about the blog goes here. Replace this text with meaningful content.
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar */}
        <div className="w-full lg:w-1/3 space-y-6">
          {/* Search Bar */}
          <div className="flex">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-grow border rounded-l px-3 py-2 focus:outline-none"
            />
            <button className="bg-orange-500 text-white px-4 py-2 rounded-r hover:bg-orange-600">
              Search
            </button>
          </div>

          {/* Recent Posts */}
          <div className="bg-white rounded shadow-md p-4">
            <h3 className="text-lg font-bold mb-4">Recent Posts</h3>
            {sideImages.map((post) => (
              <div key={post.id} className="flex items-center mb-4">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={60}
                  height={60}
                  className="rounded mr-4"
                />
                <div>
                  <h4 className="text-sm font-semibold">{post.title}</h4>
                  <p className="text-xs text-gray-500">{post.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

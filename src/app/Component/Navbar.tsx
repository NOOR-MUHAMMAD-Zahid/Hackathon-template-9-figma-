"use client";

import { useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6"; // Magnifying Glass Icon
import { PiUserBold } from "react-icons/pi"; // User Icon
import { PiHandbagBold } from "react-icons/pi"; // Shopping Bag Icon
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div>
      <div className="bg-black flex justify-center items-center">
        <img src="/Foodtuck.png" alt="Food truck logo" />
      </div>
    <nav className="bg-black text-white shadow-md">
      <div className="container mx-auto px-6 lg:px-12 py-4 flex justify-between items-center gap-20">
        {/* Logo */}
        

        {/* Large Screen Navigation */}
        <div className="hidden lg:flex items-center justify-between flex-1 ml-8">
          {/* Navigation Links */}
          <div className="flex space-x-6 ">
            <a href="/" className="hover:text-orange-500 transition">
              Home
            </a>
            <a href="/menu" className="hover:text-orange-500 transition">
              Menu
            </a>
            <a href="/blog" className="hover:text-orange-500 transition">
              Blog
            </a>
            <a href="/chefs" className="hover:text-orange-500 transition">
              Pages
            </a>
            <a href="/about" className="hover:text-orange-500 transition">
              About
            </a>
            <a href="/signin" className="hover:text-orange-500 transition">
              Sign up
            </a>
            <a href="/checkout" className="hover:text-orange-500 transition">
              CheckOut
            </a>
            <a href="faq" className="hover:text-orange-500 transition">
              FAQ
            </a>
          </div>
            
          {/* Icons and Search */}
          <div className="flex items-center ml-8 space-x-4">
          <input
              type="text"
              placeholder="Search..."
              className="bg-transparent border border-orange-300 rounded-full px-4 py-1 text-white focus:outline-none"
            /> 
            {/* Search Icon */}
            <div className="text-white text-xl hover:text-orange-500 transition">
              <FaMagnifyingGlass />
            </div>

            {/* User Icon */}
            <div className="text-white text-xl hover:text-orange-500 transition">
              <PiUserBold />
            </div>

            {/* Shopping Bag Icon with list of items in cart */}
            <div className="text-white text-2xl hover:text-orange-500 transition">
                <a href="/cartitem"
                ><PiHandbagBold /></a>
            </div>
            </div>
          </div>
        </div>

        {/* Hamburger Icon (Small Screens) */}
        <div className="lg:hidden text-2xl cursor-pointer" onClick={toggleMenu}>
          {isMenuOpen ? "✕" : "≡"}
        </div>
    

      {/* Collapsible Menu for Small Screens */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } lg:hidden bg-black text-white mt-4 space-y-4 px-6`}
      >
        {/* Navigation Links */}
        <div className="flex flex-col space-y-4">
          <a href="/" className="hover:text-orange-500 transition">
            Home
          </a>
          <a href="/menu" className="hover:text-orange-500 transition">
            Menu
          </a>
          <a href="/blog" className="hover:text -orange-500 transition">
            Blog
          </a>
          <a href="/chefs" className="hover:text-orange-500 transition">
            Pages
          </a>
          <a href="/about" className="hover:text-orange-500 transition">
            About  </a>
          <a href="/shop" className="hover:text-orange-500 transition">
            Shop
          </a>
          <a href="/signin" className="hover:text-orange-500 transition">
            Contact
          </a>
        </div>

        {/* Icons and Search (Small Screens) */}
        <div className="flex items-center space-x-4">
          {/* Search Icon */}
          <div className="text-white text-2xl hover:text-orange-500 transition">
            <FaMagnifyingGlass />
          </div>

          {/* User Icon */}
          <div className="text-white text-2xl hover:text-orange-500 transition">
            <PiUserBold />
          </div> 
                    {/* Shopping Bag Icon */}
                    <div className="text-white text-2xl hover:text-orange-500 transition">
            <PiHandbagBold />
            <p></p>
          </div>
        </div>
      </div>
    
 </nav> 
 </div>
  );
}
"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../Component/Navbar";

// Initial cart items
const initialCartItems = [
  { name: "Burger", price: 10.99, quantity: 2, image: "/burger.jpg" },
  { name: "Fresh Lime", price: 3.49, quantity: 1, image: "/zinger.jpg" },
  { name: "Pizza", price: 9.99, quantity: 4, image: "/don.jpg" },
  { name: "Chocolate Muffin", price: 4.49, quantity: 1, image: "/waf.jpg" },
  { name: "Cheese Butter", price: 11.99, quantity: 3, image: "/ramen.jpg" },
];

const ShoppingCart: React.FC = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);

  // Handlers
  const handleQuantityChange = (index: number, newQuantity: number) => {
    const updatedItems = [...cartItems];
    updatedItems[index].quantity = Math.max(0, newQuantity); // Prevent negative quantities
    setCartItems(updatedItems);
  };

  const handleRemoveItem = (index: number) => {
    setCartItems(cartItems.filter((_, i) => i !== index));
  };

  const handleApplyCoupon = () => {
    if (couponCode === "DISCOUNT10") setDiscount(0.1); // 10% Discount
    else setDiscount(0);
  };

  // Calculations
  const cartSubtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shippingCharges = 30;
  const totalDiscount = cartSubtotal * discount;
  const totalAmount = cartSubtotal - totalDiscount + shippingCharges;

  return (
    <div>
        <div>
            <Navbar />
        </div>
    <div className="relative w-full">
         <div className="absolute inset-0 opacity-100">
        <Image src="/img.png" alt="background" width={1920} height={410}/>
      </div>  {/* Background Image */}

     
     
      {/* Page Title */}
      <section className="relative h-64 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold">Add to Cart</h1>
          <p className="mt-2">
            <Link href="/" className="text-yellow-400 underline">
              Home
            </Link>{" "}
            &gt; CartItems
          </p>
        </div>
      </section>

      {/* Cart Content */}
      <main className="relative bg-white p-6 sm:p-12">
        {/* Table */}
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-4">Product</th>
              <th className="p-4">Price</th>
              <th className="p-4">Quantity</th>
              <th className="p-4">Total</th>
              <th className="p-4">Remove</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => (
              <tr key={index} className="border-b">
                <td className="p-4 flex items-center">
                  <Image src={item.image} alt={item.name} width={50} height={50} className="mr-4 rounded" />
                  {item.name}
                </td>
                <td className="p-4">${item.price.toFixed(2)}</td>
                <td className="p-4">
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(index, Number(e.target.value))}
                    className="w-16 p-1 border rounded text-center"
                    min="0"
                  />
                </td>
                <td className="p-4">${(item.price * item.quantity).toFixed(2)}</td>
                <td
                  className="p-4 text-red-500 cursor-pointer text-xl"
                  onClick={() => handleRemoveItem(index)}
                >
                  &times;
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Coupon and Summary Section */}
        <div className="flex flex-col lg:flex-row justify-between mt-8">
          {/* Coupon Code */}
          <div className="mb-6 lg:mb-0 lg:w-1/2">
            <h2 className="text-lg font-semibold mb-2">Coupon Code</h2>
            <div className="flex">
              <input
                type="text"
                placeholder="Enter code"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                className="flex-grow p-2 border rounded-l"
              />
              <button
                onClick={handleApplyCoupon}
                className="bg-orange-500 text-white px-4 rounded-r hover:bg-orange-600"
              >
                Apply
              </button>
            </div>
          </div>

          {/* Summary */}
          <div className="bg-gray-100 p-6 rounded-lg w-full lg:w-1/3">
            <div className="flex justify-between mb-2">
              <span>Cart Subtotal</span>
              <span>${cartSubtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Discount</span>
              <span>${totalDiscount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Shipping</span>
              <span>${shippingCharges.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-semibold text-lg">
              <span>Total</span>
              <span>${totalAmount.toFixed(2)}</span>
            </div>
            <button className="w-full mt-4 bg-orange-500 text-white p-2 rounded hover:bg-orange-600">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </main>
    </div>
    </div>
  );
};

export default ShoppingCart;

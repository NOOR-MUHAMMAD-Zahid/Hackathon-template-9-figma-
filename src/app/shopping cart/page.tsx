'use client';

import React, { useState } from 'react';

const initialCartItems = [
  { name: "Burger", price: 10.99, quantity: 2 },
  { name: "Fresh Lime", price: 3.49, quantity: 1 },
  { name: "Pizza", price: 9.99, quantity: 4 },
  { name: "Chocolate Muffin", price: 4.49, quantity: 1 },
];

const ShoppingCart: React.FC = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);

  const handleQuantityChange = (index: number, value: number) => {
    const updatedItems = cartItems.map((item, i) =>
      i === index ? { ...item, quantity: value } : item
    );
    setCartItems(updatedItems);
  };

  const handleRemoveItem = (index: number) => {
    setCartItems(cartItems.filter((_, i) => i !== index));
  };

  const handleApplyCoupon = () => {
    setDiscount(couponCode === "DISCOUNT10" ? 0.1 : 0);
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 10;
  const total = subtotal - subtotal * discount + shipping;

  return (
    <div className="p-6 bg-gray-50 font-sans">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-6 text-center">Shopping Cart</h1>

      {/* Cart Table */}
      <table className="w-full border-collapse mb-6">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">Product</th>
            <th className="p-2">Price</th>
            <th className="p-2">Quantity</th>
            <th className="p-2">Total</th>
            <th className="p-2">Remove</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item, index) => (
            <tr key={index} className="border-b">
              <td className="p-2">{item.name}</td>
              <td className="p-2">${item.price.toFixed(2)}</td>
              <td className="p-2">
                <input
                  type="number"
                  value={item.quantity}
                  min="1"
                  onChange={(e) => handleQuantityChange(index, parseInt(e.target.value) || 1)}
                  className="w-16 border rounded text-center"
                />
              </td>
              <td className="p-2">${(item.price * item.quantity).toFixed(2)}</td>
              <td className="p-2 text-red-500 cursor-pointer" onClick={() => handleRemoveItem(index)}>
                &times;
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Coupon and Summary */}
      <div className="flex flex-col lg:flex-row justify-between items-start gap-6">
        {/* Coupon Section */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Coupon Code</h2>
          <div className="flex">
            <input
              type="text"
              placeholder="Enter code"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
              className="border p-2 rounded-l"
            />
            <button onClick={handleApplyCoupon} className="bg-blue-500 text-white px-4 rounded-r">
              Apply
            </button>
          </div>
        </div>

        {/* Total Summary */}
        <div className="bg-gray-100 p-4 rounded w-full lg:w-1/3">
          <div className="flex justify-between mb-2">
            <span>Subtotal:</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Discount:</span>
            <span>-${(subtotal * discount).toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Shipping:</span>
            <span>${shipping.toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-bold text-lg mt-2">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <button className="bg-green-500 text-white w-full mt-4 py-2 rounded">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;

import React from "react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";

const Custom404 = () => {
  return (
    <div>
        <div>
            <Navbar />
        </div>
    <div className="flex flex-col items-center justify-center h-screen text-center bg-gray-50">
      <h1 className="text-9xl font-bold text-orange-500 mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2 text-gray-700">
        Oops! Look likes something going wrong
      </h2>
      <p className="text-gray-500 mb-6">
        Page Cannot be found! We'll have it figured out in no time. <br />
        Meanwhile, check out these fresh ideas:
      </p>
      <a
        href="/"
        className="bg-orange-500 text-white px-6 py-3 rounded hover:bg-orange-600 transition duration-200"
      >
        Go to home
      </a>
    </div>
    <div>
        <Footer />
      </div>
    </div>
  );
};

export default Custom404;

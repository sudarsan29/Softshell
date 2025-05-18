import React from "react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-center px-6">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Turn Unused Software into 💰
      </h1>
      <p className="text-lg md:text-2xl max-w-2xl mb-8">
        SoftSell helps you legally resell your unused software licenses and get
        paid instantly. Safe. Secure. Fast.
      </p>
      <button className="bg-white text-indigo-700 font-semibold py-3 px-6 rounded-full shadow-md hover:bg-gray-200 transition duration-300">
        Get a Free Quote
      </button>
    </section>
  );
};

export default Hero;

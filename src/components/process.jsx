// src/components/HowItWorks.js
import React from "react";
import { FaUpload, FaDollarSign, FaSmile } from "react-icons/fa";

const steps = [
  {
    icon: <FaUpload className="text-4xl text-blue-600" />,
    title: "Upload License",
    description: "Easily upload your software license details in just a few clicks.",
  },
  {
    icon: <FaDollarSign className="text-4xl text-green-600" />,
    title: "Get Valuation",
    description: "Receive a quick and fair price estimate for your license.",
  },
  {
    icon: <FaSmile className="text-4xl text-purple-600" />,
    title: "Get Paid",
    description: "Secure payment sent directly to your bank account.",
  },
];

const Process = () => {
  return (
    <section className="py-20 bg-gray-50 text-center px-6">
      <h2 className="text-3xl font-bold mb-12">How It Works</h2>
      <div className="max-w-5xl mx-auto grid gap-10 md:grid-cols-3">
        {steps.map(({ icon, title, description }, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition"
          >
            <div className="mb-4 flex justify-center">{icon}</div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Process;

import React from "react";
import { FaShieldAlt, FaBolt, FaUsers, FaThumbsUp } from "react-icons/fa";
import { motion } from "framer-motion";

const reasons = [
  {
    icon: <FaShieldAlt className="text-4xl text-red-600" />,
    title: "Secure & Trusted",
    description: "We prioritize your data privacy and provide a secure selling platform.",
  },
  {
    icon: <FaBolt className="text-4xl text-yellow-500" />,
    title: "Fast Process",
    description: "Get your license evaluated and payment processed quickly with minimal hassle.",
  },
  {
    icon: <FaUsers className="text-4xl text-green-500" />,
    title: "Expert Support",
    description: "Our team is ready to assist you with any questions or concerns.",
  },
  {
    icon: <FaThumbsUp className="text-4xl text-purple-600" />,
    title: "Best Prices",
    description: "We ensure competitive market valuations to maximize your returns.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2 },
  }),
};

const WhyToChooseUs = () => {
  return (
    <section className="py-20 bg-white text-center px-6">
      <h2 className="text-3xl font-bold mb-12">Why Choose Us</h2>
      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-4">
        {reasons.map((reason, i) => (
          <motion.div
            key={i}
            className="bg-gray-100 p-8 rounded-xl shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer hover:bg-gradient-to-br from-blue-500 to-indigo-600 group"
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
          >
            <div className="mb-4 flex justify-center">
              {reason.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-white">{reason.title}</h3>
            <p className="text-gray-700 group-hover:text-white">{reason.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyToChooseUs;

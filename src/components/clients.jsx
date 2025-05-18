import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Priya R.",
    role: "Product Manager",
    company: "TechNova",
    feedback: "SoftSell made it incredibly easy to sell our unused licenses. The process was smooth, and we got great value!",
    rating: 5,
  },
  {
    name: "Anil K.",
    role: "IT Head",
    company: "CyberLogix",
    feedback: "Reliable, fast, and professional! The team at SoftSell really understands customer needs. Highly recommended!",
    rating: 4.5,
  },
  {
    name: "Sneha D.",
    role: "Operations Lead",
    company: "CloudScape",
    feedback: "Super intuitive platform. The experience was seamless from start to finish.",
    rating: 4,
  },
  {
    name: "Rahul S.",
    role: "Software Engineer",
    company: "CodeCrate",
    feedback: "Loved the speed and simplicity. Sold our old licenses in no time.",
    rating: 5,
  },
  {
    name: "Nisha T.",
    role: "Founder",
    company: "SaaSStreet",
    feedback: "They offer great value and customer service. Would use again.",
    rating: 4.5,
  },
  {
    name: "Vikram A.",
    role: "CTO",
    company: "NetGuard",
    feedback: "Perfect for offloading unused licenses. Transparent and quick.",
    rating: 4,
  },
];

const renderStars = (rating) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 !== 0;

  for (let i = 0; i < fullStars; i++) {
    stars.push(<FaStar key={"full-" + i} className="text-yellow-400" />);
  }

  if (hasHalf) stars.push(<FaStarHalfAlt key="half" className="text-yellow-400" />);

  while (stars.length < 5) {
    stars.push(<FaRegStar key={"empty-" + stars.length} className="text-yellow-400" />);
  }

  return <div className="flex justify-center mb-2">{stars}</div>;
};

const Clients = () => {
  return (
    <section className="py-20 bg-white text-center px-6">
      <h2 className="text-3xl font-bold mb-10">What Our Clients Say</h2>
      <div className="flex space-x-6 overflow-x-auto px-4 scrollbar-hide snap-x snap-mandatory">
        {testimonials.map((item, index) => (
          <motion.div
            key={index}
            className="min-w-[300px] md:min-w-[350px] bg-gray-100 p-6 rounded-xl shadow-md hover:shadow-xl transition-transform duration-300 hover:-translate-y-1 snap-start"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            {renderStars(item.rating)}
            <p className="text-gray-700 italic mb-4">"{item.feedback}"</p>
            <div className="text-sm font-medium text-gray-800">
              — {item.name}, {item.role} at{" "}
              <span className="font-semibold">{item.company}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Clients;

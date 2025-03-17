import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaHeartbeat,
  FaBus,
  FaSchool,
  FaLaptopCode,
  FaShoppingCart,
  FaGem,
  FaFlask,
  FaShoePrints,
  FaStore,
  FaCar,
  FaStar,
  FaRunning,
} from "react-icons/fa";

const Categories = () => {
  const navigate = useNavigate();

  const categories = [
    { name: "Health", icon: <FaHeartbeat />, route: "/health" },
    { name: "Transport", icon: <FaBus />, route: "/transport" },
    { name: "School", icon: <FaSchool />, route: "/school" },
    { name: "Technology", icon: <FaLaptopCode />, route: "/tech" },
    { name: "Groceries", icon: <FaShoppingCart />, route: "/groceries" },
    { name: "Jewelry", icon: <FaGem />, route: "/jewelry" },
    { name: "Cosmetic", icon: <FaFlask />, route: "/cosmetic" },
    { name: "Footwear", icon: <FaShoePrints />, route: "/footwear" },
    { name: "E-commerce", icon: <FaStore />, route: "/ecommerce" },
    { name: "Tours & Travels", icon: <FaCar />, route: "/toursandtravels" },
    { name: "Astrologers", icon: <FaStar />, route: "/astrologers" },
    { name: "Fitness", icon: <FaRunning />, route: "/fitness" },
  ];

  return (
    <div className="p-6 text-center">
      <h2 className="mb-6 text-3xl font-extrabold text-gray-200">Categories</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {categories.map((category, index) => (
          <motion.div
            key={index}
            className="relative flex flex-col items-center p-6 text-white transition-transform duration-300 shadow-lg cursor-pointer rounded-2xl bg-gradient-to-br from-purple-500 via-blue-900 to-green-500 hover:shadow-2xl"
            whileHover={{
              scale: 1.05,
              rotateX: 10,
              rotateY: -10,
              transition: { duration: 0.3 },
            }}
            onClick={() => navigate(category.route)}
          >
            <motion.div
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.3 }}
              className="mb-3 text-5xl"
            >
              {category.icon}
            </motion.div>
            <h3 className="text-lg font-semibold">{category.name}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Categories;

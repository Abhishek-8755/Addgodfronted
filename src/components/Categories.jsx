import React from "react";
import {
  FaHeartbeat,
  FaBus,
  FaSchool,
  FaLaptopCode,
  FaShoppingCart,
  FaGem,
  FaFlask,
  FaShoePrints,
  FaStethoscope,
  FaStore,
  FaPlane,
  FaUserAstronaut,
  FaBitcoin,
} from "react-icons/fa";

const Categories = () => {
  const categories = [
    { name: "Health", icon: <FaHeartbeat /> },
    { name: "Transport", icon: <FaBus /> },
    { name: "School", icon: <FaSchool /> },
    { name: "Technology", icon: <FaLaptopCode /> },
    { name: "Groceries", icon: <FaShoppingCart /> },
    { name: "Jewellary", icon: <FaGem /> },
    { name: "Cosmetic", icon: <FaFlask /> },
    { name: "Footwear", icon: <FaShoePrints /> },
    { name: "Health", icon: <FaStethoscope /> },
    { name: "E-commerce", icon: <FaStore /> },
    { name: "Tours & Travels", icon: <FaPlane /> },
    { name: "Astrologers", icon: <FaUserAstronaut /> },
  ];

  return (
    <div className="categories-container p-4">
      <h2 className="text-2xl font-bold mb-4">Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {categories.map((category, index) => (
          <div
            key={index}
            className="category-card text-white bg-gradient-to-r from-purple-500 via-blue-900 to-green-500 p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 flex flex-col items-center"
          >
            <div className="text-4xl mb-2">{category.icon}</div> {/* Icon */}
            <h3 className="text-lg font-semibold text-center">{category.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;

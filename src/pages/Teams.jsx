import React from "react";
import { NavLink } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Teams = () => {
  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gradient-to-r from-indigo-200 via-purple-300 to-pink-200">
      <div className="w-full max-w-6xl p-8 bg-white shadow-2xl rounded-2xl bg-opacity-95 backdrop-blur-md">
        <h1 className="mb-8 text-4xl font-extrabold text-center text-indigo-700 md:text-5xl drop-shadow-xl">
          🚀 Team Guidelines & Roadmap
        </h1>

        {/* Roadmap Layout */}
        <div className="relative grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: "Salary Process", color: "blue", path: "/Salary" },
            { title: "Field Visit Updates", color: "green", path: "/fieldvisit" },
            { title: "Attendance Criteria", color: "yellow", path: "/attendance-criteria" },
            { title: "Employee of the Month", color: "red", path: "/employee-of-the-month" },
            { title: "Respectful Workplace Policy", color: "purple", path: "/workplace-policy" },
            { title: "Seating Plan Guidelines", color: "teal", path: "/seating-plan" },
          ].map((item, index) => (
            <div
              key={index}
              className={`relative p-6 text-center bg-${item.color}-100 rounded-xl shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border-l-8 border-${item.color}-500`}
            >
              <h2 className={`mb-3 text-2xl font-bold text-${item.color}-700`}>{item.title}</h2>
              <NavLink to={item.path} className={`text-lg text-${item.color}-500 hover:underline font-medium flex items-center justify-center`}> 
                Learn More <FaArrowRight className="ml-2" />
              </NavLink>
              {index < 5 && (
                <div className="absolute right-[-15px] top-1/2 transform -translate-y-1/2 text-gray-400 text-3xl">
                  ➜
                </div>
              )}
            </div>
          ))}
        </div>

        {/* General Norms Section */}
        <div className="p-10 mt-12 bg-white border-t-4 border-indigo-500 shadow-2xl rounded-xl">
          <h2 className="mb-6 text-3xl font-extrabold text-center text-gray-800">📜 General Norms of Company ADD-GOD</h2>
          <ul className="space-y-6 text-gray-700 list-disc list-inside md:text-lg">
            <li><strong>🤝 Professional Behavior:</strong> Maintain a respectful tone with seniors and colleagues.</li>
            <li>
              <strong>⏰ Punctuality:</strong> Adhere to office timings strictly.
              <ul className="ml-6 text-gray-600 list-disc">
                <li>Shift 1: 9:30 AM – 6:00 PM</li>
                <li>Shift 2: 10:00 AM – 6:30 PM</li>
                <li>🍽 Lunch Break: 2:00 PM – 2:30 PM</li>
                <li>☕ Tea Break: 10 minutes only</li>
              </ul>
            </li>
            <li><strong>📅 Task Completion:</strong> Complete daily tasks within deadlines. Update in the task sheet.</li>
            <li>
              <strong>📧 Mandatory Email CC:</strong>
              <ul className="ml-6 text-gray-600 list-disc">
                <li>📩 <a href="mailto:addtask@add-god.com" className="text-blue-600 underline">addtask@add-god.com</a></li>
                <li>📩 <a href="mailto:namrita.addgod@gmail.com" className="text-blue-600 underline">namrita.addgod@gmail.com</a></li>
                <li>📩 <a href="mailto:ophead.addgod@gmail.com" className="text-blue-600 underline">ophead.addgod@gmail.com</a></li>
              </ul>
            </li>
            <li><strong>📝 Email Etiquette:</strong> Use clear subjects, professional language, and check grammar.</li>
            <li><strong>🚀 Timely Responses:</strong> Reply to emails within the same working day or acknowledge receipt.</li>
          </ul>
        </div>

        {/* Navigation Button */}
        <div className="flex justify-center mt-10">
          <NavLink to="/" className="px-8 py-3 text-white transition-all transform bg-indigo-600 rounded-lg shadow-lg hover:bg-indigo-700 hover:scale-105">
            Back to Home
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Teams;
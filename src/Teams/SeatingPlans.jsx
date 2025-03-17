import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const SeatingPlans = () => {
  const guidelines = [
    "Maintain Proper Posture: Avoid slouching or hunching over your desk.",
    "Avoid Noise Disturbances: Keep personal calls and conversations at a low volume.",
    "Respect Others' Space: Do not interrupt a colleague’s desk space.",
    "Handle Chairs Properly: Lift chairs instead of dragging them, and avoid loud movements.",
    "Return Chairs to Their Place: After use, place chairs back in their designated spots.",
    "Keep Your Workspace Tidy: Maintain an organized and clutter-free workspace.",
    "Avoid Unnecessary Disruptions: Use TEAMS, EMAILS, and WHATSAPP for communication instead of gathering in groups.",
    "Meeting Room Etiquette: Do not occupy meeting room chairs unnecessarily or leave personal belongings on extra seats.",
    "Respect Others' Comfort: Avoid leaning on others' desks or chairs, and do not push or move someone’s chair without permission.",
    "Maintain Professionalism: Keep your work area clean, properly arranged, and avoid time-wasting activities.",
  ];

  return (
    <div className="flex items-center justify-center min-h-screen p-6 bg-gradient-to-r from-blue-100 to-blue-300">
      <div className="w-full max-w-4xl p-8 transition duration-500 transform bg-white shadow-lg rounded-xl hover:scale-105">
        <h1 className="mb-6 text-4xl font-bold text-center text-blue-700">
          🪑 Seating Plan Guidelines
        </h1>

        <div className="p-6 mb-6 border-l-8 border-blue-500 rounded-lg shadow-md bg-blue-50">
          <h2 className="flex items-center gap-2 mb-4 text-2xl font-semibold text-blue-700">
            <FaCheckCircle className="text-green-600" /> Seating Etiquette & Guidelines
          </h2>
          <ul className="space-y-4 text-gray-700 list-none">
            {guidelines.map((rule, index) => (
              <li key={index} className="flex items-center gap-3 p-3 transition duration-300 bg-white rounded-md shadow-sm hover:shadow-md">
                <FaCheckCircle className="text-lg text-green-500" />
                <span className="text-lg">{rule}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SeatingPlans;

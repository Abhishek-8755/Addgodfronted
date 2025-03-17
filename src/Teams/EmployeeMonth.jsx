import React from "react";
import { motion } from "framer-motion";

const EmployeeMonth = () => {
  return (
    <div className="flex items-center justify-center min-h-screen p-6 bg-gray-100">
      <motion.div 
        className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-lg"
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
      >
        <h1 className="mb-6 text-3xl font-bold text-center text-yellow-500">
          🌟 Employee of the Month Program 🌟
        </h1>

        {/* Performance Progress Bar */}
        <section className="mb-6">
          <h2 className="mb-3 text-xl font-semibold text-green-700">Performance Progress 📊</h2>
          <div className="flex items-center justify-between px-4 py-3 bg-gray-200 rounded-lg">
            <span className="text-lg font-semibold text-gray-800">Achievement Score:</span>
            <span className="px-4 py-2 text-white bg-green-500 rounded-full">95%</span>
          </div>
          <div className="mt-3">
            <div className="w-full h-4 bg-gray-300 rounded-full">
              <motion.div 
                className="h-4 bg-green-500 rounded-full" 
                initial={{ width: "0%" }} 
                animate={{ width: "95%" }} 
                transition={{ duration: 1.2 }}
              ></motion.div>
            </div>
          </div>
        </section>

        {/* Evaluation Criteria */}
        <section className="mb-6">
          <h2 className="mb-3 text-xl font-semibold text-blue-700">Evaluation Criteria 🏆</h2>
          <ul className="pl-5 text-gray-700 list-disc">
            <li>🤝 <strong>Team Collaboration:</strong> Works effectively with colleagues & supports team goals.</li>
            <li>🧑‍💼 <strong>Professional Conduct:</strong> Adheres to policies & treats everyone with respect.</li>
            <li>💡 <strong>Initiative & Innovation:</strong> Suggests improvements & takes ownership beyond tasks.</li>
            <li>📊 <strong>Performance Evaluation:</strong> Based on qualitative (attitude, teamwork) & quantitative (metrics, targets) assessments.</li>
            <li>🎯 <strong>Goal Achievement:</strong> Meets/exceeds goals & project deadlines with quality work.</li>
            <li>😊 <strong>Positive Attitude:</strong> Shows enthusiasm, motivation & boosts team morale.</li>
          </ul>
        </section>

        {/* Bonus Points */}
        <section className="mb-6">
          <h2 className="mb-3 text-xl font-semibold text-yellow-600">Bonus Points 🎖️</h2>
          <ul className="pl-5 text-gray-700 list-disc">
            <li>🔥 <strong>Going Beyond:</strong> Taking on additional tasks that drive company growth.</li>
            <li>💎 <strong>Innovative Ideas:</strong> Bringing valuable ideas that benefit the organization.</li>
          </ul>
        </section>

        {/* Employee of the Month Card */}
        <section className="mb-6">
          <h2 className="mb-3 text-xl font-semibold text-purple-700">🏅 Employee of the Month 🏅</h2>
          <div className="flex items-center gap-4 p-4 bg-gray-200 rounded-lg shadow-md">
            <img 
              src="https://via.placeholder.com/80" 
              alt="Employee" 
              className="w-20 h-20 border-4 border-yellow-500 rounded-full"
            />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Namrita Chaturvedi</h3>
              <p className="text-gray-600"><strong>HR - HR Department</strong></p>
            </div>
          </div>
        </section>

        {/* Motivation Section */}
        <motion.section 
          className="p-4 text-blue-700 bg-blue-100 border-l-4 border-blue-500"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.8 }}
        >
          <h2 className="text-lg font-semibold">🚀 Let’s Build a Positive Workplace!</h2>
          <p>
            Together, we can create a <strong>professional, productive, and motivating</strong> work environment! 🌟💪
          </p>
        </motion.section>
      </motion.div>
    </div>
  );
};

export default EmployeeMonth;

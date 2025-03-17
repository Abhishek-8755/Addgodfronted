import React from "react";
import { motion } from "framer-motion";

const RulesandRegulation = () => {
  return (
    <div className="flex items-center justify-center min-h-screen p-6 bg-gradient-to-r from-blue-50 to-gray-100">
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        className="max-w-3xl p-8 transition-shadow bg-white rounded-lg shadow-2xl hover:shadow-blue-300"
      >
        <h1 className="mb-6 text-3xl font-extrabold text-center text-blue-600 drop-shadow-md">
          Salary Process at ADD-GOD 💰
        </h1>

        {/* Monthly Report Submission */}
        <motion.div whileHover={{ scale: 1.02 }} className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">📌 Monthly Report Submission</h2>
          <p className="mt-2 text-gray-700">
            All employees must submit a detailed report of their work for the
            month to the <span className="font-bold">CIO or COO</span> by the
            <span className="font-bold text-red-500"> 2nd day</span> of each
            month.
          </p>
        </motion.div>

        {/* Review and Verification Process */}
        <motion.div whileHover={{ scale: 1.02 }} className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">✅ Review and Verification</h2>
          <ul className="mt-2 space-y-2 text-gray-700 list-disc list-inside">
            <li>📄 Reports will be reviewed by the officers.</li>
            <li>❓ Clarifications may be requested.</li>
            <li>📩 Reports are forwarded to higher authorities after review.</li>
            <li className="font-bold text-red-500">🚨 Missing proof results in salary hold.</li>
          </ul>
        </motion.div>

        {/* Key Points for Evaluation */}
        <motion.div whileHover={{ scale: 1.02 }} className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">📊 Key Evaluation Points</h2>
          <ul className="mt-2 space-y-2 text-gray-700 list-disc list-inside">
            <li>⏳ Mention time spent on tasks.</li>
            <li>📢 Ensure ground-level work is reflected.</li>
            <li>📈 Highlight value created for the company.</li>
            <li className="font-bold text-red-500">❌ No duplicate work claims.</li>
            <li>🌟 Upload client testimonials on social media.</li>
          </ul>
        </motion.div>

        {/* Important Deadlines */}
        <motion.div whileHover={{ scale: 1.02 }} className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">⏳ Important Deadlines</h2>
          <p className="mt-2 text-gray-700">
            🗓 <span className="font-bold">Monthly Reports:</span> Due by the
            <span className="font-bold text-red-500"> 2nd</span> of every month.
          </p>
          <p className="mt-2 text-gray-700">
            📢 <span className="font-bold">Discussions:</span> Held on the
            <span className="font-bold text-red-500"> 3rd and 4th</span> of the month.
          </p>
          <p className="mt-2 font-semibold text-red-500">⚠️ Late reports delay salary!</p>
        </motion.div>

        {/* Final Reminder */}
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.5 }}
          className="p-4 text-center bg-red-100 border-l-4 border-red-500"
        >
          <p className="text-lg font-semibold text-red-600 animate-pulse">
            🚨 Failure to comply may delay your salary processing!
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default RulesandRegulation;

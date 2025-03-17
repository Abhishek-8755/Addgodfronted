import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaDoorOpen, FaUserClock, FaTimesCircle, FaBell } from "react-icons/fa";

const Attendance = () => {
  const attendanceRules = [
    { icon: <FaCheckCircle className="text-green-500" />, text: '✅ Present: Write "P" followed by your name upon arrival.' },
    { icon: <FaDoorOpen className="text-red-500" />, text: '🚪 Leaving: Write "L" followed by your name before leaving.' },
    { icon: <FaUserClock className="text-blue-500" />, text: '🏖️ Week Off: Write "WEEKOFF" followed by your name in the morning.' },
    { icon: <FaTimesCircle className="text-yellow-500" />, text: '❌ Absent: Write "ABSENT" followed by your name.' },
  ];

  const complianceRules = [
    { icon: <FaUserClock className="text-purple-500" />, text: '⏳ Timely Reporting: Attendance must be marked **exactly** in the morning and evening.' },
    { icon: <FaBell className="text-red-500" />, text: '⚠️ Impact of Non-Compliance: Failure to follow guidelines may impact your attendance evaluation.' },
  ];

  return (
    <motion.div
      className="flex items-center justify-center min-h-screen p-6 bg-gradient-to-r from-indigo-100 to-blue-300"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="w-full max-w-4xl p-8 transition duration-500 transform bg-white shadow-lg rounded-xl hover:scale-105"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 80 }}
      >
        <h1 className="mb-6 text-4xl font-bold text-center text-blue-700 animate-bounce">
          📌 Attendance Guidelines
        </h1>

        {/* Marking Attendance */}
        <motion.div
          className="p-6 mb-6 border-l-8 border-blue-500 rounded-lg shadow-md bg-blue-50"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <h2 className="flex items-center gap-2 mb-4 text-2xl font-semibold text-blue-700">
            ⏰ Marking Attendance
          </h2>
          <ul className="space-y-4 text-gray-700">
            {attendanceRules.map((rule, index) => (
              <motion.li
                key={index}
                className="flex items-center gap-3 p-3 transition duration-300 bg-white rounded-md shadow-sm hover:shadow-md"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                {rule.icon}
                <span className="text-lg">{rule.text}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Timeliness & Compliance */}
        <motion.div
          className="p-6 mb-6 border-l-8 border-purple-500 rounded-lg shadow-md bg-purple-50"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <h2 className="flex items-center gap-2 mb-4 text-2xl font-semibold text-purple-700">
            ⏳ Timeliness & Compliance
          </h2>
          <ul className="space-y-4 text-gray-700">
            {complianceRules.map((rule, index) => (
              <motion.li
                key={index}
                className="flex items-center gap-3 p-3 transition duration-300 bg-white rounded-md shadow-sm hover:shadow-md"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                {rule.icon}
                <span className="text-lg">{rule.text}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Important Reminder */}
        <motion.div
          className="p-6 text-blue-700 bg-blue-100 border-l-8 border-blue-500 rounded-lg shadow-md"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <h2 className="text-lg font-semibold">🚨 Important Reminder</h2>
          <p>
            📢 Ensure you **follow the correct format** while marking attendance. Consistent compliance helps maintain accurate records.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Attendance;

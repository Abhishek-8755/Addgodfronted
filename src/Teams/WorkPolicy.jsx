import React from "react";
import { motion } from "framer-motion";
import { FaRegSmile, FaUserTie, FaClock, FaUsers, FaCheckCircle } from "react-icons/fa";

const WorkPolicy = () => {
  const policies = [
    { icon: <FaRegSmile className="text-green-500" />, text: "Greet with Courtesy: Always greet colleagues with a smile and avoid interrupting conversations." },
    { icon: <FaUserTie className="text-blue-500" />, text: "Respect Personal Boundaries: Be mindful of others' space and avoid discussing sensitive topics." },
    { icon: <FaUsers className="text-purple-500" />, text: "Active Listening: Give full attention to the speaker and respond thoughtfully." },
    { icon: <FaCheckCircle className="text-yellow-500" />, text: "Fair Treatment: Treat everyone with fairness and respect their contributions." },
    { icon: <FaUserTie className="text-blue-500" />, text: "Professional Conduct: Dress professionally and avoid inappropriate language, gossip, or unprofessional behavior." },
    { icon: <FaUsers className="text-purple-500" />, text: "Respect for All: Show respect to both seniors and juniors, fostering a culture of mutual respect." },
    { icon: <FaClock className="text-red-500" />, text: "Tea Break Policy: Tea breaks should not exceed 10 minutes to maintain productivity." },
    { icon: <FaClock className="text-red-500" />, text: "Lunch Break Policy: Lunch time is scheduled at 2:00 PM sharp, ending at 2:30 PM." },
    { icon: <FaUserTie className="text-blue-500" />, text: "Respect for Leadership: Stand up as a sign of respect when Director Sir or Director Ma’am enters the office." },
    { icon: <FaUsers className="text-purple-500" />, text: "Preparedness for Meetings: Always carry your laptop, office phone, diary, and pen when visiting the Director’s cabin." },
    { icon: <FaCheckCircle className="text-yellow-500" />, text: "Meeting with the Director: Check with the HR Head for availability before meeting the Director." },
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
          🏢 Respectful Workplace Policy
        </h1>

        <motion.div
          className="p-6 mb-6 border-l-8 border-blue-500 rounded-lg shadow-md bg-blue-50"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <h2 className="flex items-center gap-2 mb-4 text-2xl font-semibold text-blue-700">
            📜 Workplace Guidelines
          </h2>
          <ul className="space-y-4 text-gray-700 list-none">
            {policies.map((policy, index) => (
              <motion.li
                key={index}
                className="flex items-center gap-3 p-3 transition duration-300 bg-white rounded-md shadow-sm hover:shadow-md"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                {policy.icon}
                <span className="text-lg">{policy.text}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default WorkPolicy;

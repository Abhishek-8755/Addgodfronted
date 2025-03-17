import React from "react";
import { motion } from "framer-motion";

const FieldVisit = () => {
  return (
    <div className="flex items-center justify-center min-h-screen p-6 bg-gradient-to-r from-blue-50 to-gray-100">
      <motion.div 
        className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-2xl" 
        initial={{ opacity: 0, scale: 0.9 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.5 }}
      >
        <h1 className="mb-6 text-3xl font-bold text-center text-blue-600 animate-bounce">
          🚀 Field Visit Updates
        </h1>

        {/* Live Location Updates */}
        <motion.section 
          className="p-4 mb-6 bg-blue-100 border-l-4 border-blue-500 rounded-md"
          whileHover={{ scale: 1.02 }}
        >
          <h2 className="mb-3 text-xl font-semibold text-blue-700">📍 Live Location Updates</h2>
          <ul className="pl-5 text-gray-700 list-disc">
            <li><strong>📍 Share your live location</strong> in the Field Visit Update group when leaving the office (WFO) or home (WFH).</li>
            <li><strong>📢 Arrival Message:</strong> Notify the group upon reaching your destination.</li>
            <li><strong>🚀 Departure Message:</strong> Send a message when leaving the destination.</li>
            <li><strong>🏠 Return Message:</strong> Send a message upon arriving back at the office or home.</li>
          </ul>
        </motion.section>

        {/* Client Interaction */}
        <motion.section 
          className="p-4 mb-6 bg-green-100 border-l-4 border-green-500 rounded-md"
          whileHover={{ scale: 1.02 }}
        >
          <h2 className="mb-3 text-xl font-semibold text-green-700">🤝 Client Interaction</h2>
          <p className="text-gray-700">
            <strong>📸 Take a picture with clients</strong> and upload it in the WhatsApp Meeting Group.
          </p>
        </motion.section>

        {/* Asset Documentation */}
        <motion.section 
          className="p-4 mb-6 bg-yellow-100 border-l-4 border-yellow-500 rounded-md"
          whileHover={{ scale: 1.02 }}
        >
          <h2 className="mb-3 text-xl font-semibold text-yellow-700">📷 Asset Documentation</h2>
          <p className="text-gray-700">
            <strong>🎥 Capture a video or photo</strong> of assets during the visit and upload them to the Asset Group.
          </p>
          <p className="text-gray-700">
            <strong>🔄 Follow the same process</strong> after returning from the visit.
          </p>
        </motion.section>

        {/* Asset Management Rules */}
        <motion.section 
          className="p-4 mb-6 bg-red-100 border-l-4 border-red-500 rounded-md"
          whileHover={{ scale: 1.02 }}
        >
          <h2 className="mb-3 text-xl font-semibold text-red-700">🏢 Asset Management Rules</h2>
          <ul className="pl-5 text-gray-700 list-disc">
            <li><strong>✅ Get Approval & Update Register:</strong> Get approval from the authorized person and update the asset register before taking any item.</li>
            <li><strong>📩 WhatsApp Update:</strong> Inform the group about asset details (<strong>Item Name, Purpose, Time Taken</strong>).</li>
            <li><strong>⚠️ Responsible Usage:</strong> Use assets <strong>only for official work</strong> and handle them carefully.</li>
          </ul>
        </motion.section>

        {/* Returning Assets */}
        <motion.section 
          className="p-4 mb-6 bg-purple-100 border-l-4 border-purple-500 rounded-md"
          whileHover={{ scale: 1.02 }}
        >
          <h2 className="mb-3 text-xl font-semibold text-purple-700">🔄 Rules for Submitting Assets</h2>
          <ul className="pl-5 text-gray-700 list-disc">
            <li><strong>📌 Return on Same Day:</strong> Submit assets by the end of office hours.</li>
            <li><strong>🔍 Condition Check:</strong> Ensure assets are in the same condition before returning.</li>
            <li><strong>📒 Register & WhatsApp Update:</strong> Record the return in the asset register and inform the group.</li>
            <li><strong>⚠️ Report Issues:</strong> If an asset is damaged, notify the group immediately.</li>
          </ul>
        </motion.section>

        {/* Important Reminder */}
        <motion.section 
          className="p-4 text-blue-700 bg-blue-100 border-l-4 border-blue-500 rounded-md"
          whileHover={{ scale: 1.02 }}
        >
          <h2 className="text-lg font-semibold">🚨 Important Reminder</h2>
          <p>
            📢 Don't forget to fill the <strong>"Enquire Now"</strong> button & sell plans through the <strong>"Buy Now"</strong> button on 
            <a href="https://add-god.com" className="text-blue-600 hover:underline"> add-god.com</a>.
          </p>
        </motion.section>
      </motion.div>
    </div>
  );
};

export default FieldVisit;
import React, { useState } from "react";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { CiFacebook, CiLinkedin } from "react-icons/ci";
import { SiGmail } from "react-icons/si";
import emailjs from "emailjs-com";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [showLogin, setShowLogin] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const templateParams = {
      to_name: "Deepak Sharma",
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    emailjs.send("service_z6s914r", "template_0jntyzx", templateParams, "QmfVnZtRmKUfsxhVQ")
      .then((response) => {
        alert("Thank you for your message!");
      }, (error) => {
        alert("Failed to send message. Please try again later.");
      });

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4 md:p-8" id="contact">
      <div className="w-full max-w-lg p-6 text-center border shadow-2xl backdrop-blur-lg bg-white/10 rounded-2xl border-white/20">
        <motion.h1 className="mb-5 text-4xl font-bold text-white" initial={{ y: -20 }} animate={{ y: 0 }}>
          CONTACT US
        </motion.h1>

        <form onSubmit={handleSubmit} className="mb-8">
          <div className="flex flex-col space-y-4 text-black md:flex-row md:space-x-4 md:space-y-0">
            <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required className="flex-1 p-3 border border-gray-300 shadow-lg rounded-xl" />
            <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required className="flex-1 p-3 border border-gray-300 shadow-lg rounded-xl" />
          </div>
          <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required rows="4" className="w-full p-3 mt-4 text-black border border-gray-300 shadow-lg rounded-xl" />
          <motion.button type="submit" className="w-full py-3 mt-4 font-semibold text-white transition-all rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:scale-105">
            Send Message
          </motion.button>
        </form>

        <h2 className="mb-3 text-lg text-white">Connect with us on social media:</h2>
        <div className="flex justify-center space-x-6">
          {[FaInstagram, CiFacebook, CiLinkedin, FaTwitter, SiGmail].map((Icon, index) => (
            <Icon key={index} className="text-3xl text-white transition-transform hover:scale-125" />
          ))}
        </div>

        {/* Contact Number */}
        <div className="flex flex-col items-center mt-6 space-y-2 text-2xl font-bold text-white">
          <motion.p className="flex items-center px-6 py-3 space-x-2 bg-blue-600 rounded-lg shadow-lg" whileHover={{ scale: 1.1 }}>
            <span className="text-4xl animate-bounce">👉</span>
            <span>Contact Number:</span>
          </motion.p>
          <a href="tel:+919557323701" className="text-3xl font-extrabold text-yellow-400 hover:underline">
            +91 9557323701
          </a>
        </div>

        {/* Teams Link with Login Modal */}
        <div className="mt-6">
          <button onClick={() => setShowLogin(true)} className="text-lg font-semibold text-white hover:underline">
            Teams
          </button>
        </div>
      </div>

      {/* Login Modal */}
      {showLogin && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50">
          <div className="p-6 text-center bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold">Login</h2>
            <input type="text" placeholder="Username" className="w-full p-2 mt-2 text-black border rounded" />
            <input type="Addgod" placeholder="teams" className="w-full p-2 mt-2 text-black border rounded"  />
            <div className="flex justify-between mt-4">
              <button className="px-4 py-2 text-white bg-blue-500 rounded" onClick={() => setShowLogin(false)}>Cancel</button>
              <NavLink to="/teams" className="px-4 py-2 text-white bg-green-500 rounded">Login</NavLink>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
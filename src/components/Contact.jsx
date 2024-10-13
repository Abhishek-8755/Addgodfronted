import React, { useState } from "react";
import { FaInstagram, FaTwitter, FaGithubSquare } from "react-icons/fa";
import { CiFacebook, CiLinkedin } from "react-icons/ci";
import { SiGmail } from "react-icons/si";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      to_name: "Deepak sharma", // Set this to the actual recipient's name or keep it dynamic
      from_name: formData.name,
      from_email: formData.email, // Include sender's email here
      message: formData.message,
    };

    emailjs
      .send(
        "service_z6s914r", // Your EmailJS service ID
        "template_0jntyzx", // Your EmailJS template ID
        templateParams,
        "QmfVnZtRmKUfsxhVQ" // Your EmailJS user ID
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Thank you for your message!");
        },
        (error) => {
          console.log("FAILED...", error);
          alert("Failed to send message. Please try again later.");
        }
      );

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-4 md:p-8" id="contact">
      <div className="w-full max-w-lg text-center">
        <h1 className="text-4xl font-bold mb-5">CONTACT US</h1>
        <form onSubmit={handleSubmit} className="mb-8">
          <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 text-black">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="p-2 border border-gray-300 rounded flex-1"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="p-2 border border-gray-300 rounded flex-1"
            />
          </div>
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            className="w-full p-2 border border-gray-300 rounded mt-4 text-black"
          />
          <button type="submit" className="bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out py-2 mt-4 w-full">
            Send Message
          </button>
        </form>
        <h2 className="text-lg mb-3">Connect with us on social media:</h2>
        <div className="flex justify-center space-x-6">
          <a href="https://www.instagram.com/addemyz/?igsh=MTF0NXdzcjVzY2V1MQ%3D%3D" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="icons text-3xl" />
          </a>
          <a href="https://www.facebook.com/people/Add-God-Pvt-Ltd/61566882959084/?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
            <CiFacebook className="icons text-3xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/deepak-sharma-839534325?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app "
            target="_blank"
            rel="noopener noreferrer"
          >
            <CiLinkedin className="icons text-3xl" />
          </a>
          <a href=" https://x.com/AddEmyz42413?t=GWPw2p9xdr5EucoNV54yrQ&s=08 " target="_blank" rel="noopener noreferrer">
            <FaTwitter className="icons text-3xl" />
          </a>
          {/* <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
            <FaGithubSquare className="icons text-3xl" />
          </a> */}
          <a href="mailto:addgod108@gmail.com">
            <SiGmail className="icons text-3xl" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;

import React, { useState, useEffect } from "react";
import "../style.css"; // Ensure your custom styles are imported

const panchjanya = () => {
  const images = [
    "/assets/panch/Panchjanya.mp4",
    "/assets/panch/panchweb.png",
    // "/assets/vishwamitem/Nandak define.jpg", // Add as many images as you want
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [showLines, setShowLines] = useState([false, false, false, false]);

  // Automatically change the slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
  };

  // Function to show lines with animation
  useEffect(() => {
    const timeoutIds = showLines.map((_, index) =>
      setTimeout(() => {
        setShowLines((prev) => {
          const newLines = [...prev];
          newLines[index] = true;
          return newLines;
        });
      }, index * 500)
    );

    return () => {
      timeoutIds.forEach((id) => clearTimeout(id));
    };
  }, []);

  return (
    <div className="relative flex flex-col justify-center items-center bg-cover bg-center p-6">
      {/* Hurry Up Limited Offer Banner */}
      <div className="bg-red-600 text-white text-xl font-bold py-2 px-4 rounded mb-6 text-center text-3d-banner">
        Hurry Up! Free Google Map Listing & Content Writing
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-stretch w-full h-auto lg:h-[700px]">
        {/* Left Section: Image/Video Slider */}
        <div className="w-full lg:w-1/2 pr-6 h-full flex items-center mb-6 lg:mb-0">
          <div className="relative w-full h-full">
            {images[currentSlide].endsWith(".mp4") ? (
              <video src={images[currentSlide]} className="w-full h-full object-cover rounded" autoPlay loop muted />
            ) : (
              <img src={images[currentSlide]} alt={`Slide ${currentSlide + 1}`} className="w-full h-full object-cover rounded" />
            )}

            {/* Previous Button */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-transparent text-white text-3xl focus:outline-none"
            >
              &lt;
            </button>

            {/* Next Button */}
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-transparent text-white text-3xl focus:outline-none"
            >
              &gt;
            </button>
          </div>
        </div>

        {/* Right Section: Text Content and Special Offer */}
        <div className="w-full lg:w-1/2 pl-4 lg:pl-8 text-white h-full relative flex flex-col lg:flex-row">
          <div className="flex-1">
            <h1 className="text-4xl md:text-3xl lg:text-4xl font-bold text-white mb-6">Welcome to Panjanaya</h1>

            {[
              " 10 graphic ads and AI-based intro    ",
              " Weekly videos  ",
              "Market research support    ",
              "Reach up to 1000 customers with lead generation ideas",
            ].map((line, index) => (
              <p
                key={index}
                className={`text-lg md:text-2xl lg:text-2xl mb-2 fade-in font-roboto`}
                style={{
                  animationDelay: `${index * 500}ms`,
                  animationPlayState: showLines[index] ? "running" : "paused",
                }}
              >
                {line}
              </p>
            ))}

            {/* Buy Now Button */}
            <button className="bg-blue-500 my-10 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition duration-300">Buy Now</button>
          </div>
        </div>
      </div>

      {/* About Vishwam Section */}
      <div className="mt-28 text-left w-full max-w-5xl flex flex-col items-center">
        <h2 className="text-4xl font-bold text-white mb-4 animate-fadeIn">Discover Panjanaya Services</h2>
        <p className="text-2xl text-gray-200 mb-6 animate-fadeIn">Cutting digital noise for business. Here are our core services:</p>
        <ul className="text-xl text-white list-disc mt-4 space-y-2 animate-fadeIn">
          <li>
            <strong>Creative Visuals:</strong> 10 customized graphic ads to enhance brand appeal and an AI-based intro to engage customers.
          </li>
          <li>
            <strong> Weekly Video:</strong> One video each week to keep your audience connected and informed.
          </li>{" "}
          <li>
            <strong>Market Research:</strong> Insights on market trends to help you refine strategies and reach your target audience effectively.
          </li>
          <li>
            <strong> Customer Reach and Lead Generation:</strong> Target up to 1,000 customers with strategic lead generation ideas to drive
            engagement and conversions.
          </li>
          <li>
            <strong>Google Map Listing & Content Writing:</strong> Expand your reach by partnering with Business Maniaa for new networking
            opportunities & Free content Writng.
          </li>
        </ul>
      </div>

      {/* About Section */}
      <div className="mt-28 text-left w-full max-w-5xl flex flex-col items-center">
        <h2 className="text-4xl font-bold text-white mb-4 animate-fadeIn">About Panjanaya</h2>
        <p className="text-2xl text-gray-200 mb-6 animate-fadeIn">
          This Panjanya plan provides strong marketing support with creative content and valuable insights to boost your brand.
        </p>
        <p className="text-2xl text-gray-200 mb-4 animate-fadeIn">
          The Panjanya Plan is a budget-friendly marketing solution at <strong>₹499 + 18% GST per month </strong>, billed for six months, with a total
          amount of approximately <strong>₹3532.92. </strong>It includes 10 graphic ads, an AI intro, lead generation ideas, one weekly video, and
          market research, helping you reach up to 1000 customers.
        </p>
        <p className="text-2xl text-gray-200 mb-4 animate-fadeIn">
          It’s designed to grow your audience and increase visibility, making it a great option for businesses looking for effective and affordable
          marketing.
        </p>
      </div>
    </div>
  );
};

export default panchjanya;

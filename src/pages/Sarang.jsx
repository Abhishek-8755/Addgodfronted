import React, { useState, useEffect } from "react";
import "../style.css"; // Ensure your custom styles are imported

const Sarang = () => {
  const images = [
    "/assets/sarang/Sarang.mp4",
    "/assets/sarang/sarangweb.png",
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
    <div className="relative flex flex-col items-center justify-center p-6 bg-center bg-cover">
      {/* Hurry Up Limited Offer Banner */}
      <div className="px-4 py-2 mb-6 text-xl font-bold text-center text-white bg-red-600 rounded text-3d-banner">
        Hurry Up! Free Google Map Listing & Content Writing
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-stretch w-full h-auto lg:h-[700px]">
        {/* Left Section: Image/Video Slider */}
        <div className="flex items-center w-full h-full pr-6 mb-6 lg:w-1/2 lg:mb-0">
          <div className="relative w-full h-full">
            {images[currentSlide].endsWith(".mp4") ? (
              <video
                src={images[currentSlide]}
                className="object-cover w-full h-full rounded"
                autoPlay
                loop
                muted
              />
            ) : (
              <img
                src={images[currentSlide]}
                alt={`Slide ${currentSlide + 1}`}
                className="object-cover w-full h-full rounded"
              />
            )}

            {/* Previous Button */}
            <button
              onClick={prevSlide}
              className="absolute text-3xl text-white transform -translate-y-1/2 bg-transparent left-4 top-1/2 focus:outline-none"
            >
              &lt;
            </button>

            {/* Next Button */}
            <button
              onClick={nextSlide}
              className="absolute text-3xl text-white transform -translate-y-1/2 bg-transparent right-4 top-1/2 focus:outline-none"
            >
              &gt;
            </button>
          </div>
        </div>

        {/* Right Section: Text Content and Special Offer */}
        <div className="relative flex flex-col w-full h-full pl-4 text-white lg:w-1/2 lg:pl-8 lg:flex-row">
          <div className="flex-1">
            <h1 className="mb-6 text-4xl font-bold text-white md:text-3xl lg:text-4xl">Welcome to Sarang</h1>

            {[
              "Website Design & Development.",
              "Social Media Management & Digital Ad Campaigns.",
              "YouTube Monetization & Theatre-Quality Video Shoots.",
              "Reach up to 10 lakh customers, free Google Map listing, and content writing.",
            ].map((line, index) => (
              <p
                key={index}
                className="mb-2 text-lg md:text-2xl lg:text-2xl fade-in font-roboto"
                style={{
                  animationDelay: `${index * 500}ms`,
                  animationPlayState: showLines[index] ? "running" : "paused",
                }}
              >
                {line}
              </p>
            ))}

            {/* Buy Now Button */}
            <button className="px-4 py-2 my-10 font-bold text-white transition duration-300 bg-blue-500 rounded hover:bg-blue-600">
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* About Sarang Section */}
      <div className="flex flex-col items-center w-full max-w-5xl text-left mt-28">
        <h2 className="mb-4 text-4xl font-bold text-white animate-fadeIn">Discover Sarang Services</h2>
        <p className="mb-6 text-2xl text-gray-200 animate-fadeIn">
          Powerful digital solutions to enhance presence. Here are our core services:
        </p>
        <ul className="mt-4 space-y-2 text-xl text-white list-disc animate-fadeIn">
          <li>
            <strong>Website Design & Development:</strong> Build a professional online presence tailored to your brand and customer needs.
          </li>
          <li>
            <strong>Social Media Creation & Management:</strong> Manage your brand’s presence on Instagram, Facebook, and YouTube to effectively engage with your audience.
          </li>
          <li>
            <strong>Digital Ad Campaigns:</strong> Run targeted ads to increase reach, visibility, and engagement across platforms.
          </li>
          <li>
            <strong>YouTube Channel Monetization:</strong> Set your channel on the path to monetization, aiming for success within 6 months.
          </li>
          <li>
            <strong>Theatre-Quality Video Shoots:</strong> High-quality video production that helps your brand stand out, with two shoots per month for engaging, personalized content.
          </li>
          <li>
            <strong>Reach Up to 10 Lakh Customers:</strong> Expand brand visibility and credibility with an extensive reach to a wide customer base.
          </li>
          <li>
            <strong>Google Map Listing & Content Writing:</strong> Expand your reach by partnering with Business Maniaa for new networking opportunities & free content writing.
          </li>
        </ul>
      </div>

      {/* About Section */}
      <div className="flex flex-col items-center w-full max-w-5xl text-left mt-28">
        <h2 className="mb-4 text-5xl font-bold text-white animate-fadeIn">About Sarang</h2>
        <p className="mb-6 text-2xl text-gray-200 animate-fadeIn">
          The Sarang Plan <strong>(₹19,999 + 18% GST = ₹23,598.82 per month or ₹141,592.92 for 6 months)</strong> gives you everything you need to grow your brand.
        </p>
        <p className="mb-4 text-2xl text-gray-200 animate-fadeIn">
          It includes website development, social media management, and digital ad campaigns to boost your brand's visibility.
          We aim to <strong>monetize your YouTube channel within 6 months and provide high-quality video shoots with two personalized videos each month.</strong>
        </p>
        <p className="mb-4 text-2xl text-gray-200 animate-fadeIn">
          With a <strong>reach of up to 10 lakh customers,</strong> this plan also offers expert guidance for long-term success.
          The <strong>Sarang Plan includes all the services</strong> offered in our <strong>Komodki, Panchjanya, Vishwam, Nandak, and Sudarshan plans.</strong>
        </p>
      </div>
    </div>
  );
};

export default Sarang;

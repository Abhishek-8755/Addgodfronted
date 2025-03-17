import React, { useState, useEffect } from "react";
import "../style.css"; // Ensure your custom styles are imported

const Sudharsan = () => {
  const images = ["/assets/sudharsan/Sudarshan.mp4", "/assets/sudharsan/sudharsanservicees.png"];

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
            <h1 className="text-4xl md:text-3xl lg:text-4xl font-bold text-white mb-6">Welcome to Sudarshan</h1>

            {[
              "Market research, logo design, ads, e-visiting cards, photoshoots, 30 reels",
              "Onsite Video shoots, profit/loss analysis, Google ads, YouTube shorts, influencer collaborations",
              "Social media management & 30 posts creation",
              "Reach up to 1 lakh customers, Free Google Map listing & content writing",
              "Call Book Service for direct leads",
            ].map((line, index) => (
              <p
                key={index}
                className="text-lg md:text-2xl lg:text-2xl mb-2 fade-in font-roboto"
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

      {/* About Komodki Section */}
      <div className="mt-28 text-left w-full max-w-5xl flex flex-col items-center">
        <h2 className="text-4xl font-bold text-white mb-4 animate-fadeIn">Discover Sudarshan Services</h2>
        <p className="text-2xl text-gray-200 mb-6 animate-fadeIn">Unleash your business potential. Here are our core services:</p>
        <ul className="text-xl text-white list-disc mt-4 space-y-2 animate-fadeIn">
          <li>
            <strong>Market Research, Logo Design, Ads, E-Visiting Cards, Photoshoots, 30 Reels:</strong> We help you establish your brand with market
            research, a unique logo, targeted ads, professional e-visiting cards, high-quality photoshoots, and 30 engaging reels.
          </li>
          <li>
            <strong>Video Shoots, Profit/Loss Analysis, Google Ads, YouTube Shorts, Influencer Collaborations:</strong> Create impactful video
            content, analyze profits and losses, run Google ads, use YouTube Shorts for engagement, and collaborate with influencers to expand your
            reach.
          </li>
          <li>
            <strong>Social Media Management & 30 Posts Creation: </strong> PWe manage your social media accounts and create 30 engaging posts to keep
            your audience connected.
          </li>
          <li>
            <strong>Call Book Service for Direct Leads:</strong> Our service generates direct leads by facilitating easy customer inquiries and
            appointments.
          </li>
          <li>
            <strong>Free Google Map Listing & Content Writing: </strong> Improve local visibility with free Google Map listing and attract customers
            through engaging content writing.
          </li>
          <li>
            <strong>Reach Up to 1 Lakh Customers: </strong> Expand brand visibility and credibility with an extensive reach to a wide customer base.
          </li>
        </ul>
      </div>

      {/* About Section */}
      <div className="mt-28 text-left w-full max-w-5xl flex flex-col items-center">
        <h2 className="text-4xl font-bold text-white mb-4 animate-fadeIn">About Sudarshan</h2>
        <p className="text-2xl text-gray-200 mb-6 animate-fadeIn">
          The Sudarshan Plan <strong>(₹9,999 + 18% GST = ₹11,789 for 1 month)</strong> is designed to help you grow your brand in three key areas.
        </p>
        <p className="text-2xl text-gray-200 mb-4 animate-fadeIn">
          <strong> Maintain</strong> includes services like market research, logo design, digital ads, Google listing, photoshoots, 30 reels, and
          unlimited design support to increase your brand’s visibility,Reach Up to 1 Lakh Customers.
        </p>
        <p className="text-2xl text-gray-200 mb-4 animate-fadeIn">
          In the <strong>Physicality </strong> phase, we focus on video shoots, financial tracking, Google ads, YouTube Shorts, and influencer
          collaborations to expand your reach and engagement. The{" "}
        </p>
        <p className="text-2xl text-gray-200 mb-4 animate-fadeIn">
          The <strong>Divine</strong> section offers social media management with 30 posts and a customer call booking service to enhance your
          customer experience
        </p>
        <p className="text-2xl text-gray-200 mb-4 animate-fadeIn">
          Additionally, we offer free Google Map listing and content writing to boost your online presence.
        </p>
      </div>
    </div>
  );
};

export default Sudharsan;

import React, { useState, useEffect } from "react";
import "../style.css"; // Ensure your custom styles are imported

const VishwamLandingPage = () => {
  const images = [
    "/assets/vishwamitem/Vishw.mp4",
    // "/assets/vishwamitem/panc.jpg",
    // "/assets/vishwamitem/vishwam define.jpg", // Add as many images as you want
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [showLines, setShowLines] = useState([false, false, false, false]);
  const [offerClaimed, setOfferClaimed] = useState(false);
  const [couponCode, setCouponCode] = useState("");
  const [isCouponValid, setIsCouponValid] = useState(false);

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

  // Function to handle offer claim
  const handleClaimOffer = () => {
    setOfferClaimed(true);
  };

  // Function to close the congratulatory message
  const closeCongratulation = () => {
    setOfferClaimed(false);
  };

  // Function to validate coupon code
  const handleCouponSubmit = () => {
    if (couponCode === "FREEMONTH") {
      setIsCouponValid(true);
      alert("Coupon applied successfully!");
    } else {
      alert("Invalid coupon code. Please try again.");
    }
  };

  return (
    <div className="relative flex flex-col justify-center items-center bg-cover bg-center p-6">
      {/* Hurry Up Limited Offer Banner */}
      <div className="bg-red-600 text-white text-xl font-bold py-2 px-4 rounded mb-6 text-center text-3d-banner">
        Hurry Up! Free Google Map Listing
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-stretch w-full h-auto lg:h-[500px]">
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
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">Welcome to Vishwam</h1>

            {["PRODUCT PHOTOSHOOT", "DIGITAL AD CAMPAIGN", "CONNECTION WITH BUSINESS MANIAA", "REACH UP TO 30 Customer"].map((line, index) => (
              <p
                key={index}
                className={`text-lg md:text-xl lg:text-2xl mb-2 fade-in font-roboto`}
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

          {/* Special Offer Section */}
          <div className="bg-yellow-500 text-black p-8 rounded-lg ml-4 mt-8 lg:mt-0 lg:ml-8 w-full lg:w-1/3 shadow-lg text-center flex flex-col justify-center items-center">
            <h2 className="text-xl lg:text-2xl font-bold mb-4">Special Offer!</h2>
            <p className="mb-4">Get a free content writing!</p>

            {/* Coupon Code Input */}
            <div className="mb-4 flex flex-col items-center w-full">
              <input
                type="text"
                placeholder="Enter Coupon Code"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                className="border border-gray-400 rounded px-3 py-2 w-2/3 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={handleCouponSubmit}
                className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
              >
                Apply
              </button>
            </div>

            <button className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-600 transition duration-300" onClick={handleClaimOffer}>
              Claim Offer
            </button>

            {isCouponValid && <p className="text-green-600 mt-2">Coupon successfully applied! You got free content writing</p>}
          </div>
        </div>
      </div>

      {/* About Vishwam Section */}
      <div className="mt-28 text-left w-full max-w-5xl flex flex-col items-center">
        <h2 className="text-5xl font-bold text-white mb-4 animate-fadeIn">Discover Vishwam Services</h2>
        <p className="text-3xl text-gray-200 mb-6 animate-fadeIn">
          Vishwam empowers businesses to grow with tailored marketing solutions. Here are our core services:
        </p>
        <ul className="text-xl text-white list-disc mt-4 space-y-2 animate-fadeIn">
          <li>
            <strong>Product Photoshoot:</strong> Professional photography to enhance product appeal and attract customer interest.
          </li>
          <li>
            <strong>Digital Ads for Business:</strong> Targeted online advertising to maximize visibility and engagement.
          </li>
          <li>
            <strong>Connect to Business Mania:</strong> Expand your reach by partnering with Business Maniaa for new networking opportunities.
          </li>{" "}
          <li>
            <strong>Google Map Listing:</strong> Expand your reach by partnering with Business Maniaa for new networking opportunities.
          </li>
          <li>
            <strong>Boost Your Presence:</strong> Boost visibility and increase engagement with potential clients across multiple channels REACH UP TO
            30 Customer.
          </li>
        </ul>
      </div>

      {/* About Section */}
      <div className="mt-28 text-left w-full max-w-5xl flex flex-col items-center">
        <h2 className="text-5xl font-bold text-white mb-4 animate-fadeIn">About Vishwam</h2>
        <p className="text-2xl text-gray-200 mb-6 animate-fadeIn">
          At Vishwam, we believe in the power of creativity and innovation. Our mission is to provide businesses with exceptional marketing solutions
          that drive results and foster growth.
        </p>
        <p className="text-2xl text-gray-200 mb-4 animate-fadeIn">
          We specialize in understanding our clients' unique needs and crafting customized strategies that resonate with their target audience. With a
          focus on quality and excellence, we deliver services that not only meet but exceed expectations.
        </p>
        <p className="text-2xl text-gray-200 mb-4 animate-fadeIn">
          Join us in transforming your business journey and achieving your goals with Vishwam.
        </p>
      </div>

      {/* Congratulatory Message */}
      {offerClaimed && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Congratulations!</h3>
            <p className="mb-4">You've claimed the special offer!</p>
            <button
              onClick={closeCongratulation}
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VishwamLandingPage;

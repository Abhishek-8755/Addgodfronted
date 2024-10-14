import React, { useState, useEffect } from "react";
import "../style.css"; // Ensure your custom styles are imported

const VishwamLandingPage = () => {
  const images = [
    "/assets/vishwamitem/vishwamlogo.mp4",
    "/assets/vishwamitem/2.png",
    "/assets/vishwamitem/vishwam define.jpg", // Add as many images as you want
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [showLines, setShowLines] = useState([false, false, false, false]);
  const [offerClaimed, setOfferClaimed] = useState(false);
  const [couponCode, setCouponCode] = useState("");
  const [isCouponValid, setIsCouponValid] = useState(false);

  // Automatically change the slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
    }, 3000); // 3000ms = 3 seconds

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
    const timeoutIds = showLines.map(
      (_, index) =>
        setTimeout(() => {
          setShowLines((prev) => {
            const newLines = [...prev];
            newLines[index] = true;
            return newLines;
          });
        }, index * 500) // Staggered display every 500ms
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
    // Example validation; you can replace it with your own logic
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
      <div className="bg-red-500 text-white text-xl font-bold py-2 px-4 rounded mb-4 text-center text-3d-banner">Hurry Up! Special offer Limited</div>

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

            {["PRODUCT PHOTOSHOOT", "DIGITAL AD CAMPAIGN", "CONNECTION WITH BUSINESS MANIAA", "REACH UP TO 30 PEOPLE"].map((line, index) => (
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

      {/* Full-Screen Congratulatory Message */}
      {offerClaimed && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white text-center p-8 rounded-lg shadow-lg max-w-lg">
            <h1 className="text-3xl font-bold mb-4 text-green-500">🎉 Congratulations! 🎉</h1>
            <p className="text-lg mb-6 text-black">You have successfully claimed your free content writing offer!</p>
            <button
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
              onClick={closeCongratulation}
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

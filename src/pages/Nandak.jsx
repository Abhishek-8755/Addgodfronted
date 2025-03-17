import React, { useState, useEffect } from "react";
import "../style.css"; // Ensure your custom styles are imported

const Nandak = () => {
  const images = [
    "/assets/nandak/Nandak.mp4",
    "/assets/nandak/nandakservices.png",
    // "/assets/vishwamitem/Nandak define.jpg", // Add as many images as you want
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

  // // Function to handle offer claim
  // const handleClaimOffer = () => {
  //   setOfferClaimed(true);
  // };

  // // Function to close the congratulatory message
  // const closeCongratulation = () => {
  //   setOfferClaimed(false);
  // };

  // Function to validate coupon code
  // const handleCouponSubmit = () => {
  //   if (couponCode === "FREEMONTH") {
  //     setIsCouponValid(true);
  //     alert("Coupon applied successfully!");
  //   } else {
  //     alert("Invalid coupon code. Please try again.");
  //   }
  // };

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
            <h1 className="text-4xl md:text-3xl lg:text-4xl font-bold text-white mb-6">Welcome to Nandak</h1>

            {[
              " 30 HD ads, AI intro, custom logo, and e-visiting card.  ",
              " Lead generation, 10,000 reach, and 8 visit videos monthly. ",
              "Social media collaboration, Business Key, and Market Research.  ",
              "Data analysis, plus free Google Map listing and content writing",
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
        <h2 className="text-4xl font-bold text-white mb-4 animate-fadeIn">Discover Nandak Services</h2>
        <p className="text-2xl text-gray-200 mb-6 animate-fadeIn">Cutting digital noise for business. Here are our core services:</p>
        <ul className="text-xl text-white list-disc mt-4 space-y-2 animate-fadeIn">
          <li>
            <strong> Creative Content & Digital Tools:</strong> The plan includes 30 HD ads, an AI-driven intro, a custom logo, and a professional
            e-visiting card to enhance your brand’s identity and visibility.
          </li>
          <li>
            <strong> Lead Generation & Customer Reach:</strong> We guarantee lead generation, helping you reach up to 10,000 customers. The plan also
            includes 8 visit videos per month, strategically designed to engage and attract potential clients.
          </li>{" "}
          <li>
            <strong>Pricing and Service Duration:</strong> For ₹1999 + 18% GST per month, billed for 2.5 months(totaling ₹5897.05), you will receive
            75 days of service to boost your business.
          </li>
          <li>
            <strong> Social Media & Data Services:</strong> Benefit from social media collaboration with us and influencers to expand your online
            presence. Additionally, you will receive a Business Key, Market Research Facility (MRF), and data analysis services to make informed
            business decisions and track your progress. REACH UP TO 10,000 Customer.
          </li>
          <li>
            <strong>Google Map Listing & Content Writing:</strong> Expand your reach by partnering with Business Maniaa for new networking
            opportunities & Free content Writng.
          </li>
        </ul>
      </div>

      {/* About Section */}
      <div className="mt-28 text-left w-full max-w-5xl flex flex-col items-center">
        <h2 className="text-4xl font-bold text-white mb-4 animate-fadeIn">About Nandak</h2>
        <p className="text-2xl text-gray-200 mb-6 animate-fadeIn">
          NANDAK offers businesses a comprehensive solution to boost growth and visibility through smart data and effective strategies.
        </p>
        <p className="text-2xl text-gray-200 mb-4 animate-fadeIn">
          For ₹1999 + 18% GST per month <strong>(billed for 2.5 months, totaling ₹5897.05)</strong>, you receive 75 days of service including 30 HD
          ads, an AI-driven intro, custom logo, and e-visiting card. Our plan guarantees lead generation, reaching up to 10,000 customers, with 8
          visit videos per month and social media collaboration with influencers.
        </p>
        <p className="text-2xl text-gray-200 mb-4 animate-fadeIn">
          Additionally, we provide business key & MRF and data analysis services to help your brand thrive.
        </p>
      </div>
    </div>
  );
};

export default Nandak;

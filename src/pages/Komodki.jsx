import React, { useState, useEffect } from "react";
import "../style.css"; // Ensure your custom styles are imported

const Komodki = () => {
  const images = ["/assets/komodki/komodki.mp4", "/assets/komodki/komodki.png"];

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
            <h1 className="text-4xl md:text-3xl lg:text-4xl font-bold text-white mb-6">Welcome to Komodki</h1>

            {[
              "5 Custom Graphic Designs and Logo Design.",
              "Visit Video Shoot (Once a Month) and Market Research.",
              "Reach Up to 500 Customers.",
              "Free Google Map Listing and Content Writing.",
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
        <h2 className="text-4xl font-bold text-white mb-4 animate-fadeIn">Discover Komodki Services</h2>
        <p className="text-2xl text-gray-200 mb-6 animate-fadeIn">Unleash your business potential. Here are our core services:</p>
        <ul className="text-xl text-white list-disc mt-4 space-y-2 animate-fadeIn">
          <li>
            <strong>5 Custom Graphic Designs and Logo Design:</strong> We create 5 unique graphic designs and a custom logo tailored to your brand’s
            identity, helping you stand out visually.
          </li>
          <li>
            <strong>Visit Video Shoot (Once a Month) and Market Research:</strong> Our team provides one professional visit video shoot each month to
            capture your brand’s essence, along with detailed market research to optimize your marketing strategy.
          </li>
          <li>
            <strong>Reach Up to 500 Customers:</strong> Through targeted marketing, we help you connect with up to 500 potential customers, increasing
            your brand visibility and engagement.
          </li>
          <li>
            <strong>Google Map Listing & Content Writing:</strong> Expand your reach by partnering with Business Maniaa for new networking
            opportunities & Free content writing.
          </li>
        </ul>
      </div>

      {/* About Section */}
      <div className="mt-28 text-left w-full max-w-5xl flex flex-col items-center">
        <h2 className="text-5xl font-bold text-white mb-4 animate-fadeIn">About Komodki</h2>
        <p className="text-2xl text-gray-200 mb-6 animate-fadeIn">
          The Komodki Plan offers great value at{" "}
          <strong>The cost is Rs 999 per month, plus an 18% GST, amounting to a total of Rs 2357.64 for a two-month period.</strong>
        </p>
        <p className="text-2xl text-gray-200 mb-4 animate-fadeIn">
          It includes <strong>5 graphic ads, a logo design, and one visit video shoot per month.</strong> The plan is designed to help you reach up to
          500 customers and also includes a Market Research Facility (MRF) for better insights.
        </p>
        <p className="text-2xl text-gray-200 mb-4 animate-fadeIn">
          Additionally, we offer free Google Map listing and content writing to boost your online presence.
        </p>
      </div>
    </div>
  );
};

export default Komodki;

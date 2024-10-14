import React from "react";
import VideoPlayer from "./VideoPlayer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };

  const slides = [
    { image: "/assets/banners/vishwam.jpg", alt: "Vishwam Plan" },
    { image: "/assets/banners/panchjanya.png", alt: "Panchjanya Plan" },
    { image: "/assets/banners/kamodki.png", alt: "Komodki Plan" },
    { image: "/assets/banners/nandak.png", alt: "Nandak Plan" },
    { image: "/assets/banners/sudharsan.jpg", alt: "Sudarshan Plan" },
    { image: "/assets/banners/sarang.jpg", alt: "Sarang Plan" },
  ];

  return (
    <div className="container home flex flex-col md:flex-row items-stretch justify-between py-4 px-2 sm:px-4 relative h-screen" id="home">
      {/* Left section with slider */}
      <div className="slider-container w-full md:w-full relative z-0">
        <Slider {...sliderSettings}>
          {slides.map((slide, index) => (
            <div key={index} className="slider-content relative w-full h-64 md:h-[600px] flex flex-col justify-center items-start">
              {/* Container with background image */}
              <div
                className="image-container w-full h-full flex justify-start items-center relative rounded-lg overflow-hidden"
                style={{
                  backgroundImage: `url(${slide.image})`,
                  backgroundSize: "contain", // Change from cover to contain
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                {/* You can add additional content or leave it blank */}
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Right section with video in the middle of the right side */}
      <div
        className="right w-full md:w-1/4 lg:w-1/4 flex justify-center md:absolute top-1/4 right-8 transform -translate-y-1/2 z-30"
        data-aos="fade-up-left"
        data-aos-duration="1000"
      >
        <div className="flex items-center h-32 md:h-full">
          <VideoPlayer />
        </div>
      </div>
    </div>
  );
};

export default Home;

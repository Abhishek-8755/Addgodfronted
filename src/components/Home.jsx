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
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  const slides = [
    {
      plan: "Vishwam at ₹99 only",
      image: "/assets/hero/vishwam1.png",
      alt: "Vishwam Plan",
    },
    {
      plan: "Panchjanya at ₹499 only",
      image: "https://cdn.pixabay.com/photo/2018/02/23/09/03/human-3175027_960_720.jpg",
      alt: "Panchjanya Plan",
    },
    {
      plan: "Komodki at ₹999 only",
      image: "https://cdn.pixabay.com/photo/2018/02/23/09/03/human-3175027_960_720.jpg",
      alt: "Komodki Plan",
    },
    {
      plan: "Nandak at ₹1999 only",
      image: "https://cdn.pixabay.com/photo/2018/02/23/09/03/human-3175027_960_720.jpg",
      alt: "Nandak Plan",
    },
    {
      plan: "Sudarshan at ₹9999 only",
      image: "https://cdn.pixabay.com/photo/2018/02/23/09/03/human-3175027_960_720.jpg",
      alt: "Sudarshan Plan",
    },
    {
      plan: "Sarang at ₹19999 only",
      image: "https://cdn.pixabay.com/photo/2018/02/23/09/03/human-3175027_960_720.jpg",
      alt: "Sarang Plan",
    },
  ];

  return (
    <div className="container home flex flex-col md:flex-row items-stretch justify-between py-4 px-2 sm:px-4 relative h-screen" id="home">
      {/* Left section with slider */}
      <div className="slider-container w-full md:w-full relative z-0">
        <Slider {...sliderSettings}>
          {slides.map((slide, index) => (
            <div key={index} className="slider-content relative w-full h-80 md:h-[600px] flex flex-col justify-center items-start">
              {" "}
              {/* Keep items-start for left alignment */}
              {/* Container with background image */}
              <div
                className="image-container w-full h-full flex justify-start items-center relative rounded-lg"
                style={{
                  backgroundImage: `url(${slide.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                {/* Slide content inside the container */}
                <div className="slider-section bg-white text-black bg-opacity-70 p-4 rounded-lg z-10 text-left ml-4">
                  {" "}
                  {/* Added margin-left */}
                  <h2 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-bold">{slide.plan}</h2>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Right section with video in the middle of the right side */}
      <div
        className="right w-full md:w-1/4 lg:w-1/4 flex justify-center md:absolute top-1/4 right-8 transform -translate-y-1/2 z-30" // Adjusted right position
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

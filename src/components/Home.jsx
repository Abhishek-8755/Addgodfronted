import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const navigate = useNavigate(); // Initialize useNavigate

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
    { type: "image", src: "/assets/banners/new/vishwam.jpg", alt: "Image 1", url: "/vishwam" },
    { type: "image", src: "/assets/banners/new/pancjanya.jpg", alt: "Image 2", url: "/panchjanya" },
    { type: "image", src: "/assets/banners/new/komodki.jpg", alt: "Image 3", url: "/komodki" },
    { type: "image", src: "/assets/banners/new/nandak.jpg", alt: "Image 4", url: "/nandak" },
    { type: "image", src: "/assets/banners/new/sudarshan.jpg", alt: "Image 5", url: "/sudharsan" },
    { type: "image", src: "/assets/banners/new/sarang.jpg", alt: "Image 6", url: "/sarang" },
  ];

  const handleSlideClick = (url) => {
    if (url) {
      navigate(url); // Redirect to the specific URL
    }
  };

  return (
    <div className="p-4">
      <div className="mb-6">
        <Slider {...sliderSettings}>
          {slides.map((slide, index) => (
            <div
              key={index}
              className="relative w-full h-auto"
              onClick={() => handleSlideClick(slide.url)} // Handle click and navigate
            >
              <img
                src={slide.src}
                alt={slide.alt}
                className="flex flex-col lg:flex-row justify-center items-stretch w-full h-600px lg:h-[610px]" // Adjust maxHeight as needed
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Home;

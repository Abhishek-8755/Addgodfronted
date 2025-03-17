import React, { useEffect, useState } from "react";
import "./Client.css"; // Import the CSS file for additional styles

const Client = () => {
  const [count, setCount] = useState(0);
  const targetCount = 100000; // Target number of happy clients
  const duration = 3000; // Duration for counting animation

  useEffect(() => {
    let start = 0;
    const increment = Math.ceil(targetCount / (duration / 100)); // Increment calculation

    const timer = setInterval(() => {
      start += increment;
      if (start >= targetCount) {
        start = targetCount;
        clearInterval(timer);
      }
      setCount(start);
    }, 100);

    return () => clearInterval(timer); // Cleanup on unmount
  }, [targetCount, duration]);

  // Example clients data
  const clientsData = [
    {
      id: 1,
      title: "Nisha",
      img: "/videos/review1.mp4", // Video
    },
    {
      id: 2,
      title: "Brijwasi Govardhan",
      img: "/videos/review2.mp4", // Video
    },
    {
      id: 3,
      title: "Gopal sharma",
      img: "/videos/review3.mp4", // Video
    },
    // Add more clients as needed
  ];

  // Names for the name slider (this can be any list of names)
  const names = [
    "Virindavan yatra",
    "Beauty Plus salon",
    "Giriraj mart",
    "MAA KATAYANI JI OPTICALS",
    "Triputi Makeover",
    "SB JANSEAB KENDRA",
    "SHIV ELECTRONICS",
    "GAURI GOPAL COLLECTION",
    "MOTOR BIKE INTER",
    "GLASSWARE",
    "RADHA RANI MARRIAGE HOME",
    "MEENAKSHI GIFT NOVELTIES",
    "SANYA CHICKEN WORKS",
    "Brijwasi Hotel & Family Restaurant",
    "Shree Priya Priyatam Dham Hotel ",
    "Outfit 4 you",
    "Kanha Real Trust",
    "Kaka Tea Stall",
    "NIRVANA JUICE AND BEVERAGES",
    // "",
    // Add more client names as needed
  ];

  return (
    <div className="container mx-auto py-8" id="skills">
      <h1 className="text-center my-5 text-2xl md:text-4xl font-bold">{count.toLocaleString()}+ Happy Clients Across India</h1>
      {/* Name Slider Section */}
      <div className="name-slider mb-6">
        <div className="slider-wrapper">
          <div className="marquee">
            {/* Duplicate the names for a seamless infinite loop */}
            {names.concat(names).map((name, index) => (
              <div key={index} className="name-item">
                <p className="text-2xl font-bold text-amber-300">{name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animated client count */}

      <div className="flex flex-col items-center">
        <div className="text-3xl font-bold text-center">
          <span className="text-blue-500">We value our clients!</span>
          <p className="mt-2">Join our community of satisfied customers who trust us for quality service.</p>
        </div>
      </div>

      {/* Clients section */}
      <div className="mt-10">
        <h2 className="text-center text-2xl md:text-3xl font-semibold">Our Clients</h2>
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          {clientsData.map((client) => (
            <div key={client.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex justify-center mb-4">
              <div
                className="card text-dark transition-transform transform hover:scale-105 hover:shadow-lg"
                style={{
                  border: "1px solid blue",
                  boxShadow: "5px 5px 10px rgba(101, 175, 10, 0.5)",
                  width: "100%", // Set the width to full of its container
                  maxWidth: "25rem", // Increase max width
                }}
                data-aos="flip-right"
                data-aos-duration="1000"
              >
                <div className="card-body text-center p-6">
                  {/* Conditional rendering for video or image with consistent size */}
                  {client.img.endsWith(".mp4") ? (
                    <video controls className="w-full h-64 object-cover">
                      <source src={client.img} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <img
                      src={client.img}
                      alt={client.title}
                      className="w-full h-64 object-cover" // Increased height
                    />
                  )}
                  <h3 className="text-xl font-bold mt-4">{client.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Client;

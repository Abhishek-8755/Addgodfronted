import React, { useEffect, useState } from "react";

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

  // Example skills data
  const skillsData = [
    {
      id: 1,
      title: "Pradeep singh",
      img: "/videos/review1.mp4", // Video
    },
    {
      id: 2,
      title: "Suresh",
      img: "https://cdn.pixabay.com/video/2022/08/04/126731-736705776_large.mp4", // Image
    },
    {
      id: 3,
      title: "Rajeneder",
      img: "https://cdn.pixabay.com/video/2022/08/04/126731-736705776_large.mp4", // Image
    },
    // Add more skills as needed
  ];

  return (
    <div className="container mx-auto py-8" id="skills">
      {/* Animated client count */}
      <h1 className="text-center my-5 text-2xl md:text-4xl font-bold">{count.toLocaleString()}+ Happy Clients Across India</h1>
      <div className="flex flex-col items-center">
        <div className="text-3xl font-bold text-center">
          <span className="text-blue-500">We value our clients!</span>
          <p className="mt-2">Join our community of satisfied customers who trust us for quality service.</p>
        </div>
      </div>

      {/* Skills section */}
      <div className="mt-10">
        <h2 className="text-center text-2xl md:text-3xl font-semibold">Our Clients</h2>
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          {/* Centering the cards */}
          {skillsData.map((skill) => (
            <div key={skill.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex justify-center mb-4">
              {/* Centering each card */}
              <div
                className="card text-dark transition-transform transform hover:scale-105 hover:shadow-lg"
                style={{
                  border: "1px solid blue",
                  boxShadow: "5px 5px 10px rgba(101, 175, 10, 0.5)",
                  maxWidth: "22rem", // Adjust card width
                }}
                data-aos="flip-right"
                data-aos-duration="1000"
              >
                <div className="card-body text-center p-6">
                  {/* Conditional rendering for video or image */}
                  {skill.img.endsWith(".mp4") ? (
                    <video controls className="w-full h-56 object-cover">
                      <source src={skill.img} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <img src={skill.img} alt={skill.title} className="w-full h-56 object-cover" />
                  )}
                  <h3 className="text-xl font-bold mt-4">{skill.title}</h3>
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

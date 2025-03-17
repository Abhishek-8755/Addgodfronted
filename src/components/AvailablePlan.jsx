import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import AOS from "aos"; // Import AOS library
import "aos/dist/aos.css"; // Import AOS CSS

const plansData = [
  {
    id: 1,
    name: "Vishwam",
    price: "₹99",
    description: "Digital Connections.",
  },
  {
    id: 2,
    name: "Panchjanya",
    price: "₹499",
    description: "Your brands call to success.",
  },
  {
    id: 3,
    name: "Komodki",
    price: "₹999",
    description: "Unleash your business potential with komodki.",
  },
  {
    id: 4,
    name: "Nandak",
    price: "₹1999",
    description: "Cutting digital noise for business.",
  },
  {
    id: 5,
    name: "Sudarshan",
    price: "₹9999",
    description: "Precious power for unstoppable Growth.",
  },
  {
    id: 6,
    name: "Sarang",
    price: "₹19999",
    description: "Powerful digital solutions to enhance presence.",
  },
];

const AvailablePlan = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Add authentication state

  // Initialize AOS animations
  useEffect(() => {
    AOS.init({ duration: 2000 }); // Set animation duration
  }, []);

  // Function to handle purchase button click
  const handlePurchase = (planName) => {
    console.log(`You have chosen the ${planName} plan!`);

    if (!isAuthenticated) {
      // If the user is not authenticated, redirect to login page
      navigate("/employee/login"); // Redirect to login page
    } else {
      // If authenticated, redirect to the customer form
      window.open("https://docs.google.com/forms/d/e/1FAIpQLSdm7w5fltppbPFPN6qU5vnm1uMuFYZ-8WTz1fdv4qXwZYjy9Q/viewform", "_blank"); // Adjust the path according to your routing structure
    }
  };

  return (
    <div className="container py-8 mx-auto" id="plans">
      <h1 className="my-5 text-3xl font-bold text-center md:text-4xl">Available Plans</h1>
      <div className="row d-flex justify-content-center align-items-center">
        {plansData.map((plan) => (
          <div key={plan.id} className="mx-4 my-4 col-sm-6 col-md-4 col-lg-3">
            <div
              className="transition-transform transform card bg-dark text-light hover:scale-105 hover:shadow-xl hover:-rotate-1"
              style={{
                border: "1px solid yellow",
                boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3), 0 6px 6px rgba(0, 0, 0, 0.2)",
                perspective: "1000px", // Enable 3D effect
                transformStyle: "preserve-3d",
              }}
              data-aos="zoom-in" // Animation effect on scroll
            >
              <div
                className="p-4 text-center card-body"
                style={{
                  transform: "rotateY(0deg)", // Initialize 3D card rotation
                  transition: "transform 0.6s",
                }}
              >
                <h2 className="text-xl font-bold">{plan.name}</h2>
                <p className="text-2xl font-semibold">{plan.price}</p>
                <p className="text-sm md:text-base">{plan.description}</p>
                <div>
                  <button
                    onClick={() => handlePurchase(plan.name)}
                    className="w-full mx-1 my-3 transition-transform transform btn btn-primary hover:scale-110"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvailablePlan;

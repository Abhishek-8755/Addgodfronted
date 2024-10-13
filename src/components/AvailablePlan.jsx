import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import AOS from "aos"; // Import AOS library
import "aos/dist/aos.css"; // Import AOS CSS

const plansData = [
  {
    id: 1,
    name: "Vishwam",
    price: "₹99",
    description: "Basic plan with limited features.",
  },
  {
    id: 2,
    name: "Panchjanya",
    price: "₹499",
    description: "Intermediate plan with more features.",
  },
  {
    id: 3,
    name: "Komodki",
    price: "₹999",
    description: "Advanced plan with premium features.",
  },
  {
    id: 4,
    name: "Nandak",
    price: "₹1999",
    description: "Professional plan designed for businesses.",
  },
  {
    id: 5,
    name: "Nandak",
    price: "₹1999",
    description: "Professional plan designed for businesses.",
  },
  {
    id: 6,
    name: "",
    price: "₹19999",
    description: "Professional plan designed for businesses.",
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
      navigate("/login"); // Redirect to login page
    } else {
      // If authenticated, redirect to the customer form
      navigate("/customerform"); // Adjust the path according to your routing structure
    }
  };

  return (
    <div className="container mx-auto py-8" id="plans">
      <h1 className="text-center my-5 text-3xl md:text-4xl font-bold">Available Plans</h1>
      <div className="row d-flex justify-content-center align-items-center">
        {plansData.map((plan) => (
          <div key={plan.id} className="my-4 col-sm-6 col-md-4 col-lg-3 mx-4">
            <div
              className="card bg-dark text-light transition-transform transform hover:scale-105 hover:shadow-lg"
              style={{
                border: "1px solid yellow",
                boxShadow: "5px 5px 10px rgba(101, 175, 10, 0.5)",
              }}
              data-aos="zoom-in" // Animation effect on scroll
            >
              <div className="card-body text-center p-4">
                <h2 className="text-xl font-bold">{plan.name}</h2>
                <p className="text-2xl font-semibold">{plan.price}</p>
                <p className="text-sm md:text-base">{plan.description}</p>
                <div>
                  <button
                    onClick={() => handlePurchase(plan.name)}
                    className="btn btn-primary mx-1 my-3 w-full transition-transform transform hover:scale-105"
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

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Aos from "aos";
import "aos/dist/aos.css";
import Home1 from "./pages/Home1";
import VishwamLandingPage from "./pages/VishwamLandingPage";
import SignUp from "./components/Signup";
import CustomerForm from "./components/CustomerForm";
import GoogleForm from "./components/GoogleForm";
import LoginPage from "./components/LoginPage"; // Import your LoginPage

const App = () => {
  // State to track if the user is authenticated
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <Router>
      {/* Wrap everything in the Router */}
      <Navbar />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Define routes */}
        <Routes>
          <Route path="/" element={<Home1 />} /> {/* Route for Home1 */}
          <Route path="/vishwam" element={<VishwamLandingPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/customerform" element={<CustomerForm />} />
          <Route path="/detailsform" element={<GoogleForm />} />
          {/* Pass setIsAuthenticated to LoginPage */}
          <Route path="/login" element={<LoginPage setIsAuthenticated={setIsAuthenticated} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from "./components/Navbar";
import Aos from "aos";
import "aos/dist/aos.css";
import Home1 from "./pages/Home1";
import VishwamLandingPage from "./pages/VishwamLandingPage";
import CustomerForm from "./components/CustomerForm";
import GoogleForm from "./components/GoogleForm";
import LoginPage from "./components/LoginPage"; // Import your LoginPage
import Komodki from "./pages/Komodki";
import Sudharsan from "./pages/Sudharsan";
import Nandak from "./pages/Nandak";
import Sarang from "./pages/Sarang";
import Panchjanya from "./pages/Panchjanya";
// import EmployeeLogin from "./components/EmloyeeLogin";
import { FaWhatsapp, FaInstagram, FaFacebook, FaLinkedin, FaPhone  } from "react-icons/fa";
import "./SocialSlider.css"; // CSS file for styling
import Health from "./pages/Health";
import EnquiryNow from "./pages/EnquiryNow";
import Transport from "./pages/Transport";
import School from "./pages/School";
import Technology from "./pages/Technology";
import Jewelry from "./pages/Jewelry";
import Groceries from "./pages/Groceries";
import Footwear from "./pages/Footwear";
import Cosmetic from "./pages/Cosmetic";
import Ecommerce from "./pages/Ecommerce";
import ToursAndTravels from "./pages/ToursAndTravels";
import Astrologers from "./pages/Astrologers";
import Fitness from "./pages/Fitness";
import Telecaller from "./components/Telecaller";
import "./styles/customCursor.css"; // Import the custom cursor CSS
import RulesandRegulation from "./pages/RulesandRegulation";
import Teams from "./pages/Teams";
import FieldVisit from "./Teams/FieldVisit";
import Attendance from "./Teams/Attendance";
import EmployeeMonth from "./Teams/EmployeeMonth";
import WorkPolicy from "./Teams/WorkPolicy";
import SeatingPlans from "./Teams/SeatingPlans";
import EmployeeLogin from "./login/EmployeeLogin";
import Add from "./customer/Add";
const SocialSidebar = () => (
  <div className="social-sidebar">
    <a
      href="https://wa.me/9520243089?text=Hii%20I%20am%20interested%20I%20want%20to%20know%20about%20it%20more%20kindly%20help%20me"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp size={24} />
    </a>
    <a href="https://www.instagram.com/add__god?utm_source=qr&igsh=MWVrMzEwYWRiNTRreg==" target="_blank" rel="noopener noreferrer">
      <FaInstagram size={24} />
    </a>
    <a href="https://www.facebook.com/AddGodpvtltd/" target="_blank" rel="noopener noreferrer">
      <FaFacebook size={24} />
    </a>
    <a href="https://www.linkedin.com/company/addgod/" target="_blank" rel="noopener noreferrer">
      <FaLinkedin size={24} />
    </a>
    {/* Call Now Option */}
    <a href="tel:+919557323701">
      <FaPhone size={24} />
    </a>
    <a href="/telesalesform">
      <img src="/icon.png" alt="AddGod Company Logo" style={{ width: 50, height: 50 }} />
    </a>
  </div>
);
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
      <SocialSidebar />

      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        {/* Define routes */}
        <Routes>
          <Route path="/" element={<Home1 />} /> {/* Route for Home1 */}
          <Route path="/vishwam" element={<VishwamLandingPage />} />
          <Route path="/customerform" element={<CustomerForm />} />
          <Route path="/detailsform" element={<GoogleForm />} />
          <Route path="/komodki" element={<Komodki />} />
          <Route path="/sudharsan" element={<Sudharsan />} />
          <Route path="/nandak" element={<Nandak />} />
          <Route path="/sarang" element={<Sarang />} />
          <Route path="/panchjanya" element={<Panchjanya />} />
          {/* <Route path="/employee_login" element={<EmployeeLogin />} /> */}
          <Route path="/enquiry" element={<EnquiryNow />} />
          <Route path="/health" element={<Health />} />
          <Route path="/transport" element={<Transport />} />
          <Route path="/school" element={<School />} />
          <Route path="/tech" element={<Technology />} />
          <Route path="/Groceries" element={<Groceries />} />
          <Route path="/jewelry" element={<Jewelry />} />
          <Route path="/footwear" element={<Footwear />} />
          <Route path="/cosmetic" element={<Cosmetic />} />
          <Route path="/ecommerce" element={<Ecommerce />} />
          <Route path="toursandtravels" element={<ToursAndTravels />} />
          <Route path="astrologers" element={<Astrologers />} />
          <Route path="fitness" element={<Fitness />} />
          <Route path="/telesalesform" element={<Telecaller />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/Salary" element={<RulesandRegulation />} />
          {/* Pass setIsAuthenticated to LoginPage */}
          <Route path="/fieldvisit" element={<FieldVisit/>} />
          <Route path="/attendance-criteria" element={<Attendance />} />
          <Route path="/employee-of-the-month" element={<EmployeeMonth />} />
          <Route path="/workplace-policy" element={<WorkPolicy />} />
          <Route path="/seating-plan" element={<SeatingPlans />} />
          <Route path="/employee/login" element={<EmployeeLogin />} />
          <Route path="/add" element={<Add />}></Route>
          <Route path="/login" element={<LoginPage setIsAuthenticated={setIsAuthenticated} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

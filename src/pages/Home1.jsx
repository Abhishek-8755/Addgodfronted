import React from "react";
import Home from "../components/Home";
import Client from "../components/Client";
import OurServices from "../components/OurServices";
import AboutUs from "../components/About";
import Contact from "../components/Contact";
import AvailablePlan from "../components/AvailablePlan";
import Categories from "../components/Categories";

const Home1 = () => {
  return (
    <div>
      <Home />
      {/* <Sparkle /> */}
      <AvailablePlan />
      <OurServices />
      <Client />
      <Categories />
      <AboutUs />
      <Contact />
    </div>
  );
};

export default Home1;

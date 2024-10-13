import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms for the animations
  }, []);

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-4xl font-bold text-center my-5" data-aos="fade-up">
        About Us
      </h1>
      <p className="text-lg mb-5" data-aos="fade-right">
        Welcome to ADD-GOD! We help small and large businesses connect to the digital world. Our goal is to make it easy for everyone to run their
        business online. We blend the values of Indian culture with modern technology, creating a unique path for growth and success.
      </p>

      <h2 className="text-2xl font-semibold my-3" data-aos="fade-up">
        Our Mission
      </h2>
      <p className="mb-5" data-aos="fade-left">
        At ADD-GOD, our mission is simple: we want to see every business in India succeed online. We are dedicated to providing the support and
        resources needed to help all entrepreneurs succeed in the digital age. We believe that by combining tradition with innovation, we can create a
        better future for everyone.
      </p>

      <h2 className="text-2xl font-semibold my-3" data-aos="fade-up">
        Why Choose Us?
      </h2>
      <ul className="list-disc list-inside mb-5" data-aos="zoom-in">
        <li>
          Cultural Integration with Technology We blend Indian culture with cutting-edge technology, creating personalized solutions that resonate
          with your business identity.
        </li>
        <li>
          Proven Track Record With over 100,000 successful business transitions to the digital world, our experience equips us to deliver effective
          strategies tailored to your needs.
        </li>
        <li>
          Tailored Support Our dedicated team provides customized support to understand your unique challenges and goals, ensuring strategies that
          drive results.
        </li>
        <li>
          Commitment to Your Success We are passionate about empowering entrepreneurs, providing the resources necessary for thriving in the digital
          age.
        </li>
        <li>
          Transformative Tools Partnering with us grants access to innovative tools and knowledge that can transform your business and maximize online
          potential.
        </li>
        <li>
          Vision for the Future Join us in creating a landscape where millions of businesses succeed online, ensuring your growth alongside industry
          advancements.
        </li>
        <li>
          Continuous Innovation We stay ahead of trends, equipping your business with the latest solutions for future challenges and opportunities.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold my-3" data-aos="fade-up">
        Our Journey
      </h2>
      <p className="mb-5" data-aos="fade-right">
        Since we started, ADD-GOD has helped over 100,000 business owners around the world go digital. We are proud of what we’ve achieved, and we
        dream of a future where millions of businesses can thrive online. Our journey is all about helping businesses turn their offline success into
        online growth.
      </p>

      <h2 className="text-2xl font-semibold my-3" data-aos="fade-up">
        Join Us
      </h2>
      <p data-aos="fade-left">
        When you join ADD-GOD, you become part of a team that values culture and embraces technology. We offer personalized support and solutions to
        meet your business needs. By partnering with us, you gain the knowledge and tools to transform your business online. Let’s work together to
        unlock your business’s full potential in the digital world!
      </p>
    </div>
  );
};

export default AboutUs;

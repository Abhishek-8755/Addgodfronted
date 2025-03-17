import React from "react";
import Slider from "react-slick";

const Transport = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const sliderImages = [
    {
      id: 1,
      src: "assets/transport/transport1.png",
      alt: "Efficient Transport Solutions",
    },
    {
      id: 2,
      src: "assets/transport/transport2.png",
      alt: "Reliable Fleet Management",
    },
    {
      id: 3,
      src: "assets/transport/transport3.png",
      alt: "Innovative Logistics",
    },
    {
      id: 4,
      src: "assets/transport/transport4.png",
      alt: "Advanced Tracking Systems",
    },
    {
      id: 5,
      src: "assets/transport/transport5.png",
      alt: "Seamless Transportation",
    },
    {
      id: 6,
      src: "assets/transport/transport6.png",
      alt: "Optimized Routes",
    },
  ];

  return (
    <div className="p-4">
      {/* Slider Section */}
      <section className="mb-6">
        <Slider {...sliderSettings}>
          {sliderImages.map((image) => (
            <div key={image.id} className="relative w-full h-[auto]">
              {/* Image with object-cover for proper fitting */}
              <img src={image.src} alt={image.alt} className="flex flex-col lg:flex-row justify-center items-stretch w-full h-600px lg:h-[610px]" />
            </div>
          ))}
        </Slider>
      </section>

      {/* Introduction Section */}
      <section className="relative mb-6 bg-blue-50 p-6 rounded-lg shadow-lg">
        {/* Logo in the background */}
        <img
          src="/assets/hero/web1.png"
          alt="Logo"
          className="absolute inset-0 mx-auto my-auto opacity-20 z-0 pointer-events-none w-full sm:w-3/4 md:w-2/3 lg:w-1/2 h-auto"
        />
        <div className="relative z-10">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">Gameplan: Revolutionizing Transport!</h2>
          <p className="text-lg text-gray-700 mb-4">Discover innovative strategies to optimize your transport business and streamline operations:</p>
          <ul className="list-disc ml-8 space-y-4">
            <li className="text-lg text-gray-800">
              🚚 <strong>Fleet Management:</strong> Implement advanced fleet management systems to enhance efficiency and reduce costs.
            </li>
            <li className="text-lg text-gray-800">
              📈 <strong>Route Optimization:</strong> Use data-driven insights to optimize routes and improve delivery times.
            </li>
            <li className="text-lg text-gray-800">
              📊 <strong>Performance Analytics:</strong> Monitor and analyze performance metrics to make informed decisions.
            </li>
            <li className="text-lg text-gray-800">
              💡 <strong>Innovative Logistics:</strong> Leverage innovative logistics solutions to streamline operations.
            </li>
            <li className="text-lg text-gray-800">
              📦 <strong>Inventory Management:</strong> Implement robust inventory management systems to ensure timely deliveries.
            </li>
            <li className="text-lg text-gray-800">
              🌐 <strong>Integrated Systems:</strong> Integrate various systems for seamless operation and better visibility.
            </li>
            <li className="text-lg text-gray-800">
              🔗 <strong>Supply Chain Collaboration:</strong> Enhance collaboration across the supply chain to improve overall efficiency.
            </li>
          </ul>
        </div>
      </section>

      {/* Digital Marketing Section */}
      <section className="mb-6 bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-xl shadow-md">
        <h2 className="text-3xl font-extrabold text-green-600 mb-4">Boost Your Transport Business with Digital Marketing!</h2>
        <p className="text-lg text-gray-700 mb-6">
          Transform your transport business with these tailored digital strategies that drive engagement and build a lasting online presence.
        </p>
        <div className="space-y-6 ">
          <div className="p-4 border-l-4 border-green-400 bg-white shadow-sm rounded">
            <h3 className="text-xl font-bold text-gray-800">🌐 Custom Website</h3>
            <p className="text-gray-700">
              Create a responsive, user-friendly platform to showcase your services, enable online bookings, and provide essential resources.
            </p>
          </div>
          <div className="p-4 border-l-4 border-blue-400 bg-white shadow-sm rounded">
            <h3 className="text-xl font-bold text-gray-800">📍 Google My Business</h3>
            <p className="text-gray-700">
              Optimize your profile to dominate local searches, manage reviews, and keep service details updated to attract more local clients.
            </p>
          </div>
          <div className="p-4 border-l-4 border-yellow-400 bg-white shadow-sm rounded">
            <h3 className="text-xl font-bold text-gray-800">📈 Local SEO</h3>
            <p className="text-gray-700">
              Use targeted keywords like “best transport services near me” to ensure your services appear at the top of local search results.
            </p>
          </div>
          <div className="p-4 border-l-4 border-purple-400 bg-white shadow-sm rounded">
            <h3 className="text-xl font-bold text-gray-800">🔍 On-Page SEO</h3>
            <p className="text-gray-700">Optimize your website’s content, titles, and images to improve rankings and drive organic traffic.</p>
          </div>
          <div className="p-4 border-l-4 border-red-400 bg-white shadow-sm rounded">
            <h3 className="text-xl font-bold text-gray-800">⚙ Technical SEO</h3>
            <p className="text-gray-700">
              Enhance your site’s speed, mobile responsiveness, and usability to improve user experience and search engine rankings.
            </p>
          </div>
          <div className="p-4 border-l-4 border-teal-400 bg-white shadow-sm rounded">
            <h3 className="text-xl font-bold text-gray-800">🔗 Off-Page SEO</h3>
            <p className="text-gray-700">
              Build high-quality backlinks, manage online reviews, and boost brand mentions to increase your website’s authority and visibility.
            </p>
          </div>
        </div>
      </section>

      {/* Social Media Optimization (SMO) */}
      <section className="mb-6 bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-xl shadow-md">
        <h2 className="text-3xl font-bold text-purple-600 mb-4">🚀 Social Media Optimization (SMO)</h2>
        <p className="text-lg text-gray-700 mb-4">
          Elevate your transport business presence with creative and impactful social media strategies. Here’s how to connect and engage effectively:
        </p>
        <ul className="space-y-4">
          <li className="flex items-start">
            <span className="text-purple-600 text-xl mr-2">✔</span>
            <span className="text-gray-800">
              Share <strong>authentic testimonials</strong>, compelling success stories, and expert insights to inspire and engage.
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-purple-600 text-xl mr-2">✔</span>
            <span className="text-gray-800">
              Post captivating <strong>behind-the-scenes content</strong> showcasing your team's dedication and expertise.
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-purple-600 text-xl mr-2">✔</span>
            <span className="text-gray-800">
              Maintain brand consistency by aligning your <strong>social media handles</strong> with your domain name.
            </span>
          </li>
        </ul>
      </section>

      {/* Reels & Shorts */}
      <section className="mb-6 bg-gradient-to-r from-green-50 to-yellow-50 p-8 rounded-xl shadow-md">
        <h2 className="text-3xl font-bold text-green-600 mb-4">🎥 Reels & Shorts</h2>
        <p className="text-lg text-gray-700 mb-4">Grab attention and educate your audience with engaging short-form videos:</p>
        <ul className="space-y-4">
          <li className="flex items-start">
            <span className="text-green-600 text-xl mr-2">✔</span>
            <span className="text-gray-800">
              Create <strong>informative videos</strong> on transport tips, logistics advice, and best practices to captivate viewers.
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 text-xl mr-2">✔</span>
            <span className="text-gray-800">
              Showcase <strong>real success stories</strong> to build trust and credibility through authentic storytelling.
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 text-xl mr-2">✔</span>
            <span className="text-gray-800">
              Promote best practices through quick, impactful reels on <strong>important topics</strong> like safety and efficiency.
            </span>
          </li>
        </ul>
      </section>

      {/* YouTube Income */}
      <section className="mb-6 bg-gradient-to-r from-blue-50 to-teal-50 p-8 rounded-xl shadow-md">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">💰 YouTube Income</h2>
        <p className="text-lg text-gray-700 mb-4">Monetize your expertise and expand your reach with a thriving YouTube presence:</p>
        <ul className="space-y-4">
          <li className="flex items-start">
            <span className="text-blue-600 text-xl mr-2">✔</span>
            <span className="text-gray-800">
              Share <strong>SEO-optimized content</strong> with valuable transport tips, success stories, and expert interviews.
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 text-xl mr-2">✔</span>
            <span className="text-gray-800">
              Enable ads and join the <strong>Partner Program</strong> after meeting subscriber and watch hour requirements.
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-600 text-xl mr-2">✔</span>
            <span className="text-gray-800">
              Collaborate with transport influencers to grow an engaged audience and build a steady income stream.
            </span>
          </li>
        </ul>
      </section>

      {/* Online Reputation Management (ORM) */}
      <section className="mb-6 bg-gradient-to-r from-red-50 to-orange-50 p-8 rounded-xl shadow-md">
        <h2 className="text-3xl font-bold text-red-600 mb-4">🌟 Online Reputation Management (ORM)</h2>
        <p className="text-lg text-gray-700 mb-4">Protect and enhance your transport business's reputation with these strategies:</p>
        <ul className="space-y-4">
          <li className="flex items-start">
            <span className="text-red-600 text-xl mr-2">✔</span>
            <span className="text-gray-800">
              Increase visibility with targeted <strong>ads on Google, YouTube, Facebook, and Instagram</strong>.
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-red-600 text-xl mr-2">✔</span>
            <span className="text-gray-800">
              Focus on local clients with promotions within a <strong>100 km radius</strong>.
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-red-600 text-xl mr-2">✔</span>
            <span className="text-gray-800">
              Collaborate with influencers to create <strong>transport-related vlogs</strong> that resonate with your audience.
            </span>
          </li>
        </ul>
      </section>

      {/* Transport App */}
      <section className="relative mb-6 bg-gradient-to-r from-teal-50 to-indigo-50 p-8 rounded-xl shadow-md">
        {/* Background Logo */}
        <img
          src="/assets/hero/web1.png"
          alt="Logo"
          className="absolute inset-0 mx-auto my-auto opacity-10 z-0 pointer-events-none w-full sm:w-3/4 md:w-2/3 lg:w-1/2 h-auto"
        />
        {/* Content Section */}
        <div className="relative z-10">
          <h2 className="text-3xl font-bold text-teal-600 mb-4">📱 Transport App</h2>
          <p className="text-lg text-gray-700 mb-4">Revolutionize transport services with cutting-edge digital solutions:</p>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-teal-600 text-xl mr-2">✔</span>
              <span className="text-gray-800">
                Offer a <strong>digital tracking system</strong> to earn trust and credibility through real-time updates.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 text-xl mr-2">✔</span>
              <span className="text-gray-800">
                Provide <strong>online bookings, route planning, and automated communication</strong> for seamless service delivery.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 text-xl mr-2">✔</span>
              <span className="text-gray-800">
                Collect up to <strong>1,000 reviews</strong> to boost your credibility and attract more clients.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 text-xl mr-2">✔</span>
              <span className="text-gray-800">
                Build <strong>virtual transport hubs</strong> for convenient client interactions through video consultations.
              </span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Transport;

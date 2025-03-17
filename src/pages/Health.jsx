import React from "react";
import Slider from "react-slick";

const Health = () => {
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
      src: "assets/health/app.png",
      alt: "Boost Your Healthcare Business",
      //   caption: "Targeted strategies to attract more patients.",
    },
    {
      id: 2,
      src: "assets/health/Gameplan.png",
      alt: "Grow Trust in Your Community",
      //   caption: "Enhance your brand visibility with Add God.",
    },
    {
      id: 3,
      src: "assets/health/herobanner.png",
      alt: "Measurable Results Tailored to You",
      //   caption: "Customized marketing plans for healthcare success.",
    },
    {
      id: 4,
      src: "assets/health/Introduction_.png",
      alt: "Measurable Results Tailored to You",
      //   caption: "Customized marketing plans for healthcare success.",
    },
    {
      id: 5,
      src: "assets/health/strategy1.png",
      alt: "Measurable Results Tailored to You",
      //   caption: "Customized marketing plans for healthcare success.",
    },
    {
      id: 6,
      src: "assets/health/strategy2.png",
      alt: "Measurable Results Tailored to You",
      //   caption: "Customized marketing plans for healthcare success.",
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
              {/* <p className="absolute bottom-4 left-0 right-0 text-center text-lg font-medium mt-2 text-white bg-opacity-50 bg-black p-2">
                {image.caption}
              </p> */}
            </div>
          ))}
        </Slider>
      </section>

      {/* Introduction Section */}

      {/* Gameplan Section */}
      <section className="relative mb-6 bg-blue-50 p-6 rounded-lg shadow-lg">
        {/* Logo in the background */}
        <img
          src="/assets/hero/web1.png"
          alt="Logo"
          className="absolute inset-0 mx-auto my-auto opacity-20 z-0 pointer-events-none w-full sm:w-3/4 md:w-2/3 lg:w-1/2 h-auto"
        />
        <div className="relative z-10">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">Gameplan: Attracting New Customers!</h2>
          <p className="text-lg text-gray-700 mb-4">
            Discover innovative strategies to grow your healthcare business and connect with more patients:
          </p>
          <ul className="list-disc ml-8 space-y-4">
            <li className="text-lg text-gray-800">
              🩺 <strong>Free Health Check-Up:</strong> Offer free check-ups within a 50-60KM radius to attract new patients and build trust.
            </li>
            <li className="text-lg text-gray-800">
              📣 <strong>Social Media Campaigns:</strong> Advertise on Instagram, Facebook, WhatsApp, and LinkedIn to amplify your reach.
            </li>
            <li className="text-lg text-gray-800">
              🎥 <strong>Video Advertisements:</strong> Create engaging video ads for better visibility and rapid growth.
            </li>
            <li className="text-lg text-gray-800">
              📜 <strong>Health Certificates:</strong> Motivate health awareness by providing personalized health certificates.
            </li>
            <li className="text-lg text-gray-800">
              👩‍⚕ <strong>Free Doctor Consultations:</strong> Provide free consultations for common illnesses like colds and fevers to gain community
              trust.
            </li>
            <li className="text-lg text-gray-800">
              📲 <strong>Awareness Campaigns:</strong> Spread healthcare knowledge through personalized messages or calls.
            </li>
            <li className="text-lg text-gray-800">
              💡 <strong>Referral Program:</strong> Reward patients with discounts or free consultations for referrals. Leverage social media, email
              campaigns, and partnerships with local influencers to maximize impact.
            </li>
          </ul>
        </div>
      </section>

      {/* Digital Marketing Section */}
      <section className="mb-6 bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-xl shadow-md">
        <h2 className="text-3xl font-extrabold text-green-600 mb-4">Master Organic Growth with Digital Marketing!</h2>
        <p className="text-lg text-gray-700 mb-6">
          Transform your healthcare business with these tailored digital strategies that drive patient engagement and build a lasting online presence.
        </p>
        <div className="space-y-6 ">
          <div className="p-4 border-l-4 border-green-400 bg-white shadow-sm rounded">
            <h3 className="text-xl font-bold text-gray-800">🌐 Custom Website</h3>
            <p className="text-gray-700">
              Create a responsive, user-friendly platform to showcase your services, enable online bookings, and provide essential health resources.
            </p>
          </div>
          <div className="p-4 border-l-4 border-blue-400 bg-white shadow-sm rounded">
            <h3 className="text-xl font-bold text-gray-800">📍 Google My Business</h3>
            <p className="text-gray-700">
              Optimize your profile to dominate local searches, manage reviews, and keep service details updated to attract more local patients.
            </p>
          </div>
          <div className="p-4 border-l-4 border-yellow-400 bg-white shadow-sm rounded">
            <h3 className="text-xl font-bold text-gray-800">📈 Local SEO</h3>
            <p className="text-gray-700">
              Use targeted keywords like “best healthcare near me” to ensure your services appear at the top of local search results.
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
          Elevate your healthcare presence with creative and impactful social media strategies. Here’s how to connect and engage effectively:
        </p>
        <ul className="space-y-4">
          <li className="flex items-start">
            <span className="text-purple-600 text-xl mr-2">✔</span>
            <span className="text-gray-800">
              Share <strong>authentic testimonials</strong>, compelling patient success stories, and expert insights to inspire and engage.
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-purple-600 text-xl mr-2">✔</span>
            <span className="text-gray-800">
              Post captivating <strong>behind-the-scenes content</strong> showcasing your healthcare team's dedication and expertise.
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
              Create <strong>informative videos</strong> on health tips, wellness advice, and lifestyle changes to captivate viewers.
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 text-xl mr-2">✔</span>
            <span className="text-gray-800">
              Showcase <strong>real patient success stories</strong> to build trust and credibility through authentic storytelling.
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 text-xl mr-2">✔</span>
            <span className="text-gray-800">
              Promote health awareness through quick, impactful reels on <strong>important topics</strong> like disease prevention and mental health.
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
              Share <strong>SEO-optimized content</strong> with valuable health tips, patient stories, and expert interviews.
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
              Collaborate with healthcare influencers to grow an engaged audience and build a steady income stream.
            </span>
          </li>
        </ul>
      </section>

      {/* Online Reputation Management (ORM) */}
      <section className="mb-6 bg-gradient-to-r from-red-50 to-orange-50 p-8 rounded-xl shadow-md">
        <h2 className="text-3xl font-bold text-red-600 mb-4">🌟 Online Reputation Management (ORM)</h2>
        <p className="text-lg text-gray-700 mb-4">Protect and enhance your healthcare brand’s reputation with these strategies:</p>
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
              Focus on local youth with health promotions within a <strong>100 km radius</strong>.
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-red-600 text-xl mr-2">✔</span>
            <span className="text-gray-800">
              Collaborate with influencers to create <strong>health-related vlogs</strong> that resonate with your audience.
            </span>
          </li>
        </ul>
      </section>

      {/* Health Care App */}
      <section className="relative mb-6 bg-gradient-to-r from-teal-50 to-indigo-50 p-8 rounded-xl shadow-md">
        {/* Background Logo */}
        <img
          src="/assets/hero/web1.png"
          alt="Logo"
          className="absolute inset-0 mx-auto my-auto opacity-10 z-0 pointer-events-none w-full sm:w-3/4 md:w-2/3 lg:w-1/2 h-auto"
        />
        {/* Content Section */}
        <div className="relative z-10">
          <h2 className="text-3xl font-bold text-teal-600 mb-4">📱 Health Care App</h2>
          <p className="text-lg text-gray-700 mb-4">Revolutionize patient care with cutting-edge digital solutions:</p>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-teal-600 text-xl mr-2">✔</span>
              <span className="text-gray-800">
                Offer a <strong>digital health checkup testimonial</strong> process to earn trust and credibility through patient feedback.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 text-xl mr-2">✔</span>
              <span className="text-gray-800">
                Provide <strong>online consultations, health records, and automated communication</strong> for seamless service delivery.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 text-xl mr-2">✔</span>
              <span className="text-gray-800">
                Collect up to <strong>1,000 Google reviews</strong> to boost your credibility and attract more patients.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 text-xl mr-2">✔</span>
              <span className="text-gray-800">
                Build <strong>virtual hospitals</strong> for convenient patient-doctor interactions through video consultations.
              </span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Health;

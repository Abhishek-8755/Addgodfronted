import React from "react";
import Slider from "react-slick";

const Cosmetic = () => {
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
      src: "assets/cosmetics/cosmetics1.png",
      alt: "Premium Cosmetics",
    },
    {
      id: 2,
      src: "assets/cosmetics/cosmetics2.png",
      alt: "Quality Products",
    },
    {
      id: 3,
      src: "assets/cosmetics/cosmetics3.png",
      alt: "Beauty Essentials",
    },
    {
      id: 4,
      src: "assets/cosmetics/cosmetics4.png",
      alt: "Luxury Skincare",
    },
    {
      id: 5,
      src: "assets/cosmetics/cosmetics5.png",
      alt: "Makeup Collection",
    },
    {
      id: 6,
      src: "assets/cosmetics/cosmetics6.png",
      alt: "Organic Beauty",
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
          src="/assets/hero/web.png"
          alt="Logo"
          className="absolute inset-0 mx-auto my-auto opacity-20 z-0 pointer-events-none w-full sm:w-3/4 md:w-2/3 lg:w-1/2 h-auto"
        />
        <div className="relative z-10">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">Gameplan: Elevate Your Cosmetics Business!</h2>
          <p className="text-lg text-gray-700 mb-4">Discover innovative strategies to enhance your cosmetics business and captivate your audience:</p>
          <ul className="list-disc ml-8 space-y-4">
            <li className="text-lg text-gray-800">
              💄 <strong>Exclusive Products:</strong> Offer unique and exclusive products to attract discerning customers.
            </li>
            <li className="text-lg text-gray-800">
              🌐 <strong>Online Presence:</strong> Build a strong online presence with a visually appealing e-commerce website.
            </li>
            <li className="text-lg text-gray-800">
              📊 <strong>Customer Insights:</strong> Use data analytics to understand customer preferences and trends.
            </li>
            <li className="text-lg text-gray-800">
              💡 <strong>Innovative Marketing:</strong> Implement creative marketing campaigns to boost brand visibility.
            </li>
            <li className="text-lg text-gray-800">
              🔒 <strong>Quality Assurance:</strong> Ensure high-quality products to build customer trust.
            </li>
            <li className="text-lg text-gray-800">
              🌍 <strong>Sustainable Practices:</strong> Adopt sustainable and eco-friendly practices in sourcing and packaging.
            </li>
            <li className="text-lg text-gray-800">
              🎁 <strong>Exclusive Offers:</strong> Provide exclusive offers and loyalty programs to retain customers.
            </li>
          </ul>
        </div>
      </section>

      {/* Digital Marketing Section */}
      <section className="mb-6 bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-xl shadow-md">
        <h2 className="text-3xl font-extrabold text-green-600 mb-4">Boost Your Cosmetics Business with Digital Marketing!</h2>
        <p className="text-lg text-gray-700 mb-6">
          Transform your cosmetics business with these tailored digital strategies that drive engagement and build a lasting online presence.
        </p>
        <div className="space-y-6 ">
          <div className="p-4 border-l-4 border-green-400 bg-white shadow-sm rounded">
            <h3 className="text-xl font-bold text-gray-800">🌐 Custom Website</h3>
            <p className="text-gray-700">
              Create a responsive, visually stunning platform to showcase your products, enable online sales, and provide essential information.
            </p>
          </div>
          <div className="p-4 border-l-4 border-blue-400 bg-white shadow-sm rounded">
            <h3 className="text-xl font-bold text-gray-800">📍 Google My Business</h3>
            <p className="text-gray-700">
              Optimize your profile to dominate local searches, manage reviews, and keep store details updated to attract more local customers.
            </p>
          </div>
          <div className="p-4 border-l-4 border-yellow-400 bg-white shadow-sm rounded">
            <h3 className="text-xl font-bold text-gray-800">📈 Local SEO</h3>
            <p className="text-gray-700">
              Use targeted keywords like “best cosmetics store near me” to ensure your store appears at the top of local search results.
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
          Elevate your cosmetics business presence with creative and impactful social media strategies. Here’s how to connect and engage effectively:
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
              Post captivating <strong>behind-the-scenes content</strong> showcasing your product development and manufacturing processes.
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
              Create <strong>informative videos</strong> on makeup tutorials, skincare routines, and product highlights to captivate viewers.
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 text-xl mr-2">✔</span>
            <span className="text-gray-800">
              Showcase <strong>real customer testimonials</strong> to build trust and credibility through authentic storytelling.
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 text-xl mr-2">✔</span>
            <span className="text-gray-800">
              Promote beauty trends through quick, impactful reels on <strong>important topics</strong> like organic ingredients and eco-friendly
              packaging.
            </span>
          </li>
        </ul>
      </section>

      {/* YouTube Income */}
      <section className="mb-6 bg-gradient-to-r from-blue-50 to-teal-50 p-8 rounded-xl shadow-md">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">💰 YouTube Income</h2>
        <p className="text-lg text-gray-700 mb-4">Monetize your cosmetics content and expand your reach with a thriving YouTube presence:</p>
        <ul className="space-y-4">
          <li className="flex items-start">
            <span className="text-blue-600 text-xl mr-2">✔</span>
            <span className="text-gray-800">
              Share <strong>SEO-optimized content</strong> with valuable beauty tips, product reviews, and expert interviews.
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
            <span className="text-gray-800">Collaborate with beauty influencers to grow an engaged audience and build a steady income stream.</span>
          </li>
        </ul>
      </section>

      {/* Online Reputation Management (ORM) */}
      <section className="mb-6 bg-gradient-to-r from-red-50 to-orange-50 p-8 rounded-xl shadow-md">
        <h2 className="text-3xl font-bold text-red-600 mb-4">🌟 Online Reputation Management (ORM)</h2>
        <p className="text-lg text-gray-700 mb-4">Protect and enhance your cosmetics brand’s reputation with these strategies:</p>
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
              Focus on local customers with promotions within a <strong>100 km radius</strong>.
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-red-600 text-xl mr-2">✔</span>
            <span className="text-gray-800">
              Collaborate with influencers to create <strong>cosmetics-related vlogs</strong> that resonate with your audience.
            </span>
          </li>
        </ul>
      </section>

      {/* Cosmetics App */}
      <section className="relative mb-6 bg-gradient-to-r from-teal-50 to-indigo-50 p-8 rounded-xl shadow-md">
        {/* Background Logo */}
        <img
          src="/assets/hero/web.png"
          alt="Logo"
          className="absolute inset-0 mx-auto my-auto opacity-10 z-0 pointer-events-none w-full sm:w-3/4 md:w-2/3 lg:w-1/2 h-auto"
        />
        {/* Content Section */}
        <div className="relative z-10">
          <h2 className="text-3xl font-bold text-teal-600 mb-4">📱 Cosmetics App</h2>
          <p className="text-lg text-gray-700 mb-4">Revolutionize beauty shopping with cutting-edge digital solutions:</p>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-teal-600 text-xl mr-2">✔</span>
              <span className="text-gray-800">
                Offer a <strong>virtual try-on feature</strong> to allow customers to see how products look on them.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 text-xl mr-2">✔</span>
              <span className="text-gray-800">
                Provide <strong>online consultations, product customization, and automated communication</strong> for seamless service delivery.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 text-xl mr-2">✔</span>
              <span className="text-gray-800">
                Collect up to <strong>1,000 reviews</strong> to boost your credibility and attract more customers.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-teal-600 text-xl mr-2">✔</span>
              <span className="text-gray-800">
                Build <strong>virtual showrooms</strong> for convenient customer interactions through video consultations.
              </span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Cosmetic;

import React from "react";

const OurServices = () => {
  const projectData = [
    {
      id: 1,
      title: "SEO",
      description: "Boost your site's search visibility with expert SEO strategies.",
      imageSrc: "/assets/services/seo.png",
      knowMoreLink: "https://drive.google.com/file/d/1Vi0EZlqY89CzkyS2eLCj-qaLX6FQu5Tc/view?usp=sharing",
    },
    {
      id: 2,
      title: "Business Development",
      description: "Grow your business with strategic planning and market insights.",
      imageSrc: "/assets/services/growth.png",
      knowMoreLink: "https://drive.google.com/file/d/1wjR0hyfzRIduojODKbcRs8n8UEgD3wla/view?usp=sharing",
    },
    {
      id: 3,
      title: "Creative & Branding",
      description: "Elevate your brand with creative visuals and compelling stories.",
      imageSrc: "/assets/services/c&b.png",
      knowMoreLink: "https://drive.google.com/file/d/10p89qHTCUixV8H-_mc4bmG6rzmwAuf04/view?usp=sharing",
    },
    {
      id: 4,
      title: "Films & Photography",
      description: "Capture stunning visuals with professional photography and films.",
      imageSrc: "/assets/services/video.jpg",
      knowMoreLink: "https://drive.google.com/file/d/11LIVEiXH4yfz227sknC0dB2KThauwU-n/view?usp=sharing",
    },
    {
      id: 5,
      title: "Digital Ads & Marketing",
      description: "Boost your online presence with targeted digital ad campaigns.",
      imageSrc: "/assets/services/ads.jpg",
      knowMoreLink: "https://drive.google.com/file/d/1AL2wgfVFWdXQO4surAKbwrwS0_imHf0y/view?usp=sharing",
    },
    {
      id: 6,
      title: "Personal Consultancy",
      description: "Get personalized advice to tackle your unique business challenges.",
      imageSrc: "/assets/services/peronal.png",
      knowMoreLink: "https://drive.google.com/file/d/1oySRae6RQxZ5jfPxgGTzWXDcf6e1CJTy/view?usp=sharing",
    },
    {
      id: 7,
      title: "Business Listing Platforms",
      description: "Expand your reach with listings on top business directories.",
      imageSrc: "/assets/services/listing.jpg",
      knowMoreLink: "https://drive.google.com/file/d/1KX_42NXWzARNGub3GHmTiZxsgyxFsaDa/view?usp=sharing",
    },
    {
      id: 8,
      title: "Social Media Handling",
      description: "Engage your audience with expert social media management.",
      imageSrc: "/assets/services/smm.jpg",
      knowMoreLink: "https://drive.google.com/file/d/1D9CGvWyKz2Lr_BjuPnZT-E6XhQ7D2XJ2/view?usp=sharing",
    },
    {
      id: 9,
      title: "Website Development",
      description: "Create a stunning, responsive website tailored to your needs.",
      imageSrc: "/assets/services/code.jpg",
      knowMoreLink: "https://drive.google.com/file/d/1adpQWwwaPVddfPBt8RtB80-Y2DFVN1Fj/view",
    },
    {
      id: 10,
      title: "Online Reputation Management",
      description: "Manage your online reviews and boost your digital reputation.",
      imageSrc: "/assets/services/orm.jpg",
      knowMoreLink: "https://drive.google.com/file/d/11wGelPBxmJxqOeBeR-iqfWyQerlUqOOy/view?usp=sharing",
    },
    {
      id: 11,
      title: "Influencer Marketing",
      description: "Collaborate with influencers to amplify your brand's message.",
      imageSrc: "/assets/services/influencer.jpg",
      knowMoreLink: "https://drive.google.com/file/d/10bScKBQfTdjItQE0ZsXjTJZDWwzh8_Go/view?usp=sharing",
    },
    {
      id: 12,
      title: "E-commerce Solutions",
      description: "Optimize and manage your e-commerce platform effectively.",
      imageSrc: "/assets/services/smr.png",
      knowMoreLink: "https://drive.google.com/file/d/1mIWzoQGPbH2Bu0GB8OlfdeN05SZthAsZ/view?usp=sharing",
    },
  ];

  return (
    <div className="container my-1" id="projects">
      <h1 className="my-5 text-3xl font-bold text-center md:text-4xl">Our Services</h1>

      <div className="row gy-4 gx-2 justify-content-center">
        {projectData.map((data) => (
          <div key={data.id} className="mb-4 col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
            <div
              className="card bg-dark text-light"
              style={{
                border: "1px solid yellow",
                boxShadow: "5px 5px 10px rgba(101, 175, 10, 0.5)",
                maxWidth: "19rem",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              data-aos="flip-right"
              data-aos-duration="1000"
            >
              <div className="p-3 img d-flex justify-content-center align-items-center">
                <img
                  src={data.imageSrc}
                  className="card-img-top"
                  alt={data.title}
                  style={{
                    width: "100%",
                    height: "140px",
                    objectFit: "cover",
                    border: "2px solid yellow",
                    borderRadius: "8px",
                  }}
                />
              </div>
              <div className="p-2 text-center card-body">
                <h5 className="card-title" style={{ fontSize: "1.1rem" }}>
                  {data.title}
                </h5>
                <p className="card-text" style={{ fontSize: "0.9rem" }}>
                  {data.description}
                </p>
                <a
                  href={data.knowMoreLink}
                  className="m-2 btn btn-primary"
                  style={{ backgroundColor: "#ffcc00", color: "#000", fontWeight: "bold" }}
                >
                  Know More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;

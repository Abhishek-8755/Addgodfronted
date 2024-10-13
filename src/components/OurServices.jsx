import React from "react";

const OurServices = () => {
  // Store project data directly inside the component
  const projectData = [
    {
      id: 1,
      title: "Product Development",
      description: "A personal portfolio website to showcase projects and skills.",
      imageSrc: "https://cdn.pixabay.com/photo/2021/07/14/17/23/photography-6466671_1280.jpg", // Replace with your actual image path
    },
    {
      id: 2,
      title: "Business Development",
      description: "A fully functional e-commerce platform with an integrated payment.",
      imageSrc: "https://cdn.pixabay.com/photo/2023/12/01/11/08/business-8423506_1280.png ",
    },
    {
      id: 3,
      title: "Social Media Handling",
      description: "A social media application with real-time chat and post sharing.",
      imageSrc: "https://cdn.pixabay.com/photo/2018/02/23/09/03/human-3175027_960_720.jpg",
    },
    {
      id: 4,
      title: "Digital Ads",
      description: "A social media application with real-time chat and post sharing.",
      imageSrc: "https://cdn.pixabay.com/photo/2020/12/09/03/10/digital-marketing-5816304_960_720.jpg",
    },
    {
      id: 5,
      title: "Video Editing",
      description: "A social media application with real-time chat and post sharing.",
      imageSrc: "https://cdn.pixabay.com/photo/2022/01/29/13/08/computer-screen-6977452_1280.jpg",
    },
    {
      id: 6,
      title: "Website Development",
      description: "A social media application with real-time chat and post sharing.",
      imageSrc: "https://cdn.pixabay.com/photo/2022/01/29/13/08/programming-6977450_1280.jpg",
    },
    // Add more projects as needed
  ];

  return (
    <div className="container my-1" id="projects">
      <h1 className="text-center mb-4 text-4xl text-white p-4 rounded-lg" data-aos="fade-up" data-aos-duration="1000">
        Our Services
      </h1>

      <div className="row gy-4 gx-2 justify-content-center">
        {" "}
        {/* Centering the cards */}
        {projectData.map((data) => (
          <div key={data.id} className="col-12 col-sm-6 col-md-4 col-lg-4 d-flex justify-content-center mb-4">
            {" "}
            {/* Centering each card */}
            <div
              className="card bg-dark text-light"
              style={{
                border: "1px solid yellow",
                boxShadow: "5px 5px 10px rgba(101, 175, 10, 0.5)",
                maxWidth: "22rem", // Smaller card size
              }}
              data-aos="flip-right"
              data-aos-duration="1000"
            >
              <div className="img d-flex justify-content-center align-items-center p-3">
                <img
                  src={data.imageSrc}
                  className="card-img-top"
                  alt={data.title}
                  style={{
                    width: "100%",
                    height: "180px",
                    objectFit: "cover",
                    border: "2px solid yellow",
                    borderRadius: "8px",
                  }}
                />
              </div>
              <div className="card-body text-center p-2">
                <h5 className="card-title" style={{ fontSize: "1.1rem" }}>
                  {data.title}
                </h5>
                <p className="card-text" style={{ fontSize: "0.9rem" }}>
                  {data.description}
                </p>
                <a href="tel:9520243089" className="btn btn-success m-2 ">
                  Call Now
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

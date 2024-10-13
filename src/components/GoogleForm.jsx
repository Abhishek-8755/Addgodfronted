import React from "react";

const GoogleForm = () => {
  // Replace the URL below with your actual Google Form embed link
  const googleFormURL = "https://docs.google.com/forms/d/e/1FAIpQLSc3FKhSCwztsRDwq1wmgopyEMj2-4RvsGXPK_O3ybWf70PvAA/viewform?usp=sf_link";

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 md:p-8 bg-gradient-to-r from-blue-500 to-teal-500">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg w-full">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-5">We Value Your Feedback!</h1>
        <p className="text-gray-600 mb-5 text-center">Please fill out the form below to help us improve.</p>
        <iframe
          src={googleFormURL}
          width="100%"
          height="600"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          className="border border-gray-300 rounded-lg"
          title="Google Form"
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
};

export default GoogleForm;

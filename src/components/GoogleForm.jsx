import React from "react";

const GoogleForm = () => {
  const googleFormURL = "https://docs.google.com/forms/d/e/1FAIpQLSdm7w5fltppbPFPN6qU5vnm1uMuFYZ-8WTz1fdv4qXwZYjy9Q/viewform";

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 md:p-8 bg-gradient-to-r from-blue-500 to-teal-500">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg w-full text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-5">We Value Your Feedback!</h1>
        <p className="text-gray-600 mb-5">Please fill out the form below to help us improve.</p>
        <button
          onClick={() => window.open(googleFormURL, "_blank", "noopener,noreferrer")}
          className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:bg-blue-600 transition"
        >
          Open Feedback Form
        </button>
      </div>
    </main>
  );
};

export default GoogleForm;

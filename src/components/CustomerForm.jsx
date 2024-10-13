import React, { useState } from "react";

export default function CustomerForm() {
  const [formData, setFormData] = useState({
    customerFullname: "",
    mobileNumber: "",
    city: "",
    state: "",
    pincode: "",
    address: "",
    paymentMode: "Credit Card", // Default value for payment mode
    employeeName: "",
    employeeId: "",
    paymentScreenshot: null, // For file upload
    specificRequirements: "",
  });

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState(""); // New state for success message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({
      ...formData,
      [name]: files[0], // Store the uploaded file
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    setLoading(true); // Start loading
    setErrorMessage(""); // Reset error message
    setSuccessMessage(""); // Reset success message

    const formEle = e.target; // Get form element
    const formDataObj = new FormData(formEle); // Create FormData from form element

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbznw4JzHlxW6YHsCWeHMRwZvC9g3sgjOyfxEC0U0x0mwnRnOhQehwSK0sFiioa3g2nL/exec",
        {
          method: "POST",
          body: formDataObj,
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.text(); // Use .text() to handle plain text response
      console.log(data);

      // Set the success message
      setSuccessMessage("Your data has been successfully submitted!");

      setFormData({
        // Clear form inputs
        customerFullname: "",
        mobileNumber: "",
        city: "",
        state: "",
        pincode: "",
        address: "",
        paymentMode: "Credit Card",
        employeeName: "",
        employeeId: "",
        paymentScreenshot: null,
        specificRequirements: "",
      });
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("An error occurred while submitting the form. Please try again."); // Set error message
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-black-800">
      <h1 className="text-3xl font-bold text-white mb-8">Contact Me Form</h1>

      <div className="bg-black text-black p-10 rounded-lg shadow-lg w-full max-w-xl">
        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Form Fields */}
          <input
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            placeholder="Customer Full Name"
            name="customerFullname"
            type="text"
            value={formData.customerFullname}
            onChange={handleChange}
            required
          />
          <input
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            placeholder="Mobile Number"
            name="mobileNumber"
            type="tel"
            value={formData.mobileNumber}
            onChange={handleChange}
            required
          />
          <input
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            placeholder="City"
            name="city"
            type="text"
            value={formData.city}
            onChange={handleChange}
            required
          />
          <input
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            placeholder="State"
            name="state"
            type="text"
            value={formData.state}
            onChange={handleChange}
            required
          />
          <input
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            placeholder="Pincode"
            name="pincode"
            type="text"
            value={formData.pincode}
            onChange={handleChange}
            required
          />
          <input
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            placeholder="Address"
            name="address"
            type="text"
            value={formData.address}
            onChange={handleChange}
            required
          />
          <select
            name="paymentMode"
            value={formData.paymentMode}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
          >
            <option value="Credit Card">Credit Card</option>
            <option value="Debit Card">Debit Card</option>
            <option value="PayPal">PayPal</option>
            <option value="Bank Transfer">Bank Transfer</option>
          </select>
          <input
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            placeholder="Employee Name"
            name="employeeName"
            type="text"
            value={formData.employeeName}
            onChange={handleChange}
            required
          />
          <input
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            placeholder="Employee ID"
            name="employeeId"
            type="text"
            value={formData.employeeId}
            onChange={handleChange}
            required
          />
          <input
            type="file"
            name="paymentScreenshot"
            onChange={handleFileChange} // Handle file input
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            required
          />
          <textarea
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            placeholder="Specific Requirements"
            name="specificRequirements"
            value={formData.specificRequirements}
            onChange={handleChange}
          />

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full p-3 text-white font-bold rounded-lg ${
              loading ? "bg-gray-400" : "bg-indigo-600 hover:bg-indigo-700"
            } transition-colors duration-300`}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>

        {/* Error and Success Messages */}
        {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}
        {successMessage && <p className="text-green-500 mt-4">{successMessage}</p>}
      </div>
    </div>
  );
}

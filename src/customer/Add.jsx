import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const Add = () => {
  const location = useLocation();
  const [employeeName, setEmployeeName] = useState("");
  const [formData, setFormData] = useState({
    employeeId: "",
    customerFullName: "",
    city: "",
    state: "",
    mobileNumber: "",
    pinCode: "",
    address: "",
    plan: "",
    specificRequirements: "",
    additionalFeatures: "",
    transactionId: "",
  });

  const [errors, setErrors] = useState({}); // Error state

  useEffect(() => {
    if (location.state && location.state.employeeName) {
      setEmployeeName(location.state.employeeName);
    }
  }, [location.state]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({}); // Reset errors before submitting the form
    try {
      const response = await axios.post("https://ems-backend-omega.vercel.app/api/customerform/add", formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (response.data.success) {
        alert("Form submitted successfully!");
      } else {
        alert("Failed to submit form.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);

      if (error.response && error.response.data) {
        // Set error messages for the fields from the response
        const errorMessages = error.response.data.errors || {};
        setErrors(errorMessages); // Update the errors state with specific field errors
      } else {
        alert("An error occurred. Please try again later.");
      }
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-500 text-white rounded-lg shadow-md">
      <h1 className="text-3xl font-semibold text-center mb-6">Welcome {employeeName}</h1>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium mb-2">Employee ID:</label>
            <input
              type="text"
              name="employeeId"
              value={formData.employeeId}
              onChange={handleChange}
              required
              className="w-full p-2 border text-black border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.employeeId && <p className="text-red-500 text-sm">{errors.employeeId}</p>}
          </div>
          <div>
            <label className="block font-medium mb-2">Customer Full Name:</label>
            <input
              type="text"
              name="customerFullName"
              value={formData.customerFullName}
              onChange={handleChange}
              required
              className="w-full p-2 border text-black border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.customerFullName && <p className="text-red-500 text-sm">{errors.customerFullName}</p>}
          </div>
          <div>
            <label className="block font-medium mb-2">City:</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
              className="w-full p-2 border text-black border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}
          </div>
          <div>
            <label className="block font-medium mb-2">State:</label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
              className="w-full p-2 border text-black border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.state && <p className="text-red-500 text-sm">{errors.state}</p>}
          </div>
          <div>
            <label className="block font-medium mb-2">Mobile Number:</label>
            <input
              type="text"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              required
              className="w-full p-2 border text-black border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.mobileNumber && <p className="text-red-500 text-sm">{errors.mobileNumber}</p>}
          </div>
          <div>
            <label className="block font-medium mb-2">Pin Code:</label>
            <input
              type="text"
              name="pinCode"
              value={formData.pinCode}
              onChange={handleChange}
              required
              className="w-full p-2 border text-black border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.pinCode && <p className="text-red-500 text-sm">{errors.pinCode}</p>}
          </div>
          <div className="col-span-2">
            <label className="block font-medium mb-2">Address:</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              className="w-full p-2 border text-black border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
          </div>
          <div className="col-span-2">
            <label className="block font-medium mb-2">Plan:</label>
            <select
              name="plan"
              value={formData.plan}
              onChange={handleChange}
              required
              className="w-full p-2 border text-black border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select a plan</option>
              <option value="plan1">Plan 1 - $100</option>
              <option value="plan2">Plan 2 - $200</option>
              <option value="plan3">Plan 3 - $300</option>
              <option value="plan4">Plan 4 - $400</option>
              <option value="plan5">Plan 5 - $500</option>
              <option value="plan6">Plan 6 - $600</option>
            </select>
            {errors.plan && <p className="text-red-500 text-sm">{errors.plan}</p>}
          </div>
          <div className="col-span-2">
            <label className="block font-medium mb-2">Specific Requirements:</label>
            <textarea
              name="specificRequirements"
              value={formData.specificRequirements}
              onChange={handleChange}
              className="w-full p-2 border text-black border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.specificRequirements && <p className="text-red-500 text-sm">{errors.specificRequirements}</p>}
          </div>
          <div className="col-span-2">
            <label className="block font-medium mb-2">Additional Features:</label>
            <textarea
              name="additionalFeatures"
              value={formData.additionalFeatures}
              onChange={handleChange}
              className="w-full p-2 border text-black border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.additionalFeatures && <p className="text-red-500 text-sm">{errors.additionalFeatures}</p>}
          </div>
          <div className="col-span-1">
            <label className="block font-medium mb-2">QR Code:</label>
            <img src="/assets/QR/qr.png" alt="QR Code" className="w-50 h-70 border border-white rounded m-2" />
          </div>
          <div>
            <label className="block font-medium mb-2">Transaction ID:</label>
            <input
              type="text"
              name="transactionId"
              value={formData.transactionId}
              onChange={handleChange}
              required
              className="w-full p-2 border text-black border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.transactionId && <p className="text-red-500 text-sm">{errors.transactionId}</p>}
          </div>
        </div>

        <div className="text-center mt-6">
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Add;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const EmployeeLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await fetch("https://ems-backend-omega.vercel.app/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Save token and employee name in localStorage
        localStorage.setItem("token", data.token);
        localStorage.setItem("employeeName", data.user.name); // Store employee name

        // Redirect to the customer form
        navigate("/add", { state: { employeeName: data.user.name } }); // Pass employee name to Add page
      } else {
        // Show error message from backend
        setError(data.message || "Login failed");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form className="p-6 bg-white shadow-md rounded" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-4">Employee Login</h2>
        {error && <p className="text-red-500 mb-3">{error}</p>}
        <div className="mb-4">
          <label className="block  text-gray-700">Email</label>
          <input
            type="email"
            className="w-full text-black px-3 py-2 border rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block  text-gray-700">Password</label>
          <input
            type="password"
            className="w-full px-3 text-black py-2 border rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button className="w-full bg-blue-500 text-white py-2 rounded" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default EmployeeLogin;

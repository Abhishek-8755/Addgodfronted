import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = ({ setIsAuthenticated }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Add real authentication logic here
    if (username === "user" && password === "password") {
      setIsAuthenticated(true); // Set authentication state to true
      navigate("/customerform"); // Redirect to the customer form after login
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="flex flex-col items-center text-black justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-blue-50">Login</h1>
      <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow-md w-96">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-3 mb-4 border rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-4 border rounded"
          required
        />
        <button type="submit" className="w-full p-3 bg-blue-600 text-white font-bold rounded">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;

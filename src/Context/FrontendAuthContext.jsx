import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

const FrontendAuthContext = createContext();

export const FrontendAuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check user authentication on load
  useEffect(() => {
    const verifyUser = async () => {
      try {
        const token = localStorage.getItem("frontendToken"); // Separate token for frontend
        if (token) {
          const response = await axios.get("https://ems-backend-omega.vercel.app/api/auth/verify-employee", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          if (response.data.user) {
            setUser(response.data.user);
          }
        } else {
          setUser(null);
        }
      } catch (error) {
        console.error("Error verifying user:", error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    verifyUser();
  }, []);

  const login = (user, token) => {
    setUser(user);
    localStorage.setItem("frontendToken", token); // Save frontend token
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("frontendToken");
  };

  return <FrontendAuthContext.Provider value={{ user, login, logout, loading }}>{children}</FrontendAuthContext.Provider>;
};

// Hook for consuming context
export const useFrontendAuth = () => useContext(FrontendAuthContext);

import React, { useEffect, useState } from "react";

const Telecaller = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginDetails, setLoginDetails] = useState({ username: "", password: "" });

  useEffect(() => {
    const handleOnlineStatus = () => {
      setIsOnline(navigator.onLine);
    };

    window.addEventListener("online", handleOnlineStatus);
    window.addEventListener("offline", handleOnlineStatus);

    return () => {
      window.removeEventListener("online", handleOnlineStatus);
      window.removeEventListener("offline", handleOnlineStatus);
    };
  }, []);

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginDetails({ ...loginDetails, [name]: value });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Placeholder for authentication logic
    if (loginDetails.username === "Addgod" && loginDetails.password === "caller") {
      setIsAuthenticated(true);
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div className="container p-4 mx-auto bg-gray-100 rounded-lg shadow-lg">
      {isOnline ? (
        isAuthenticated ? (
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdVxGwKLgN2JwhUi7TUEWrfC6W_uNonJgKmmqDqMRYEoURXKA/viewform?embedded=true"
            width="100%"
            height="1734"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
            className="w-full h-[80vh]"
          >
            Loading…
          </iframe>
        ) : (
          <div className="text-center">
            <h2 className="mb-4 text-2xl font-bold text-black">Login</h2>
            <form onSubmit={handleLoginSubmit} className="space-y-4">
              <div>
                <label htmlFor="username" className="block mb-2 text-lg font-semibold text-gray-700">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={loginDetails.username}
                  onChange={handleLoginChange}
                  className="w-full p-2 text-black border border-gray-300 rounded-lg"
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-lg font-semibold text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={loginDetails.password}
                  onChange={handleLoginChange}
                  className="w-full p-2 text-black border border-gray-300 rounded-lg"
                  required
                />
              </div>
              <button type="submit" className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600">
                Login
              </button>
            </form>
          </div>
        )
      ) : (
        <div className="text-center">
          <h2 className="mb-4 text-2xl font-bold text-black">No Internet Connection</h2>
          <p className="text-lg text-red-500">
            It looks like you are offline. Please check your internet connection and try again.
          </p>
        </div>
      )}
    </div>
  );
};

export default Telecaller;
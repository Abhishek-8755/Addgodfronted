import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { FrontendAuthProvider } from "./Context/FrontendAuthContext.jsx"; // Context for authentication

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FrontendAuthProvider>
      <App />
    </FrontendAuthProvider>
  </React.StrictMode>
);

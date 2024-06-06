import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./reset.css";
import Footer from "./routes/Signup/components/Footer/Footer.jsx";
import Header from "./routes/Signup/components/Header/Header.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <App />
    <Footer />
  </React.StrictMode>,
);

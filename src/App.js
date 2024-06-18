import "./App.css";
import { useState } from "react";
import Navbar from "./Components/Navbar";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import ForgotPassword from "./Components/ForgotPassword";
import Marketplace from "./Components/Marketplace";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserProfile from "./Components/UserProfile";
import HomePage from "./Components/HomePage";
import AboutUs from "./Components/AboutUs";
import Contact from "./Components/Contact";
import Property from "./Components/Property";
import Kyc from "./Components/Kyc";
import Dashboard from "./Components/Dashboard";
import PropertyDetails from "./Components/PropertyDetails";
import { Buffer } from "buffer";
window.Buffer = window.Buffer || Buffer;

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/horizon/marketPlace" element={<Marketplace />} />
        <Route path="/horizon" element={<HomePage />} />
        <Route path="/horizon/login" element={<Login />} />
        <Route path="/horizon/signup" element={<Signup />} />
        <Route path="/horizon/forgotPassword" element={<ForgotPassword />} />
        <Route path="/horizon/userProfile" element={<UserProfile />} />
        <Route path="/horizon/aboutus" element={<AboutUs />} />
        <Route path="/horizon/contact" element={<Contact />} />
        <Route path="/horizon/property/:id" element={<Property />} />
        <Route path="/horizon/kyc" element={<Kyc />} />
        <Route path="/horizon/dashboard" element={<Dashboard />} />
        <Route
          path="/horizon/property-details/:id"
          element={<PropertyDetails />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

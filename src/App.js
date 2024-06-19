import "./App.css";
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
        <Route path="/marketPlace" element={<Marketplace />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/userProfile" element={<UserProfile />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/property/:id" element={<Property />} />
        <Route path="/kyc" element={<Kyc />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/property-details/:id" element={<PropertyDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

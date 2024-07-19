import "./App.css";
import { Navigate, Route, Routes } from "react-router";
import Home from "./components/Home";
import Influencers from "./components/Influencers";
import BrandHome from "./components/BrandHome";
import EditProfile from "./components/Influencers/EditProfile";
import CampaignCreation from "./components/CampaignCreation";
import Contact from "./components/Brand/Contact";
import ManageCampaign from "./components/Brand/ManageCampaign";
import ManageSubs from "./components/Brand/ManageSubs";
import Orders from "./components/Brand/Orders";
import Landing from "./components/views/Landing";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Join from "./components/Join";
import AboutUs from "./components/AboutUs";
import Events from "./components/Events";
import FAQ from "./components/FAQ";
import Login from "./components/Login";
import { useEffect, useState } from "react";
import ProtectedRoute from "./components/Route/ProtectedRoute";

function getTokenData() {
  const token = localStorage.getItem("token");
  if (!token) return null;

  const tokenParts = token.split('.');
  if (tokenParts.length !== 3) return null;

  try {
    const payload = JSON.parse(atob(tokenParts[1]));
    const type = payload.type;
    localStorage.setItem('type', type);
    return type;
  } catch (e) {
    console.error("Invalid token:", e);
    return null;
  }
}

function isAuthenticated() {
  return localStorage.getItem('token');
}

function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/join" element={<Join />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contentCreator" element={<Influencers />} />
        <Route path="/brands" element={ <BrandHome />} />
        <Route path="/campaigncreation" element={<CampaignCreation />} />
        <Route path="/influencers/:id/profile" element={<EditProfile />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/manage-campaign" element={<ManageCampaign />} />
        <Route path="/manage-subs" element={<ManageSubs />} />
        <Route path="/orders-brand" element={<Orders />} />
        <Route path="/orders-influencer" element={<Orders />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/events" element={<Events />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </>
  );
}

export default App;

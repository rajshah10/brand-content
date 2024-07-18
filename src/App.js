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
import { useEffect } from "react";
// import Landing from "./views/Landing";

function isAuthenticated() {
  const token = localStorage.getItem("token");
  return !!token;
}



function App() {
  useEffect(()=>{
    isAuthenticated()
  },[isAuthenticated()])

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/join" element={<Join />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contentCreator" element={isAuthenticated() ? <Influencers /> : <Navigate to="/join" />} />
        <Route path="/brands" element={isAuthenticated() ? <BrandHome />:<Navigate to="/join" />}/>
        <Route path="/campaigncreation" element={isAuthenticated() ? <CampaignCreation /> : <Navigate to="/join" />} />
        <Route path="/influencers/:id/profile" element={isAuthenticated() ? <EditProfile /> : <Navigate to="/join" />} />
        <Route path="/contact" element={isAuthenticated() ? <Contact /> : <Navigate to="/join" />} />
        <Route path="/manage-campaign" element={isAuthenticated() ? <ManageCampaign /> : <Navigate to="/join" />} />
        <Route path="/manage-subs" element={isAuthenticated() ? <ManageSubs /> : <Navigate to="/join" />} />
        <Route path="/orders-brand" element={isAuthenticated() ? <Orders /> : <Navigate to="/join" />} />
        <Route path="/orders-influencer" element={isAuthenticated() ? <Orders /> : <Navigate to="/join" />} />
        <Route path="/about" element={<AboutUs /> } />
        <Route path="/events" element={ <Events /> } />
        <Route path="/faq" element={ <FAQ /> } />
      </Routes>
    </>
  );
}

export default App;

import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./components/Home";
import Influencers from "./components/Influencers";
import BrandHome from "./components/BrandHome";
import EditProfile from "./components/Influencers/EditProfile";
import CampaignCreation from "./components/CampaignCreation";
import Contact from "./components/Brand/Contact";


function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/influencers" element={<Influencers/>}/>
        <Route path="/brands" element={<BrandHome/>}/>
        <Route path="/campaigncreation" element={<CampaignCreation/>}/>
        <Route path="/influencers/:id/profile" element={<EditProfile/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </>
  );
}

export default App;

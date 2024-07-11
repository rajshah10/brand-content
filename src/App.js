import "./App.css";
import { Route, Routes } from "react-router";
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
// import Landing from "./views/Landing";



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
        <Route path="/manage-campaign" element={<ManageCampaign/>}/>
        <Route path="/manage-subs" element={<ManageSubs/>}/>
        <Route path="/orders-brand" element={<Orders/>}/>
        <Route path="/orders-influencer" element={<Orders/>}/>
        <Route path="/landing" element={<Landing/>}/>
      </Routes>
    </>
  );
}

export default App;

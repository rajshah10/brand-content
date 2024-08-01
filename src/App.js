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
import "@fortawesome/fontawesome-free/css/all.min.css";
import Join from "./components/Join";
import AboutUs from "./components/AboutUs";
import Events from "./components/Events";
import FAQ from "./components/FAQ";
import Login from "./components/Login";
import OrdersInfluencers from "./components/Influencers/OrdersInfluencers";
import ProtectedRoute from "./components/ProtectedRoute.js/ProtectedRoute";






function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/join" element={<Join />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/events" element={<Events />} />
        <Route path="/faq" element={<FAQ />} />
        <Route
          path="/contentCreator"
          element={
            <ProtectedRoute requiredUserType="contentCreator">
              <Influencers />
            </ProtectedRoute>} />
        <Route
          path="/orders"
          element={
            <ProtectedRoute requiredUserType="contentCreator">
              <Orders />
            </ProtectedRoute>
          } />
        <Route
          path="/influencers/profile"
          element={
            <ProtectedRoute requiredUserType="contentCreator">
              <EditProfile />
            </ProtectedRoute>
          } />
        <Route
          path="/brands"
          element={
            <ProtectedRoute requiredUserType="brand">
              <BrandHome />
            </ProtectedRoute>
          }
        />
        <Route
          path="/campaigncreation"
          element={
            <ProtectedRoute requiredUserType="brand">
              <CampaignCreation />
            </ProtectedRoute>
          } />
        <Route
          path="/manage-campaign"
          element={
            <ProtectedRoute requiredUserType="brand" >
              <ManageCampaign />
            </ProtectedRoute>
          } />
        {/* <Route path="/manage-subs" element={<ManageSubs />} /> */}
        <Route
          path="/orders-influencer"
          element={
            <ProtectedRoute requiredUserType="brand" >
              <OrdersInfluencers />
            </ProtectedRoute>
          } />

      </Routes>

    </>
  );
}

export default App;

import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./components/Home";
import Influencers from "./components/Influencers";
import BrandHome from "./components/BrandHome";


function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/influencers" element={<Influencers/>}/>
        <Route path="/brands" element={<BrandHome/>}/>
      </Routes>
    </>
  );
}

export default App;

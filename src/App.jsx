import React from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import Navigation from "./Components/Common/Navigation/Navigation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./Components/Pages/Hero/Hero";
import Footer from "./Components/Common/Footer/Footer";
import Banner from './Components/Pages/Banner/Banner';
import Revolutionize from "./Components/Pages/Revolutionize/Revolutionize";
import Revolutionizetitle from "./Components/Pages/Revolutionize/Revolutionizetitle";
import Features from './Components/Pages/Features/Features';
import Featurestitle from "./Components/Pages/Features/Featurestitle";
import Testimonials from "./Components/Pages/Testimonials/Testimonials";
import Aboutus from "./Components/Pages/Aboutus/Aboutus";
import Tailored from "./Components/Pages/Tailored/Tailored";
import Tailoredtitle from "./Components/Pages/Tailored/Tailoredtitle";
import Connect from "./Components/Pages/Connect /Connect";
import Connecttitle from "./Components/Pages/Connect /Connecttitle";
import Pricing from "./Components/Pages/Pricing/Pricing";
import Pricingtitle from "./Components/Pages/Pricing/Pricingtitle";
import Discover from "./Components/Pages/Discover/Discover";


function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 ml-64 mt-20"> 
          <Navigation />
          <Routes>
            <Route path="/hero" element={<Hero />} />
            <Route path="/banner" element={<Banner/>} />
            <Route path="/revolutionize" element={<Revolutionize />} />
            <Route path="/pagelayout/revolutionize" element={<Revolutionizetitle/>} />
            <Route path="/features" element={<Features />} />
            <Route path="/pagelayout/features" element={<Featurestitle />} />
            <Route path="/testimonials" element={<Testimonials/>} />
            <Route path="/aboutus" element={<Aboutus/> } />   
            <Route path="/pagelayout/tailored" element={<Tailoredtitle/> } />  
            <Route path="/tailored" element={<Tailored/> } />  
            <Route path="/connect" element={<Connect/> } /> 
            <Route path="/pagelayout/connect" element={<Connecttitle/> } />    
            <Route path="/pricing" element={<Pricing/> } /> 
            <Route path="/pagelayout/pricing" element={<Pricingtitle/> } /> 
            <Route path="/discover" element={<Discover/> } /> 
          </Routes>
        </div>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;

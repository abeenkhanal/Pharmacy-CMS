import React from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import Navigation from "./Components/Common/Navigation/Navigation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./Components/Pages/Hero/Hero";
import Footer from "./Components/Common/Footer/Footer";
import Banner from './Components/Pages/Banner/Banner';
import Revolutionize from "./Components/Pages/Revolutionize/Revolutionize";

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
          </Routes>
        </div>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;

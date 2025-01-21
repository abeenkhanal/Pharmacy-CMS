import React from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import Navigation from "./Components/Common/Navigation/Navigation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./Components/Pages/Hero/Hero";

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 ml-64 mt-20"> 
          <Navigation />
          <Routes>
            <Route path="/hero" element={<Hero />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

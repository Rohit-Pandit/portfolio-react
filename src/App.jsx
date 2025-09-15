import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Project from "./Components/Project/Project";
import Certificate from "./Components/Certificate/Certificate";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        {/* Navbar stays visible on all pages */}
        <Navbar />

        {/* Routes for different pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project" element={<Project />} />
          <Route path="/certificate" element={<Certificate />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;

import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Pages/Home/Navbar";
import Home from "./Pages/Home/Homescreen/index.js";
import ScrollToTop from "./ScrollToTop.js";
import ContactMe from "./Pages/Home/ContactMe.js";
import Education from "./Pages/Home/Education.js";
import Experience from "./Pages/Home/Experience.js";
import Project from "./Pages/Home/Project.js";
function App() {

  function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
}

  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/ContactMe" element={<ContactMe />} />
            <Route path="/Education" element={<Education />} />
            <Route path="/Experience" element={<Experience />} />
            <Route path="/Project" element={<Project />} />
          </Routes>

          <ScrollToTop/>
        </div>
       
      </Router>
    </div>
  );
}

export default App;
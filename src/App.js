import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import LandingPage from "./Pages/LandingPage";
import Contact from "./Pages/ContactUsPage";
import About from "./Pages/AboutUsPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="contact-us" element={<Contact />} />
          <Route path="about-us" element={<About />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;

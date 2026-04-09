import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import LandingPage from "./Pages/LandingPage";
import Contact from "./Pages/ContactUsPage";
import About from "./Pages/AboutUsPage";
import OilProduct from "./Pages/OilProduct";
import CapsuleProduct from "./Pages/CapsuleProduct";
import CapsuleProduct2 from "./Pages/CapsuleProduct2";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="contact-us" element={<Contact />} />
          <Route path="about-us" element={<About />} />
          <Route path="products/psoriasis-oil" element={<OilProduct />} />
          <Route
            path="products/psoriasis-capsule"
            element={<CapsuleProduct />}
          />
            <Route
            path="products/psoriasis-capsule"
            element={<CapsuleProduct2 />}
          />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;

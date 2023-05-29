// import { useState } from "react";

import "./App.css";
import Topbar from "./topbar/Topbar";
// import Home from "./pages/home/Home";
import About from "./pages/about/About";
import { Route, Routes } from "react-router-dom";
import Contact from "./pages/contact/Contact";
import Liked from "./pages/liked/Liked";
import Landingpage from "./Landingpage";
import Write from "./pages/write/Write";
import Profile from "./pages/profile/Profile";

function App() {
  return (
    <div div className="mm">
      <Topbar />
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/write" element={<Write />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/liked" element={<Liked />} />
      </Routes>
    </div>
  );
}

export default App;

{
  /* <div className="body">
        <Topbar />
        <Home />
      </div> */
}

import React, { useState, useEffect } from "react";

import "./topbar.css";
import SearchIcon from "@mui/icons-material/Search";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import FavoriteIcon from '@mui/icons-material/Favorite';
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

function Topbar() {
  const [darkicon, setdarkicon] = useState(<DarkModeIcon/>)
  
  // darkmode code
  const [mode, setmode] = useState("light-mode");

  useEffect(() => {
    document.documentElement.className = mode; ///imp
  }, [mode]);

  const toggler = () => {
    if (mode === "light-mode") {
      setmode("dark-mode");
      setdarkicon(<LightModeIcon/>)
    } else {
      setmode("light-mode");
      setdarkicon(<DarkModeIcon/>)
    }
  };
  // =============
  return (
    <div className="top">
      <div className="topleft">
        <FacebookIcon />
        <TwitterIcon />
        <PinterestIcon />
        <InstagramIcon />
      </div>
      <div className="topmid">
        <ul className="midlist">
          <li className="listitem">HOME</li>
          <li className="listitem">ABOUT</li>
          <li className="listitem">CONTACT</li>
          <li className="listitem">WRITE</li>
          <li className="listitem">PROFILE</li>
        </ul>
      </div>
      <div className="topright">
        <SearchIcon />
        <FavoriteBorderIcon />

        <NotificationsNoneIcon />
        <img
          className="img"
          src="https://images.pexels.com/photos/998850/pexels-photo-998850.jpeg?auto=compress&cs=tinysrgb&w=300"
          alt="pic"
        />
        <button className="toggle" onClick={toggler}>
          {darkicon}
        </button>
      </div>
    </div>
  );
}

export default Topbar;

import React, { useState, useEffect } from "react";

import logo from '../bloglogo.png'
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
import { Link } from "react-router-dom";

const getstoragemode = () => {
  // localStorage for darkmode
  let mode = "light-mode";
  if (localStorage.getItem("mode")) {
    mode = localStorage.getItem("mode");
  }
  return mode;
};

function Topbar() {
  const [darkicon, setdarkicon] = useState(<DarkModeIcon />);

  // darkmode code
  const [mode, setmode] = useState(getstoragemode());

  useEffect(() => {
    document.documentElement.className = mode; ///imp
    localStorage.setItem("mode", mode);
  }, [mode]);

  const toggler = () => {
    if (mode === "light-mode") {
      setmode("dark-mode");
      setdarkicon(<LightModeIcon />);
    } else {
      setmode("light-mode");
      setdarkicon(<DarkModeIcon />);
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
      <div className="logo">
      <Link
              to={`/`}
              style={{ textDecoration: "none", color: "var(--bg-pri" }}
            >
              <img src={logo} alt="logo" className="logo" />
            </Link>
        </div>
      <div className="topmid">
        <ul className="midlist">
          <li className="listitem">
            <Link
              to={`/`}
              style={{ textDecoration: "none", color: "var(--bg-pri" }}
            >
              HOME
            </Link>
          </li>

          <li className="listitem">
            <Link
              to={`About`}
              style={{ textDecoration: "none", color: "var(--bg-pri" }}
            >
              ABOUT
            </Link>
          </li>
          <li className="listitem">
            <Link
              to={`Contact`}
              style={{ textDecoration: "none", color: "var(--bg-pri" }}
            >
              CONTACT
            </Link>
          </li>
          <li className="listitem">
            <Link
              to={`write`}
              style={{ textDecoration: "none", color: "var(--bg-pri" }}
            >
              WRITE{" "}
            </Link>
          </li>
          <li className="listitem">
            <Link
              to={`profile`}
              style={{ textDecoration: "none", color: "var(--bg-pri" }}
            >
              PROFILE
            </Link>
          </li>
        </ul>
      </div>
      <div className="topright">
        <div className="righticons">
          <SearchIcon />
          <Link to={`liked`}>
            <FavoriteBorderIcon />
          </Link>

          <NotificationsNoneIcon />
        </div>

        <button className="toggle" onClick={toggler}>
          {darkicon}
        </button>
        <Link to={`profile`}>
          <img
            className="img"
            src="https://images.pexels.com/photos/998850/pexels-photo-998850.jpeg?auto=compress&cs=tinysrgb&w=300"
            alt="pic"
          />
        </Link>
      </div>
    </div>
  );
}

export default Topbar;

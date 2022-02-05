import React from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { Link } from "react-router-dom";

function Header({ onClick, darkMode }) {
  return (
    <div className={`header ${darkMode ? "darkMode" : ""}`}>
      <div className="header_container">
        <Link to="/" className={`logo ${darkMode ? "darkMode" : ""}`}>
          Where in the world?
        </Link>

        <div className="switch_mode" onClick={onClick}>
          <DarkModeIcon />
          <h3>Dark Mode</h3>
        </div>
      </div>
    </div>
  );
}

export default Header;

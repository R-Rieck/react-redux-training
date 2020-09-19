import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../ressources/logo.png";

export const Header = () => {
  const activeStyle = { color: "#F15B2A" };

  return (
    <nav className="header-container">
      <img src={logo} alt="Pluralsight" />
      <div className="header-link-items">
        <NavLink exact to="/" activeStyle={activeStyle}>
          Home
        </NavLink>
        <NavLink to="/about" activeStyle={activeStyle}>
          About
        </NavLink>
        <NavLink to="/courses" activeStyle={activeStyle}>
          Courses
        </NavLink>
      </div>
    </nav>
  );
};

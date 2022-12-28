import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../ouadjih.png";
export const Navbar = () => {
  const [screenWidth, getScreenWidth] = useState({
    dynamicWidth: window.innerWidth,
  });
  const setScreenWidth = () => {
    getScreenWidth({
      dynamicWidth: window.innerWidth,
    });
  };
  useEffect(() => {
    window.addEventListener("resize", setScreenWidth);

    return () => {
      window.removeEventListener("resize", setScreenWidth);
    };
  }, [screenWidth]);
  return (
    <nav className="navbar">
      <Link to="/">
        <img class="navbar-logo" src={logo} alt="logo" />
      </Link>
      {screenWidth.dynamicWidth > 800 ? (
        <ul className="navbar-list">
          <li className="navbar-list-item hvr-buzz">
            <Link to="/Projects">Projects</Link>
          </li>
          <li className="navbar-list-item hvr-buzz">
            <Link to="/Contact">Contact</Link>
          </li>
          <li className="navbar-list-item hvr-buzz">
            <Link to="/Learn">Learn with me</Link>
          </li>
        </ul>
      ) : (
        <ul className="navbar-list-phone">
          <li className="navbar-list-item ">
            <Link to="/Projects">Projects</Link>
          </li>
          <li className="navbar-list-item ">
            <Link to="/Contact">Contact</Link>
          </li>
          <li className="navbar-list-item">
            <Link to="/Learn">Learn with me</Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

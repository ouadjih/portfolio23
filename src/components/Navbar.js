import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../ouadjih.png";
import open from "../Assets/Images/open.png";
import cl from "../Assets/Images/close.png";
export const Navbar = () => {
  const [screenWidth, getScreenWidth] = useState({
    dynamicWidth: window.innerWidth,
  });
  const [close, setClose] = useState(false);
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
      {
      screenWidth.dynamicWidth > 800 ? 
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
      : 
      
      
      close && screenWidth.dynamicWidth < 800  ? 
       
        <ul className="navbar-list-phone">
            <img
          className="HamburgerCl"
          onClick={() => setClose(!close)}
          src={cl}
          alt="hamburger"
         />
         <div className="list-phone">
          <li className="navbar-list-item-phone">
            <Link onClick={()=>setClose(false)} className="Itemph" to="/Projects">
              Projects
            </Link>
          </li>
          <li className="navbar-list-item-phone">
            <Link onClick={()=>setClose(false)} className="Itemph" to="/Contact">
              Contact
            </Link>
          </li>
          <li onClick={()=>setClose(false)} className="navbar-list-item-phone">
            <Link className="Itemph" to="/Learn">
              Learn with me
            </Link>
          </li>
          </div>
        </ul>
      : <img
      className="Hamburger"
      onClick={() => setClose(!close)}
      src={open}
      alt="hamburger"
     />}
      
    </nav>
  );
};

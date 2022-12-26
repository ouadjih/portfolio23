import React from 'react'

import { Link } from 'react-router-dom';
import './Navbar.css'
import logo from '../ouadjih.png'
export const Navbar = () => {

  return (
    <nav className='navbar'>
     <Link to="/"><img class="navbar-logo"src={logo} alt="logo"/></Link>
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
  </nav>
  )
}

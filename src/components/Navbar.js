import React from 'react'

import { Link } from 'react-router-dom';
import './Navbar.css'
import logo from '../ouadjih.png'
export const Navbar = () => {

  return (
    <nav className='navbar'>
    <img class="navbar-logo"src={logo} alt="logo"/>
    <ul className="navbar-list">
      <li className="navbar-list-item hvr-buzz">
        <Link to="/">Home</Link>
      </li>
      <li className="navbar-list-item hvr-buzz">
        <Link to="/Projects">Projects</Link>
      </li>
      <li className="navbar-list-item hvr-buzz">
        <Link to="/Contact">Contact</Link>
      </li>
    </ul>
  </nav>
  )
}

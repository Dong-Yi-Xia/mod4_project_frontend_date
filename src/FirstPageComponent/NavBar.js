import React from 'react';
import {NavLink} from 'react-router-dom'

const NavBar = () => {
  return(
    <ul className="nav">
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/characters">Characters</NavLink>
      </li>
      <li>
        <NavLink to="/appointments">Appointments</NavLink>
      </li>
      <li>
        <NavLink to="/outfits">Outfits</NavLink>
      </li>
      <li>
        <NavLink to="/profile">My Profile</NavLink>
      </li>
      {/* Need condition statement either login or logout */}
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
    </ul>
  )
};

export default NavBar;

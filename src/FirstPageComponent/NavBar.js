import React from 'react';
import {NavLink, Link} from 'react-router-dom'

const NavBar = (props) => {


  let handleClick =() => {
    props.handleLogOut()
  }

  // console.log(localStorage)
  
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
  
      <li>
      {localStorage.token ? <Link onClick={handleClick}> LogOut </Link> : <NavLink to="/login"> LogIn </NavLink> }
      </li>

      {/* <li>
        <NavLink to="/login">Login</NavLink>
      </li> */}
    </ul>
  )
};

export default NavBar;

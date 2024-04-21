import React from 'react'
import { NavLink } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';

import './Navbar.css'

const Navbar = () => {
    const { isLoggedIn } =useAuthContext();


  return (
    <nav className="nav">
      <div className="nav__bar">
        <div className="logo">Logo</div>
        <ul className="menu">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>

          {isLoggedIn ? (
            <li>
              <NavLink to="/log-out">log Out</NavLink>
            </li>
          ) : (
            <>
              <li>
                <NavLink to="/sign-up">Sign up</NavLink>
              </li>
              <li>
                <NavLink to="/login">Log In</NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar
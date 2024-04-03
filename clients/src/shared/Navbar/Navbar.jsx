import React from 'react'
import { NavLink } from 'react-router-dom';

import './Navbar.css'

const Navbar = () => {
  return (
    <nav className='nav'>
        <div className="nav__bar">
            <div className="logo">Logo</div>
            <ul className="menu">
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/login">Log In</NavLink>
                </li>
                <li>
                    <NavLink to="/sign-up">Sign up</NavLink>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar
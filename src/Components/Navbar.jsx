import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navbar.css';

function Navbar() {
    return (
        <nav className="flex navbar">
            <NavLink className="button" to="/" activeClassName="active-style">
                Home
            </NavLink>
            <NavLink className="button" to="/add-activity" activeClassName="active-style">
                Add Activity
            </NavLink>          
        </nav>
    )
}

export default Navbar

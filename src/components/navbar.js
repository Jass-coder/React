import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = ({auth}) =>{
    return  auth ? <div className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="navbar-brand">
            CSSOFT
            </div>
            <ul className="navbar-nav">
                <li className="navbar-item">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="navbar-item">
                    <Link className="nav-link" to="/logout">Logout</Link>
                </li>
                <li className="navbar-item">
                    <Link className="nav-link" to="about">About</Link>
                </li>
            </ul>
        </div>:<div className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="navbar-brand">
            CSSOFT
            </div>
            <ul className="navbar-nav">
                <li className="navbar-item">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="navbar-item">
                    <Link className="nav-link" to="/login">Login</Link>
                </li>
                <li className="navbar-item">
                    <Link className="nav-link" to="/register">Register</Link>
                </li>
                <li className="navbar-item">
                    <Link className="nav-link" to="about">About</Link>
                </li>
            </ul>
        </div>
}

export default Navbar;
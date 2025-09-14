import React from "react";
import { Link } from "react-router-dom";  // 👈 use Link instead of <a>
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/Coffee">Coffee Hub</Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/Home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/About">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Contact">Contact Us</Link>
            </li>
          <li>
            <Link className="nav-link" to="/Menu">Menu</Link>
                        </li>
                        <li>
            <Link className="nav-link" to="/My Order">My Order</Link>
                        </li>
                        <li>
            <Link className="nav-link" to="/Card">Card</Link>
                        </li>
          </ul>

          {/* Buttons on right side */}
          <div className="d-flex">
            <Link to="/SignUP">
              <button className="order">Sign In</button>
            </Link>
            <Link to="/Login">
            <button className="order ms-2">Login</button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
    
  );
}

export default Navbar;

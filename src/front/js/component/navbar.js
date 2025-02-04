import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";
import userDropdown from "../../img/userDropdown.png";
export const Navbar = () => {
  return (
    <nav className="navbar navbar-secondary bg-secondary p-0" style={{ height: '75px' }}>
      <div className="container-fluid d-flex justify-content-between align-items-center h-100">
        {/* Dropdown Hamburger Menu for navigating between mentor or TA more in depth details tabs */}
        <div className="d-flex align-items-center">

          <a
            className="nav-link text-white"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{ width: '25px', height: '25px' }}>
              <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/>
            </svg>
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Teacher Assistant Details</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Mentor Details</a></li>
            
          </ul>
        </div>

        {/* Logo and Home button */}
        <div className="d-flex justify-content-center" style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
          <Link to="/" id="home-logo">
            <div className="logo-div text-center">
              <img
                src="https://st2.depositphotos.com/1071184/9156/v/450/depositphotos_91564818-stock-illustration-time-stamping-concept.jpg"
                className="logo-img img-fluid circular-logo"
                style={{ maxHeight: 45 }}
                alt="Logo/Home Button"
              />
            </div>
          </Link>
        </div>

        {/* User dropdown menu */}
        <div className="profile d-flex align-items-center p-3 ms-auto">
          <a
            className="nav-link text-white"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
  <img
    src={userDropdown}
    alt="User Dropdown"
    style={{ width: "40px", height: "40px" }}
  />
          </a>
          <ul className="dropdown-menu dropdown-menu-end">
            <li><a className="dropdown-item" href="#">User Settings</a></li>
            <li><a className="dropdown-item" href="#">Logout</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

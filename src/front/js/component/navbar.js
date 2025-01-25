import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-secondary bg-secondary" style={{ height: '100px' }}>
      <div className="container-fluid d-flex justify-content-between align-items-center h-100">
        {/* Dropdown Hamburger Menu for navigating between mentor or TA more in depth details tabs */}
        <div className="p-3">
          <a
            className="nav-link text-white"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{ width: '40px', height: '40px' }}>
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
                style={{ maxHeight: 80 }}
                alt="Logo/Home Button"
              />
            </div>
          </Link>
        </div>

        {/* User dropdown menu */}
        <div className="profile p-3 ms-auto">
          <a
            className="nav-link dropdown-toggle text-white"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{ width: '40px', height: '40px' }}>
              <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"/>
            </svg>
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

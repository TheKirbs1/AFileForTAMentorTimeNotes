import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-secondary bg-secondary">
      <div className="container d-flex justify-content-center">
        <Link to="/" id="home-logo">
          <div className="logo-div text-center">
            <img
              src="https://st2.depositphotos.com/1071184/9156/v/450/depositphotos_91564818-stock-illustration-time-stamping-concept.jpg"
              className="logo-img img-fluid circular-logo"
              style={{ maxHeight: 160 }}
              alt="Pet Logo/Home Button"
            />
          </div>
        </Link>
      </div>
    </nav>
  );
};

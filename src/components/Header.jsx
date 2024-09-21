import React from "react";
import "./Header.css"; // CSS faylını əlavə edin

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="logoipsum.png" alt="Logo" />
      </div>
      <div className="menu">
        <a href="#" className="active">Home</a>
        <a href="#">Features</a>
        <a href="#">Pricing</a>
        <a href="#">Blog</a>
      </div>
      <a href="#" className="get-started">Get Started</a>
    </nav>
  );
}

export default Navbar;

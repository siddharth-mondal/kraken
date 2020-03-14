import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <>
      <nav className="nav">
        <div className="nav-left">
          <a href="home" className="logo">
            Sportasium
          </a>
        </div>
        <div className="nav-center"></div>
        <div className="nav-right">
          <a href="login-signup">Login / Sign Up</a>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

import { useState } from "react";
import React from "react";

const Navbar = () => {
  const [showNav, setShowNav] = useState(true);

  const handleShow = () => setShowNav(!showNav);

  const objStyle = {
    left: "110%",
  };

  const objStyle2 = {
    left: "0%",
  };

  return (
    <header className="content__header">
      <nav className="navbar__menu">
        <div className="content__logo">
          <img src="../icon2.png" alt="logo" />
        </div>
        <ul
          style={showNav ? objStyle : objStyle2}
          className="navbar__menu-list"
        >
          <li>
            <i className="bx bx-home"></i>
            <a href="#">Home</a>
          </li>
          <li>
            <i className="bx bx-news"></i>
            <a href="#">About Me</a>
          </li>
          <li>
            <i className="bx bx-star"></i>
            <a href="#">Projects</a>
          </li>
          <li>
            <i className="bx bx-box"></i>
            <a href="#">Tools</a>
          </li>
        </ul>

        <div className="navbar__icons">
          {showNav ? (
            <i className="bx bx-menu handleIconNavbar" onClick={handleShow}></i>
          ) : (
            <i className="bx handleIconNavbar bx-x" onClick={handleShow}></i>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

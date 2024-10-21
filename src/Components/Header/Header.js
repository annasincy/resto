import React from "react";
import "../../App.css";
import "./Header.css";

function Header() {
  return (
    <div className="navbar d-flex justify-content-between bg-color-main py-3 px-3">
      <div className="logo">
        <h3>Zoma Food App</h3>
      </div>
      <div className="menu">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Menu</a>
          </li>
          <li>
            <a href="#">Support</a>
          </li>
          <li>
            <a href="#">Partner with us</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;

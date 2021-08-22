import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div id="header">
      <div className="title">
        <h1>Our Menu</h1>
      </div>
      <div className="line">
        <span />
      </div>
      <div className="menu_list">
        <ul>
          <Link to="/" style={{textDecoration:"none"}}>
            <li>All</li>
          </Link>
          <Link to="/category/breakfast" style={{textDecoration:"none"}}>
            <li>Breakfast</li>
          </Link>
          <Link to="/category/lunch" style={{textDecoration:"none"}}>
            <li>Lunch</li>
          </Link>
          <Link to="/category/shakes" style={{textDecoration:"none"}}>
            <li>Shakes</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Header;

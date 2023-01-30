import React from "react";
import shopicon from "../Data/shopIcon.png"

export const Navbar = () => {
    return (
      <div className="navbar--section">
         <nav className="navbar">
            <div className="nav--icon">Icon</div>
            <div className="nav--title">Main Text</div>
            <div className="nav--link">Shop</div>
            <div className="nav--cart">CartIcon</div>
         </nav>
      </div>
    )
}
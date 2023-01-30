import * as React from "react";
import pokeball from "../Data/pokeBall.png"
import cart from "../Data/shopCart.png"
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
    return (
         <div className="navbar--section">
            <nav className="navbar">
               <div className="nav--icon">
                  <img  src={pokeball} alt="not Found" />
               </div>
               <div className="nav--title">
                  <Link to="/">Pokemon Shop</Link>
               </div>
               <div className="nav--link">
                  <NavLink
                     id="test"
                     to="/shop"
                     style={({ isActive }) => {return isActive ? {color: "red"} : {color: "blue"}}}
                     >Shop</NavLink>
               </div>
               <div className="nav--cart">
                  <img src={cart} alt="not Found" />
               </div>
            </nav>
         </div>

    )
}
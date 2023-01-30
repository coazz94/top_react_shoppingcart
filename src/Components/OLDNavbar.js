import React from "react";
import shopicon from "../Data/shopIcon.png"

export const Navbar = () => {
    return (
         <div class="page-wrapper">
               <div class="nav-wrapper">
                  <div class="grad-bar"></div>
                  <nav class="navbar">
                    <img src={shopicon} alt="notfound"/>
                    <div>Homepage</div>
                     <ul class="nav no-search">
                        <li class="nav-item">Home</li>
                        <li class="nav-item">Shop</li>
                        <li class="nav-item">Contact</li>
                        {/* href="#" */}
                     </ul>
                  </nav>
               </div>
            </div>
    )
}
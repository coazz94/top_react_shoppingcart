import React from "react";
import shopicon from "../Data/shopIcon.png"

export const Navbar = () => {
    return (
            <div class="page-wrapper">
               <div class="nav-wrapper">
                  <div class="grad-bar"></div>
                  <nav class="navbar">
                    <img src={shopicon}></img>
                     {/* <img src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c8/Bluestar_%28bus_company%29_logo.svg/1280px-Bluestar_%28bus_company%29_logo.svg.png" alt="Company Logo"> */}
                     <div class="menu-toggle" id="mobile-menu">
                        <span class="bar"></span>
                        <span class="bar"></span>
                        <span class="bar"></span>
                     </div>
                     <ul class="nav no-search">
                        <li class="nav-item">Home</li>
                        <li class="nav-item">About</li>
                        <li class="nav-item">Work</li>
                        <li class="nav-item">Careers</li>
                        <li class="nav-item">Contact Us</li>
                        {/* href="#" */}
                        <i class="fas fa-search" id="search-icon"></i>
                        {/* <input class="search-input" type="text" placeholder="Search.."> */}
                     </ul>
                  </nav>
               </div>
               <section class="headline">
                  <h1>Responsive Navigation</h1>
                  <p>Using CSS grid and flexbox to easily build navbars!</p>
               </section>
               <section class="features">
                  <div class="feature-container">
                     {/* <img src="https://cdn-images-1.medium.com/max/2000/1*HFAEJvVOq4AwFuBivNu_OQ.png" alt="Flexbox Feature"> */}
                     <h2>Flexbox Featured</h2>
                     <p>This pen contains use of flexbox for the headline and feature section! We use it in our mobile navbar and show the power of mixing css grid and flexbox.</p>
                  </div>
                  <div class="feature-container">
                     {/* <img src="https://blog.webix.com/wp-content/uploads/2017/06/20170621-CSS-Grid-Layout-710x355-tiny.png" alt="Flexbox Feature"> */}
                     <h2>CSS Grid Navigation</h2>
                     <p>While flexbox is used for the the mobile navbar, CSS grid is used for the desktop navbar showing many ways we can use both.</p>
                  </div>
                  <div class="feature-container">
                     {/* <img src="https://www.graycelltech.com/wp-content/uploads/2015/06/GCT-HTML5.jpg" alt="Flexbox Feature"> */}
                     <h2>Basic HTML5</h2>
                     <p>This pen contains basic html to setup the page to display the responsive navbar.</p>
                  </div>
               </section>
            </div>
    )
}
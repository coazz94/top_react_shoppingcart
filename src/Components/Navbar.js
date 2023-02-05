import * as React from "react";
import pokeball from "../Data/pokeBall.png"
import cart from "../Data/shopCart.png"
import { Link, NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import  styles from "../css/Navbar.module.css"

export function Navbar({cartElements}) {

   const [theme, setTheme] = useState(false);

   const location = useLocation()

   useEffect(() => {
      setTheme(
         location.pathname === "/"
           ? true
           : false
       );
   }, [location])

   const navbarFontColor = {
      color: theme ? "white" : "black",
   }

   const navbarBg ={
      backgroundColor: theme ? "rgba(0, 128, 128, 0.2)" : "rgba(126, 125, 125, 0.2)"
   }

    return (
         <nav className={styles.navbar} style={navbarBg}>
            <img className={styles.logo} src={pokeball} alt="not Found" />
            <ul className={styles.navLinks}>
               <div className={styles.menu}>
                  <li>
                     <NavLink
                        to="/"
                        style={navbarFontColor}
                     >Pokemon Shop
                     </NavLink>
                  </li>
                  <li>
                     <NavLink
                        to="/shop"
                        style={navbarFontColor}
                     >Shop
                     </NavLink>
                  </li>
                  <li className={styles.services}>
                     {/* <a href="/">Services</a> */}
                     <div style={navbarFontColor}>Services</div>
                     <ul className={styles.dropdown}>
                        <li><div href="/">under Construction</div></li>
                        <li><div href="/">under Construction</div></li>
                     </ul>
                  </li>
                  <li>
                     <Link to="/cart" style={navbarFontColor}>
                           <img className={styles.cartSymbol} src={cart} alt="not Found" />
                           {(cartElements !== undefined && cartElements !== 0) &&
                              <div className={styles.cartCount}>
                                 {cartElements}
                              </div>
                           }
                     </Link>
                  </li>
               </div>
            </ul>
         </nav>
    )
   }
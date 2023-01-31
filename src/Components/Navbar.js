import * as React from "react";
import pokeball from "../Data/pokeBall.png"
import cart from "../Data/shopCart.png"
import { Link, NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "../css/Navbar.module.css"

export const Navbar = (props) => {

   const [light, setTheme] = useState(false);

   const location = useLocation()

   useEffect(() => {
      setTheme(
         location.pathname === "/cart" ||
           location.pathname === "/shop"
           ? true
           : false
       );
   }, [location])

   console.log(styles)

    return (
         <div className={styles.navbarSection}>
            <nav className={styles.navbar} id={light && styles.light }>
               <div className={styles.navIcon}>
                  <img  src={pokeball} alt="not Found" />
               </div>
               <div className={styles.navTitle}>
                  <Link to="/">Pokemon Shop</Link>
               </div>
               <div className={styles.navLink}>
                  <NavLink
                     id="test"
                     to="/shop"
                     style={({ isActive }) => {return isActive ? {textDecoration:"underline"} : {color: "white"}}}
                     >Shop</NavLink>
               </div>
               <div className={styles.navCart}>
                  <Link to="/cart">
                        <img className={styles.cartSymbol} src={cart} alt="not Found" />
                  </Link>
               </div>
            </nav>
         </div>
    )
}
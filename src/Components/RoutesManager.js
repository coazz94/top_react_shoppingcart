import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { Shop } from "./Shop";
import { Cart } from "./Cart";



export const RoutesManager = () => {
    return (
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
    )
}

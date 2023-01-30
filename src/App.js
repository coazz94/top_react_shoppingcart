import React from "react"
// import { Navbar } from "./Components/Navbar"
import { RoutesManager } from "./Components/RoutesManager"
import { Navbar } from "./Components/Navbar"
import "./Components/styles.css"


export const App = () => {

    return (
        <>
            <Navbar/>
            <RoutesManager />
        </>
        )
}


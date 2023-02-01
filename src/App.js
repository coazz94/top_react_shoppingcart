import React from "react"
// import { Navbar } from "./Components/Navbar"
import { RoutesManager } from "./Components/RoutesManager"
import "./Components/styles.css"
import { Navbar } from "./Components/Navbar"


export function App() {

    return (
        <>
            <Navbar/>
            <RoutesManager />
        </>
        )
}


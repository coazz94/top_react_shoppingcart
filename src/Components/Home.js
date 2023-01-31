import React, { useEffect } from "react"
import background from "../Data/pokeBackground.jpg"

export const Home = () => {

    // useEffect(() => {
    //     // Set Page main Background
    //     document.body.style.backgroundImage = `url("${background}")`;
    //     // Chnage navbar to not white bg
    //     const navBg = document.querySelector(".navbar.whitebg")
    //     navBg !== null && navBg.classList.remove("whitebg")
    // }, [])

    return (
        <>
            <section className="main--home">
                <div className="main--title">Buy the Best Pokemon Card Online
                    <p>Sale Ongoing, safe up to 20%</p>
                </div>
            </section>
        </>
    )
}
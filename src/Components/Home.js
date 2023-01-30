import React from "react"
import background from "../Data/pokeBackground.jpg"

export const Home = () => {

    document.body.style.backgroundImage = `url("${background}")`;

    return (
        <>
            <section className="main--home ">
                <div className="main--title">Buy the Best Pokemon Card Online
                    <p>Sale Ongoing, safe up to 20%</p>
                </div>
            </section>
        </>
    )
}
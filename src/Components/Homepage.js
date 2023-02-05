import React, { useEffect } from "react"
import background from "../Data/pokeBackground.jpg"
import styles from "../css/Home.module.css"

export function Home() {

    useEffect(() => {
        document.body.style.backgroundImage = `url("${background}")`;
    }, [])

    return (
        <section className={styles.mainHome}>
            <div className={styles.mainTitle}>Buy the Best Pokemon Card Online
                <p>Sale Ongoing, safe up to 20%</p>
            </div>
        </section>
    )
}
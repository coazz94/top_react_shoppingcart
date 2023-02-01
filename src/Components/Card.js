import React from "react"
import styles from "../css/Shop.module.css"

export function Card (props) {

    return (
        <>
            <div className={styles.cardLayout} onClick={props.toggle}>
                <img src={props.url} alt="not Found" />
                <h1>{props.name}</h1>
                <p className={styles.cardPrice}>{props.price} $</p>
            </div>
        </>
    )
}
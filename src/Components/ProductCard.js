import React from "react"
import styles from "../css/Shop.module.css"
import { Link } from "react-router-dom"

export function Card (props) {

    return (
            <Link className={styles.cardLink} to={`/shop/${props.id}`} state={{data : props}}>
                <div className={styles.cardLayout} onClick={props.toggle}>
                    <img src={props.url} alt="not Found" />
                    <h1>{props.name}</h1>
                    <p className={styles.cardPrice}>{props.price} $</p>
                </div>
            </Link>
    )
}




import React, { useEffect, useState } from "react"
import styles from "../css/Shop.module.css"

export const Shop = (props) => {

    useEffect(() => {
      // set the background to white
      document.body.style = 'background: white;';
    }, [])

    console.log(props.data)

    return (
      <>
        <div className={styles.shopSection}>

        </div>
      </>

    )
}
import React, { useEffect } from "react"
import styles from "../css/Shop.module.css"
import { Card } from "./Card"




export function Shop(props) {
    useEffect(() => {
      // set the background to white
      document.body.style.backgroundColor = "white";
      document.body.style.backgroundImage = null;
    }, [])

    const cardArray = props.data.map(pokemon => {
      return(
        <Card
          key={pokemon.id}
          id = {pokemon.id}
          name={pokemon.name}
          url={pokemon.picUrl}
          price = {Math.floor(Math.random() * 50) + 50}
        />
      )
    })


    return (
      <>
        <div className={styles.shopSection}>
          <div className={styles.cardSection}>
                {cardArray}
            </div>
        </div>
      </>
    )
}
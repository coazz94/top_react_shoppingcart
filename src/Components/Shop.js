import React, { useEffect } from "react"
import styles from "../css/Shop.module.css"
import background from "../Data/grayBackground.jpg"
import { Card } from "./ProductCard"


export function Shop(props) {

    useEffect(() => {
      document.body.style.backgroundImage = `url("${background}")`;
    }, [])

    const cardArray = props.data.map(pokemon => {
      return(
        <Card
          key={pokemon.id}
          id = {pokemon.id}
          name={pokemon.name}
          url={pokemon.picUrl}
          price = {pokemon.price}
        />
      )
    })

    return (
        <div className={styles.shopSection}>
          <div className={styles.cardSection}>
              {cardArray}
          </div>
        </div>
    )
}
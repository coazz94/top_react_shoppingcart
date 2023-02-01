import React, { useEffect } from "react"
import styles from "../css/Shop.module.css"
import { Card } from "./Card"

export const Shop = (props) => {

    useEffect(() => {
      // set the background to white
      document.body.style = 'background: white';
    }, [])

    const cardArray = props.data.map(pokemon => {
      return(
        <Card
          key={pokemon.id}
          name={pokemon.name}
          url={pokemon.picUrl}
          toggle={()=> print(pokemon.id)}
        />
      )
    })

    function print(id) {
      console.log(id)
    }


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
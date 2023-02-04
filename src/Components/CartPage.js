import React, { useEffect } from "react"
import "../css/Cartpage.module.css"


export function Cart({data}) {

    useEffect(() => {
        // set the background to white
        document.body.style.backgroundColor = "white";
        document.body.style.backgroundImage = null;
      }, [])


      const dataArray = data.map(pokemon =>  {
        return (
            <h1>{pokemon.name}</h1>
        )
      })


      return (
        <>
            {dataArray}

        </>
    )
}
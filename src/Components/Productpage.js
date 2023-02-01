import React from "react"
import { useParams } from "react-router-dom";

export function ProductPage(props) {
    const params = useParams();


    const product = props.data.filter(pokemon => {
         const id1 = parseInt(params.id);
         const id2 = pokemon.id;
         if (id1 === id2) return pokemon;
    })

    console.log(product)


    return <h1>ProductPage</h1>
}
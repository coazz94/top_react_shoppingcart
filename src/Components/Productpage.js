import React from "react"
import { useParams } from "react-router-dom";

export function ProductPage({data}) {
    const params = useParams();

    const product = data.filter(pokemon => {
        return parseInt(params.id) === pokemon.id && pokemon;
    })

    return <h1>ProductPage</h1>
}
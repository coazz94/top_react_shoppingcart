import React from "react"
import { useLocation, useParams } from "react-router-dom";

export function ProductPage({data}) {
    const params = useParams();

    const product = data.filter(pokemon => {
        return parseInt(params.id) === pokemon.id && pokemon;
    })


    const location = useLocation()




    return (
        <>
            <h1>Test</h1>
            <p>{location.state.data.name}</p>
        </>
    )
}
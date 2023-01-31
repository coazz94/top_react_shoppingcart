import React, { useEffect } from "react"

export const Cart = () => {

    useEffect(() => {
        document.body.style.backgroundImage = `none`;
    }, [])

    return (
        <h1>Cart</h1>
    )
}
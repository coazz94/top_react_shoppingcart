import React, { useEffect } from "react"

export function Cart() {

    useEffect(() => {
        document.body.style.backgroundImage = `none`;
    }, [])

    return (
        <h1>Cart</h1>
    )
}
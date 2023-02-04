import React, { useEffect } from "react"


export function Cart({data}) {

    useEffect(() => {
        document.body.style.backgroundImage = `none`;
    }, [])

    console.log(data)

    return (
        <>
            Cart
        </>
    )
}
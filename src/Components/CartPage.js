import React, { useEffect, useState } from "react"
import styles from "../css/Cartpage.module.css"

export function Cart({data}) {

    const [totalPrice, SetPrice] = useState(0)

    useEffect(() => {
        // set the background to white
        document.body.style.backgroundColor = "white";
        document.body.style.backgroundImage = null;
      }, [])


      const dataArray = data.map((pokemon, index) =>  {
        return (
          <tr>
              <th scope="row">{index + 1}</th>
              <td>{pokemon.name}</td>
              <td>{pokemon.price} $</td>
              <td>{pokemon.quantity}</td>
              <td>{pokemon.quantity * pokemon.price} $</td>
          </tr>
        )
      })

      useEffect(() => {
        data.forEach(pokemon => {
          const total = pokemon.quantity * pokemon.price;
          SetPrice(prevData => prevData + total)
        });
      }, [data])


      return (
          <section className={styles.cartSection}>
            <div className={styles.cartArea}>
              <div className={styles.cartGrid}>
                <h1 className={styles.cartHeading}>Cart</h1>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th scope="col">Item</th>
                      <th scope="col">Name</th>
                      <th scope="col">Price</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dataArray}
                  </tbody>
                </table>
                <div className={styles.cartCheckout}>
                  <div>
                    <h3>Cart Total</h3>
                    <div>Total: {totalPrice} $</div>
                    <br/>
                    <button className={styles.btnCheckout} onClick={() => alert("Thanks for using this Page")} >Proceed to Checkout</button>
                  </div>
                </div>
              </div>
            </div>
          </section>
    )
}
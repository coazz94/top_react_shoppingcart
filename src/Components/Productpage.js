import React, {useEffect, useState} from "react"
import { useLocation } from "react-router-dom";
import background from "../Data/productBg.jpg"
import styles from "../css/Productpage.module.css"


export function ProductPage({addToCart}) {
    const location = useLocation()
    const {name, url, price, id}  = location.state.data;

    const [quantity, setQuantity] = useState(1)

    useEffect(() => {
        // Set Page main Background
        document.body.style.backgroundImage = `url("${background}")`;
    }, [])

    function changeQuantitiy(event) {
        event.target.value === "add" ?
         setQuantity(prevValue => prevValue + 1):
         setQuantity(prevValue => prevValue > 0 ? prevValue - 1 : 0 )
    }

    return (
            <div className={styles.mainArea}>
               <div className={styles.productWindow}>
                  <div className ={styles.productSection}>
                     <div className={styles.imgSection}>
                        <img className={styles.productImg} src={url} alt="not Found" />
                     </div>
                     <div className={styles.purchaseSection} >
                        <div className={styles.interface}>
                           <h2>{name}</h2>
                           <p>{price}$<span>20% tax included</span></p>
                           <div className={styles.itemQuantity}>
                              <button
                                 className={styles.btnQuantity}
                                 onClick={changeQuantitiy}
                                 value="sub"
                                 >
                              -
                              </button>
                              {quantity}
                              <button
                                 className={styles.btnQuantity}
                                 onClick={changeQuantitiy}
                                 value="add"
                                 >
                              +
                              </button>
                           </div>
                           <button disabled={quantity < 1 && true} className={styles.btnCart} onClick={() => addToCart({id: id, quantity: quantity})}>Add to Cart</button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
    )
}
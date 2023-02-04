import React, {useState, useEffect} from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Homepage";
import { Shop } from "./Shop";
import { Cart } from "./Cart";
import { ProductPage } from "./Productpage";



export function Main() {

  const [pokeData, setPokeData] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  // Load the data only once
  useEffect(() => {
      for (let i = 1; i < 170; i++) {
          getPokeData(i)
      }
  }, [])

  async function getPokeData(num) {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${num}`);
      const data = await res.json();
      const url = data.sprites.other["official-artwork"].front_default;
      setPokeData(prevData => [...prevData, {
          id: num,
          name: data.species.name,
          picUrl: url
      }])
  }

  function addToCart(object) {
      let added = pokeData.filter(pokemon => {
          return (pokemon.id === object.id)
      })

      // add the Quantity to the pokemon added
      if (cartItems.length > 0) {
          for (let i = 0; i < cartItems.length; i++) {
              const item = cartItems[i];

              item.id === object.id ?
                  setCartItems(prevData => {
                      let newArray = [...prevData]
                      newArray[i].quantity = newArray[i].quantity + object.quantity;
                      return newArray
                  }) :
                  setCartItems(prevData => [...prevData, added[0]])
          }
      } else {
          added[0].quantity = object.quantity;
          setCartItems(prevData => [...prevData, added[0]])
      }

  }

  useEffect(() => console.log(cartItems), [cartItems])

    return (
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" >
                    <Route index element={<Shop data={pokeData} />}/>
                    <Route path=":id" element={<ProductPage addToCart= {addToCart}/>}/>
                </Route>
                <Route path="/cart" element={<Cart data={cartItems}/>} />
            </Routes>
    )
}
import React, {useState, useEffect} from "react";
import { Route, Routes} from "react-router-dom";
import { Home } from "./Components/Homepage";
import { Shop } from "./Components/Shop";
import { Cart } from "./Components/CartPage";
import { ProductPage } from "./Components/Productpage";
import { Navbar } from "./Components/Navbar"


export function App() {

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
          picUrl: url,
          price: (Math.floor(Math.random() * 50) + 50)
      }])
    }

    function addToCart(object) {
      let added = pokeData.filter(pokemon => {
          return (pokemon.id === object.id);
      })

      // add the Quantity to the pokemon added
      if (cartItems.length > 0)
      {
          for (let i = 0; i < cartItems.length; i++)
          {
              const item = cartItems[i];
              if(item.id === object.id) {
                  setCartItems(prevData => {
                      let newArray = [...prevData]
                      newArray[i].quantity = newArray[i].quantity + object.quantity;
                      return newArray
                  })
                  return
              }
          }
        }
        added[0].quantity = object.quantity;
        added[0].key = object.id;
        setCartItems(prevData => [...prevData, added[0]]);
    }

    return (
        <>
            <Navbar cartElements={cartItems.length} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" >
                    <Route index element={<Shop data={pokeData} />}/>
                    <Route path=":id" element={<ProductPage addToCart= {addToCart}/>}/>
                </Route>
                <Route path="/cart" element={<Cart data={cartItems}/>} />
            </Routes>
        </>
    )
}
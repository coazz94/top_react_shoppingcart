import React, {useState, useEffect} from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Homepage";
import { Shop } from "./Shop";
import { Cart } from "./Cart";
import { ProductPage } from "./Productpage";



export function Main() {

    const [pokeData, setPokeData] = useState([])


    async function getPokeData(num) {
      const res = await fetch (`https://pokeapi.co/api/v2/pokemon/${num}`);
      const data = await res.json();
      const url = data.sprites.other["official-artwork"].front_default;
      setPokeData(prevData => [...prevData, {id: num,  name: data.species.name, picUrl: url}])
    }

    useEffect(() => {
      for(let i = 155; i < 170; i ++ ) {
        getPokeData(i)
      }
    }, [])



    return (
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" >
                    <Route index element={<Shop data={pokeData} />}/>
                    <Route path=":id" element={<ProductPage data={pokeData}  />}/>
                </Route>
                <Route path="/cart" element={<Cart />} />
            </Routes>
    )
}
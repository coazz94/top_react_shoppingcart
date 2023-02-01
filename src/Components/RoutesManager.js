import React, {useState, useEffect} from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Homepage";
import { Shop } from "./Shop";
import { Cart } from "./Cart";



export const RoutesManager = () => {

    const [pokeData, setPokeData] = useState([])

    async function getPokeData(num) {
      const res = await fetch (`https://pokeapi.co/api/v2/pokemon/${num}`);
      const data = await res.json();
      const url = data.sprites.other["official-artwork"].front_default;
      setPokeData(prevData => [...prevData, {id: num,  name: data.species.name, picUrl: url}])
    }

    useEffect(() => {
      for(let i = 50; i < 60; i ++ ) {
        const max = Math.floor(Math.random() * 500)
        getPokeData(max)
      }

    }, [])


    return (
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop data={pokeData} />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
    )
}

import React, {useState, useEffect} from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Homepage";
import { Shop } from "./Shop";
import { Cart } from "./Cart";
import { ProductPage } from "./Productpage";



export function RoutesManager() {

    const [pokeData, setPokeData] = useState([])



    useEffect(() => {
      for(let i = 155; i < 170; i ++ ) {
        // const max = Math.floor(Math.random() * 500)
        getPokeData(i)
      }

    }, [])


    return (
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" >
                    <Route index element={<Shop data={pokeData} />}/>
                    <Route path=":id" element={<ProductPage data={pokeData}/>}/>
                </Route>
{/*  */}

                <Route path="/cart" element={<Cart />} />
            </Routes>
    )
}



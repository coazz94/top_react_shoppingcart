import React, {useState} from "react";


export const LoadData = () => {
    const [pokeData, setPokeData] = useState([])

    async function getPokeData(num) {
        const res = await fetch (`https://pokeapi.co/api/v2/pokemon/${num}`);
        const data = await res.json();
        const url = data.sprites.other["official-artwork"].front_default;
        setPokeData(prevData => [...prevData, {id: num,  name: data.species.name, picUrl: url}])
      }

    for(let i = 50; i < 60; i ++ ) {
      getPokeData(i)
    }


        return pokeData
}
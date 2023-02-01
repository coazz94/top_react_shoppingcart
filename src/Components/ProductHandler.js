


async function getPokeData(num) {
    const res = await fetch (`https://pokeapi.co/api/v2/pokemon/${num}`);
    const data = await res.json();
    const url = data.sprites.other["official-artwork"].front_default;
    return data;
    // console.log(data)
    // setPokeData(prevData => [...prevData, {id: num,  name: data.species.name, picUrl: url}])
  }


  const x = getPokeData(21)

  console.log(x)









//   async function getDataFromAPI(num) {
//     try {
//         const res = await fetch (`https://pokeapi.co/api/v2/pokemon/${num}`);
//         const data = await res.json()
//         return data
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   async function main() {
//     const data = await getDataFromAPI(15);
//     return data.species.name
//   }

// const a = main().then(data => data)

// console.log(a)
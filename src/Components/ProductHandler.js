

// async function getPokeData(num) {
//     const res = await fetch (`https://pokeapi.co/api/v2/pokemon/${num}`);
//     const data = await res.json();
//     const url = data.sprites.other["official-artwork"].front_default;
//     return data;
//     console.log(data)
//     setPokeData(prevData => [...prevData, {id: num,  name: data.species.name, picUrl: url}])
//   }




// let response = fetch("https://www.boredapi.com/api/activity")
//                   .then(response => console.log("------RESPONSE-----\n",response))
//                   .catch(error => console.log("-----ERROR-----\n", error))



// let response = fetch("https://www.boredapi.com/api/activity")
//                   .then(response => response.json())
//                   .then(data =>  data)

async function getActivity() {
  let response = await fetch("https://www.boredapi.com/api/activity");
  let data = await response.json();
  return data
}

console.log(getActivity().then(res => res))


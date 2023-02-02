

async function getPokeData(num) {
  const res = await fetch (`https://pokeapi.co/api/v2/pokemon/${num}`);
  const data = await res.json();
  return data;
}


const a = getPokeData(5).then((res) => {
    return ("--------------HERE--------------\n", res.species.name)
}).catch((error) => {
    console.log("--------------ERROR--------------\n",  error)
}).finally(() => {
    console.log("--------------Data Loaded--------------\n")
})




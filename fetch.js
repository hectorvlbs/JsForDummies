const fetch = require("node-fetch")
fetch('https://pokeapi.co/api/v2/pokemon/')
    .then(res => res.json())
    .then(data => {
        //console.log(data)
        data.results.forEach(element => {
            //console.log(element.name)
        });
    })
    .catch(error => console.log(error))

//  async await
const getpokemons = async() => {
    try {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon/')
        const data = await res.json()

        const pokemons_array = data.results.map(pokemons => pokemons.name)
        console.log(pokemons_array)

        const findpokemon = data.results.filter(pokemons => pokemons.name != 'venusaur')
        console.log(findpokemon)

    } catch (error) {
        console.log(error)
    }
}

getpokemons()
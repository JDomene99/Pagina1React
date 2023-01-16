// import { getPokemon } from "./getPokemonByName";


export const getPokemonList = async () => {

    await fetch("https://pokeapi.co/api/v2/pokemon/")
    .then(response => {
        return response.json()
    })
    .then(data => {
        return data.results
        
    })

}

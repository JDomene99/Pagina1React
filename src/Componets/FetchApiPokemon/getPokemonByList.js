export const searchPokemon = async (pokemon) => {
    try {
        let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
        const response = await fetch(url);
        const data = await response.json();
        return ObjPokemon(data);
    } catch (err) {}
};
export const searchRandomPokemon = async () => {
    try {
        let url = `https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 500)}`;
        const response = await fetch(url);
        const data = await response.json();
        return ObjPokemon(data);
    } catch (err) {}
};
export const getPokemons = async (limit = 9, offset = 0) => {
    try {
        let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
        const response = await fetch(url);
        const data = await response.json();
        return data;

    } catch (err) {}
};

export const getPokemonData = async (url) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        
        return ObjPokemon(data);
        
    } catch (err) {}
};

export const getPokemonByType = async (type) => {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/type/${type}/`);
        const data = await response.json();
        return data.pokemon;
        
    } catch (err) {}
};
export const getPokemonByRegion = async (region) => {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/generation/${region}`);
        const data = await response.json();
        return data.pokemon_species;
        
    } catch (err) {}
};


function ObjPokemon(data){
    
    //tipos mas su color
    let colorPoke = [];
    data.types.map(poke =>{
        pokemonTypes.map(poke2 => {
            if(poke2.name == poke.type.name){
                const name = poke2.name
                const color = poke2.color
                colorPoke = colorPoke.concat( { name, color} )
            }
        })        
    })
 
    let stats = []
    data.stats.map(poke =>{
        const name = poke.stat.name == 'special-attack' ? 'Sp.Atk' : poke.stat.name.charAt(0).toUpperCase() + poke.stat.name.slice(1) && 
        poke.stat.name == 'special-defense' ? 'Sp.Def' : poke.stat.name.charAt(0).toUpperCase() + poke.stat.name.slice(1)
        const base = poke.base_stat
        stats = stats.concat({name, base})
        
    })
    
    const newPoke = {
        id: data.id,
        name : data.name,
        height : data.height,
        weight : data.weight,
        img : data.sprites.other.home.front_default,
        type : colorPoke,
        stat : stats,
    }

    return newPoke;
}

export const pokemonTypes = [
    { name: "bug", color: "rgb(123, 207, 0 ,"},
    { name: "dark", color: "rgb(90, 86, 106 ," },
    { name: "dragon", color: "rgb(0, 118, 255," },
    { name: "electric", color: "rgb(255, 222, 0," },
    { name: "fairy", color: "rgb(255, 118, 255," },
    { name: "fighting", color: "rgb(255, 33, 91," },
    { name: "fire", color: "rgb(255, 153, 0," },
    { name: "flying", color: "rgb(137, 189, 255," },
    { name: "ghost", color: "rgb(78, 106, 255," },
    { name: "grass", color: "rgb(28, 216, 14," },
    { name: "ground", color: "rgb(255, 107, 13," },
    { name: "ice", color: "rgb(46, 228, 198," },
    { name: "normal", color: "rgb(159, 163, 157," },
    { name: "poison", color: "rgb(241, 73, 255," },
    { name: "psychic", color: "rgb(255, 108, 100," },
    { name: "rock", color: "rgb(216, 188, 90," },
    { name: "steel", color: "rgb(35, 161, 189," },
    { name: "water", color: "rgb(20, 168, 255," },
];
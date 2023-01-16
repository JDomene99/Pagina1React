export async function getPokemon(name){
    
    let response;
    let data;

    try{
        response = await fetch('https://pokeapi.co/api/v2/pokemon/'+name)
        data =await response.json();
        
    }catch{
        data = null;
    }

    return data;
}

import React, { useEffect, useState } from "react"
import Card from "../Card/Card";
import { getPokemon } from "../js/getPokemonByName";

function Main() {
    const [pokeData, setPokeData] = useState([]);
    

    const fetchApi = async() =>{
        
      let response=await fetch('https://pokeapi.co/api/v2/pokemon/');
      let data = await response.json();
      // getAllPokemon(data.results)
      // while(data.next != null){
          
      //     response = await fetch(data.next)
      //     data =await response.json();
      //     getAllPokemon(data.results)
            
      // } 

      const promises = data.results.map(async (pokemon) => {
        const res = await getPokemon(pokemon.name)
        setPokeData(currentPoke => currentPoke.concat(res))
        });
    
     
        
    }

    useEffect(()=>{
        fetchApi();
    },[])
    
    
  return (
    <main>
        <section>
          
            <Card infoPoke={pokeData} key={pokeData}/>
        </section>


    </main>
  )
}

export default Main
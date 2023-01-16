import React, { useEffect, useState } from "react"
import Card from "../Card/Card";

function Main() {
    const [pokeData,setPokeData] = useState([]);

    const fetchApi = async() =>{
        
        let response=await fetch('https://pokeapi.co/api/v2/pokemon/');
        let data = await response.json();
        getAllPokemon(data.results)
        // while(data.next != null){
            
        //     response = await fetch(data.next)
        //     data =await response.json();
        //     getAllPokemon(data.results)
              
        // } 
        
    }

    const getAllPokemon = async(poke) =>{
      
       poke.map(async(item) => {
          const response = await fetch(item.url)
          const json = await response.json();
          // console.log(json)
          setPokeData(pokeToSave => {
            console.log(pokeToSave)
            pokeToSave = [...pokeToSave,json]
            return pokeToSave;
          })
          // setPokeData(json)
       })   
       
    }
    useEffect(()=>{
        fetchApi();
    },[])
    
    
  return (
    <main>
        <section>
            <Card pokemon={pokeData} />
        </section>


    </main>
  )
}

export default Main
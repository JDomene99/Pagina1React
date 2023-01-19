import { Opacity } from "@mui/icons-material";
import React, { useEffect, useState } from "react"
import {pokemonTypes} from '../TypesPoke/TypesPoke'


export default function Header(){
  const [pokemon, setPokemon] = useState([])
  const [imgPoke, setImg] = useState('');
  const [bgPokeColor, setBgPoke] = useState('#F08900')
  const [bgPokeColor2, setBgPoke2] = useState('')
  const [type, setType] = useState([])
  let a = ''
  const getPokemon = async () => {
    
    await fetch("https://pokeapi.co/api/v2/pokemon/"+Math.floor(Math.random() * 500))
      .then(response => {
        return response.json()
      })
      .then(data => {
        setPokemon(data)

        
        
        pokemonTypes.forEach( color =>{
          
          data.types.forEach( (pokemon,i) => {
            if(color.name == pokemon.type.name && i == 0){
              a =(color.color);
            }
            
          })  
        })
        setBgPoke2(a)
        setImg(data.sprites.other.home.front_default)
        setType(data.types)
      })
  }

  useEffect(() => {
    getPokemon()
  }, [])

  return (
    <header  className="flex sm:flex-col lg:flex-row sm:justify-center lg:justify-between align-middle sm:px-5 md:px-10 lg:px-28 bg-opacity-10">

      <div className="flex flex-col justify-center align-middle sm:w-6/6 lg:w-3/6 sm:mx-auto text-center">

        <h3 className="text-3xl pb-1">
          #{pokemon.id}
        </h3>

        <h1 className="text-6xl pb-3">
          {pokemon.name}
        </h1>
        
        <h3>
          {type.forEach(element => {
                  <h3> {(element.type.name)}</h3>
          })}
        </h3>

        <p className=" text-2xl pt-3">
        La Pokédex, en el mundo ficticio de Pokémon, es una enciclopedia electrónica portátil que los entrenadores Pokémon llevan consigo para registrar automáticamente las fichas de todas las diversas especies Pokémon vistas y capturadas durante su viaje como entrenadores.​​
        </p>

      </div>
      
      <div className="sm:w-6/6 lg:w-3/6 sm:mx-auto " >
        <img 
        className="sm:mx-auto"
        src={imgPoke}  />
      </div>
      

    
      
      
    </header>
  );
}


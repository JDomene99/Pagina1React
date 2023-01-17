import React, { useEffect, useState } from "react"

export default function Header(){
  const [pokemon, setPokemon] = useState([])
  const [imgPoke, setImg] = useState('');
  const [bgPokeColor, setBgPoke] = useState('#F08900')
  const [type, setType] = useState([])
 
  const getPokemon = async () => {
    
    await fetch("https://pokeapi.co/api/v2/pokemon/"+Math.floor(Math.random() * 500))
      .then(response => {
        return response.json()
      })
      .then(data => {
        
        setPokemon(data)
        setImg(data.sprites.other.home.front_default)
        setType(data.types)
      })
  }

  useEffect(() => {
    getPokemon()
  }, [])

  return (
    <header className="flex flex-row flex-wrap  px-60 bg-red-300">
      
      <div className="grid content-center mx-auto w-3/6">

        <h3 className="text-3xl pb-0">
          #{pokemon.id}
        </h3>

        <h1 className="text-6xl">
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
      
      <div className="w-3/6">
        <img src={imgPoke}  />
      </div>
      

    
      
      
    </header>
  );
}


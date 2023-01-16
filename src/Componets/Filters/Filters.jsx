import React, { useState } from 'react'
import { getPokemon } from "../js/getPokemonByName";

export let newList= [];

export default function Filters({ SearchFieldProps }) {

    const [selectedName, setselectedName] = useState('');

    function findPokemon(e){
        const name = e.target.value
        setselectedName(name)
    }
  
    const handleSubmit = async (e) =>{
        e.preventDefault()
        console.log(selectedName)
        const res = await getPokemon(selectedName)
        newList = [res]
        return newList;
                   
    }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        value={selectedName}
        onChange={findPokemon}
        placeholder="Pokemon Name"
        required
      />
      <button>
        buscar
      </button>
    </form>
  )
}


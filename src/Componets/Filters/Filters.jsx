import React, { useState } from 'react'


export default function Filters({ onSearch }) {

    const [selectedName, setselectedName] = useState('');

    function findPokemon(e){
        setselectedName(e.target.value === '' ? null : e.target.value)
    }
  
    const handleSubmit = async (e) =>{
        e.preventDefault()
        onSearch(selectedName);
                   
    }

  return (
    <form>
      <input 
        value={selectedName}
        onChange={findPokemon}
        placeholder="Pokemon Name"
        required
      />
      <button onClick={handleSubmit}>
        buscar
      </button>
    </form>
  )
}


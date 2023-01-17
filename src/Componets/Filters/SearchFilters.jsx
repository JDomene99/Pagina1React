import React, { useState } from 'react'


export default function SearchFilters({ onSearch }) {

    const [selectedName, setselectedName] = useState('');

    function findPokemon(e){
        setselectedName(e.target.value === '' ? null : e.target.value)
    }
  
    const handleSubmit = async (e) =>{
        e.preventDefault()
        onSearch(selectedName);
        setselectedName('')     
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


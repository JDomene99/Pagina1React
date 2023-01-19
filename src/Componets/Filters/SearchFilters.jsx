import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';

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
    <form className='sm:w-6/12 md:w-6/12 lg:w-6/12 2xl:w-4/12'>
      <TextField  
      label="Pokemon Name" 
      value={selectedName}
      onChange={findPokemon}
      />
      
      <button 
        className='bg-red-400 p-4 hover:scale-105 ease-in-out duration-300'
        onClick={handleSubmit}>
        🔎
      </button>
      
    </form>
  )
}


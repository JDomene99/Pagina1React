import React, { useState } from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { pokemonTypes } from '../FetchApiPokemon/getPokemonByList'

export default function TypeFilters ( {onType}) { 
   
  function findPokemon(e){ 
    
    onType((e.target.value || e.target.innerText || (e.target.src).split('/')[6].split('.')[0]).toLowerCase());  
  }
  
  const slideLeft = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 300;
  };

  const slideRight = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 300;
  };

  
  return (
    <>
      <div className='relative flex items-center xs:w-10/12 lg:w-4/12 md:w-6/12 mt-2 sm:mb-6 sm:w-11/12 sm:mx-auto xs:mx-auto xs:mb-4'>

        <ArrowBackIosIcon className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideLeft} size={70} />

        <div
          id='slider'
          className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'
        >
          {pokemonTypes.map((button,i) => (
              
              <button style={ {backgroundColor: button.color+'1)'}} 
                key={i}  
                value={button.name} 
                onClick={findPokemon} 
                className='w-auto align-middle p-2 px-4 mx-1 rounded-md cursor-pointer hover:scale-110 ease-in-out duration-300'>
                  <div className='flex flex-row w-auto'>
                    <img value={button.name}  className='m-auto w-4/12 mr-2' src={new URL(`/src/assets/${button.name}.svg`,import.meta.url).href} alt="" /> 
                    <h1  className='m-auto w-8/12 font-bold text-white'>{button.name}  </h1>
                  </div>
                
              </button>
          ))}
        </div>

        <ArrowForwardIosIcon className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideRight} size={70} />
      
      </div>
    </>

  )

}
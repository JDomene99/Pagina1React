import React, { useState } from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import {pokemonTypes} from '../TypesPoke/TypesPoke'



export default function TypeFilters( {onType}) { 
   
  function findPokemon(e){
    onType((e.target.value).toLowerCase());  
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
      <div className='relative flex items-center lg:w-4/12 md:w-6/12 my-auto '>

        <ArrowBackIosIcon className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideLeft} size={70} />

        <div
          id='slider'
          className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'
        >
          {pokemonTypes.map((button,i) => (
              
              <button style={ {backgroundColor: button.color}} 
                key={i}  
                value={button.name} 
                onClick={findPokemon} 
                className='w-auto align-middle p-2 px-4 mx-1 rounded-md cursor-pointer hover:scale-110 ease-in-out duration-300'>
                  <div className='flex flex-row w-auto'>
                    <img  className='m-auto w-4/12 mr-2' src={new URL(`/src/assets/${button.name}.svg`,import.meta.url).href} alt="" /> 
                    <h1 className='m-auto w-8/12 font-bold text-white'>{button.name} </h1>
                  </div>
                
              </button>

              // <button
              // className=" text-black w-1/12"
              // onClick={() => setShowModal(false)}
              // >
              // <span className="text-3xl">
              //   ✖️
              // </span>
              // </button>
          ))}
        </div>

        <ArrowForwardIosIcon className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideRight} size={70} />
      
      </div>
    </>

  )

}
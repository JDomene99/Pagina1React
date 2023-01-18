import React, { useState } from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export default function TypeFilters( {onType}) {
  const [listOfTypes, setPokeData] = useState([ 'Normal','Fighting','Flying','Poison','Ground','Rock','Bug','Ghost','Steel','Fire','Water','Grass','Electric','Psychic','Ice','Dragon','Dark','Fairy']);
   
  function findPokemon(e){
      onType((e.target.value).toLowerCase());  
  }
  
  const slideLeft = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 500;
  };
    
  return (
    <>
      <div className='relative flex items-center'>
        <ArrowBackIosIcon className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideLeft} size={40} />
        <div
          id='slider'
          className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'
        >
          {listOfTypes.map((button,i) => (
            
            <button className='w-[220px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300' key={i}  value={button} onClick={findPokemon}> {button}  </button>
                    
          ))}
        </div>
        <ArrowForwardIosIcon className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideRight} size={40} />
      </div>
    </>

  )

}
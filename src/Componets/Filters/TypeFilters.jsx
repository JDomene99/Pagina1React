import React, {useEffect, useState } from 'react'
import Select from 'react-select'


function TypeFilters( {onType}) {
  const [listOfTypes, setPokeData] = useState([  'Normal','Fighting','Flying','Poison	','Ground','Rock','Bug','Ghost','Steel','Fire','Water','Grass','Electric','Psychic','Ice','Dragon','Dark','Fairy']);
    // const listOfTypes = [  'Normal','Fighting','Flying','Poison	','Ground','Rock','Bug','Ghost','Steel','Fire','Water','Grass','Electric','Psychic','Ice','Dragon','Dark','Fairy']
    // const options = [
    //     { value: 'grass', label: 'grass' },
    //     { value: 'Fighting', label: 'Fighting' },
    //     { value: 'rock', label: 'rock' }
    //   ]


    function findPokemon(e){
        onType((e.target.value).toLowerCase());
       
    }
  
    

  return (
        
        <div>
           
           { listOfTypes.map( (button,i) => {
              return (
                      <button key={i}  value={button} onClick={findPokemon}> {button}  </button>
                    )
            })
           }

          {/* <Select options={options} onChange={findPokemon}  /> */}

        </div>
  )
}

export default TypeFilters
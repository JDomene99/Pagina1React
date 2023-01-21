import React, { useState } from 'react'
import Select from 'react-select'

export default function RegionFilter( {NumberGeneracion}) {
  const [listOfRegion, setGeneracion] = useState([  
    {
      label: 'Primera Generación',value: 1
    },
    {
        label: 'Segunda Generación',value: 2
    },
    {
        label: 'Tercero Generación',value: 3
    },
    {
        label: 'Cuarta Generación',value: 4
    },
    {
        label: 'Quinta Generación',value: 5
    },
    {
        label: 'Sexta Generación',value: 6
    },
    {
        label: 'Septima Generación',value: 7
    },
    {
        label: 'Octava Generación',value: 8
    },
  ]);
     
  return (
    <>
        <Select 
            className='xs:w-10/12 sm:w-8/12 lg:w-2/12 md:w-4/12 2xl:w-2/12 xs:mx-auto sm:mb-6 sm:mx-auto md:ml-0 lg:mr-0 mt-2 xs:mb-6'
            placeholder={'Elige una generación'}
            options={listOfRegion}
            onChange={ (e) => NumberGeneracion(e.value)} 
        />
        
    </>
  )

}

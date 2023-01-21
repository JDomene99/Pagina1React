import React, { useState } from 'react'
import Select from 'react-select'

export default function RegionFilter( {NumberGeneracion}) {
  const [listOfRegion, setGeneracion] = useState([  
    {
      label: 'Primera Generacion',value: 1
    },
    {
        label: 'Segunda Generacion',value: 2
    },
    {
        label: 'Tercero Generacion',value: 3
    },
    {
        label: 'Cuarta Generacion',value: 4
    },
    {
        label: 'Quinta Generacion',value: 5
    },
    {
        label: 'Sexta Generacion',value: 6
    },
    {
        label: 'Septima Generacion',value: 7
    },
    {
        label: 'Octava Generacion',value: 8
    },
  ]);
     
  return (
    <>
        <Select 
            className='xs:w-10/12 sm:w-8/12 lg:w-2/12 md:w-4/12 2xl:w-2/12 xs:mx-auto sm:mb-6 sm:mx-auto md:ml-0 lg:mr-0 mt-2'
            placeholder={'Elige una región'}
            options={listOfRegion}
            onChange={ (e) => NumberGeneracion(e.value)} 
        />
        
    </>
  )

}

import React, { useState } from 'react'
import Button from '@mui/material/Button';

export default function Home( { resetFilter } ) {
  
  const [emptyFilter, setemptyFilter] = useState([]);

  function resetFilterApp(){
    setemptyFilter([])
    resetFilter(emptyFilter)
  }


  return ( 
    <>
       <Button 
       onClick={resetFilterApp}
       variant="contained">🛖
       </Button>
    </>
    
  )
}


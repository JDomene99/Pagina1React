import React from 'react'
import SearchFilters from "./SearchFilters";
import TypeFilters from "./TypeFilters";
import RegionFilter from "./FilterByRegion";

import Home from "./Home";

export default function ({ onSearch, onType, NumberGeneracion, resetFilter }) {
  return (
    <nav className='flex flex-row flex-wrap mx-auto justify-between sm:px-10 md:px-20 lg:px-28  bg-[#a2d9ff]'>
      <div className='w-full mb-6'>
        <Home resetFilter={resetFilter}/>
      </div>
        
        <SearchFilters onSearch={onSearch}/>
        <TypeFilters onType={onType}/>
        <RegionFilter NumberGeneracion={NumberGeneracion}/>
    
       <div className='border-b-2 w-full'>

       </div>

    </nav>
  )
}


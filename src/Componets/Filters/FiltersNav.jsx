import React from 'react'
import SearchFilters from "./SearchFilters";
import TypeFilters from "./TypeFilters";
import RegionFilter from "./FilterByRegion";
import Home from "./Home";

export default function ({ onSearch, onType, NumberGeneracion }) {
  return (
    <nav className='flex flex-row flex-wrap mx-auto justify-between sm:mx-10 md:mx-20 lg:mx-28 border-b-2'>
        <SearchFilters onSearch={onSearch}/>
        <TypeFilters onType={onType}/>
        <RegionFilter NumberGeneracion={NumberGeneracion}/>
        <Home/>
    </nav>
  )
}


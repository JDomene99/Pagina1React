import React from 'react'
import SearchFilters from "./SearchFilters";
import TypeFilters from "./TypeFilters";
import RegionFilter from "./FilterByRegion";

export default function ({ onSearch, onType, NumberGeneracion }) {
  return (
    <nav>
        <SearchFilters onSearch={onSearch}/>
        <TypeFilters onType={onType}/>
        <RegionFilter NumberGeneracion={NumberGeneracion}/>

    </nav>
  )
}


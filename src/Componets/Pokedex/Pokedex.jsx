import React, { useEffect, useState } from "react"
import Card from "../Card/Card";
import PaginationFilter from '../PaginationFilter/PaginationFilter'
import ReactPaginate from 'react-paginate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './style.css'

        
function Pokedex({ Allpokemon, setPage, total, loading, setNewFiltro, Allpokemon2,nextPage,prevPage,nPages,currentPage}) { 
    
  return (

    <section className={`flex ${
      !loading ? " flex-row flex-wrap sm:px-5  lg:px-28 justify-between gap-5 pt-24 bg-[#a2d9ff]" : "flex flex-col bg-[#a2d9ff] pt-24"
    }`} >

      <Card 
        Allpokemon={Allpokemon}
        loading={loading}
        Allpokemon2={Allpokemon2}
      />
      <div className="w-12/12 mx-auto my-5">
      {
        setNewFiltro ? 
        <PaginationFilter
          nextPage={nextPage}
          prevPage={prevPage}
          nPages = { nPages }
          currentPage = { currentPage } 
        /> 
         
        :
        <ReactPaginate
        activeClassName={'item active '}
        breakClassName={'item break-me '}
        breakLabel={'...'}
        containerClassName={'pagination'}
        disabledClassName={'disabled-page'}
        marginPagesDisplayed={1}
        nextLabel={<ArrowForwardIosIcon /> }
        onPageChange={setPage}
        pageCount={total}
        pageClassName={'item pagination-page '}
        pageRangeDisplayed={3}
        previousLabel={<ArrowBackIosNewIcon />}
      /> 
       
      }
      </div>
      
      
       
    </section>


    
  )
}

export default Pokedex
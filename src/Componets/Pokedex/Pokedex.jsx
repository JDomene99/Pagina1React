import React, { useEffect, useState } from "react"
import Card from "../Card/Card";
import PaginationFilter from '../PaginationFilter/PaginationFilter'
import ReactPaginate from 'react-paginate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './style.css'

        
function Pokedex({ Allpokemon,  setPage, total, loading, setNewFiltro, pageFiltroTypes, Allpokemon2, postsPerPage, paginate}) { 
  
  const lastPage = () => {
    const nextPage = Math.max(pageFiltroTypes - 1, 0);
    setPage(nextPage);
  };

  const nextPage = () => {
    const nextPage = Math.min(pageFiltroTypes + 1, total - 1);
    setPage(nextPage);
  };

  

  return (
    <section className="flex flex-row flex-wrap mx-auto px-60 justify-between" >
             
      <Card 
        Allpokemon={Allpokemon} 
        loading={loading}
        Allpokemon2={Allpokemon2}
      />

      {
        setNewFiltro ? 
        <PaginationFilter
          // onLeftClick = {lastPage}
          // onRightClick ={nextPage}
          // page = {paginate}
          postsPerPage={postsPerPage}
          paginate={paginate}
          totalPages = {total}
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
      
       
    </section>


    
  )
}

export default Pokedex
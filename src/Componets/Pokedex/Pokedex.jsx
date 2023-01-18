import React, { useEffect, useState } from "react"
import Card from "../Card/Card";
import PaginationFilter from '../PaginationFilter/PaginationFilter'
import ReactPaginate from 'react-paginate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './style.css'

        
function Pokedex({ Allpokemon,  setPage, total, loading, setNewFiltro, Allpokemon2}) { 
  
  console.log(Allpokemon)
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonPerPage] = useState(9);

   // Get current pokemon
   const indexOfLastRecord = currentPage * pokemonPerPage;
   const indexOfFirstRecord = indexOfLastRecord - pokemonPerPage;
   const currentRecord = Allpokemon2.slice(indexOfFirstRecord, indexOfLastRecord);
  
   const nPages = Math.ceil(Allpokemon2.length / pokemonPerPage)

   const nextPage = () => {
    if(currentPage !== nPages) 
        setCurrentPage(currentPage + 1)
    }
    const prevPage = () => {
        if(currentPage !== 1) 
            setCurrentPage(currentPage - 1)
    }

    
  return (
    <section className="flex flex-row flex-wrap mx-auto px-60 justify-between" >
             
      <Card 
        Allpokemon={Allpokemon} 
        loading={loading}
        Allpokemon2={currentRecord}
      />

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
      
       
    </section>


    
  )
}

export default Pokedex
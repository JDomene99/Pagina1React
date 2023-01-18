import React from "react";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


const PaginationFilter = ({ nPages, currentPage, prevPage,nextPage }) => {
   
  return (
    <nav>
        <button onClick={prevPage}><ArrowBackIosNewIcon/></button>
        <span>{currentPage} de {nPages}</span> 
        <button onClick={nextPage}><ArrowForwardIosIcon/></button>
    </nav>
  );
};

export default PaginationFilter;

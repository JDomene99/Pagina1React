import React from "react";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


const PaginationFilter = ({ nPages, currentPage, prevPage,nextPage,setresetFilterType }) => {
 
  return (
    <nav className="w-12/12 ">
      {nPages !== 0 ?
      <div>
        <button onClick={prevPage}><ArrowBackIosNewIcon/></button>
          <span>{currentPage} de {nPages}</span> 
        <button onClick={nextPage}><ArrowForwardIosIcon/></button>
      </div>
      :
      <h1></h1>
      }
        
    </nav>
  );
};

export default PaginationFilter;

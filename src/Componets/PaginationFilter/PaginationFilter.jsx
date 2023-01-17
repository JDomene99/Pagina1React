import React from "react";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const PaginationFilter = (props) => {
  const { onLeftClick, onRightClick, page, totalPages } = props;

  return (
    <div >
      <button onClick={onLeftClick}>
        <div className="icon">
          <ArrowUpwardIcon />
        </div>
      </button>
      <div>
        {page} de {totalPages}
      </div>
      <button onClick={onRightClick}>
        <div className="icon">
          Mostrar mas pokemon
        </div>
      </button>
    </div>
  );
};

export default PaginationFilter;

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

// const PaginationFilter = ({ postsPerPage, totalPosts, paginate }) => {
//     const pageNumbers = [];
  
//     for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
//       pageNumbers.push(i);
//     }
  
//     return (
//       <nav>
//         <ul className='pagination'>
//           {pageNumbers.map(number => (
//             <li key={number} className='page-item'>
//               <a onClick={() => paginate(number)} href='!#' className='page-link'>
//                 {number}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </nav>
//     );
//   };

export default PaginationFilter;

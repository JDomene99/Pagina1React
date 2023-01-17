import React from 'react';

const PaginationPoke = ({ postsPerPage, totalPosts, paginate, setPage  }) => {
  const pageNumbers = [];
  
  for (let i = 1; i <= Math.ceil( totalPosts); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='flex flex-row flex-wrap'>
        {pageNumbers.map(number => (
          <li key={number} className='px-5'>
            <a onClick={() => {
              paginate(number)
              setPage(number-1)
            }} href='!#'>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default PaginationPoke;
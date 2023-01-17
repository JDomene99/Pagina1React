import React from 'react';

const PaginationPoke = ({ postsPerPage, totalPosts, paginate,  }) => {
  const pageNumbers = [];
  
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='flex flex-row flex-wrap'>
        {pageNumbers.map(number => (
          <li key={number} className='px-5'>
            <a onClick={() => {
              paginate(number)
              
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
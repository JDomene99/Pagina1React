import React, { useEffect, useState } from "react"
import Card from "../Card/Card";
import PaginationPoke from "../Pagination/PaginationPoke";



function Pokedex({ Allpokemon, page, setPage, total, loading, paginate }) {
  console.log(total);
  return (
    <section className="flex flex-row flex-wrap w-8/12 mx-auto">
      
      <Card 
        Allpokemon={Allpokemon} 
        loading={loading}
        />
      
      <PaginationPoke
        postsPerPage={9}
        totalPosts={total}
        paginate={paginate}
        setPage = {setPage}
      />

    </section>


    
  )
}

export default Pokedex
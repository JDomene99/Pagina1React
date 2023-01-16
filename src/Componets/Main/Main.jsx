import React, { useEffect, useState } from "react"
import Card from "../Card/Card";
import PaginationPoke from "../Pagination/PaginationPoke";
import Filters, { newList } from "../Filters/Filters";
import { getPokemon } from "../js/getPokemonByName";


function Main() {
    const [pokeData, setPokeData] = useState([]);
    const [pokeToFind, setPokeFind] = useState('');
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(9);
    

    const fetchApi = async() =>{
      
      setLoading(true);
      let response=await fetch('https://pokeapi.co/api/v2/pokemon/?limit=9&offset=0');
      let data = await response.json();
      // getAllPokemon(data.results)
      // while(data.next != null){
          
      //     response = await fetch(data.next)
      //     data =await response.json();
      //     getAllPokemon(data.results)
            
      // } 
      
      
      data.results.map(async (pokemon) => {
        const res = await getPokemon(pokemon.name)
        setPokeData(currentPoke => currentPoke.concat(res))
        });
      setLoading(false);        
    }

    useEffect(()=>{
      fetchApi();
    },[])
    

    // Get current Pokemon
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = pokeData.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);
    
    
  return (
    <main>
        <section className="flex flex-row flex-wrap w-8/12 mx-auto">
          {/* <input type="text" placeholder="Name" onChange={findPokemon}/>
          <button onClick={handleSubmit}>enviar</button> */}

          <Filters/>

          <Card 
            infoPoke={currentPosts} 
            key={pokeData}
            loading={loading}
           />
          
          <PaginationPoke
            postsPerPage={postsPerPage}
            totalPosts={pokeData.length}
            paginate={paginate}
          />
        </section>


    </main>
  )
}

export default Main
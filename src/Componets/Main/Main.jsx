import React, { useEffect, useState } from "react"
import Card from "../Card/Card";
import PaginationPoke from "../Pagination/PaginationPoke";
import Filters from "../Filters/Filters";
import { getPokemonData, getPokemons, searchPokemon } from "../js/getPokemonByList";

function Main() {
    //Lista con los pokemon
    const [pokeData, setPokeData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(0);
    const [total, setTotal] = useState();
    const [searching, setSearching] = useState(false);

    //pokemon a buscar
    const [pokeToFind, setPokeFind] = useState('');

    //paginacion
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(9);
    

    const fetchPokemons = async() =>{
      
      setLoading(true);
      const data = await getPokemons(649, (page) * 9 );
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });
      const results = await Promise.all(promises);     
      setPokeData(results)
      setLoading(false);
           
    }

    useEffect(() => {
      if (!searching) {
        fetchPokemons();
      }
    }, [page]);
    
    const onSearch = async (pokemon) => {
      if(pokemon !== null){
        setLoading(true);
        const result = await searchPokemon(pokemon);
        if (result) {
          setPokeData([result]);
          setPage(0);
        }
        setLoading(false);
        
      }
      else{
        fetchPokemons()
      }
      
    };

    

    // Get current Pokemon
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = pokeData.slice(indexOfFirstPost, indexOfLastPost);
    
    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);
   
    
  return (

    <main>
      <nav className="w-8/12 mx-auto py-5">
        <Filters onSearch={onSearch}/>
      </nav>

        <section className="flex flex-row flex-wrap w-8/12 mx-auto">
          {/* <input type="text" placeholder="Name" onChange={findPokemon}/>
          <button onClick={handleSubmit}>enviar</button> */}

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
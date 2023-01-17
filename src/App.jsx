import React, { useEffect, useState } from "react"
import Header from "./Componets/Header/Header"
import Nav  from "./Componets/Nav/Nav";
import Pokedex from "./Componets/Pokedex/Pokedex";
import Footer from "./Componets/Footer/Footer";
import { getPokemonData, getPokemons, searchPokemon } from "./Componets/js/getPokemonByList";
import Filters from "./Componets/Filters/Filters";


export default function App() {
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
    const data = await getPokemons(9, (page) * 9 );
    const promises = data.results.map(async (pokemon) => {
      return await getPokemonData(pokemon.url);
    });
    const results = await Promise.all(promises);  
    setPokeData(results)
    setLoading(false);

    //no utilizo data.count porque algunos pokemon no tienen foto
    setTotal(Math.ceil(900/ 9));    
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
  // const currentPosts = pokeData.slice(indexOfFirstPost, indexOfLastPost);
  
  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);
 
  return (
    <>
      <Nav/>
      <Header/>
      <Filters onSearch={onSearch}/>

      <Pokedex
              loading={loading}
              Allpokemon={pokeData}
              page={page}
              setPage={setPage}
              total={total}
              paginate={paginate}
            />
      <Footer/>
    </>
    
  )

}


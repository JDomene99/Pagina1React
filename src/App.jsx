import React, { useEffect, useState } from "react"
import Header from "./Componets/Header/Header"
import Nav  from "./Componets/Nav/Nav";
import Pokedex from "./Componets/Pokedex/Pokedex";
import Footer from "./Componets/Footer/Footer";
import { getPokemonData, getPokemons, searchPokemon, getPokemonByType } from "./Componets/js/getPokemonByList";
import SearchFilters from "./Componets/Filters/SearchFilters";
import TypeFilters from "./Componets/Filters/TypeFilters";

export default function App() {
  //Lista con los pokemon
  const [pokeData, setPokeData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState();
  const [searching, setSearching] = useState(false);
  const [newFiltro, setNewFiltro] = useState(false);
  

  const [pokeData2, setPokeData2] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);


  const fetchPokemons = async() =>{

    setLoading(true);
    const data = await getPokemons(9, (page.selected) * 9 );
    const promises = data.results.map(async (pokemon) => {
      return await getPokemonData(pokemon.url);
    });
    const results = await Promise.all(promises);  
    setPokeData(results)
    setLoading(false);
    setNewFiltro(false)
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

  const onType = async (pokemon) => {
    
    if(pokemon !== null){
      setLoading(true);
      setPokeData([])
      setNewFiltro(true)
      const data = await getPokemonByType(pokemon);
      if (data) {
        const promises = data.map(async (poke) => {
          return await searchPokemon(poke.pokemon.name);
        });
        const results = await Promise.all(promises)
        setPokeData2(results)
        setLoading(false);
        setTotal(Math.ceil(results/9));
        console.log(total)
      }
    }
    else{
      fetchPokemons()
    }
    
  }; 


   // Get current posts
   const indexOfLastPost = currentPage * postsPerPage;
   const indexOfFirstPost = indexOfLastPost - postsPerPage;
   const currentPosts = pokeData2.slice(indexOfFirstPost, indexOfLastPost);
 
   // Change page
   const paginate = pageNumber => setCurrentPage(pageNumber);
 
 
  return (
    <>
      <Nav/>
      <Header/>
      <SearchFilters onSearch={onSearch}/>
      <TypeFilters onType={onType}/>
      <Pokedex
              loading={loading}
              Allpokemon={pokeData}
              setPage={setPage}
              total={total}
              setNewFiltro={newFiltro}
              pageFiltroTypes  = {page} 
              Allpokemon2={currentPosts}
              postsPerPage={postsPerPage}
              paginate={paginate}
            />
      <Footer/>
    </>
    
  )

}


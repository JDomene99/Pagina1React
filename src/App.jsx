import React, { useEffect, useState } from "react"
import Header from "./Componets/Header/Header"
import Nav  from "./Componets/Nav/Nav";
import FiltersNav from './Componets/Filters/FiltersNav'
import Pokedex from "./Componets/Pokedex/Pokedex";
import Footer from "./Componets/Footer/Footer";
import { getPokemonData, getPokemons, searchPokemon, getPokemonByType, getPokemonByRegion } from "./Componets/FetchApiPokemon/getPokemonByList";


export default function App() {
  //Lista con los pokemon
  const [pokeData, setPokeData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState();
  const [newFiltro, setNewFiltro] = useState(false);
  

  const [pokeData2, setPokeData2] = useState([]);

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
      fetchPokemons();
  }, [page]);
  
  const onSearch = async (pokemon) => {
    
    if(pokemon !== null){
      setLoading(true);
      setNewFiltro(true)
      const result = await searchPokemon(pokemon);
      if (result) {
        setPokeData([result]);
        setPage(0);
        setTotal(0);
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
      setPokeData2([])
      setPokeData([])
      setNewFiltro(true)
      setCurrentPage(1)
      const data = await getPokemonByType(pokemon);
      if (data) {
        const promises = data.map(async (poke) => {
          return await searchPokemon(poke.pokemon.name);
        });
        const results = await Promise.all(promises)
        setPokeData2(results)
        setLoading(false);
        setTotal(Math.ceil(results/9));
        
      }
    }
    else{
      fetchPokemons()
    }
    
  }; 

  const NumberGeneracion = async (pokemon) => {
    
    if(pokemon !== null){
      setLoading(true);
      setPokeData([])
      setPokeData2([])
      setNewFiltro(true)
      setCurrentPage(1)
      const data = await getPokemonByRegion(pokemon);
      if (data) {
        const promises = data.map(async (poke) => {
          return await searchPokemon(poke.name);
        });
        const results = await Promise.all(promises)
        setPokeData2(results)
        setLoading(false);
        setTotal(Math.ceil(results/9));
      }
    }
    else{
      fetchPokemons()
    }
    
  }; 

  const resetFilter = async (reset) =>{
    if(reset !== null){
      fetchPokemons()
      setPage(0)
    }
  }

  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonPerPage] = useState(9);

   // Get current pokemon
   const indexOfLastRecord = currentPage * pokemonPerPage;
   const indexOfFirstRecord = indexOfLastRecord - pokemonPerPage;
   const currentRecord = pokeData2.slice(indexOfFirstRecord, indexOfLastRecord);
  
   const nPages = Math.ceil(pokeData2.length / pokemonPerPage)
  
   const nextPage = () => {
    if(currentPage !== nPages) 
        setCurrentPage(currentPage + 1)
    }
    const prevPage = () => {
        if(currentPage !== 1) 
            setCurrentPage(currentPage - 1)
    }
 
  return (
    <>
      <Nav/>
      <Header/>
      <FiltersNav
        onSearch={onSearch}
        onType={onType}
        NumberGeneracion={NumberGeneracion}
        resetFilter = {resetFilter}
      />
      <Pokedex
              loading={loading}
              Allpokemon={pokeData}
              setPage={setPage}
              total={total}
              setNewFiltro={newFiltro}
              Allpokemon2={currentRecord}
              nextPage={nextPage}
              prevPage={prevPage}
              nPages = { nPages }
              currentPage = { currentPage }         
      />
      <Footer/>
    </>
    
  )

}


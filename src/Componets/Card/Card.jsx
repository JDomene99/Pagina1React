import React, { useEffect, useState } from "react";
import { pokemonTypes } from "../TypesPoke/TypesPoke";
import { searchPokemon } from "../FetchApiPokemon/getPokemonByList";

export default function Card({ Allpokemon, loading, Allpokemon2 }) {
  const [showModal, setShowModal] = useState(false);
  const [togglePokemon, settogglePokemon] = useState([]);
 
  if (loading) {
    return <h1> loading... </h1>;
  }

  let RecordsPokemon =
    Allpokemon.length === 9 || Allpokemon.length === 1
      ? Allpokemon
      : Allpokemon2;

  const handleClick = (e) => {
    onSearch(e.target.value);
  };

  const onSearch = async (pokemon) => {
    if (pokemon !== null) {
      const result = await searchPokemon(pokemon);
      if (result) {
        settogglePokemon(result);
      }
      setShowModal(true);
    }
  };

  const ProgressBar = ({ progressPercentage }) => {
    return (
        <div className='h-1 w-8/12 bg-gray-300 my-auto pb-2 rounded-md'>
            <div
                style={{ width: `${progressPercentage}%`}}
                className={`pb-2 h-full ${
                    progressPercentage < 50 ? 'bg-red-600' : 'bg-green-600'}`}>
            </div>
        </div>
    );
    
};

  return (
    <>
      {RecordsPokemon.map((poke) => {
          
        return (

          <div
            style={ {background: poke.type[0].color+ ' 0.5)'}}
            className="lg:w-[30%] md:w-[45%] sm:w-[100%] text-center flex flex-col flex-wrap justify-center rounded-2xl  "
            key={poke.id}
          >
            
            <img
              className="hover:scale-105 ease-in-out duration-300 w-8/12 mx-auto"
              src={poke.img}
              alt=""
            />

            <h1 className="text-3xl">#{poke.id}</h1>
            <h1 className="text-3xl font-bold mb-4">
              {poke.name.charAt(0).toUpperCase() + poke.name.slice(1)}
            </h1>

            <div className="flex flex-row flex-wrap justify-between w-6/12 mx-auto">
              {poke.type.map((type, idx) => {
                return (
                  <div key={idx} className="rounded p-1 text-white font-bold" style={ {backgroundColor: poke.type[idx].color+ ' 1)'}}>
                    {type.name}
                  </div>
                );
              })}
            </div>

            <div className="font-bold">
              <h2>{poke.weight / 10} kg</h2>
              <h2>{poke.height / 10} m</h2>
            </div>

            <button
              className="w-8/12 bg-blue-200 text-black active:bg-blue-500 px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mx-auto my-6"
              type="button"
              value={poke.id}
              onClick={handleClick}
            >
              Ver estadisticas
            </button>
          </div>
        );
      })}
      {showModal ? (
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
          <div className="relative w-auto my-6 mx-auto max-w-4xl">
            <div className="flex flex-row bg-white rounded-lg">
              
              <div  className="w-5/12 p-7 flex flex-col justify-items-center text-center">

                <img
                  className="hover:scale-105 ease-in-out duration-300 w-10/12"
                  src={togglePokemon.img}
                />

                <h1 className="text-3xl">#{togglePokemon.id}</h1>
                <h1 className="text-3xl font-bold">
                  {togglePokemon.name.charAt(0).toUpperCase() +
                    togglePokemon.name.slice(1)}
                </h1>

                <div className="flex flex-row flex-wrap justify-between w-6/12 mx-auto mt-5">
                  {togglePokemon.type.map((type, idx) => {
                    return (
                      <div key={idx} className="bg-red-400 rounded p-1">
                        {}

                        {type.name}
                      </div>
                    );
                  })}
                </div>

                <div className="flex flex-row flex-wrap justify-between w-6/12 mx-auto mt-5">
                  <h2>{togglePokemon.weight / 10} kg</h2>
                  <h2>{togglePokemon.height / 10} m</h2>
                </div>
              </div>

              <div className="flex flex-row flex-wrap w-7/12  p-7">
                <h1 className="text-3xl font-bold w-10/12 my-auto">Estadisticas</h1>

                <button
                    className=" text-black w-1/12"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-3xl">
                      ✖️
                    </span>
                </button>

                
                <div className="flex flex-col flex-wrap justify-start w-full mx-auto gap-4">
                    {togglePokemon.stat.map((stat, idx) => {
                      return (
                        <ul key={idx} className="font-bold flex flex-row flex-wrap ">

                          <div className="flex flex-row flex-wrap w-3/12 justify-between my-auto">
                            <li className="">
                              {stat.name}
                            </li>
                            <li className="mx-2">{stat.base}</li>
                          </div>

                          <ProgressBar progressPercentage ={stat.base}/>

                        </ul>
                      );
                    })}
                  </div>
                 
              </div>
                

            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

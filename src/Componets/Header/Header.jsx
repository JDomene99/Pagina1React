import { Opacity } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { searchRandomPokemon } from "../FetchApiPokemon/getPokemonByList";

export default function Header() {
  const [pokemon, setPokemon] = useState([]);
  const [imgPoke, setImg] = useState("");
  const [type, setType] = useState([]);

  const getPokemon = async () => {
    const pokemonHeader = await searchRandomPokemon();
    setPokemon(pokemonHeader);
    setImg(pokemonHeader.img);
    setType(pokemonHeader.type);
  };

  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <header>
      <div className="flex sm:flex-col lg:flex-row sm:justify-center lg:justify-between align-middle sm:px-5 md:px-10 lg:px-28 bg-opacity-10">
        <div className="flex flex-col justify-center align-middle sm:w-6/6 lg:w-3/6 sm:mx-auto text-center">
          <h3 className="text-3xl pb-1">#{pokemon.id}</h3>

          <h1 className="text-6xl pb-3">{pokemon.name}</h1>

          <div className="flex flex-row flex-wrap justify-center w-6/12 mx-auto pt-5">
            {type.map((poke, id) => {
              return (
                <div
                  key={id}
                  className="rounded p-1 font-bold mx-5"
                  style={{ backgroundColor: poke.color + " 1)" }}
                >
                  {poke.name}
                </div>
              );
            })}
          </div>

          <p className=" text-2xl pt-3">
            La Pokédex, en el mundo ficticio de Pokémon, es una enciclopedia
            electrónica portátil que los entrenadores Pokémon llevan consigo
            para registrar automáticamente las fichas de todas las diversas
            especies Pokémon vistas y capturadas durante su viaje como
            entrenadores.​​
          </p>
        </div>

        <div className="sm:w-6/6 lg:w-3/6 sm:mx-auto ">
          <img className="sm:mx-auto" src={imgPoke} />
        </div>
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#a2d9ff"
          d="M0,128L40,106.7C80,85,160,43,240,64C320,85,400,171,480,186.7C560,203,640,149,720,112C800,75,880,53,960,74.7C1040,96,1120,160,1200,176C1280,192,1360,160,1400,144L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        ></path>
      </svg>
    </header>
  );
}

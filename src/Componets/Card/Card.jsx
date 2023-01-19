import React, { useEffect, useState } from "react";
import Modal from "./Modal/Modal";
import { searchPokemon } from "../FetchApiPokemon/getPokemonByList";

export default function Card({ Allpokemon, loading, Allpokemon2 }) {
  const [showModal, setShowModal] = useState(false);
  const [text, settext] = useState(false);

  function closeModal() {
    console.log("ads");
    setShowModal(!showModal);
    console.log(showModal);
  }

  let RecordsPokemon =
    Allpokemon.length === 9 || Allpokemon.length === 1
      ? Allpokemon
      : Allpokemon2;

  const handleClick = (e) => {
    settext(e.target.value);
    setShowModal(true);
  };

  return (
    <>
      {RecordsPokemon.map((poke) => {
        return (
          <div
            style={{ background: poke.type[0].color + " 0.5)" }}
            className={`lg:w-[30%] ${
              poke.name == RecordsPokemon[0].name
                ? "md:w-[100%]"
                : "md:w-[45%]" || poke.name == RecordsPokemon[8].name
                ? "md:w-[100%]"
                : "md:w-[45%]"
            } sm:w-[100%] text-center flex flex-col flex-wrap justify-center rounded-2xl`}
            key={poke.id}
          >
            {console.log(poke.name)}
            <img
              className="hover:scale-105 ease-in-out duration-300 w-8/12 mx-auto"
              src={poke.img}
              alt=""
            />

            <h1 className="text-3xl">#{poke.id}</h1>
            <h1 className="text-3xl font-bold mb-4">
              {poke.name.charAt(0).toUpperCase() + poke.name.slice(1)}
            </h1>

            <div className="flex flex-row flex-wrap justify-center w-12/12 mx-auto pb-3">
              {poke.type.map((type, idx) => {
                return (
                  <div
                    key={idx}
                    className="rounded p-1 text-white font-bold mx-5"
                    style={{ backgroundColor: poke.type[idx].color + " 1)" }}
                  >
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
        <Modal
          setShowModal={showModal}
          handleClick={text}
          closeModal={closeModal}
        />
      ) : null}
    </>
  );
}

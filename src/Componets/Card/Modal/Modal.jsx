import React, { useEffect, useState } from "react";
import { searchPokemon } from "../../FetchApiPokemon/getPokemonByList";

function Modal({ handleClick, setShowModal, closeModal }) {

  const [togglePokemon, settogglePokemon] = useState([]);
  const [type, setType] = useState([]);
  const [stat, setstats] = useState([]);
  
  const onSearch = async (pokemon) => {
    if (pokemon !== null) {
      const result = await searchPokemon(handleClick);
      if (result) {
        settogglePokemon(structuredClone(result));
        setType(result.type);
        setstats(result.stat);
      }
    }
  };

  useEffect(() => {
    onSearch();
  }, []);

  function closeModalFunction() {
    closeModal(!setShowModal);
  }

  const ProgressBar = ({ progressPercentage }) => {
    return (
      <div className="h-1 w-11/12 overflow-hidden bg-gray-300 my-auto pb-2 rounded-md">
        <div
          style={{ width: `${progressPercentage}%` }}
          className={`pb-2 h-full overflow-hidden   ${
            progressPercentage < 50 ? "bg-red-600" : "bg-green-600"
          }`}
        ></div>
      </div>
    );
  };

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none  xs:mx-3  md:mx-10 ">
        <div className="relative w-auto my-6 mx-auto max-w-4xl ">
          <div className="flex flex-row bg-white rounded-lg">
            <div className="md:w-5/12 p-7 flex flex-col justify-items-center text-center md:visible xs:invisible xs:w-0 ">
              <img
                className="hover:scale-105 ease-in-out duration-300 w-10/12 mx-auto "
                src={togglePokemon.img}
              />
              
              <h1 className="text-3xl">#{togglePokemon.id}</h1>
              <h1 className="text-3xl font-bold">{togglePokemon.name}</h1>

              <div className="flex flex-row flex-wrap justify-center w-12/12 mx-auto pt-5">
                {type.map((type, idx) => {
                  return (
                    <div
                      key={idx}
                      className="rounded p-1 text-white font-bold mx-5"
                      style={{ backgroundColor: type.color + " 1)" }}
                    >
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

            <div className="flex flex-row flex-wrap md:w-7/12  p-7 xs:w-12/12 ">
              <h1 className="text-3xl font-bold w-10/12  sm:w-12/12 my-auto">
                Estadisticas
              </h1>

              <button
                className=" text-black w-1/12"
                onClick={closeModalFunction}
              >
                <span className="text-3xl">✖️</span>
              </button>

              <div className="flex flex-col flex-wrap justify-start w-full mx-auto gap-4">
                {stat.map((stat, idx) => {
                  return (
                    <ul
                      key={idx}
                      className="font-bold flex flex-row flex-wrap "
                    >
                      <div className="flex flex-row flex-wrap w-3/12 justify-between my-auto">
                        <li className="">{stat.name}</li>
                        <li className="mx-2">{stat.base}</li>
                      </div>

                      <ProgressBar progressPercentage={stat.base} />
                    </ul>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;

import React, { useEffect, useState } from "react"

export default function Card({ Allpokemon, loading, Allpokemon2 }) {
    if(loading){
        return <h1> loading... </h1>
    }
    console.log(Allpokemon)
    console.log(Allpokemon2)

    
    let RecordsPokemon = Allpokemon.length === 9 || Allpokemon.length === 1 ? Allpokemon : Allpokemon2
   
    return (
        <>
        {
            RecordsPokemon.map( (poke) => {             

                return (

                        <div className="w-4/12 bg-slate-500 text-center"  key={poke.id} >
                           
                            <img src={poke.sprites.other.home.front_default} alt="" />
                            <h2>#{poke.id}</h2>
                            <h2>{poke.name}</h2>
                            <h2>{poke.weight/10} KG</h2>
                            <h2>{poke.height/10} M</h2>
                            
                             <div className="flex flex-row flex-wrap justify-between w-6/12 mx-auto">
                                {poke.types.map((type, idx) => {
                                return (
                                    <div key={idx} className="">
                                    {type.type.name}
                                    </div>
                                );
                                })}
                            </div>
                            
                            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                                View Stat
                            </button>
                            {/* <div className="flex flex-col flex-wrap justify-start w-6/12 mx-auto">
                                {poke.stats.map((stat, idx) => {
                                return (
                                    <h1 key={idx} className="">
                                    {stat.stat.name}
                                    {stat.base_stat}
                                    </h1>
                                );
                                })}
                            </div> */}
                            
                            
                        </div>
                    
                )
            })
        }
        </>
    )
}

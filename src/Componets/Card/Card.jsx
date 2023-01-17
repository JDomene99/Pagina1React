import PhotoNotFound from './img/SinFoto.webp'
export default function Card({ Allpokemon, loading }) {
    if(loading){
        return <h1> loading... </h1>
    }
    return (
        <>
        {
            Allpokemon.map((poke) => {
               
                return (
                   
                        <div className="w-4/12 bg-slate-500" key={poke.id}>
                            <h2>{poke.id}</h2>
                            {poke.sprites.other.home.front_default !== null ?
                            <img src={poke.sprites.other.home.front_default} alt="" />
                            : <img src={PhotoNotFound} alt=""  className='h-auto'/>}
                            
                            <h2>{poke.name}</h2>
                        </div>
                    
                )
            })
        }
        </>
    )
}

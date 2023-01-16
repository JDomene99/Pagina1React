
export default function Card({ infoPoke, loading }) {
    if(loading){
        return <h1> loading... </h1>
    }
    return (
        <>
        {
            infoPoke.map((poke) => {
               
                return (
                   
                        <div className="w-4/12 bg-slate-500">
                            <h2>{poke.id}</h2>
                            <img src={poke.sprites.other.home.front_default} alt="" />
                            <h2>{poke.name}</h2>
                        </div>
                    
                )
            })
        }
        </>
    )
}

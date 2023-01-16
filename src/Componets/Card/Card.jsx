
export default function Card({ infoPoke }) {
    
    return (
        <>
        {
            infoPoke.map((poke) => {
                
                return (
                    <>
                        <div >
                            <h2>{poke.id}</h2>
                            <img src={poke.sprites.other.home.front_default} alt="" />
                            <h2>{poke.name}</h2>
                        </div>
                    </>
                )
            })
        }
        </>
    )
}

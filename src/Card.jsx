export default function Card({jugadores}){

    return(
        <div>
        <h2>IDOLOS DE ESTUDIANTES DE LA PLATA</h2>
        {jugadores.map((jugador,index)=>(
            <div key={index}>
            <h3>{jugador.nombre} {jugador.apellido}</h3>
            </div>
        )
            
        )
        }
        </div>
    )

}
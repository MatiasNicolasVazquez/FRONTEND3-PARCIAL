import { useState } from "react"

export default function Form({onAddJugador}){
    const [nombre,setNombre] = useState("");
    const [apellido,setApellido] = useState("");
    const [error,setError] = useState("")


    const validarApellido= (apellido)=>{
        const apellidoSinEspacios= apellido.trim()

        if(apellidoSinEspacios.length>=6) return true; 
        else return false;
    }


    const validarNombre = (nombre)=>{
        
        const empiezaConEspacios = nombre.startsWith(" ");

        if(empiezaConEspacios) return false;

        else if(nombre.length<3) return false;

        else return true;
    }



    const onHandleSubmit= (e)=>{
        e.preventDefault();
        if(validarNombre(nombre) && validarApellido(apellido)){
            onAddJugador({nombre,apellido})
            setNombre("")
            setApellido("")
            setError("");
        }
        else{
            setError("Por favor chequea que la información sea correcta");
            return
        }
    }
    

    return(
            <form onSubmit={onHandleSubmit}>
                <input type="text" placeholder="Ingresa el nombre" value={nombre} onChange={(e)=>setNombre(e.target.value)} />
                <input type="text" placeholder="Ingresa el apellido" value={apellido} onChange={(e)=>setApellido(e.target.value)} />
                <button type="submit">Agregar pincha</button>
                {error && <div className="error">{error}</div>}
            </form>
    )

}
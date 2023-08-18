import { useState } from 'react'

import './App.css'

import Form from './Form'
import Card from './Card'

function App() {
  const [jugadores, setJugadores] = useState([])

  const addJugador = (jugador)=>{
    setJugadores([...jugadores,jugador]);
  }


  return (
    
    <div className='App'>
      <h1>Carga de jugadores de Estudiantes de la Plata, tetracampeón de américa</h1>
      <Form onAddJugador={addJugador}/>
      <Card jugadores={jugadores}/>
    </div>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import Pokedex from './Components/Pokedex/Pokedex'
import CustomRouter from './Router/CustomRouter'
import { Link } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='outer-pokedex'>
     <Link to="/" > <h1 style={{textAlign:"center"}}>Pokedex</h1></Link>
     <CustomRouter />
  
     </div>
  )
}

export default App

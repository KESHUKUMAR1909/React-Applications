import { useState } from 'react'

import './App.css'
import StartGame from './Pages/StartGame'
import PlayGame from './Pages/PlayGame'
import { Route, Routes } from 'react-router-dom'


function App() {
  // : means a varibale part in /Play/:
  return (

    <>
         <Routes>
          <Route path='/' element={<StartGame />}/>
          <Route path='/Play' element={<PlayGame />}/>
         </Routes>

    </>

  )
}

export default App

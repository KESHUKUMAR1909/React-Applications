import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Icon from './Components/Icon/Icon'
import Card from './Components/Card/Card'
import Grid from './Components/Grid/Grid'

function App() {


  return (
    <>
        <Grid  numberOfCards={9} />
    </>
  )
}

export default App

import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import './App.css'
import Navbar from './components/Navbar'

import Homepage from "./Pages/Homepage/Homepage";



function App() {
  return (
    <div className="App">

      <Navbar />
      <Homepage />

    </div>
  )
}

export default App

import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import './App.css'

function App() {

  return (
    <div className="App">
      <Signup/>
    </div>
  )
}

export default App

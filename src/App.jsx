import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>Shopmart</h1>
    </div>
  )
}

export default App

import { Route, Routes } from 'react-router-dom'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import './App.css'
import Navbar from './components/Navbar'
import Footer from "./components/Footer";
import Homepage from "./Pages/Homepage/Homepage";



function App() {
  return (
    <div className="App">
      <Navbar />
      <Homepage />
      <Footer /> 
    </div>
  )
}

export default App

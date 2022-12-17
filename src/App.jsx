import { Route, Routes } from 'react-router-dom'
import Login from './Pages/Login'
import Passwordreset from './Pages/Passwordreset'
import Signup from './Pages/Signup'
// import './App.css'
import Navbar from './components/Navbar'
import Footer from "./components/Footer/Footer";
import Homepage from "./Pages/Homepage/Homepage";
import TodayDeals from './Pages/Products/TodayDeals'
import Products from './Pages/Products/Products'


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

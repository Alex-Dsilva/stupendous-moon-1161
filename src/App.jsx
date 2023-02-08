import Navbar from './components/Navbar'
import Footer from "./components/Footer/Footer";
// import MainRoutes from './Pages/MainRoutes'
import Products from './Pages/Products/Products'
// import Homepage from "./Pages/Homepage/Homepage";
import Signup from './Pages/Signup';
import Login from './Pages/Login';

function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <Signup/> */}
      <Products/>
      {/* <Homepage/> */}
      {/* <MainRoutes/> */}
      <Footer/>
    </div>
  )
}

export default App

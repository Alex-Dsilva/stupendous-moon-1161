import Navbar from './components/Navbar'
import Footer from "./components/Footer/Footer";
import { SingleProduct } from './Pages/Products/SingleProduct';
// import MainRoutes from './Pages/MainRoutes'
// import Products from './Pages/Products/Products'
// import Homepage from "./Pages/Homepage/Homepage";
// import Signup from './Pages/Signup';
// import Login from './Pages/Login';


function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <Signup/> */}
      <SingleProduct/>
      {/* <Products/> */}
      {/* <Homepage/> */}
      {/* <MainRoutes/> */}
      <Footer/>
    </div>
  )
}

export default App

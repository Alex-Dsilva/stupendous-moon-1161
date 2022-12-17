import Login from './Pages/Login'
import Signup from './Pages/Signup'
import './App.css'
import Navbar from './components/Navbar'
import Homepage from './Pages/Homepage/Homepage'
import TodayDeals from './Pages/Products/TodayDeals'
import Products from './Pages/Products/Products'

function App() {
  return (
    <div className="App">
      <Homepage/>
      {/* <TodayDeals title={"Featured Outlet Deals"}/> */}
      {/* <Products title={"New Arrivals"} searchQuery={"new items"}/> */}
      {/* <Products title={"Bestselling"} searchQuery={"best"}/> */}
    </div>
  )
}

export default App

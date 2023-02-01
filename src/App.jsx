import DesktopNav from './components/Navbar'
import Footer from "./components/Footer/Footer";
import MainRoutes from './Pages/MainRoutes'
import Products from './Pages/Products/Products'

function App() {
  return (
    <div className="App">
      <DesktopNav/>
      <MainRoutes/>
      {/* <Footer/> */}
    </div>
  )
}

export default App

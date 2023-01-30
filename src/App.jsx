import DesktopNav from './components/Navbar'
import Footer from "./components/Footer/Footer";
import MainRoutes from './Pages/MainRoutes'


function App() {
  return (
    <div className="App">
      <DesktopNav/>
      <MainRoutes/>
      <Footer/>
    </div>
  )
}

export default App

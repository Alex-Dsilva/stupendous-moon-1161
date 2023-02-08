import MainRoutes from './Pages/MainRoutes'
import Footer from './components/Footer/Footer'
import HomeNavbar from './components/HomeNavbar/HomeNavbar'

function App() {
  return (
    <div className="App">
      <HomeNavbar/>
      <MainRoutes/>
      <Footer/>
    </div>
  )
}

export default App

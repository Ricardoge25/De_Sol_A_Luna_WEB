import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Sinopsis from './components/Sinopsis'
import Gallery from './components/Gallery'
import Smartfilms from './components/Smartfilms'
import Team from './components/Team'
import Cta from './components/Cta'
import Footer from './components/Footer'

function App() {
  return (
    <>
        <Header />
        <main className='pt-20' >
          {/* Aquí van los demás componentes */}
        <Hero />
        <Sinopsis />
        <Gallery />
        <Smartfilms />
        <Team />
        <Cta />
        </main>
        <Footer />
    </>
  )
}

export default App

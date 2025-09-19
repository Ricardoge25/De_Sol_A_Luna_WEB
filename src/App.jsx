import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Sinopsis from './components/Sinopsis'
import Gallery from './components/Gallery'

function App() {
  return (
    <>
        <Header />
        <main className='pt-20' >
          {/* Aquí van los demás componentes */}
        <Hero />
        <Sinopsis />
        <Gallery />
        </main>
    </>
  )
}

export default App

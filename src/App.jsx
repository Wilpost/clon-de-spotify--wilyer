import { AudioContextProvider } from './Context/AudioContext'
import { Home } from './Pages/Home'
import { Accesibiliti } from './components/Accesibiliti'
import { ButtonsReproduction } from './components/ButtonsReproduction'
import { InfoReproSong } from './components/InfoReproSong'

import './index.css'

const App = () => {
  return (
    <>
      <AudioContextProvider>
        <Home />
        <footer className='flex justify-between items-center w-full h-[100px]'>
          <InfoReproSong />
          <ButtonsReproduction />
          <Accesibiliti />
        </footer>
      </AudioContextProvider>
    </>
  )
}

export default App

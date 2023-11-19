import { createContext, useState } from 'react'

export const AudioContext = createContext()

export const AudioContextProvider = ({ children }) => {
  const [audioState, setAudioState] = useState({
    volumen: 0,
    songState: true,
    loop: true,
    durationSong: '0.00',
    currentTime: '0.00'
  })

  return (
    <AudioContext.Provider value={{ audioState, setAudioState }}>
      {children}
    </AudioContext.Provider>
  )
}

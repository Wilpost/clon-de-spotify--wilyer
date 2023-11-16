import { createContext, useState } from 'react'

export const AudioContext = createContext()

export function AudioContextProvider({ children }) {
  const [audioState, setAudioState] = useState({
    volumen: 0,
    songState: false,
    loop: true,
  })

  return (
    <AudioContext.Provider value={{ audioState, setAudioState }}>
      {children}
    </AudioContext.Provider>
  )
}

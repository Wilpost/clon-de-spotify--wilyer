import { useContext } from 'react'
import { AudioContext } from '../Context/AudioContext'

export const useAudio = () => {
  const { audioState, setAudioState } = useContext(AudioContext)

  return {
    audioState,
    setAudioState,
    volumen: audioState.volumen,
    songState: audioState.songState,
    loop: audioState.loop,
    durationSong: audioState.durationSong,
    currentTime: audioState.currentTime
  }
}

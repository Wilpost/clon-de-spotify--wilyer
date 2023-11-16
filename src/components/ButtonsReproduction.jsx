import { useContext } from 'react'
import {
  IconAfterSound,
  IconBeforeSound,
  IconMusicsRandom,
  IconPause,
  IconPlay,
  IconRepiteSoun,
} from '../icons/Icons'

import { Howl, Howler } from 'howler'
import { AudioContext } from '../Context/AudioContext'
import { useAudio } from '../hooks/useAudio'

// const audio = new Audio('../assets/song.mp3')
// audio.play()
// audio.volume = 0.5
// audio.currentTime = 5 // Move to 5 secs
// audio.controls = true // Move to 5 secs
// audio.play()
// console.log(audio)

export const ButtonsReproduction = () => {
  const { audioState, songState, volumen, setAudioState } = useAudio()

  const audio = new Audio(
    'https://manzdev.github.io/codevember2017/assets/eye-tiger.mp3'
  )

  function handleClick() {
    const { songState } = audioState
    // audio.currentTime --> Tiempo transcurrido
    // audio.duration --> Duracion total en segundos
    // audio.playbackRate --> Velocidad de reproduccion de audio, va de 0 hasta 4

    setAudioState({
      ...audioState,
      songState: songState ? false : true,
    })

    songState === true ? audio.play() : audio.pause()
    audio.volume = 0.2

    console.log(songState)
  }

  return (
    <div className='flex flex-col items-center'>
      <div className='flex gap-7 items-center p-3  items-center'>
        <IconMusicsRandom />
        <IconBeforeSound />
        <button
          onClick={handleClick}
          className='bg-textComun hover:scale-105 active:scale-95 p-3 w-[33px] h-[33px] grid place-content-center rounded-full'
        >
          {songState ? <IconPause w={19} h={19} /> : <IconPlay w={17} h={17} />}
        </button>
        <IconAfterSound />
        <IconRepiteSoun />
      </div>

      <div className='flex gap-3 items-center'>
        <p>0.00</p>
        <input
          className='hover:bg-textGreenSpotify range:bg-textComun w-[400px] h-1 bg-textGray opacity-80 rounded-lg cursor-pointer [&::-webkit-slider-thumb]:bg-groundDark [&::-webkit-slider-thumb]:h-40'
          type='range'
          min={0}
          max={100}
        />
        <p>3.17</p>
      </div>
    </div>
  )
}

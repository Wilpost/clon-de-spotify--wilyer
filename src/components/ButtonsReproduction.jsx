import {
  IconAfterSound,
  IconBeforeSound,
  IconMusicsRandom,
  IconPause,
  IconPlay,
  IconRepiteSoun
} from '../icons/Icons'

import { useAudio } from '../hooks/useAudio'
import { useEffect, useRef, useState } from 'react'

// const audio = new Audio('../assets/song.mp3')
// audio.play()
// audio.volume = 0.5
// audio.currentTime = 5 // Move to 5 secs
// audio.controls = true // Move to 5 secs
// audio.play()
// console.log(audio)

export const ButtonsReproduction = () => {
  const [valueRangeState, setValueRange] = useState({ valueRep: 2 })
  let cronometro

  const audioRef = useRef(null)
  const { audioState, songState, durationSong, setAudioState } = useAudio()

  const stopInterval = () => {
    console.log(valueRangeState.valueRep)
  }

  // useEffect(() => {
  //   if (audioRef.current.paused) {
  //     cronometro = setInterval(() => {
  //       if (valueRangeState.valueRep >= 4) {
  //         stopInterval()
  //       }

  //       setValueRange({
  //         valueRep: 2 + 2
  //       })
  //       console.log(valueRangeState.valueRep)
  //     }, 1000)
  //   }
  // }, [])

  clearInterval(cronometro)

  const handleClick = () => {
    audioRef.current.volume = 0.2

    setAudioState({
      ...audioState,
      songState: !songState,
      durationSong: audioRef.current.duration.toString().slice(0, 5),
      currentTime: audioRef.current.currentTime.toString().slice(0, 5)
    })

    if (audioRef.current.paused) {
      audioRef.current.play()
    } else {
      audioRef.current.pause()
    }
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
          {songState ? <IconPlay w={17} h={17} /> : <IconPause w={19} h={19} />}
        </button>
        <IconAfterSound />
        <IconRepiteSoun />
      </div>

      <audio
        src='https://manzdev.github.io/codevember2017/assets/eye-tiger.mp3'
        controls
        className='hidden'
        ref={audioRef}
      />

      <div className='flex gap-3 items-center h-5 relative overflow-hidden w-[495px]'>
        <div className='w-12 flex justify-end'>
          <p className='text-xs font-sans text-textGray'>0.00</p>
        </div>

        <div className='w-full relative flex items-center group h-1 rounded-xl bg-tempBarColor'>
          <div
            style={{ width: `${valueRangeState.valueRep}px` }}
            className='h-1 peer rounded-3xl bg-textWhite group-hover:bg-textGreenSpotify'
          />
          <div className='w-3 h-3 invisible group-hover:visible rounded-full bg-textWhite' />
        </div>

        <div className='w-12'>
          <p className='text-xs font-sans text-textGray'>{durationSong}</p>
        </div>
      </div>
    </div>
  )
}

// audio.currentTime --> Tiempo transcurrido
// audio.duration --> Duracion total en segundos
// audio.playbackRate --> Velocidad de reproduccion de audio, va de 0 hasta 4

// setAudioState({
//   ...audioState,
//   songState: !songState,
//   durationSong: audio.duration
// })
// audio.volume = 0.2
// console.log(audio.paused)

// if (audio.paused === true) {
//   audio.play()
//   audio.paused = false
// } else {
//   audio.pause()
//   console.log(audio.paused)
//   audio.paused = true
// }

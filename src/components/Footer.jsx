import {
  IconAfterSound,
  IconBeforeSound,
  IconMusicsRandom,
  IconPause,
  IconPlay,
  IconRepiteSoun,
  IconMicrophone,
  IconPlaylistTail,
  ViewSong,
  IconAddMyPlaylist,
  EmptyVolume,
  MedioVolume,
  FirstVolume,
  CompleteVolume
} from '../icons/Icons'

import { IOSSlider } from '../Constans/ConfigStyles'
import { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { storeConfig } from '../Store/storeConfig'
import { Slider } from '@nextui-org/react'

const InfoReproSong = () => {
  return (
    <div className='flex gap-5 items-center'>
      <img
        className='rounded-lg w-[70px] h-[70px]'
        src='https://i.scdn.co/image/ab67616d00001e02005ee342f4eef2cc6e8436ab'
        alt='Flyer to img song'
      />
      <div className='flex flex-col text-start'>
        <span className='text-sm font-semibold'>Name song</span>
        <span className='text-xs text-textGray'>Artists</span>
      </div>

      <button>
        <IconAddMyPlaylist />
      </button>
    </div>
  )
}

// const ButtonsReproduction = ({ audioRef }) => {
//   const [currentTime, setCurrentTime] = useState(null)
//   const [songState, setSongState] = useState(false)

//   const handleClick = () => {
//     setSongState(!songState)

//     if (audioRef !== null) {
//       if (audioRef.paused) {
//         audioRef.play()
//       } else {
//         audioRef.pause()
//       }
//     }
//   }

//   useEffect(() => {
//     const handleTime = (e) => {
//       setCurrentTime(e.currentTime)
//       console.log(e.currentTime)
//     }

//     if (audioRef !== null) {
//       audioRef.addEventListener('timeupdate', (e) => handleTime(e))
//     }

//     return () => window.removeEventListener('timeupdate', (e) => handleTime(e))
//   }, [audioRef])

//   return (
//     <div className='flex flex-col items-center'>
//       <div className='flex gap-5 items-center p-3 '>
//         <IconMusicsRandom />
//         <IconBeforeSound />
//         <button
//           onClick={handleClick}
//           className='bg-textComun relative overflow-hidden hover:scale-105 active:scale-95 p-2 w-[34px] h-[34px] grid place-content-center rounded-full'
//         >
//           <span className='absolute top-2 left-2'>
//             {songState ? <IconPause /> : <IconPlay w={17} h={17} />}
//           </span>
//         </button>
//         <IconAfterSound />
//         <IconRepiteSoun />
//       </div>

//       <div className='flex gap-3 items-center h-5 relative overflow-hidden w-[520px]'>
//         <div className='w-12 flex justify-end'>
//           <p className='text-xs font-sans text-textGray'>
//             {currentTime === null ? '0.0' : currentTime}
//           </p>
//         </div>

//         <div className='w-full flex items-center'>
//           <IOSSlider aria-label='ios slider' max={100} />
//         </div>

//         <div className='w-12'>
//           <p className='text-xs font-sans text-textGray'>{currentTime}</p>
//         </div>
//       </div>
//     </div>
//   )
// }

const Accesibiliti = ({ audioRef }) => {
  const { volume, setAudioState } = storeConfig((state) => state)
  // const setVolumeState = storeConfig((state) => state.setAudioState)

  return (
    <article
      className='flex gap-4
     items-center justify-center h-full'
    >
      <ViewSong />
      <IconMicrophone />
      <IconPlaylistTail />
      <div className='w-28 flex items-center gap-2'>
        {volume === 0 && <EmptyVolume />}
        {volume > 0 && volume < 30 && <FirstVolume />}
        {volume >= 30 && volume < 60 && <MedioVolume />}
        {volume >= 60 && <CompleteVolume />}

        <IOSSlider
          aria-label='Slider Volume'
          onChange={(e) => {
            audioRef.volume = e.target.value / 100
            setAudioState(e.target.value)
          }}
          max={100}
          min={0}
        />
      </div>
    </article>
  )
}

export const Footer = () => {
  const [songState, setSongState] = useState(false)
  const [duration, setDuration] = useState('0.0')
  const [currentTime, setCurrentTime] = useState(null)
  const audioRef = useRef(null)

  const handleClick = () => {
    setSongState(!songState)
    setDuration(audioRef.current.duration)

    if (audioRef.current.paused) {
      audioRef.current.play()
    } else {
      audioRef.current.pause()
    }
  }

  useEffect(() => {
    const handleTime = (e) => {
      setCurrentTime(e.target.currentTime)
    }

    audioRef.current.addEventListener('timeupdate', (e) => handleTime(e))

    return () => window.removeEventListener('timeupdate', (e) => handleTime(e))
  }, [audioRef])

  return (
    <section className='flex justify-between items-center'>
      <audio
        src='https://manzdev.github.io/codevember2017/assets/eye-tiger.mp3'
        ref={audioRef}
      />

      <InfoReproSong />
      <div className='flex flex-col items-center'>
        <div className='flex gap-5 items-center p-3 '>
          <IconMusicsRandom />
          <IconBeforeSound />
          <button
            onClick={handleClick}
            className='bg-textComun relative overflow-hidden hover:scale-105 active:scale-95 p-2 w-[34px] h-[34px] grid place-content-center rounded-full'
          >
            <span className='absolute top-2 left-2'>
              {songState ? <IconPause /> : <IconPlay w={17} h={17} />}
            </span>
          </button>
          <IconAfterSound />
          <IconRepiteSoun />
        </div>

        <div className='flex gap-3 items-center h-5 relative overflow-hidden w-[520px]'>
          <div className='w-12 flex justify-end'>
            <p className='text-xs font-sans text-textGray'>
              {currentTime === null
                ? '0.0'
                : `${Math.floor(currentTime / 60)}.${Math.floor(
                    currentTime % 60
                  )}`}
            </p>
          </div>

          <div className='w-full flex items-center'>
            <IOSSlider
              defaultValue={[0]}
              value={currentTime}
              aria-label='ios slider'
              max={Math.floor(duration)}
              min={0}
              onChange={(e) => {
                audioRef.current.currentTime = e.target.value
              }}
            />
          </div>

          <div className='w-12'>
            <p className='text-xs font-sans text-textGray'>
              {typeof duration === 'string'
                ? duration
                : `${Math.floor(duration / 60)}.${Math.floor(duration % 60)}`}
            </p>
          </div>
        </div>
      </div>
      <Accesibiliti audioRef={audioRef.current} />
    </section>
  )
}

Accesibiliti.propTypes = {
  audioRef: PropTypes.object
}

// ButtonsReproduction.propTypes = {
//   audioRef: PropTypes.object
// }

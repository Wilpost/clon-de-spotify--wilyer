import { useAudio } from '../hooks/useAudio'
import {
  IconAumentVolume,
  IconMicrophone,
  IconPlaylistTail,
} from '../icons/Icons'

export function Accesibiliti() {
  const { volumen } = useAudio()
  return (
    <article className='flex gap-5 items-center h-[113px]'>
      <div className='w-[17px] h-[17px]'>
        <IconMicrophone />
      </div>
      <div className='w-[17px] h-[17px]'>
        <IconPlaylistTail />
      </div>
      <div className='w-[154px] flex items-center gap-1'>
        <IconAumentVolume />
        <input
          className='cursor-pointer range h-[20px] bg-textSpotify [&::-webkit-slider-thumb]:bg-textSpotify hover:bg-textSpotify'
          type='range'
          min={volumen}
          max={100}
        />
      </div>
    </article>
  )
}

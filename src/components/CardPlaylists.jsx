import { storeConfig } from '../Store/storeConfig'
import { IconPause, IconPlay } from '../icons/Icons'

export function CardSongRecent({ song }) {
  storeConfig((state) => state.songState)
  const setBackdropColor = storeConfig((state) => state.setBackdropColor)
  const songState = storeConfig((state) => state.songState)
  const setSongState = storeConfig((state) => state.setSongState)

  const handleClick = () => {
    setSongState(!songState)
  }

  const handleHover = () => {
    setBackdropColor(song.color)
  }

  return (
    <article
      onMouseMove={() => handleHover()}
      className='group animate-fadeIn relative overflow-hidden h-12 shadow-3xl hover:bg-[#9c9c9c5e] bg-[#6867675e] flex items-center hover:cursor-pointer rounded-md w-full'
    >
      <div className='flex gap-3 z-60'>
        <picture className='shadow-rigth w-14 h-full'>
          <img
            className='w-full h-full'
            src={song.cover}
            alt='Flyer from the album'
          />
        </picture>
        <div className='flex items-center'>
          <strong className='font-bold text-sm'>{song.title}</strong>
        </div>
      </div>

      <div
        className={`h-full z-20 ${
          songState ? 'invisible opacity-0' : 'visible opacity-100'
        } right-3 group-hover:opacity-100 group-hover:visible flex absolute items-center`}
      >
        <button
          onClick={handleClick}
          className='bg-textGreenSpotify z-70 hover:scale-105 active:scale-95 p-3 w-[35px] h-[35px] grid place-content-center rounded-full'
        >
          {songState ? <IconPlay w={18} h={18} /> : <IconPause w={20} h={20} />}
        </button>
      </div>
    </article>
  )
}

export function ButtonSpotify() {
  const songState = storeConfig((state) => state.songState)
  const setSongState = storeConfig((state) => state.setSongState)

  const handleClick = () => {
    setSongState(!songState)
  }

  return (
    <button
      onClick={handleClick}
      className='bg-textGreenSpotify z-70 hover:scale-105 active:scale-95 p-3 w-[50px] h-[50px] grid place-content-center rounded-full'
    >
      {songState ? <IconPlay w={20} h={20} /> : <IconPause w={23} h={23} />}
    </button>
  )
}

export const CardPlaylists = ({ title, description, image }) => {
  const songState = storeConfig((state) => state.songState)

  return (
    <article className='group w-[180px] z-50 h-full max-w-96 relative shadow-3xl hover:bg-groundDark transition-bg duration-300 bg-cardGround p-3 flex hover:cursor-pointer flex-col items-center justify-center gap-5 rounded-lg'>
      <div className='z-60 h-full w-full'>
        <figure className='shadow-3xl'>
          <img
            className='object-contain rounded-[5px]'
            src={image}
            alt='Flyer from the album'
          />
        </figure>
        <div className='mt-3 flex gap-1 flex-col'>
          <div className=' '>
            <strong className='font-bold text-lg'>{title}</strong>
          </div>
          <div>
            <p className='text-sm text-textGray'>
              example, Oscar D`leon, Romeo Santos...
            </p>
          </div>
        </div>
      </div>

      <div
        className={`w-full h-full z-20 ${
          songState
            ? 'invisible opacity-0'
            : 'visible opacity-100 translate-y-[-10px]'
        } right-[20px] top-7 transition-translate duration-300 group-hover:translate-y-[-10px] group-hover:opacity-100 group-hover:visible flex absolute justify-end items-center`}
      >
        <ButtonSpotify />
      </div>
    </article>
  )
}

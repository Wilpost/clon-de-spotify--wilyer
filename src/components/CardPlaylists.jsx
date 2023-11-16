import { useAudio } from '../hooks/useAudio'
import { IconPause, IconPlay } from '../icons/Icons'

export function CardPlaylists() {
  const { audioState, songState, setAudioState } = useAudio()

  const handleClick = () => {
    setAudioState({
      ...audioState,
      songState: songState ? false : true,
    })
  }

  return (
    <article className='group w-[210px] overflow-hidden relative h-[290px] shadow-3xl hover:bg-groundDark transition-bg duration-300 bg-cardGround p-4 flex hover:cursor-pointer flex-col items-center justify-center gap-5 rounded-lg'>
      <div className='z-60 h-full w-full'>
        <div className='shadow-3xl'>
          <img
            className='object-contain rounded-lg'
            src='https://i.scdn.co/image/ab67616d00001e02005ee342f4eef2cc6e8436ab'
            alt='Flyer from the album'
          />
        </div>
        <div className='mt-3 flex gap-1 flex-col'>
          <div className=' '>
            <strong className='font-bold text-lg'>Title Playlist</strong>
          </div>
          <div>
            <p className='text-sm text-textGray'>
              example, Oscar D`leon, Romeo Santos...
            </p>
          </div>
        </div>
      </div>

      <div className='w-full z-20 h-full invisible right-[20px] top-7 transition-translate duration-300 group-hover:translate-y-[-10px] opacity-0 group-hover:opacity-100 group-hover:visible group-hover:visible flex absolute justify-end items-center'>
        <button
          onClick={handleClick}
          className='bg-textGreenSpotify z-70 hover:scale-105 active:scale-95 p-3 w-[50px] h-[50px] grid place-content-center rounded-full'
        >
          {songState ? <IconPause w={23} h={23} /> : <IconPlay w={20} h={20} />}
        </button>
      </div>
    </article>
  )
}

//hover:visible invisible peer-hover:animate-fade-up peer-hover:animate-once peer-hover:animate-duration-300 peer-hover:animate-delay-100 peer-hover:animate-fill-both peer-hover:visible h-full w-full

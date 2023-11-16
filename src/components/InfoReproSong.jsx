import { IconAddMyPlaylist } from '../icons/Icons'

export const InfoReproSong = () => {
  return (
    <div className='flex gap-5 items-center'>
      <img
        className='rounded-lg w-[70px] h-[70px]'
        src='https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228'
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

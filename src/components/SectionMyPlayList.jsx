import {
  IconBiblioteca,
  IconFixed,
  IconList,
  IconSearch,
  IconViewMore,
  PlusIcon
} from '../icons/Icons'

export const SectionMyListPlayList = () => {
  return (
    <article className='w-full rounded-lg bg-groundColor flex flex-col gap-2 p-2 h-full '>
      <div className='flex p-3 pl-3 gap-5 items-center justify-between w-full'>
        <div className='w-full cursor-pointer transition flex items-center gap-3 opacity-75 hover:opacity-100'>
          <IconBiblioteca />
          <strong className='text-textWhite'>Tu biblioteca</strong>
        </div>

        <div className='w-full flex gap-3 items-center justify-end'>
          <figure className='hover:bg-cardGround hover:opacity-100 transition cursor-pointer opacity-75 w-7 h-7 flex items-center justify-center rounded-full'>
            <PlusIcon />
          </figure>
          <figure className='hover:bg-cardGround hover:opacity-100 transition cursor-pointer opacity-75 w-7 h-7 flex items-center justify-center rounded-full'>
            <IconViewMore />
          </figure>
        </div>
      </div>

      <div className='w-full flex flex-col gap-3'>
        <span className='ml-2 w-[75px] backdrop-opacity-60 bg-groundDark font-medium rounded-2xl text-[14px] px-[13px] py-[6px]'>
          Playlists
        </span>
        <div className=' w-full flex items-center justify-between pr-5 pl-1'>
          <figure className='w-9 h-9 flex items-center justify-center rounded-full opacity-75 hover:opacity-100 cursor-pointer hover:bg-groundDark'>
            <IconSearch w={16} h={16} />
          </figure>

          <div className='flex gap-1 items-center hover:scale-105 hover:opacity-100 opacity-75 duration-200 cursor-pointer'>
            <span className='text-textWhite text-sm'>Recientes</span>
            <IconList />
          </div>
        </div>

        <div className='p-2 cursor-pointer hover:bg-textGray hover:bg-opacity-5 hover:rounded-md w-full flex gap-2'>
          <picture className='w-[60px]'>
            <img
              className='object-contain rounded-[4px]'
              src='https://misc.scdn.co/liked-songs/liked-songs-64.png'
              alt='Flyer from the album'
            />
          </picture>

          <div className='w-full flex flex-col justify-start '>
            <h1 className='font-medium text-md'>Tus me gusta</h1>
            <span className='text-sm text-textGray w-full flex items-center gap-2'>
              <IconFixed /> Playlist • songNumber
            </span>
          </div>
        </div>
      </div>
    </article>
  )
}

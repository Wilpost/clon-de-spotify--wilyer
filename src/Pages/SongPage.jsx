import { useParams } from 'react-router'
import { ButtonSpotify } from '../components/CardPlaylists'
import {
  IconAddMyPlaylist,
  IconList,
  IconMusicsRandom,
  IconOptions,
  IconPlay
} from '../icons/Icons'
import { playlist, songs } from '../lib/data'
import { storeConfig } from '../Store/storeConfig'

function SideBarSong () {
  return (
    <aside className='flex items-center justify-between w-full z-50 h-20 p-4 '>
      <div className='flex items-center gap-5'>
        <ButtonSpotify />
        <IconMusicsRandom w={26} h={26} />
        <IconAddMyPlaylist w={28} h={28} />
        <IconOptions w={28} h={28} />
      </div>

      <div>
        <span className='w-full flex items-center gap-2 opacity-75 hover:opacity-100 cursor-pointer'>
          Lista <IconList />
        </span>
      </div>
    </aside>
  )
}

function TableListSongs ({ album }) {
  return (
    <section className='w-full p-4 -mt-3'>
      <div className='text-textGray w-full grid grid-cols-tableGrid px-4 border-b-[1px] border-opacity-50 border-tempBarColor pb-3 justify-between'>
        <div className='w-full'>#</div>
        <div className='w-full'>Título</div>
        <div className='w-full'>Álbum</div>
        <div className='w-full'>Duration</div>
      </div>

      <div className='w-full flex flex-col items-center gap-2 mt-2 h-full'>
        {playlist.map((song) => {
          return (
            <div
              key={song.id}
              className='group h-14 hover:bg-tempBarColor transition cursor-pointer hover:bg-opacity-50 rounded-md grid grid-cols-tableGrid justify-center w-full items-center px-4'
            >
              <div className='block group-hover:hidden'>{song.id}</div>
              <div className='w-full hidden group-hover:block'>
                <IconPlay className='fill-textWhite' w={13} h={13} />
              </div>
              <div className='flex gap-3 items-center p-2'>
                <img
                  className='rounded-md w-[40px] h-[40px]'
                  src={song.cover}
                  alt='Flyer to img song'
                />
                <div className='flex flex-col'>
                  <span className=''>{song.title}</span>
                  <small className='text-textGray'>
                    {song.artists?.map((artist, i) => {
                      if (song.artists[i + 1] === undefined) {
                        return artist
                      }
                      return `${artist}, `
                    })}
                  </small>
                </div>
              </div>
              <span className='text-sm text-textGray'>{album.title}</span>
              <span className='text-textGray'>1:03</span>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export function SongPage () {
  const setBackdropColor = storeConfig((state) => state.setBackdropColor)
  const { songId } = useParams()

  const findSong = songs.find((song) => song.id === songId)

  if (findSong.color) {
    setBackdropColor(findSong.color)
  }

  return (
    <div className='w-full h-64 '>
      {/* Header */}
      <section className='w-full h-full items-end flex gap-7 p-5 relative overflow-hidden'>
        <figure className='max-w-80 w-72 h-50'>
          <img
            className='object-cover rounded-md shadow-4xl'
            src={findSong.cover}
            alt='Backdrop of song or playlist'
          />
        </figure>
        <article className='flex flex-col w-full h-full justify-end'>
          <div className='w-full flex flex-col'>
            <span className='text-md -mb-6'>Album</span>
            <h1 className='text-[80px] h-full flex -leading-10 w-full font-bold -ml-1'>
              {findSong.title}
            </h1>
          </div>

          <div className='w-full flex flex-col gap-2 item-center'>
            <span className='w-full flex gap-1 items-center text-textGray'>
              {/* <img
                src='https://open.spotifycdn.com/cdn/images/favicon16.1c487bff.png'
                alt='Icon logo of Spotify'
              /> */}
              <strong className='font-semibold text-textWhite'>
                {findSong.artists?.map((artist, i) => {
                  if (findSong.artists[i + 1] === undefined) {
                    return artist
                  }
                  return `${artist}, `
                })}
              </strong>{' '}
              <span className='text-textWhite'>
                • {playlist.length} canciones, 1h 38 min
              </span>
            </span>
          </div>
        </article>
      </section>

      <section className='w-full bg-groundColor bg-opacity-30'>
        <SideBarSong />
        <TableListSongs album={findSong} />
      </section>
    </div>
  )
}

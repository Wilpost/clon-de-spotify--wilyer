import { IconAddedToMyPlaylist, IconPause, IconPlay } from '../icons/Icons'
import { usePlaySong } from '../hooks/usePlaySong'
import { useSelectState } from '../hooks/useSelectState'
import { useArtistFunciton } from '../hooks/useArtistFunctions'

export const TableListSongs = ({ album = [], albumId, type }) => {
  const { audioControl } = usePlaySong()
  const { scroll, songSelect, songState } = useSelectState()
  const { existSongInPlaylist } = useArtistFunciton()

  return (
    <section className='w-full relative h-full -mt-3'>
      <div
        style={{
          background: scroll > 352 ? '#1a1a1a' : 'transparent',
          zIndex: 99999
        }}
        className={`
         sticky p-4 top-0 text-textGray transition w-full flex flex-col py-1
         ${
           scroll > 352 ? 'border-b-[1px] border-b-tempBarColor' : 'border-none'
         }
        `}
      >
        <div className='w-full text-sm text-opacity-70 pl-5 flex  grid-cols-tableGrid items-center'>
          <div className='w-8'>#</div>
          <div className='w-[422px]'>Título</div>
          <div className='w-[295px]'>Álbum</div>
          <div className=''>Duration</div>
        </div>

        {scroll < 352 && (
          <div className='w-[98%] mt-2 ml-2 h-[1px] bg-tempBarColor bg-opacity-60' />
        )}
      </div>

      <div className='w-full p-4 flex flex-col  items-center gap-2 -mt-2 h-full'>
        {album?.length > 0 &&
          album?.map((song, index) => {
            if (
              (!song.hear && songSelect?.song?.id !== song.id) ||
              !songState
            ) {
              song.hear = false
            } else if (
              songState &&
              song.hear &&
              songSelect?.song?.id === song?.id
            ) {
              if (song.hear) song.hear = true
              else song.track.hear = true
            }

            return (
              <div
                key={song?.id}
                className='group h-14 hover:bg-tempBarColor transition hover:bg-opacity-50 rounded-md flex  w-full justify-between items-center px-4'
              >
                <div className='flex group items-center'>
                  {!song.hear && (
                    <div className='block group-hover:hidden w-6'>
                      <span className='text-sm text-textGray relative'>
                        {index + 1}
                      </span>
                    </div>
                  )}

                  {song?.hear && (
                    <figure className='h-full block group-hover:hidden w-6'>
                      <img
                        className='w-4'
                        src='https://open.spotifycdn.com/cdn/images/equaliser-animated-green.f5eb96f2.gif'
                        alt='Gif sound wave'
                      />
                    </figure>
                  )}

                  <div className='hidden group-hover:block w-6'>
                    <button
                      onClick={() => {
                        audioControl({
                          albumId,
                          song,
                          list: album,
                          type,
                          albums: album
                        })
                      }}
                    >
                      {song?.hear && <IconPause w={14} h={14} color='#fff' />}
                      {!song?.hear && (
                        <IconPlay className='fill-textWhite' w={13} h={13} />
                      )}
                    </button>
                  </div>

                  <div className='w-[443px] flex gap-3 items-center p-2'>
                    <img
                      className='rounded-md w-[40px] h-[40px]'
                      src={song?.album?.images[0].url}
                      alt='Flyer to img song'
                    />
                    <div className='w-full flex flex-col'>
                      <span
                        className={`${
                          song?.hear ? 'text-textGreenSpotify' : 'text-white'
                        } w-full `}
                      >
                        {song?.name?.length > 40
                          ? `${song?.name?.slice(0, 40)}...`
                          : song?.name?.slice(0, 40)}
                      </span>
                      <small className='text-textGray flex gap-1 w-full'>
                        {song?.album?.artists?.map((artist, i) => {
                          if (
                            song?.album?.artists[i + 1] === undefined &&
                            i <= 3
                          ) {
                            return (
                              <span key={i} className='hover:underline'>
                                {artist.name}
                              </span>
                            )
                          }
                          return (
                            <span key={i} className='hover:underline'>
                              {`${artist.name}, `}
                            </span>
                          )
                        })}
                      </small>
                    </div>
                  </div>
                </div>

                <span className='text-sm text-textGray w-[318px]'>
                  {song?.album?.name}
                </span>
                <span className='mr-8 -ml-9 w-8 invisible group-hover:visible'>
                  {existSongInPlaylist(song?.id) && <IconAddedToMyPlaylist />}
                </span>
                <span className='text-textGray'>1:03</span>
              </div>
            )
          })}

        {!album?.length > 1 && album?.length !== 0 && (
          <div className='group h-14 hover:bg-tempBarColor transition cursor-pointer hover:bg-opacity-50 rounded-md grid grid-cols-tableGrid justify-center w-full items-center px-4'>
            <div className='block group-hover:hidden'>{album?.id}</div>
            <div className='w-full hidden group-hover:block'>
              <button
                onClick={() => {
                  audioControl({
                    albumId,
                    song: album?.tracks?.items[0] ?? album[0],
                    list: album?.tracks?.items ?? album,
                    type: 'album'
                  })
                }}
              >
                <IconPlay className='fill-textWhite' w={13} h={13} />
              </button>
            </div>
            <div className='flex gap-3 items-center p-2'>
              <img
                className='rounded-md w-[40px] h-[40px]'
                src={album?.cover}
                alt='Flyer to img album'
              />
              <div className='flex flex-col'>
                <span className=''>{album?.title}</span>
                <small className='text-textGray'>
                  {album?.artists?.map((artist, i) => {
                    if (album?.artists[i + 1] === undefined) {
                      return artist
                    }
                    return `${artist}, `
                  })}
                </small>
              </div>
            </div>
            <span className='text-sm text-textGray'>{album?.title}</span>
            <span className='text-textGray'>1:03</span>
          </div>
        )}

        {album?.length === 0 && (
          <h3 className='text-textGray w-full text-center text-lg'>
            No songs found...
          </h3>
        )}
      </div>
    </section>
  )
}

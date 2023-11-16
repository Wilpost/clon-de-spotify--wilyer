import { CardPlaylists } from './CardPlaylists'
import { HeaderListPlaylist } from './HeaderListPlaylis'

export const ListPlaylist = () => {
  return (
    <section className='w-full h-full rounded-lg p-3 n overflow-y-auto bg-groundColor'>
      {/* <div className='h-[200px] w-full realtive top-px bg-gradient-to-b from-textGreenSpotify from-30% to-transparent from-[-200px]'></div> */}
      <HeaderListPlaylist />
      <CardPlaylists />
    </section>
  )
}

import { songs } from '../lib/data'
import { CardSongRecent } from './CardPlaylists'

export const ListPlaylist = () => {
  return (
    <>
      {songs.slice(0, 6).map((song) => {
        return <CardSongRecent key={song.id} song={song} />
      })}
    </>
  )
}

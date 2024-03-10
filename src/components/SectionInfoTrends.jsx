import { Link } from 'react-router-dom'
import { songs } from '../lib/data'
import { CardPlaylists } from './CardPlaylists'

export function SectionInfoTrends({ title }) {
  return (
    <div className='w-full h-full flex flex-col gap-4'>
      <nav className='w-full'>
        <ul className='w-full flex space-between items-center pr-4'>
          <a
            href='#'
            className='w-full hover:underline text-[23px] text-white font-bold'
          >
            {title}
          </a>
          <a
            href='#'
            className='w-full hover:underline text-end text-textGray text-sm font-bold'
          >
            Mostrar más
          </a>
        </ul>
      </nav>
      <section className='w-full grid gap-1 grid-cols-gridSectionTrend'>
        {songs.slice(0, 5).map((song) => {
          return (
            <Link to={`/song/${song.id}`} key={song.id}>
              <CardPlaylists title={song.title} image={song.cover} />
            </Link>
          )
        })}
      </section>
    </div>
  )
}

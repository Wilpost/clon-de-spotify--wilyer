import { ListPlaylist } from '../components/ListsPlaylist'
import { SectionInfoTrends } from '../components/SectionInfoTrends'

export const Home = () => {
  return (
    <>
      <header className='pl-4 p-4 grid grid-cols-recentCardsGrid gap-2'>
        <ListPlaylist />
      </header>

      <section className='w-full flex flex-col gap-7 pl-4'>
        <SectionInfoTrends title='Hecho para Wilyer' />
        <SectionInfoTrends title='Escuchados recientemente' />
        <SectionInfoTrends title='Tus artistas favorito' />
      </section>
    </>
  )
}

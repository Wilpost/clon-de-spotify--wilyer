import { ListPlaylist } from '../components/ListsPlaylist'
import { Navbar } from '../components/Navbar'
import { SectionMyListPlayList } from '../components/SectionMyPlayList'

export const Home = () => {
  return (
    <main className='flex gap-[8px] h-[84vh] w-full'>
      <aside className='flex flex-col gap-[8px]'>
        <Navbar />
        <SectionMyListPlayList />
      </aside>
      <div
        data-testid='LayoutResizer__resize-bar'
        className='h-full w-[2px] resize-x cursor-ew-resize'
      />
      <ListPlaylist />
    </main>
  )
}

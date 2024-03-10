import './index.css'
import { Paths } from './Routing/roots'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { storeConfig } from './Store/storeConfig'
import { HeaderListPlaylist } from './components/HeaderListPlaylis'
import { SectionMyListPlayList } from './components/SectionMyPlayList'

const App = () => {
  const backdropColor = storeConfig((state) => state.backdropColor)

  // const setBackdropColor = storeConfig((state) => state.setBackdropColor)

  // useEffect(() => {
  //   function getHtml(url) {
  //     const res = fetch(url.pathname)
  //     return res
  //   }

  //   window.navigation.addEventListener('navigate', (e) => {
  //     const url = new URL(e.destination.url)

  //     if (window.location.origin !== url.origin) return

  //     e.intercept({
  //       async handler () {
  //         const res = await getHtml(url)
  //         const data = await res.text()

  //         const [, text] = data.match(/<body>([\s\S]*)<\/body>/i)

  //         document.startViewTransition(() => {
  //           // el scroll hacia arriba del todo
  //           document.getElementById('root').innerHTML = text
  //           document.documentElement.scrollTop = 0
  //         })
  //       }
  //     })
  //   })

  //   return () => window.navigation.addEventListener('navigate', () => {})
  // }, [])

  // useEffect(() => {
  //   window.navigation.addEventListener('navigate', (event) => {
  //     console.log(event.destination.url)
  //     if (event.destination.url === '/') {
  //       console.log('hey')
  //       setBackdropColor('#65677e')
  //     }
  //   })

  //   return () => window.navigation.removeEventListener('navigate', () => {})
  // }, [])

  return (
    <main className='main gap-2'>
      <aside className='md:flex hidden [grid-area:aside] rounded-lg flex-col gap-2'>
        <Navbar />
        <SectionMyListPlayList />
      </aside>

      <section className='mainSection flex flex-col bg-groundColor gap-4 w-full h-full main-content overflow-hidden [grid-area:main] relative rounded-lg overflow-y-auto transition z-50'>
        <div
          style={{
            background: `linear-gradient(0deg, #12121200 31%, ${backdropColor} 113%)`
          }}
          className='w-full z-0 absolute top-0 h-[771px]'
        />

        <div className='z-50'>
          <HeaderListPlaylist />

          <Paths />
        </div>
      </section>

      <footer className='[grid-area:footer] h-24'>
        <Footer />
      </footer>
    </main>
  )
}

export default App

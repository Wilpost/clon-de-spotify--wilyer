export function viewTransitionApi () {
  window.navigation.addEventListener('navigate', (e) => {
    const url = new URL(e.destination.url)

    if (window.location.origin !== url.origin) return

    e.intercept({
      async handler () {
        const res = await fetch(url.pathname)
        const data = await res.text()

        const [, text] = data.match(/<body>([\s\S]*)<\/body>/i)

        document.startViewTransition(() => {
          // el scroll hacia arriba del todo
          document.getElementById('root').innerHTML = text
          document.documentElement.scrollTop = 0
        })
      }
    })
  })
}

import { Route, Routes } from 'react-router'
import { Home } from '../Pages/Home'
import { SongPage } from '../Pages/SongPage'
import { useEffect } from 'react'

export function Paths () {
  useEffect(() => {
    document.querySelector('.mainSection').scrollTop = 0
  }, [])
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='song/:songId' element={<SongPage />} />
    </Routes>
  )
}

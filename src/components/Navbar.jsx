import { Link } from 'react-router-dom'
import { IconHome, IconSearch } from '../icons/Icons'

export const Navbar = () => {
  return (
    <nav className='bg-groundColor w-full h-28 rounded-lg pl-5 flex flex-col justify-evenly p-2'>
      <ul className='flex flex-col h-full gap-2 w-full justify-evenly'>
        <li>
          <Link
            to='/'
            className='flex opacity-75 gap-5 font-semibold text-base text-textWhite items-center hover:opacity-100 transition-opacity p-2 duration-200'
          >
            <IconHome />
            Inicio
          </Link>
        </li>

        <li>
          <a
            href='#'
            className='flex opacity-75 gap-5 font-semibold text-base text-textWhite items-center hover:opacity-100 transition-opacity p-2 duration-200'
          >
            <IconSearch />
            Buscar
          </a>
        </li>
      </ul>
    </nav>
  )
}

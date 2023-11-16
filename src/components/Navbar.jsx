import { IconHome, IconSearch } from '../icons/Icons'

export const Navbar = () => {
  return (
    <nav className='opacity-90 bg-groundColor w-[400px] h-28 rounded-lg pl-5 flex flex-col justify-evenly'>
      <ul className='flex flex-col h-full gap-2 w-full justify-evenly'>
        <li>
          <a
            href='#'
            className='flex opacity-75 gap-5 font-bold text-base text-textWhite items-center hover:opacity-100 transition-opacity duration-200'
          >
            <IconHome />
            Inicio
          </a>
        </li>

        <li>
          <a
            href='#'
            className='flex opacity-75 gap-5 font-bold text-base text-textWhite items-center hover:opacity-100 transition-opacity duration-200'
          >
            <IconSearch />
            Buscar
          </a>
        </li>
      </ul>
    </nav>
  )
}

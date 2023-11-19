import { IconBiblioteca, IconViewMore } from '../icons/Icons'
import { CardInfo } from './CardInfo'

export const SectionMyListPlayList = () => {
  return (
    <article className='w-[400px] rounded-lg bg-groundColor flex flex-col gap-2 p-2 h-full'>
      <div className='flex p-7 pl-5 gap-5 items-center justify-between w-full h-[30px]'>
        <div className='flex items-center gap-3'>
          <IconBiblioteca />
          <strong className='text-textGray'>Tu biblioteca</strong>
        </div>
        <IconViewMore />
      </div>

      <CardInfo
        slogan='Crea tu primera playlist'
        paragraph='¡Es mut fácil! Te vamos a ayudar'
        textButton='Crear playlist'
      />

      <CardInfo
        slogan='Busquemos algunos podcats para seguir'
        paragraph='Te mantendremos al tanto de los nuevos episodios'
        textButton='Explorar podcasts'
      />
    </article>
  )
}

import {
  IconAccount,
  IconArrowLeft,
  IconArrowRigth,
  IconNotifications,
} from '../icons/Icons'

export function HeaderListPlaylist() {
  return (
    <header className='mb-32 w-full flex flex-col relative'>
      <div className='fixed w-full flex justify-between'>
        <div className='flex gap-2 w-20 h-1'>
          <button className='hover:bg-groundDark transition-bg duration-300 p-3 w-10 h-10 grid place-content-center bg-arrowGround rounded-full'>
            <IconArrowLeft />
          </button>
          <button className='hover:bg-groundDark transition-bg duration-300 p-3 w-10 h-10 grid place-content-center bg-arrowGround rounded-full'>
            <IconArrowRigth />
          </button>
        </div>

        <div className='flex gap-4 items-center h-10'>
          <div className='w-[158px]'>
            <button className='hover:w-[149px] p-4 w-[143px] h-[35px] flex items-center justify-center rounded-3xl text-sm bg-textWhite text-groundDark font-bold transition-w-h duration-100'>
              Exporar premiun
            </button>
          </div>
          <button className='p-3 w-10 h-10 grid place-content-center bg-arrowGround rounded-full'>
            <IconNotifications />
          </button>
          <button className='p-3 w-10 h-10 grid place-content-center bg-arrowGround rounded-full'>
            <IconAccount />
          </button>
        </div>
      </div>
      <div></div>
    </header>
  )
}

import {
  IconAccount,
  IconArrowLeft,
  IconArrowRigth,
  IconNotifications
} from '../icons/Icons'

export function HeaderListPlaylist() {
  const handleButtonBack = () => {
    window.history.back()
  }

  const handleButtonNext = () => {
    window.history.go(1)
  }

  return (
    <header className='h-[59px] left-0 top-0 w-full relative flex flex-col p-4 z-50'>
      <div className='w-full flex justify-between '>
        <div className='flex gap-2 w-20 h-1'>
          <button
            disabled={window.location.href === 'http://localhost:5173/'}
            onClick={(e) => handleButtonBack(e)}
            className='disabled:opacity-60 opacity-75 transition-bg duration-300 w-8 h-8 grid place-content-center bg-arrowGround rounded-full'
          >
            <IconArrowLeft />
          </button>
          <button
            disabled={!window.navigation.canGoForward}
            onClick={(e) => handleButtonNext(e)}
            className='disabled:opacity-60 opacity-75 transition-bg duration-300 w-8 h-8 grid place-content-center bg-arrowGround rounded-full'
          >
            <IconArrowRigth />
          </button>
        </div>

        <div className='flex gap-2 items-center h-10'>
          <div className='w-[158px]'>
            <button className='hover:scale-105 p-4 w-[143px] h-[35px] flex items-center justify-center rounded-3xl text-sm bg-textWhite text-groundDark font-bold transition-w-h duration-100'>
              Exporar premiun
            </button>
          </div>
          <button className='p-3 hover:bg-groundColor hover:scale-105 w-8 h-8 grid place-content-center bg-groundDark rounded-full'>
            <IconNotifications />
          </button>
          <button className='p-3 hover:bg-groundColor hover:scale-105 w-8 h-8 grid place-content-center bg-groundDark rounded-full'>
            <IconAccount />
          </button>
        </div>
      </div>
    </header>
  )
}

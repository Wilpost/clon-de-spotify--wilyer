export function CardInfo({ slogan, paragraph, textButton }) {
  return (
    <div className='flex flex-col gap-5'>
      <div className='bg-groundDark rounded-lg flex flex-col justify-between h-[143px] p-4'>
        <div className='flex flex-col gap-2'>
          <strong className='text-white font-bold'>{slogan}</strong>
          <p className='text-white text-sm'>{paragraph}</p>
        </div>
        <div>
          <button className='p-4 h-[30px] flex items-center justify-center rounded-3xl text-sm text-black bg-textComun text-groundDark hover:scale-105 active:scale-95 font-bold'>
            {textButton}
          </button>
        </div>
      </div>
    </div>
  )
}

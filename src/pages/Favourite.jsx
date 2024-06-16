import React from 'react'
const fav=false
const Favourite = () => {
  return (
  <div className='bg-[#faf9fb flex-1 p-10  min-h-screen]'>
    <div className='max-w-screen-lg mx-auto'>
    <p className='font-bold  text-3xl md:text-5xl my-4'>My favourites</p>
    {!fav && (
      <div className='h-[80] flex flex-col justify-center gap-4'>
        <img src="/404.svg " className='h-3/4' alt='404 svg' />
      </div>
    )}

    {fav&&(
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        <ReceipeCard />
      </div>
    )}
    </div>
  </div>
  )
}

export default Favourite
import { Search,Soup,Heart,HeartPulse } from 'lucide-react'

const ReceipeCard = ({recipe}) => {
  return (
    <div className='flex h-30 flex-col rounded-md bg-[#ecf7d4] overflow-hidden pd-3 relative'>
    <a href='#' className='relative  h-22'>
      <img src={recipe.image} alt='receipe image'
      className='rounded-md w-full h-22 object-cover cursor-pointer'  />
      <div className='absolute bottom-2 left-2 bg-white rounded-full pd-1 cursor-pointer flex items-center  gap-1 text-sm'>
      <Soup size={16} /> {recipe.yield} servings
      </div>
      <div className='absolute top-1 right-2 bg-white rounded-full p-1 cursor-pointer'>
        <Heart size={20} className='hover:fill-red-500 hover:text-red-500' />
      </div>
    </a>
    <div className='flex mt-1 '>
      <p className='font-bold tracking-wide'>{recipe.label}</p>
    </div>
    <p className='my-2'>{recipe.cuisineType} </p>
    <div className='flex gap-2 mt-auto'>


   
    
    </div>
    </div>
  )
}

export default ReceipeCard
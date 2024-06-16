import { Search,Soup,Heart,HeartPulse } from 'lucide-react'

import React from 'react'
import ReceipeCard from '../components/ReceipeCard'
const Homepage = () => {
  return (
    <div className='bg-[#ecfccb] p-10 flex-1'>
    <div className='max-w-screen-lg mx-auto'>
    <form>
      <label className='input shadow-sm flex items-center gap-2'>
      <Search size={"24"}/>
      <input type='text' className='text-sm md:text-md grow'
        placeholder="What's cooking ?"
      />
      </label>
    </form>

    <h1 className='font-bold text-2xl md:text-5xl mt-4'> Recommended receipes</h1>
    <p className='text-slate-500 font-semibold ml-1 my-2 text-sm tracking-tight '>Popular choices</p>

    <div className='grid gap-3 grid-cols-1 md:grid-cols-2 lg-grid-cols-3'>
     <ReceipeCard />
     <ReceipeCard />
     <ReceipeCard />
     <ReceipeCard />
     <ReceipeCard />
     <ReceipeCard />
     <ReceipeCard />
     <ReceipeCard />

    

    
    </div>
    </div>
    </div>  
  )
}

export default Homepage
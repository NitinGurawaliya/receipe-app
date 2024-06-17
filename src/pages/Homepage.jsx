import { Search } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import ReceipeCard from '../components/ReceipeCard'
import { getRandomColor } from '../lib/utils'
const APP_ID="2171df07"
const APP_KEY="88ba211b701f58bdf169b416794f7ee2"



const Homepage = () => {
  const [recipes,setRecipes]=useState([])
  const [loading,setLoading]=useState(true)

  const fetchRecipes=async(searchQuery)=>{
    setLoading(true);
    setRecipes([])
    try {
      const res= await fetch(`https://api.edamam.com/api/recipes/v2/?app_id=${APP_ID}&app_key=${APP_KEY}&q=${searchQuery}&type=public`)
      const data=await res.json();
      setRecipes(data.hits)
      console.log(data.hits)

    } catch (error) {
      console.log(error.message);

    } finally{
      setLoading(false);
    }
  }   

  useEffect(()=>{ 
    fetchRecipes("kofta")
  },[])

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
    {!loading &&
						recipes.map(({ recipe }, index) => (
							<ReceipeCard key={index} recipe={recipe} {...getRandomColor()} />
						))}

    

    
    </div>
    </div>
    </div>  
  )
}

export default Homepage
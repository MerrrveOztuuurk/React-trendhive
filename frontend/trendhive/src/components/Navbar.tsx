import {Menu, SquareUser } from 'lucide-react'
import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-bg-o w-full top-0 flex justify-between items-center py-4 px-2'>
        <button><Menu color='#fff'/></button>
        <div className='flex items-center gap-2'>
         <span className='text-purple-500 font-poppins text-3xl'>Trendhive</span>
        </div>
        
        <button><SquareUser color='#fff'/></button>

    </div>
    
  )
}

export default Navbar
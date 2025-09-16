import {Menu, SquareUser, Waves } from 'lucide-react'
import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-bg-y w-full top-0 flex justify-between items-center p-2 border-b-2'>
        <button><Menu /></button>
        <div className='flex items-center gap-2'>
        <Waves color='#F59C27'/>
         <span>Trendhive</span>
        </div>
        
        <button><SquareUser /></button>

    </div>
  )
}

export default Navbar
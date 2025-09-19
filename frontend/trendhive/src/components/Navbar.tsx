import { Menu } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-bg-o w-full top-0 flex items-center py-4 px-4'>
      <button><Menu color='#fff'/></button>

      <div className='flex items-center gap-2 mx-4'>
        <Link to="/home">
        <span className='text-purple-500 font-poppins text-3xl items-center'>Trendhive</span>
        
        </Link>
      </div>

   
      <div className='flex gap-2 ml-auto'>
        <Link to="/login">
          <button className='text-white'>Login</button>
        </Link>
        <Link to="/register">
          <button className='text-white'>Register</button>
        </Link>
      </div>
    </div>
  )
}

export default Navbar

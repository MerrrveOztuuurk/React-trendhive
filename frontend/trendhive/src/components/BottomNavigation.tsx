import { Heart, Menu, ShoppingCart, SquareUser} from 'lucide-react'
import React from 'react'

const BottomNavigation = () => {
  return (
    <div className='fixed bottom-0 w-full flex justify-around bg-bg-o border-t-2 py-2'>
     <button className='grid place-items-center'><Menu className='text-purple-500'/><span className='text-purple-500'>Menu</span></button> 
     <button className='grid place-items-center'><Heart color='#fff'/><span className='text-white'>Wishlist</span></button> 
     <button className='grid place-items-center'><ShoppingCart color='#fff'/><span className='text-white'>Cart</span></button>  
     <button className='grid place-items-center'><SquareUser className='text-white'/><span className='text-white'>Account</span></button> 
      </div>
  )
}

export default BottomNavigation
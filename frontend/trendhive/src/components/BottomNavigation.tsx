import { Heart, Menu, ShoppingCart, SquareUser} from 'lucide-react'
import React from 'react'

const BottomNavigation = () => {
  return (
    <div className='fixed bottom-0 w-full flex justify-around bg-yellow-200 border-t-2 py-2'>
     <button className='grid place-items-center'><Menu /><span>Menu</span></button> 
     <button className='grid place-items-center'><Heart /><span>Wishlist</span></button> 
     <button className='grid place-items-center'><ShoppingCart /><span>Cart</span></button>  
     <button className='grid place-items-center'><SquareUser /><span>Account</span></button> 
      </div>
  )
}

export default BottomNavigation
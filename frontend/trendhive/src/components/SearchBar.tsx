import { Search } from 'lucide-react'
import React from 'react'

const SearchBar = () => {
  return (
    <div className='bg-bg-b px-4 py-2'>
      <div className='bg-white rounded-full border border-gray-100 px-4 py-2 items-center flex justify-between'>
      <input className='px-2 border-none' placeholder='Search for products'/>
      <div className='rounded-full bg-bg-p p-2'>
        <Search className='text-purple-500'/>
      </div>
      </div>
      
    </div>
  )
}

export default SearchBar
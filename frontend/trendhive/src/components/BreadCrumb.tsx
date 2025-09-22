import React from 'react'

const BreadCrumb = () => {
  return (
    <div className='flex gap-2 px-4 py-4'>
      <span className='text-gary-500'>Home</span>
      <span className='text-gary-500'>/</span>
      <span>Categories</span>
    </div>
  )
}

export default BreadCrumb
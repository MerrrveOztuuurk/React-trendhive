import React from 'react'
import Navbar from '../components/Navbar'
import Gradient from '../components/Gradient'
import BreadCrumb from '../components/BreadCrumb'
import Categories from '../components/Categories'
import Products from '../components/Products'
import BottomNavigation from '../components/BottomNavigation'


const Home = () => {
  return (
    <div>
        <Navbar />
        <Gradient />
        <BreadCrumb />
        <Categories />
        <Products />
        {/* <ProductCard product={undefined} /> */}
        <BottomNavigation />  
    </div>
  )
}

export default Home
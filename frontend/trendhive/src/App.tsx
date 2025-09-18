
import './App.css'
import BottomNavigation from './components/BottomNavigation'
import BreadCrumb from './components/BreadCrumb'
import Categories from './components/Categories'
import Gradient from './components/Gradient'
import Navbar from './components/Navbar'

import Products from './components/Products'
import SearchBar from './components/SearchBar'
import './index.css'

function App() {
 

  return (
    <>
      <div>
        <Navbar />
        <Gradient />
        <SearchBar />
        <BreadCrumb />
        <Categories />
        <Products />
        {/* <ProductCard product={undefined} /> */}
        <BottomNavigation />    
       </div>
    </>
  )
}

export default App


import './App.css'
import BottomNavigation from './components/BottomNavigation'
import BreadCrumb from './components/BreadCrumb'
import Categories from './components/Categories'
import Navbar from './components/Navbar'
import ProductCard from './components/ProductCard'
import Products from './components/Products'
import SearchBar from './components/SearchBar'
import './index.css'

function App() {
 

  return (
    <>
      <div>
        <Navbar />
        <SearchBar />
        <BreadCrumb />
        <Categories />
        <Products />
        <ProductCard />
        <BottomNavigation />    
       </div>
    </>
  )
}

export default App

import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import Wishlist from "../pages/Wishlist"
import { Layout } from "lucide-react";
import Cart from "../pages/Cart";
import CategoryProducts from "../pages/CategoryProducts";
import Checkout from "../pages/Checkout";


const Navigation: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}></Route>
         <Route path="/" element={<Navigate to="/home" replace />} />
         <Route path="/login" element={<Login />} />
         <Route path="/register" element={<Register />} />
         <Route path="/home" element={<Home />} />
         <Route path="/wishlist" element={<Wishlist />} />
         <Route path="/cart" element={<Cart />}/>
         <Route path="/category/:category" element={<CategoryProducts />} />
         <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
  );
};

export default Navigation;

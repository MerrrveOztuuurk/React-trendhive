import { Heart, Menu, ShoppingCart, SquareUser, X } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const BottomNavigation = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="fixed bottom-0 w-full">
      {/* Sidebar */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          openMenu ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setOpenMenu(false)}
      ></div>

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          openMenu ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button onClick={() => setOpenMenu(false)}>
            <X className="text-gray-600" />
          </button>
        </div>
        <ul className="flex flex-col p-4 space-y-3 text-gray-700">
          <li className="hover:bg-purple-300 px-3 py-2 rounded cursor-pointer">Shoes</li>
          <li className="hover:bg-purple-300 px-3 py-2 rounded cursor-pointer">Clothes</li>
            <li className="hover:bg-purple-300 px-3 py-2 rounded cursor-pointer">Bag</li>
          <li className="hover:bg-purple-300 px-3 py-2 rounded cursor-pointer">Jewelry</li>
        </ul>
      </div>

      {/* Bottom Nav */}
      <div className="flex justify-around bg-bg-o border-t-2 py-2 relative z-50">
        <button
          className="grid place-items-center"
          onClick={() => setOpenMenu(true)}
        >
          <Menu className="text-purple-500" />
          <span className="text-purple-500">Menu</span>
        </button>

        <button className="grid place-items-center">
          <Heart color="#fff" />
          <Link to="/wishlist">
           <span className="text-white">Wishlist</span>
          </Link>
         
        </button>

        <button className="grid place-items-center">
          <ShoppingCart color="#fff" />
          <span className="text-white">Cart</span>
        </button>

        <button className="grid place-items-center">
          <SquareUser className="text-white" />
          <span className="text-white">Account</span>
        </button>
      </div>
    </div>
  );
};

export default BottomNavigation;

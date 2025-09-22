import { Heart, Menu, ShoppingCart, SquareUser, X } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";

const BottomNavigation = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openAccount, setOpenAccount] = useState(false);
  const [active, setActive] = useState<string>("menu");
  const [activeAccount, setActiveAccount] = useState<string>("account");

  // ✅ Redux'tan user bilgisini çekiyoruz
  const user = useSelector((state: RootState) => state.auth.user);

  return (
    <div className="fixed bottom-0 w-full">
      {/* Sidebar - Menü */}
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
          <li className="hover:bg-purple-300 px-3 py-2 rounded cursor-pointer">
            Shoes
          </li>
          <li className="hover:bg-purple-300 px-3 py-2 rounded cursor-pointer">
            Clothes
          </li>
          <li className="hover:bg-purple-300 px-3 py-2 rounded cursor-pointer">
            Bag
          </li>
          <li className="hover:bg-purple-300 px-3 py-2 rounded cursor-pointer">
            Jewelry
          </li>
        </ul>
      </div>

      {/* Sidebar - Account */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          openAccount ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setOpenAccount(false)}
      ></div>

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          openAccount ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold">Account</h2>
          <button onClick={() => setOpenAccount(false)}>
            <X className="text-gray-600" />
          </button>
        </div>

        {/* ✅ Kullanıcı e-postası */}
        <div className="p-4 border-b text-gray-800 font-medium">
          {user ? user.email : "Guest"}
        </div>

        <ul className="flex flex-col p-4 space-y-3 text-gray-700">
          <li className="hover:bg-purple-300 px-3 py-2 rounded cursor-pointer">
            <Link to="/wishlist">Wishlist</Link>
          </li>
          <li className="hover:bg-purple-300 px-3 py-2 rounded cursor-pointer">
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </div>

      {/* Bottom Nav */}
      <div className="flex justify-around bg-bg-o border-t-2 py-2 relative z-50">
        {/* Menu */}
        <button
          className="grid place-items-center"
          onClick={() => {
            setOpenMenu(true);
            setActive("menu");
          }}
        >
          <Menu className={active === "menu" ? "text-purple-500" : "text-white"} />
          <span className={active === "menu" ? "text-purple-500" : "text-white"}>
            Menu
          </span>
        </button>

        {/* Wishlist */}
        <button
          className="grid place-items-center"
          onClick={() => setActive("wishlist")}
        >
          <Heart
            className={active === "wishlist" ? "text-purple-500" : "text-white"}
          />
          <Link to="/wishlist">
            <span
              className={active === "wishlist" ? "text-purple-500" : "text-white"}
            >
              Wishlist
            </span>
          </Link>
        </button>

        {/* Cart */}
        <button
          className="grid place-items-center"
          onClick={() => setActive("cart")}
        >
          <ShoppingCart
            className={active === "cart" ? "text-purple-500" : "text-white"}
          />
          <span className={active === "cart" ? "text-purple-500" : "text-white"}>
            Cart
          </span>
        </button>

        {/* Account */}
        <button
          className="grid place-items-center"
          onClick={() => {
            setOpenAccount(true);
            setActiveAccount("account");
          }}
        >
          <SquareUser
            className={activeAccount === "account" ? "text-purple-500" : "text-white"}
          />
          <span
            className={activeAccount === "account" ? "text-purple-500" : "text-white"}
          >
            Account
          </span>
        </button>
      </div>
    </div>
  );
};

export default BottomNavigation;

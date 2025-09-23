import React from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { toggleCart } from "../redux/slices/cartSlice";
import ProductCard from "../components/ProductCard";
import { Link, useNavigate } from "react-router-dom";
import type { Product } from "../types/types";

const Cart: React.FC = () => {
   const wishlistItems = useSelector((state: RootState) => state.wishlist.items);
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleToggleCart = (product: Product) => {
    if (!user) {
      navigate("/login");
    } else {
      dispatch(toggleCart(product));
        navigate("/cart");
    }
  };

  const totalPrice = cartItems.reduce((acc,item) => acc +item.price, 0);

  return (
    <div className="p-4">
      <Link to="/home">
            <h2 className="text-2xl font-semibold mb-4 cursor-pointer text-purple-500">Home</h2>
      </Link>
      {cartItems.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {cartItems.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isFavorite={wishlistItems.some(p => p.id === product.id)}
               toggleWishlist={() => {}}
              toggleCart={() => handleToggleCart(product)}
              hideCartButton={true}
            />
          ))}          
        </div>  
      )}
      <div className="flex justify-between my-16">
            <span className="text-xl font-light">Total Price : <span className="text-purple-500">{totalPrice}</span></span>
            <button onClick={() => navigate("/checkout", { state : {totalPrice}})} className="bg-purple-500 p-4 rounded-xl">
              <span className="text-white p-8">Pay</span>
            </button>
          </div>
    </div>
  );
};

export default Cart;

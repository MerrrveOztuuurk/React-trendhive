import React from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { toggleCart } from "../redux/slices/cartSlice";
import ProductCard from "../components/ProductCard";
import { useNavigate } from "react-router-dom";
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

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">My Cart</h2>
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
    </div>
  );
};

export default Cart;
